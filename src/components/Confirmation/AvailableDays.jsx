import './style/generalstyle.css'
import './style/availabledays.css'
import {HeaderConfirmation} from "./components/HeaderConfirmation";
import {IconAndDateVacation} from "./components/IconAndDateVacation";
import {useDispatch, useSelector} from "react-redux";

export const AvailableDays = (props) => {
    const startDate = useSelector(state => state.startDate);
    const endDate = useSelector(state => state.endDate);
    const days = useSelector(state => state.days);

    const dispatch = useDispatch();
    const vacations = useSelector(state => state.vacationrequest)
    let confirm = () => {
        let id = vacations.length + Number(1);
        dispatch({type: "Add_Vacation_Request", payload: id});
        dispatch({type: "End_Date", payload: Date.now()});
        dispatch({type: "Start_Date", payload: Date.now()});
        dispatch({type: "COUNT_DAY", payload: 1});
        props.closeConfirm(false);
    }
    let cancel = () => {
        props.closeConfirm();
    }

    return (
        <div className="size-available">
            <div className="block-confirmation">
                <HeaderConfirmation/>
                <div className="block-with-info">
                    <div className="txt-creating-new-req">Please confirm creating a new vacation request:</div>
                    <IconAndDateVacation startDate={startDate}
                                         endDate={endDate}
                                         days={days}/>
                </div>
                <div className="position-button-block">
                    <div className="block-buttons-cancel-confirm">
                        <div className="hr"></div>
                        <button className="button-cancel" onClick={cancel}>CANCEL</button>
                        <button className="button-confirm" onClick={confirm}>CONFIRM</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
