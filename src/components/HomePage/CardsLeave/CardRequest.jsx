import {CardVacationLeave} from "./CardVacationLeave";
import {CardSickLeave} from "./CardSickLeave";
import {CardOwnExpenseLeave} from "./CardOwnExpenseLeave";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

let selectcomponent = "Vacation leave";
export const CardRequest = (props) => {
    const [select, setSelect] = useState()
    let selected = useSelector(state => state.select);
    useEffect(() => {
            setSelect(selected);
        }, []
    )
    let selectcomponents = (value) => {
        selectcomponent = value;
        setSelect(value);
    }
    switch (select) {
        case  "Vacation leave":
            return (
                <div>
                    <CardVacationLeave selectreq={selectcomponents} confirm={props.confirm}/>
                </div>
            );
            break;
        case "Sick leave":
            return (
                <>< CardSickLeave selectreq={selectcomponents}
                /></>
            );
            break;
        case "Own expense leave":
            return (
                <> <CardOwnExpenseLeave selectreq={selectcomponents}/></>
            );
            break;
        default:
            return (
                <div>
                    <CardVacationLeave selectreq={selectcomponents}/>
                </div>
            );
            break;

    }
}
