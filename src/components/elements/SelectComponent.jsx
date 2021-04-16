import {useDispatch} from "react-redux";
import './style/selectcomponent.css'

export const SelectComponent = (props) => {
    const dispatch = useDispatch();
    let select = (event) => {
        props.selectRequest(event.target.value);
        dispatch({type: "Add_Select", payload: event.target.value});
    }
    return (
        <>
            <select onChange={select} id="select" className="select-type-request" value={props.selectvalue}
                    disabled={props.disabled}>
                <option>Vacation leave</option>
                <option>Sick leave</option>
                <option>Own expense leave</option>
            </select>
        </>
    )
}
