import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

export default function ReactCalendar() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (date) => {
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        console.log(date);
    }

    return (
        <div>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                inputRanges={[]}
                staticRanges={[]}
            />
        </div>
    )
}
