import {useDispatch, useSelector} from "react-redux";

export const BlockButtonsSaveChange = (props) => {
    const dispatch = useDispatch();
    const date = useSelector(state => state.startDate)
    let closePanelChange = () => {
        if (props.type === "Vacation leave")
            props.closechangepanel(props.type)
        if (props.type === "Sick leave")
            props.closechangepanel(props.type)
        if (props.type === "Own expense leave")
            props.closechangepanel(props.type)
    }
    let saveupdate = () => {

        if (props.type == "Vacation leave") {
            dispatch({type: "Update_Vacation_Request", payload: props.id});
            dispatch({type: "End_Date", payload: Date.now()});
            dispatch({type: "Start_Date", payload: Date.now()});
            props.closechangepanel(props.type)
        }
        if (props.type == "Sick leave") {
            dispatch({type: "Update_Sick_Leave", payload: props.id});
            dispatch({type: "End_Date", payload: Date.now()});
            dispatch({type: "Start_Date", payload: Date.now()});
            props.closechangepanel(props.type)
        }
        if (props.type == "Own expense leave") {
            dispatch({type: "Update_Own_Expense", payload: props.id});
            dispatch({type: "End_Date", payload: Date.now()});
            dispatch({type: "Start_Date", payload: Date.now()});
            props.closechangepanel(props.type)
        }

    }
    return (
        <div className="change-req-button-block">
            <div className="change-link-cancel" onClick={closePanelChange}>CANCEL</div>
            <button className="change-button-cancel" onClick={saveupdate}>SAVE</button>
        </div>
    )
}
