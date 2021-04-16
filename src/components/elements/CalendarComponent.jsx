import DatePicker from "react-datepicker";
import React, {useState, useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";

export const CalendarComponent = (props) => {
    const [Date, setStartDate] = useState(null);
    useEffect(() => {
        setStartDate(props.date);
    })
    return (
        <div>
            {
                <DatePicker
                    selected={Date}
                    onChange={date => setStartDate(date)}
                    selectsStart={props.start}
                    selectEnd={props.end}
                    startDate={props.startdate}
                    endDate={props.enddate}
                    dateFormat="d MMM yyy"
                />
            }
        </div>
    )
}
