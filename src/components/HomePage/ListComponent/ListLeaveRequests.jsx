import imglist from '../../../image/Pic & texts.svg';
import '../style/ListLeave.css'
import imgreqvacation from "../../../image/RequestVacation.svg";
import imgsick from "../../../image/SickLeave.svg";
import imgown from "../../../image/OwnExpense.svg";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {ListElement} from "./ListElement";

export const ListLeaveRequests = (props) => {
    const [vacations, setVacation] = useState();
    const [sick, setSick] = useState();
    const [own, setOwn] = useState();
    let storvacations = useSelector(state => state.vacationrequest);
    let storsick = useSelector(state => state.sickleave);
    let storown = useSelector(state => state.ownexpense);
    const dispatch = useDispatch();
    useEffect(() => {
        setVacation(storvacations);
        setSick(storsick);
        setOwn(storown);
    }, [storvacations, storsick, storown])
    let opendetailes = (item) => {
        if (item.select == "Vacation leave") {
            dispatch({type: "ADD_ITEM_VACATION", payload: item});
            props.showComponent("Vacation leave")
        }
        if (item.select === "Sick leave") {
            dispatch({type: "ADD_ITEM_SICK", payload: item});
            props.showComponent("Sick leave")
        }
        if (item.select === "Own expense leave") {
            dispatch({type: "ADD_ITEM_OWN", payload: item});
            props.showComponent("Own expense leave")
        }
    }

    return (
        storvacations.length !== 0 || storsick.length !== 0 || storown.length !== 0 ?
            <div className="container-list-leave-requests">
                <div className="header-my-leave-requests">My Leave Requests</div>
                <div>
                    <div className="lineyear">2019 Year</div>
                </div>
                <div className="blocks-vacation">
                    {vacations.map((item, index) => {
                        if (+item.created === +new Date("2019/09/1"))
                            return <div key={index} onClick={() => opendetailes(item)}>
                                <ListElement header="Vacation"
                                             img={imgreqvacation} item={item}/>
                            </div>
                    })}
                    {sick.length !== 0 ? sick.map((item, index) => {
                        if (+item.created === +new Date("2019/09/1"))
                            return <div key={index} onClick={() => opendetailes(item)}>
                                <ListElement header="Sick Leave"
                                             img={imgsick} item={item}
                                /></div>
                    }) : ""}
                    {own.length !== 0 ? own.map((item, index) => {
                        if (+item.created === +new Date("2019/09/1"))
                            return <div key={index} onClick={() => opendetailes(item)}>
                                <ListElement header="Own expense leave"
                                             img={imgown} item={item}
                                /></div>
                    }) : ""}
                </div>
                <div>
                    <div className="lineyear">2018 Year</div>
                </div>
                <div className="blocks-vacation">
                    {vacations.map((item, index) => {
                        if (+item.created === +new Date("2018/09/1"))
                            return <div key={index} onClick={() => opendetailes(item)}>
                                <ListElement header="Vacation"
                                             img={imgreqvacation} item={item}
                                /></div>
                    })}
                    {sick.length !== 0 ? sick.map((item, index) => {
                        if (+item.created === +new Date("2018/09/1"))
                            return <div key={index} onClick={() => opendetailes(item)}>
                                <ListElement header="Sick Leave"
                                             img={imgsick} item={item}
                                /></div>
                    }) : ""}
                    {own.length !== 0 ? own.map((item, index) => {
                        if (+item.created === +new Date("2018/09/1"))
                            return <div key={index} onClick={() => opendetailes(item)}>
                                <ListElement header="Own expense leave"
                                             img={imgown} item={item}
                                /></div>
                    }) : ""}
                </div>
            </div>
            : <div className="container-list-leave-requests">
                <div className="header-my-leave-requests">My Leave Requests</div>
                <img className="imglist" src={imglist}/>
            </div>)
}
