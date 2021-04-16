import './style/cardVacationLeave.css';
import imgvacation from '../../../image/Vacation.svg'
import {BlockButtonAddRequest} from "../../elements/BlockButtonAddRequest";
import {DataInputVacation} from "../../elements/DataInputComponents/DataInputVacation";

export const CardVacationLeave = (props) => {
    const startDate = Date.now();
    const endDate = new Date("2022/12/31");
    const datePickerEnd = Date.now();
    const countDay = 1;

    let select = (select) => {
        props.selectreq(select);
    }

    return (
        <div className="card-vacation-leave">
            <img className="img-request" src={imgvacation}/>
            <div>
                <div className="div-new-request">
                    <div className="div-new">New</div>
                    <div className="div-request">Request</div>
                </div>
                <DataInputVacation disabled={false}
                                   selectreq={select}
                                   startDate={startDate}
                                   endDate={endDate}
                                   datePickerEnd={datePickerEnd}
                                   countDay={countDay}
                                   comment=""/>
                <div className="block-button-add-request">
                    <BlockButtonAddRequest confirm={props.confirm}/>
                </div>
            </div>
        </div>
    )
}
