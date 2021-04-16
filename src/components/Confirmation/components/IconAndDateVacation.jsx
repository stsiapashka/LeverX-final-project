import imgreqvacation from "../../../image/RequestVacation.svg";

export const IconAndDateVacation = (props) => {

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
    return (
        <div className="icon-and-date-vacation">
            <img src={imgreqvacation}/>
            <div>{changedate(props.startDate)} - {changedate(props.endDate)} ({props.days} days)</div>
        </div>
    )
}
