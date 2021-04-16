import DatePicker from "react-datepicker";
import React, {useState, useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from "react-redux";
import './DataPicker.css'

export const DatePickerStart = (props) => {
    const dispatch = useDispatch();
    const maxDate=new Date("2022/12/31");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    useEffect(() => {
        setStartDate(props.startdate);
        setEndDate(props.endDate);

    });
    let datereturn = (d) => {
        props.returnDate(d);
        var date=d.toString();
        dispatch({type: "Start_Date", payload: d});
        dispatch({type: "End_Date", payload: d});
    }
    return (
        <div>
            {
                <DatePicker
                    selected={startDate}
                    onChange={datereturn}
                    selectsStart
                    startDate={startDate}
                    maxDate={maxDate}
                    minDate={Date.now()}
                    dateFormat="d MMM yyy"
                />
            }
        </div>
    )
}
