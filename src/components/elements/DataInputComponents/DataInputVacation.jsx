import {SelectComponent} from "../SelectComponent";
import {ComponentStartDate} from "../ComponentStartDate";
import {ComponentEndDate} from "../ComponentEndDate";
import {CommentComponent} from "../CommentComponent";
import {useDispatch, useSelector} from "react-redux";
import Question from '../../../image/Question.svg'
import {useState} from "react";
import '../style/popupwindow.css'
import {PopUpWindow} from "../PopUpWindow";

export const DataInputVacation = (props) => {
    const alldays = useSelector(state => state.alldays);
    const dispatch = useDispatch();
    const [countDay, setCountDay] = useState(props.countDay);
    const [endDate, setEndDate] = useState(props.endDate);
    const [startDate, setStartDate] = useState(props.startDate);
    const [datePickerEnd, setDatePickerEnd] = useState(props.datePickerEnd);
    const [flag, setFlag] = useState(false)

    let selectDay = (event) => {
        setCountDay(event.target.value);
        var d = new Date(startDate);
        d.setDate(d.getDate() + Number(event.target.value - 1));
        setDatePickerEnd(d);
        dispatch({type: "COUNT_DAY", payload: event.target.value});
        dispatch({type: "End_Date", payload: d});
    }
    let select = (select) => {
        props.selectreq(select);
    }

    let returnstartDate = (date) => {
        setStartDate(date);
        setDatePickerEnd(date);
    }

    let returnendDate = (date) => {
        setDatePickerEnd(date);
        let date2 = new Date(date);
        let date1 = new Date(startDate);
        var count = Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));
        dispatch({type: "COUNT_DAY", payload: count + 2});
        dispatch({type: "End_Date", payload: date});
        setCountDay(count + 2);
    }
    return (
        <div>
            <div className="select">
                <SelectComponent disabled={props.disabled} selectRequest={select} selectvalue="Vacation leave"/></div>
            <div className="block-start-date">
                <ComponentStartDate classname="div-date"
                                    request="vacation"
                                    returnDate={returnstartDate}
                                    startDate={startDate}
                                    endDate={endDate}/>
            </div>
            <div className="block-end-date">
                <ComponentEndDate classname="div-date"
                                  text="End Date"
                                  returnDate={returnstartDate}
                                  returnendDate={returnendDate}
                                  startDate={startDate}
                                  endDate={endDate}
                                  datePickerEnd={datePickerEnd}/>
            </div>

            <div className="block-days">
                <div className="block-days-and-img">
                    <div className="div-days">Day(s)</div>
                    <img className="img-popup-window" onMouseOver={() => setFlag(true)}
                         onMouseOut={() => setFlag(false)} src={Question}/>
                </div>
                <input className="input-days" onChange={selectDay} min="1" max={alldays} type="number"
                       value={countDay}/>
            </div>
            {flag && (<PopUpWindow/>)}
            <div className="block-comments">
                <CommentComponent comment={props.comment}/>
            </div>
        </div>
    )
}
