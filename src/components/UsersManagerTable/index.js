import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid, Typography } from "@mui/material";
import { api } from "../../utils/api";
import Switch from "@mui/material/Switch";
import Pagination from "@mui/material/Pagination";

export default function TableRow() {
  const [usersdata, setUsersdata] = useState({
    total: 0,
    skip: 0,
    limit: 20,
    data: [],
  });
  const [page, setPage] = useState(1);
  console.log("page", page);
  console.log("usersdata", usersdata);
  const [isLoading, setIsLoading] = useState(true);

  const [userSwitchStates, setUserSwitchStates] = useState([]);

  const handleSwitchChange = (event, index) => {
    const newSwitchStates = [...userSwitchStates];
    newSwitchStates[index] = event.target.checked;
    setUserSwitchStates(newSwitchStates);

    const userToUpdate = usersdata.data[index];
    const updatedUser = {
      _id: userToUpdate._id,
      status: event.target.checked ? "blocked" : "active",
    };

    api
      .editUser(updatedUser)
      .then((res) => {
        console.log("User status updated successfully:", res);

        fetchData(usersdata.skip);
      })
      .catch((error) => {
        console.error("Error updating user status:", error);
      });
  };

  const handlePageChange = (event, newPage) => {
    const newSkip = (newPage - 1) * usersdata.limit;
    setPage(newPage);
    fetchData(newSkip);
  };

  const fetchData = (skip) => {
    setIsLoading(true);

    const newLimit = usersdata.limit;

    api
      .getUser(skip, newLimit)
      .then((res) => {
        console.log("API Response for skip " + skip + ":", res);

        setUsersdata((prevState) => ({
          ...prevState,
          total: res.total,
          data: res.data,
          skip: skip,
        }));

        const switchStates = res.data.map((user) => user.status === "blocked");
        setUserSwitchStates(switchStates);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log("getuserserror", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        usersdata.data.map((user, index) => (
          <tr style={{ paddingLeft: "10px" }} key={user.id}>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "15px",
                paddingTop: "10px",
              }}
            >
              <Checkbox
                checked={userSwitchStates[index]}
                onChange={(event) => handleSwitchChange(event, index)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Avatar
                alt="Remy Sharp"
                src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg"
              />
              <Typography sx={{ marginLeft: 1 }} variant="subtitle2">
                {user.firstName}
              </Typography>
            </td>

            <td
              style={{
                paddingLeft: "10px",
                paddingBottom: "15px",
                paddingTop: "10px",
              }}
            >
              <Typography variant="subtitle2"> {user.status}</Typography>
            </td>

            <td
              style={{
                paddingLeft: "10px",
                paddingBottom: "15px",
                paddingTop: "10px",
              }}
            >
              <Switch
                checked={userSwitchStates[index]}
                onChange={(event) => handleSwitchChange(event, index)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </td>
          </tr>
        ))
      )}
      <Pagination
        count={Math.ceil(usersdata.total / usersdata.limit)}
        page={page}
        onChange={handlePageChange}
      />
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import Checkbox from "@mui/material/Checkbox";
// import Avatar from "@mui/material/Avatar";
// import AppleIcon from "@mui/icons-material/Apple";
// import AdbIcon from "@mui/icons-material/Adb";
// import { Grid, Typography } from "@mui/material";
// import { api } from "../../utils/api";
// import Switch from "@mui/material/Switch";
// import Pagination from "@mui/material/Pagination";

// export default function TableRow() {
//   const [usersdata, setUsersdata] = useState({
//     total: 0,
//     skip: 0,
//     limit: 20,
//     data: [],
//   });
//   const [page, setPage] = useState(1);
//   console.log("page", page);
//   console.log("usersdata", usersdata);
//   const [isLoading, setIsLoading] = useState(true);

//   const [userSwitchStates, setUserSwitchStates] = useState([]);

//   const handleSwitchChange = (event, index) => {
//     const newSwitchStates = [...userSwitchStates];
//     newSwitchStates[index] = event.target.checked;
//     setUserSwitchStates(newSwitchStates);

//     const userToUpdate = usersdata.data[index];
//     const updatedUser = {
//       _id: userToUpdate._id,
//       usertype: event.target.checked ? "admin" : "user",
//     };

//     api
//       .editUser(updatedUser)
//       .then((res) => {
//         console.log("User usertype updated successfully:", res);

//         // After updating the usertype, fetch the updated user data
//         fetchData(usersdata.skip);
//       })
//       .catch((error) => {
//         console.error("Error updating user usertype:", error);
//       });
//   };

//   const handlePageChange = (event, newPage) => {
//     const newSkip = (newPage - 1) * usersdata.limit;
//     setPage(newPage);
//     fetchData(newSkip); // Update data for the new page
//   };

//   const fetchData = (skip) => {
//     setIsLoading(true);

//     const newLimit = usersdata.limit;

//     api
//       .getUser(skip, newLimit) // Use the new skip value
//       .then((res) => {
//         console.log("API Response for skip " + skip + ":", res); // Add this line to log the response

//         setUsersdata((prevState) => ({
//           ...prevState,
//           total: res.total,
//           data: res.data,
//           skip: skip, // Update skip value
//         }));

//         const switchStates = res.data.map((user) => user.usertype === "admin");
//         setUserSwitchStates(switchStates);

//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.log("getuserserror", error);
//         setIsLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchData(0);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         usersdata.data.map((user, index) => (
//           <tr style={{ paddingLeft: "10px" }} key={user.id}>
//             <td
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 paddingBottom: "15px",
//                 paddingTop: "10px",
//               }}
//             >
//               <Checkbox
//                 checked={userSwitchStates[index]}
//                 onChange={(event) => handleSwitchChange(event, index)}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//               <Avatar
//                 alt="Remy Sharp"
//                 src="https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg"
//               />
//               <Typography sx={{ marginLeft: 1 }} variant="subtitle2">
//                 {user.firstName}
//               </Typography>
//             </td>

//             <td
//               style={{
//                 paddingLeft: "10px",
//                 paddingBottom: "15px",
//                 paddingTop: "10px",
//               }}
//             >
//               <Typography variant="subtitle2"> {user.usertype}</Typography>
//             </td>

//             <td
//               style={{
//                 paddingLeft: "10px",
//                 paddingBottom: "15px",
//                 paddingTop: "10px",
//               }}
//             >
//               <Switch
//                 checked={userSwitchStates[index]}
//                 onChange={(event) => handleSwitchChange(event, index)}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             </td>
//           </tr>
//         ))
//       )}
//       <Pagination
//         count={Math.ceil(usersdata.total / usersdata.limit)}
//         page={page}
//         onChange={handlePageChange}
//       />
//     </>
//   );
// }
