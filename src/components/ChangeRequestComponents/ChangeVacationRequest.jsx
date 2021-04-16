import "./style/ChangeVacationRequest.css";
import imgreqvacation from "../../image/RequestVacation.svg";
import {HeaderChangeRequest} from "./elemtnts/HeaderChangeRequest";
import {BlockButtonsSaveChange} from "./elemtnts/BlockButtonsSaveChange";
import {useSelector} from "react-redux";
import {DataInputVacation} from "../elements/DataInputComponents/DataInputVacation";
import {OutputDateComponent} from "../elements/OutputDateComponent";

export const ChangeVacationRequest = (props) => {
    const date = useSelector(state => state.vacationrequest)
    let itemvacation = useSelector(state => state.itemvacation);
    const datePickerEnd = itemvacation.endDate;

    let select = (select) => {
        //props.selectreq(select);
    }

    let closeChangePanel = (type) => {
        props.closechangepanel(type);
    }
    return (

        <div className="change-vacation-request">
            <HeaderChangeRequest/>
            <div className="block-change-vacation-request">
                <img src={imgreqvacation}/>
                <OutputDateComponent startDate={itemvacation.startDate}
                                     endDate={itemvacation.endDate}
                                     countDay={itemvacation.days}
                                     created={itemvacation.created}
                                     type={itemvacation.select}/>
                <div className="pending-approval-change-vacation-request">Pending approval</div>
            </div>
            <div className="data-change-vacation">
                <DataInputVacation disabled={true}
                                   selectreq={select}
                                   startDate={itemvacation.startDate}
                                   endDate={itemvacation.endDate}
                                   datePickerEnd={datePickerEnd}
                                   countDay={itemvacation.days}
                                   comment={itemvacation.comment}
                                   itemvacation={itemvacation}/>
            </div>
            <div>
                <BlockButtonsSaveChange closechangepanel={closeChangePanel} type="Vacation leave" id={itemvacation.id}/>
            </div>
        </div>

    )
}
