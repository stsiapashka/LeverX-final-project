import "./style/requestOwnExpense.css";
import OwnExpense from "../../image/OwnExpense.svg";
import {HeaderRequest} from "../elements/HeaderRequest";
import {AlreadyApproved} from "../elements/ApproversComponents/AlreadyApproved";
import {CurrentApproves} from "../elements/ApproversComponents/CurrentApproves";
import {NextApprovers} from "../elements/ApproversComponents/NextApprovers";
import {DocumentsRegistration} from "../elements/ApproversComponents/DocumentsRegistration";
import {BlockButtonsChange} from "../ChangeRequestComponents/elemtnts/BlockButtonsChange";
import {useSelector} from "react-redux";

export const RequestForLeaveAtOwnExpense = (props) => {
    let itemown = useSelector(state => state.itemown);

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
        <div className="request-own-leave">
            <HeaderRequest header="Request for leave at own expense"/>
            <div className="div-img"><img src={OwnExpense}/></div>
            <div className="block-own-leave">
                <div className="own-leave-date">Own expense leave: {changedate(itemown.startDate)} (11:00 - 14:00)
                    - {changedate(itemown.endDate)} (09:00 - 12:00)
                </div>
                <div className="date-created-own-leave">Created: {changedate(itemown.created)} <br/> Reason: Reason type
                </div>
                <div className="pending-approval-own">Pending approval</div>
            </div>
            <AlreadyApproved alreadyApproved={itemown.alreadyApproved}/>
            <CurrentApproves/>
            <NextApprovers/>
            <DocumentsRegistration/>
            <div className="own-button-change">
                <BlockButtonsChange showchangepanel={showChangePanel}
                                    closeDetailsInfo={closeDetailsInfo}
                                    type="Own expense leave"/>
            </div>
        </div>
    )
}
