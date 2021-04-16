import {useDispatch, useSelector} from "react-redux";
import './style/blockbuttonaddrequest.css'

export const BlockButtonAddRequest = (props) => {
    const dispatch = useDispatch();

    const startDate = useSelector(state => state.startDate)
    const endDate = useSelector(state => state.endDate)
    const days = useSelector(state => state.days)
    const now = Date.now();
    const vacations = useSelector(state => state.vacationrequest)
    const sick = useSelector(state => state.sickleave)
    const own = useSelector(state => state.ownexpense)
    const select = useSelector(state => state.select)


    let saverequest = () => {
        let id;
        let date2 = new Date(now);
        let date1 = new Date(startDate);
        var count = Math.floor((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24));
        if (select === "Vacation leave") {
            if (+startDate === +now || count < 14) {
                props.confirm("week");
                return;
            }
            if ((date1.getDay() === 6) || (date1.getDay() === 0) && days == 2) {
                props.confirm("holiday");
                return;
            }
            if (vacations.find(i => (+i.startDate >= +startDate) && (+i.endDate <= endDate))) {
                props.confirm("dublicate");
                return;
            }
            if (days > 14) {
                props.confirm("tolong");
                return;
            } else
                props.confirm("avail");
        } else if (select === "Sick leave") {
            id = sick.length + Number(1);
            dispatch({type: "Add_Sick_Leave", payload: id});
        } else if (select === "Own expense leave") {
            id = own.length + Number(1);
            dispatch({type: "Add_Own_Expense", payload: id});
        }
    }

    return (
        <>
            <button onClick={saverequest} className="button-submit">SUBMIT</button>
            <div className="div-questions">Have questions?</div>
            <div className="readFAQ">Read FAQ</div>
        </>
    )
}
