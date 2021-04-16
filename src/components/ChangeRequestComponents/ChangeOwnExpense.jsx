import "./style/ChangeOwnExpense.css";
import {HeaderChangeRequest} from "./elemtnts/HeaderChangeRequest";
import {BlockButtonsSaveChange} from "./elemtnts/BlockButtonsSaveChange";
import OwnExpense from "../../image/OwnExpense.svg";
import {DataInputOwn} from "../elements/DataInputComponents/DataInputOwn";
import {OutputDateComponent} from "../elements/OutputDateComponent";
import {useSelector} from "react-redux";

export const ChangeOwnExpense = (props) => {
    let itemown = useSelector(state => state.itemown);

    let select = (select) => {
        // props.selectreq(select);
    }
    let closeChangePanel = (type) => {
        props.closechangepanel(type);
    }
    return (
        <div className="change-own-leave">
            <HeaderChangeRequest/>
            <div className="block-change-own-leave">
                <img src={OwnExpense}/>
                <OutputDateComponent startDate={itemown.startDate}
                                     endDate={itemown.endDate}
                                     countDay=""
                                     created={itemown.created}
                                     type={itemown.select}/>
                {/*<div className="change-own-leave-date">Own expense leave: 30 Jul 2018 (11:00 - 14:00) - 31 Jul<br/> 2018 (09:00 - 12:00)</div>*/}
                <div className="change-date-created-own-leave">Reason: Reason type</div>
                <div className="change-pending-approval-own">Pending approval</div>
            </div>
            <div className="data-change-own">
                <DataInputOwn disabled={true}
                              selectreq={select}
                              startDate={itemown.startDate}
                              endDate={itemown.endDate}
                              datePickerEnd={itemown.endDate}
                              countDay={itemown.days}
                              comment={itemown.comment}
                              itemvacation={itemown}/>
            </div>
            <div><BlockButtonsSaveChange closechangepanel={closeChangePanel}
                                         type="Own expense leave"
                                         id={itemown.id}/></div>
        </div>

    )
}
