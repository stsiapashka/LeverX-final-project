import rightarrow from "../../../image/rightarrow.svg";
import '../style/listelement.css'
import {useEffect, useState} from "react";

export const ListElement = (props) => {
    const item = props.item;
    const index = props.index;
    const [text, setText] = useState();
    useEffect(() => {
        if (props.header === "Vacation") {
            setText(`Vacation: ${changedate(item.startDate)} - ${changedate(item.endDate)} (${item.days} days)`)
        }
        if (props.header === "Sick Leave") {
            setText(`Sick Leave: ${changedate(item.startDate)} - ${changedate(item.endDate)} `)
        }
        if (props.header === "Own expense leave") {
            setText(`Own expense leave: ${changedate(item.startDate)} - ${changedate(item.endDate)} `)
        }
    })

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
        <div className="one-block-vacation-info" >
            <div className="img-vacation"><img src={props.img}/></div>

            <div className="div-info-vacation">
                <img className="arrowright" src={rightarrow}/>
                <div
                    className="list-vacation-date">{text} </div>
                <div className="list-info-date-created">Created: {changedate(item.created)}</div>
                <div className="list-pending-approval">Approved and registered</div>
            </div>

        </div>
    )
}
