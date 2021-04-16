import {useEffect, useState} from "react";

export const OutputDateComponent = (props) => {
    const [header, setHeader] = useState("");
    useEffect(() => {
        if (props.type === "Vacation leave") {
            setHeader(`Vacation: ${changedate(props.startDate)} - ${changedate(props.endDate)} (${props.countDay} days)`);
        }
        if (props.type === "Sick leave") {
            setHeader(`Sick leave: ${changedate(props.startDate)} - ${changedate(props.endDate)}`);
        }
        if (props.type === "Own expense leave") {
            setHeader(`Own expense leave: ${changedate(props.startDate)} (11:00 - 14:00) - ${changedate(props.endDate)} (09:00 - 12:00)`);
        }
    })

    function dateFormat(d) {
        var a = d.split(" ");
        if (a.length < 2) return d;
        return [a[1], a[0]].concat(a.splice(2, a.length)).join(" ");
    }

    let changedate = (date) => {
        date = new Date(date).toString();
        date = date.substr(4, 11)
        date = dateFormat(date);
        return date;

    }
    return (
        <div>
            <div className="change-vacation-request-date">{header}</div>
            <div className="date-created-change-vacation">Created: {changedate(props.created)}</div>
        </div>
    )
}
