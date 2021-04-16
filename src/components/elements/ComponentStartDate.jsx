import {DatePickerStart} from "./DataPicker/DataPickerStart";

export const ComponentStartDate = (props) => {

    return (
        <div>
            <div className="div-start-date">Start Date</div>
            <div className="div-start-inclusive">(inclusive)</div>
            <div className={props.classname}>
                <DatePickerStart
                    returnDate={props.returnDate}
                    startdate={props.startDate}
                    endDate={props.endDate}
                /></div>
        </div>
    )
}
