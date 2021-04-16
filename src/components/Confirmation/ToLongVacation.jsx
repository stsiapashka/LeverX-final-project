import './style/tolongvacation.css'
import {HeaderConfirmation} from "./components/HeaderConfirmation";
import {IconAndDateVacation} from "./components/IconAndDateVacation";
import {ButtonsCancelConfirm} from "./components/ButtonsCancelConfirm";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const ToLongVacation = (props) => {
    const storestartDate = useSelector(state => state.startDate)
    const storedays = useSelector(state => state.days);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [days, setDays] = useState();
    useEffect(() => {
        setStartDate(storestartDate)
        var end = new Date(storestartDate);
        end.setDate(end.getDate() + 14);
        setDays(14)
        setEndDate(end)
    }, [])
    return (
        <div className="size-to-long-vacation">
            <div className="block-confirmation">
                <HeaderConfirmation/>
                <div className="block-with-info">
                    <div className="txt-red">We know you must be tired. But please consider shoter vacation.<br/>
                        How about 2 weeks?
                    </div>
                    <div className="week-position-icon">
                        <IconAndDateVacation
                            startDate={startDate}
                            endDate={endDate}
                            days={days}/></div>

                </div>
                <div className="week-buttons">
                    <ButtonsCancelConfirm close={props.close}
                                          startDate={startDate}
                                          endDate={endDate}
                                          days={days}/>
                </div>
            </div>
        </div>
    )
}
