import {DatePickerEnd} from "./DataPicker/DataPickerEnd";
import {useEffect, useState} from "react";

export const ComponentEndDate = (props) => {
    const [text, setText] = useState("");

    useEffect(() => {
        setText(props.text)
    })
    let returnDate = (date) => {
        props.returnendDate(date);
    }

    return (
        <div>
            <div className="text-end-date">
                <div className="div-end-date">{text}</div>
                <div className="div-end-inclusive">(inclusive)</div>
            </div>
            <div className={props.classname}>
                <DatePickerEnd
                    startdate={props.startDate}
                    datePickerEnd={props.datePickerEnd}
                    endDate={props.endDate}
                    returnEndDate={returnDate}
                /></div>
        </div>
    )
}
