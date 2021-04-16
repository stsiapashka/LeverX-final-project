import "./style/ChangeSickLeave.css"
import {HeaderChangeRequest} from "./elemtnts/HeaderChangeRequest";
import imgsick from "../../image/SickLeave.svg";
import {OutputDateComponent} from "../elements/OutputDateComponent";
import {useSelector} from "react-redux";
import {DataInputSick} from "../elements/DataInputComponents/DataInputSick";
import {BlockButtonsSaveChange} from "./elemtnts/BlockButtonsSaveChange";

export const ChangeSickLeave = (props) => {
    let itemsick = useSelector(state => state.itemsick);
    let select = (select) => {
        //props.selectreq(select);
    }
    let closeChangePanel = (type) => {
        props.closechangepanel(type);
    }
    return (
        <div className="change-sick-leave">
            <HeaderChangeRequest/>
            <div className="block-change-sick-leave">
                <img src={imgsick}/>
                <div className="change-sick-leave-date">
                    <OutputDateComponent startDate={itemsick.startDate}
                                         endDate={itemsick.endDate}
                                         created={itemsick.created}
                                         type={itemsick.select}/>
                </div>
                {/*<div className="change-sick-leave-date">Sick leave: 30 Jul 2018 - 31 Jul 2018</div>*/}
                <div className="date-created-change-sick-leave">Hours worked: 4</div>
                <div className="pending-approval-change-sick-leave">Approved and registered</div>
            </div>
            <div className="data-change-sick">
                <DataInputSick disabled={true}
                               selectreq={select}
                               startDate={itemsick.startDate}
                               endDate={itemsick.endDate}
                               datePickerEnd={itemsick.endDate}
                               countDay={itemsick.days}
                               comment={itemsick.comment}
                               itemvacation={itemsick}/>
            </div>
            <div>
                <BlockButtonsSaveChange closechangepanel={closeChangePanel}
                                        type="Sick leave"
                                        id={itemsick.id}/>
            </div>
        </div>

    )
}
