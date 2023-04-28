// import React, { useEffect, useState } from "react";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { DateRangePicker } from "react-date-range";
// import { api } from "src/utils/api";
// import moment from "moment";
// import { useAuthState } from "src/context/auth.context";
// import { useRouter } from "next/router";


// export default function PlannerCalendar() {
//   const defaultStartDate = new Date();
//   const defaultEndDate = new Date();

//   const [startDate, setStartDate] = useState(defaultStartDate);
//   const [endDate, setEndDate] = useState(defaultEndDate);
//   const auth = useAuthState();
//   console.log('auth',auth.user?._id);



//   useEffect(()=>{
//     api
//       .getPlanner(`?id=${auth.user?._id}`)
//       .then((res) => {
//         console.log("planner>>>", res.data);
//       })
//       .catch((err) => {
//         console.log("planner>>>1", err);
//       });
//   },[auth.user?._id])


//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: "selection",
//   };

//   const customRangeStyles = {
//     selection: {
//       background: "black",
//       color: "white",
//     },
//   };

//   const handleSelect = (date) => {
//     // console.log("date....", calendar);
//     setStartDate(date.selection.startDate);
//     setEndDate(date.selection.endDate);
//   };
//   return (
//     <div>
//       <DateRangePicker
//         ranges={[selectionRange]}
//         onChange={handleSelect}
//         onShownDateChange={(res) => { moment(res).format("M") }}
//         inputRanges={[]}
//         staticRanges={[]}
//         rangesStyles={customRangeStyles.selection.background}
//         rangeColors={["#005451"]}
//       />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { api } from "src/utils/api";
import moment from "moment";
import { useAuthState } from "src/context/auth.context";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// export default function PlannerCalendar() {
//   const defaultStartDate = new Date();
//   const defaultEndDate = new Date();

//   const [startDate, setStartDate] = useState(defaultStartDate);
//   const [endDate, setEndDate] = useState(defaultEndDate);
//   const [messages, setMessages] = useState({});
//   const [selectedDate, setSelectedDate] = useState();
//   const auth = useAuthState();
//   console.log('messages', messages);

//   useEffect(() => {
//     api
//       .getPlanner(`?id=${auth.user?._id}`)
//       .then((res) => {
//         console.log("planner>>>", res.data);
//         const messagesForDates = {};
//         res.data.forEach((item) => {
//           console.log('>>>>>', item.title)
//           messagesForDates[moment(item.date).format("YYYY-MM-DD")] = item.title;
//         });
//         setMessages(messagesForDates);
//       })
//       .catch((err) => {
//         console.log("planner>>>1", err);
//       });
//   }, [auth.user?._id]);

//   // const selectionRange = {
//   //   startDate: startDate,
//   //   endDate: endDate,
//   //   key: "selection",
//   // };

//   // const customRangeStyles = {
//   //   selection: {
//   //     background: "black",
//   //     color: "white",
//   //   },
//   //   withMessage: {
//   //     background: "#005451",
//   //     color: "white",
//   //     borderRadius: "50%",
//   //     cursor: "pointer",
//   //     padding: "3px",
//   //     display: "inline-block",
//   //   },
//   // };

//   // const handleSelect = (date) => {
//   //   // setStartDate(date.selection.startDate);
//   //   // setEndDate(date.selection.endDate);
//   //   const selectedDate = moment(date.selection.startDate).format("YYYY-MM-DD");
//   //   if (messages[selectedDate]) {
//   //     alert(messages[selectedDate]);
//   //   }
//   // };

//   return (
//     <div>
//       <DatePicker
//         selected={selectedDate}
//         onChange={(date) => setSelectedDate(date)}
//         dateFormat="MM/dd/yyyy"
//         inline
//       />
//     </div>
//   );
// }

export default function PlannerCalendar() {
  const defaultStartDate = new Date();
  const defaultEndDate = new Date();

  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [messages, setMessages] = useState({});
  const [selectedDate, setSelectedDate] = useState();
  const auth = useAuthState();

  useEffect(() => {
    api
      .getPlanner(`?id=${auth.user?._id}`)
      .then((res) => {
        console.log("planner>>>", res.data);
        const messagesForDates = {};
        res.data.forEach((item) => {
          console.log(">>>>>", item.title);
          messagesForDates[
            moment(item.date).format("YYYY-MM-DD")
          ] = item.title;
        });
        setMessages(messagesForDates);
      })
      .catch((err) => {
        console.log("planner>>>1", err);
      });
  }, [auth.user?._id]);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          const dateStr = moment(date).format("YYYY-MM-DD");
          setSelectedDate(date);
          if (messages[dateStr]) {
            alert(messages[dateStr]);
          }
        }}
        dateFormat="MM/dd/yyyy"
        inline
        highlightDates={Object.keys(messages).map((date) =>
          moment(date, "YYYY-MM-DD").toDate()
        )}
      />
    </div>
  );
}
