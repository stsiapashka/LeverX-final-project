import DatePicker from "react-datepicker";
import React, {useState, useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from "react-redux";
import './DataPicker.css'

export const DatePickerEnd = (props) => {
    const dispatch = useDispatch();
    const maxDate=new Date("2022/12/31");
    const [endDate, setEndDate] = useState();
    const [startDate, setStartDate] = useState();
    const [datePickerEnd, setDatePickerEnd] = useState();

    useEffect(() => {
        setStartDate(props.startdate);
        setDatePickerEnd(props.datePickerEnd)

    })
    let selectDate = (date) => {
        dispatch({type: "End_Date", payload: endDate});
        props.returnEndDate(date);
    };
    return (
        <div>
            <DatePicker
                selected={datePickerEnd}
                onChange={selectDate}
                selectsEnd
                endDate={endDate}
                maxDate={maxDate}
                minDate={startDate}
                dateFormat="d MMM yyy"
            />
        </div>
    )
}
