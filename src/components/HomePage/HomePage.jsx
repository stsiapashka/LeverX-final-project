import {ContainerFreeDays} from "./ContainerFreeDays";
import {ListLeaveRequests} from "./ListComponent/ListLeaveRequests";
import {RequestForVacation} from "../BlocksRequests/RequestForVacation";
import {RequestSickLeave} from "../BlocksRequests/RequestSickLeave";
import {RequestForLeaveAtOwnExpense} from "../BlocksRequests/RequestForLeaveAtOwnExpense";
import {ChangeVacationRequest} from "../ChangeRequestComponents/ChangeVacationRequest";
import {ChangeSickLeave} from "../ChangeRequestComponents/ChangeSickLeave";
import {ChangeOwnExpense} from "../ChangeRequestComponents/ChangeOwnExpense";
import { useState} from "react";
import {CardRequest} from "./CardsLeave/CardRequest";
import {AvailableDays} from "../Confirmation/AvailableDays";
import {LessThan2week} from "../Confirmation/LessThan2week";
import {WeekEndHolidays} from "../Confirmation/WeekEndHolidays";
import {DublicateRequest} from "../Confirmation/DublicateRequest";
import {ToLongVacation} from "../Confirmation/ToLongVacation";

export const HomePage = () => {
    const [flagvacation, setFlagvacation] = useState(false);
    const [flagsick, setFlagsick] = useState(false);
    const [flagown, setFlagown] = useState(false);
    const [changevacation, setChangeVacation] = useState(false);
    const [changesick, setChangeSick] = useState(false);
    const [changeown, setChangeOwn] = useState(false);
    const [confirmavailable, setConfirmAvailable] = useState(false);
    const [confirmweek, setConfirmweek] = useState(false);
    const [confirmholiday, setConfirmholiday] = useState(false);
    const [confirmdublicate, setConfirmdublicate] = useState(false);
    const [confirmtolong, setConfirmtolong] = useState(false);
    const showdetailpanel = (type) => {
        if (type === "Vacation leave") {
            setFlagvacation(true);
            setFlagsick(false);
            setFlagown(false);
        }
        if (type === "Sick leave") {
            setFlagvacation(false);
            setFlagsick(true);
            setFlagown(false);
        }
        if (type === "Own expense leave") {
            setFlagvacation(false);
            setFlagsick(false);
            setFlagown(true);
        }
    }
    const showChangePanel = (type) => {
        if (type === "Vacation leave") {
            setChangeVacation(true);
            setChangeSick(false);
            setChangeOwn(false);
            setFlagvacation(false)
        }
        if (type === "Sick leave") {
            setChangeVacation(false);
            setChangeSick(true);
            setChangeOwn(false);
            setFlagsick(false)
        }
        if (type === "Own expense leave") {
            setChangeVacation(false);
            setChangeSick(false);
            setChangeOwn(true);
            setFlagown(false)
        }
    }
    let closeDetailsInfo = (type) => {
        if (type === "Vacation leave") {
            setFlagvacation(false);
        }
        if (type === "Sick leave") {
            setFlagsick(false);
        }
        if (type === "Own expense leave") {
            setFlagown(false);
        }
    }
    let closeChangePanel = (type) => {
        if (type === "Vacation leave") {
            setChangeVacation(false);
        }
        if (type === "Sick leave") {
            setChangeSick(false);
        }
        if (type === "Own expense leave") {
            setChangeOwn(false);
        }
    }
    let confirm = (flag) => {
        if (flag === "avail") {
            setConfirmAvailable(true);
        }
        if (flag === "week") {
            setConfirmweek(true)
        }
        if (flag === "holiday") {
            setConfirmholiday(true)
        }
        if (flag === "dublicate") {
            setConfirmdublicate(true)
        }
        if (flag === "tolong") {
            setConfirmtolong(true)
        }

    }
    let closeConfirm = () => {
        setConfirmAvailable(false);
        setConfirmweek(false);
        setConfirmholiday(false)
        setConfirmdublicate(false)
        setConfirmtolong(false)
    }
    return (
        <div>
            <ContainerFreeDays/>
            <ListLeaveRequests showComponent={showdetailpanel}/>
            <CardRequest confirm={confirm}/>
            {flagvacation && (<RequestForVacation closeDetailsInfo={closeDetailsInfo}
                                                  showchangepanel={showChangePanel}/>)}
            {flagsick && (<RequestSickLeave closeDetailsInfo={closeDetailsInfo}
                                            showchangepanel={showChangePanel}/>)}
            {flagown && (<RequestForLeaveAtOwnExpense closeDetailsInfo={closeDetailsInfo}
                                                      showchangepanel={showChangePanel}/>)}

            {changevacation && (<ChangeVacationRequest closechangepanel={closeChangePanel}/>)}
            {changesick && (<ChangeSickLeave closechangepanel={closeChangePanel}/>)}
            {changeown && (<ChangeOwnExpense closechangepanel={closeChangePanel}/>)}

            {confirmavailable && (<AvailableDays closeConfirm={closeConfirm}/>)}
            {confirmweek && (<LessThan2week close={closeConfirm}/>)}
            {confirmholiday && (<WeekEndHolidays close={closeConfirm}/>)}
            {confirmdublicate && (<DublicateRequest close={closeConfirm}/>)}
            {confirmtolong && (<ToLongVacation close={closeConfirm}/>)}
        </div>
    )
}
