import imgsick from "../../image/SickLeave.svg";
import imgavatar from "../../image/avatar.png";
import JohnSmith from "../../image/JohnSmith.svg";
import MikeSmith from "../../image/MikeSmith.svg";

import "./style/requestSickLeave.css"
import {HeaderRequest} from "../elements/HeaderRequest";
import {DocumentsRegistration} from "../elements/ApproversComponents/DocumentsRegistration";
import {BlockButtonsChange} from "../ChangeRequestComponents/elemtnts/BlockButtonsChange";
import {useSelector} from "react-redux";

export const RequestSickLeave = (props) => {
    let itemsick = useSelector(state => state.itemsick);

    function dateFormst(d) {
        var a = d.split(" ");
        if (a.length < 2) return d;
        return [a[1], a[0]].concat(a.splice(2, a.length)).join(" ");
    }

    let changedate = (date) => {
        date = new Date(date).toString();
        date = date.substr(4, 11)
        date = dateFormst(date);
        return date;

    }
    let closeDetailsInfo = (type) => {
        props.closeDetailsInfo(type);
    }
    let showChangePanel = (type) => {
        props.showchangepanel(type);
    }
    return (
        <div className="request-sick-leave">
            <HeaderRequest header="Sick leave request"/>
            <div className="block-sick-leave">
                <img src={imgsick}/>
                <div className="sick-leave-date">Sick
                    leave: {changedate(itemsick.startDate)} - {changedate(itemsick.endDate)}</div>
                <div className="date-created-sick-leave">Created: {changedate(itemsick.started)}</div>
                <div className="pending-confirmation">Pending confirmation</div>
            </div>
            <div className="block-notified-users">
                <div className="div-notified-users">NOTIFIED USERS</div>
                <div className="employee-notified-users">
                    <img src={imgavatar}/>
                    <div className="div-name-employee-notified-users">Will McConnel</div>
                </div>
                <div className="employee-notified-users">
                    <img src={JohnSmith}/>
                    <div className="div-name-employee-notified-users">John Smith</div>
                </div>
                <div className="employee-notified-users">
                    <img src={MikeSmith}/>
                    <div className="div-name-employee-notified-users">Mike Smith</div>
                </div>
            </div>
            <DocumentsRegistration/>
            <div className="sick-button-change">
                <BlockButtonsChange showchangepanel={showChangePanel} closeDetailsInfo={closeDetailsInfo}
                                    type="Sick leave"/>
            </div>
        </div>
    )
}
