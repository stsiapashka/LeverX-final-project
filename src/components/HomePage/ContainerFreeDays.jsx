import twoarrows from '../../image/twoarrows.svg'
import './style/containerfreedays.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const ContainerFreeDays = () => {
    const [days, setDays] = useState();
    const alldays = useSelector(state => state.alldays);
    useEffect(() => {
        setDays(alldays);
    })
    return (
        <div className="containerfreedays">
            <div className="blockvacationdays">
                <div className="div-vacation">Vacation</div>
                <div className="div-vacation-days">Days</div>
                <div className="div-available">Available</div>
                <div className="count-free-days">{days}</div>
            </div>
            <div className="block-more-details">
                <img className="icon-two-arrows" src={twoarrows}/>
                <div className="div-more-details">more details</div>
            </div>
        </div>
    )
}
