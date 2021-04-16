import "./style/requestVacation.css";
import imgreqvacation from "../../image/RequestVacation.svg";
import {HeaderRequest} from "../elements/HeaderRequest";
import {AlreadyApproved} from "../elements/ApproversComponents/AlreadyApproved";
import {CurrentApproves} from "../elements/ApproversComponents/CurrentApproves";
import {NextApprovers} from "../elements/ApproversComponents/NextApprovers";
import {DocumentsRegistration} from "../elements/ApproversComponents/DocumentsRegistration";
import {BlockButtonsChange} from "../ChangeRequestComponents/elemtnts/BlockButtonsChange";
import {useSelector} from "react-redux";

export const RequestForVacation = (props) => {
    let itemvacation = useSelector(state => state.itemvacation);

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
        <div className="request-for-vacation">
            <HeaderRequest header="Request for vacation"/>
            <div className="div-img"><img src={imgreqvacation}/></div>
            <div className="block-vacation">
                <div
                    className="vacation-date">Vacation: {changedate(itemvacation.startDate)} - {changedate(itemvacation.endDate)} ({itemvacation.days} days)
                </div>
                <div className="date-created">Created: {changedate(itemvacation.created)}</div>
                <div className="pending-approval">Pending approval</div>
            </div>
            <AlreadyApproved alreadyApproved={itemvacation.alreadyApproved}/>
            <CurrentApproves/>
            <NextApprovers/>
            <DocumentsRegistration/>
            <BlockButtonsChange closeDetailsInfo={closeDetailsInfo} type="Vacation leave"
                                showchangepanel={showChangePanel}/>
        </div>
    )
}
