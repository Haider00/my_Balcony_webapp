// import React, {useEffect} from 'react'
// import { useState } from 'react';
// import Rating from '@mui/material/Rating';
// import { api } from "src/utils/api";
// import { useAuthState } from 'src/context/auth.context';


// export default function RatingBar(props) {
//     const [value, setValue] = useState(2);
//     const [isDisabled, setIsDisabled] = useState(false);
//     const auth = useAuthState();
//     console.log('auth<><><>',auth.user.rating)

//     useEffect(() => {
//         if (auth.user.rating.includes(props.bookingID)) {
//             setIsDisabled(true);
//         }
//     }, [auth.user.rating, props.bookingID]);
    
//     function handleRatingChange(){
//         api.createRating({rating: value, user: props.userID, booking: props.bookingID, workSpace:props.workSpaceID
//         })
//             .then((res) => {
//                 console.log("resp>>>", res);
//             })
//             .catch((err) => {
//                 console.log("resp>>>", err);
//             });
//     }
//     return (
//         <Rating sx={{mt:1}}
//             name="simple-controlled"
//             value={value}
//             onChange={(event, newValue) => {
//                 setValue(newValue);
//                 handleRatingChange();
//             }}
//             disabled={isDisabled}
//         />
//     )
// }

// import React, { useEffect, useState } from 'react';
// import Rating from '@mui/material/Rating';
// import { api } from "src/utils/api";
// import { useAuthState } from 'src/context/auth.context';

// export default function RatingBar(props) {
//     const [value, setValue] = useState(2);
//     const [isDisabled, setIsDisabled] = useState(false);
//     const auth = useAuthState();
//     console.log('props',props.ownerID);
    
//     useEffect(() => {
//         if (auth.user.rating.includes(props.bookingID)) {
//             setIsDisabled(true);
//         } else {
//             setIsDisabled(false);
//         }
//     }, [auth.user.rating, props.bookingID]);

//     function handleRatingChange(newValue) {
//         setValue(newValue);

//         api.createRating({
//             rating: newValue,
//             user: props.userID,
//             booking: props.bookingID,
//             workSpace: props.workSpaceID
//         })
//         .then((res) => {
//             console.log("resp>>>", res);
//             if (!auth.user.rating.includes(props.bookingID)) {
//                 setIsDisabled(true);
//             }
//         })
//         .catch((err) => {
//             console.log("resp>>>", err);
//         });
//     }
    
//     return (
//         <Rating
//             sx={{ mt: 1 }}
//             name="simple-controlled"
//             value={value}
//             onChange={(event, newValue) => {
//                 handleRatingChange(newValue);
//             }}
//             disabled={isDisabled}
//         />
//     );
// }

import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { api } from "src/utils/api";
import { useAuthState } from 'src/context/auth.context';

export default function RatingBar(props) {
    const [value, setValue] = useState(2);
    const [isDisabled, setIsDisabled] = useState(false);
    const auth = useAuthState();
    
    useEffect(() => {
        if (auth.user.rating.includes(props.bookingID) || props.ownerID === auth.user._id) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [auth.user.rating, props.bookingID, props.ownerID, auth.user._id]);

    function handleRatingChange(newValue) {
        setValue(newValue);

        api.createRating({
            rating: newValue,
            user: props.userID,
            booking: props.bookingID,
            workSpace: props.workSpaceID
        })
        .then((res) => {
            console.log("resp>>>", res);
            if (!auth.user.rating.includes(props.bookingID)) {
                setIsDisabled(true);
            }
        })
        .catch((err) => {
            console.log("resp>>>", err);
        });
    }
    
    return (
        <Rating
            sx={{ mt: 1 }}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                handleRatingChange(newValue);
            }}
            disabled={isDisabled}
        />
    );
}
