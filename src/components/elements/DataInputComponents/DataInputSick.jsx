import {SelectComponent} from "../SelectComponent";
import {ComponentStartDate} from "../ComponentStartDate";
import {ComponentEndDate} from "../ComponentEndDate";
import {CommentComponent} from "../CommentComponent";
import {useDispatch} from "react-redux";
import {useState} from "react";

export const DataInputSick = (props) => {
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
                <SelectComponent disabled={props.disabled} selectRequest={select} selectvalue="Sick leave"/>
            </div>
            <div className="text-important">
                <div className="sick-information">Important: Please bring the official confirmation of your
                    sick <br/> leave from a medical establishment
                    to Personnel Officer<br/> (Katsiaryna Barysik) as soon as you get it.
                </div>
            </div>
            <div className="block-sick-change-start-date">
                <ComponentStartDate disabled={false}
                                    classname="input-sick-date"
                                    request="vacation"
                                    returnDate={returnDate}
                                    startDate={startDate}
                                    endDate={endDate}/>
            </div>
            <div className="block-sick-change-end-date">
                {/*<div className="div-sick-end-date">Expected End Date</div>*/}
                <ComponentEndDate classname="input-sick-date"
                                  text="Expected End Date"
                                  returnDate={returnDate}
                                  returnendDate={returnendDate}
                                  startDate={startDate}
                                  endDate={endDate}
                                  datePickerEnd={datePickerEnd}/>
            </div>
            <div className="block-comments-change-sick">
                <CommentComponent comment={props.comment}/>
            </div>
        </div>
    )
}
