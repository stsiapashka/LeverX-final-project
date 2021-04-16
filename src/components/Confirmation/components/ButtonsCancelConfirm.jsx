import {useDispatch, useSelector} from "react-redux";

export const ButtonsCancelConfirm = (props) => {
    const vacations = useSelector(state => state.vacationrequest)
    const dispatch=useDispatch();
    let save = () => {
        dispatch({type: "End_Date", payload: props.endDate});
        dispatch({type: "Start_Date", payload: props.startDate});
        dispatch({type: "COUNT_DAY", payload: props.days});

        let id = vacations.length + Number(1);
        dispatch({type: "Add_Vacation_Request", payload: id});
        dispatch({type: "End_Date", payload: Date.now()});
        dispatch({type: "Start_Date", payload: Date.now()});
        dispatch({type: "COUNT_DAY", payload: 1});
        props.close();

    }
    let cancel = () => {
        props.close();
    }
    return (
        <div className="block-buttons-cancel-confirm">
            <div className="hr-block-button"></div>
            <button className="button-confirm-anyway" onClick={cancel}>CONFIRM ANYWAY</button>
            <button className="button-change-dates" onClick={save}>CHANGE DATES</button>
        </div>
    )
}
