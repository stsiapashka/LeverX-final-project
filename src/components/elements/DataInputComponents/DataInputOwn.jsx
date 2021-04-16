import {SelectComponent} from "../SelectComponent";
import {ComponentStartDate} from "../ComponentStartDate";
import {ComponentEndDate} from "../ComponentEndDate";
import {CommentComponent} from "../CommentComponent";
import {useDispatch} from "react-redux";
import {useState} from "react";

export const DataInputOwn = (props) => {
    const dispatch = useDispatch();
    const [endDate, setEndDate] = useState(props.endDate);
    const [startDate, setStartDate] = useState(props.startDate);
    const [datePickerEnd, setDatePickerEnd] = useState(props.datePickerEnd);

    let select = (select) => {
        props.selectreq(select);
    }

    let returnDate = (date) => {
        setStartDate(date);
        setDatePickerEnd(date);
    }
    let returnendDate = (date) => {
        setDatePickerEnd(date);
        dispatch({type: "End_Date", payload: date});
    }
    return (
        <div>
            <div className="div-select-change">
                <SelectComponent disabled={props.disabled}
                                 selectRequest={select}
                                 selectvalue="Own expense leave"/>
            </div>
            <div className="change-block-own-start-date">
                <ComponentStartDate classname="input-own-date"
                                    returnDate={returnDate}
                                    startDate={startDate}
                                    endDate={endDate}/>
            </div>
            <div className="block-own-end-date">
                <ComponentEndDate classname="input-own-date"
                                  text="End Date"
                                  returnDate={returnDate}
                                  returnendDate={returnendDate}
                                  startDate={startDate}
                                  endDate={endDate}
                                  datePickerEnd={datePickerEnd}/>
            </div>
            <div className="own-block-comments-change">
                <CommentComponent comment={props.comment}/>
            </div>
        </div>
    )
}
