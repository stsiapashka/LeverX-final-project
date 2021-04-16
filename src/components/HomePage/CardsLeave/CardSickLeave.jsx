import imgvsick from "../../../image/Sick.svg";
import './style/cardSickLeave.css'
import {BlockButtonAddRequest} from "../../elements/BlockButtonAddRequest";
import {useDispatch} from "react-redux";
import {DataInputSick} from "../../elements/DataInputComponents/DataInputSick";

export const CardSickLeave = (props) => {
    const startDate = Date.now();
    const endDate = new Date("2022/12/31");
    const datePickerEnd = Date.now();
    let select = (select) => {
        props.selectreq(select);
    }

    return (
        <div className="card-sick-leave">
            <img className="img-request" src={imgvsick}/>
            <div>
                <div className="div-new-request">
                    <div className="div-new">New</div>
                    <div className="div-request">Request</div>
                </div>
                <DataInputSick disabled={false}
                               selectreq={select}
                               startDate={startDate}
                               endDate={endDate}
                               datePickerEnd={datePickerEnd}
                               comment=""
                />
                <div className="block-sick-button-add-request">
                    <BlockButtonAddRequest/>
                </div>
            </div>
        </div>
    )
}
