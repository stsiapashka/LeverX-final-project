import {HeaderConfirmation} from "./components/HeaderConfirmation";
import {IconAndDateVacation} from "./components/IconAndDateVacation";
import {ButtonsCancelConfirm} from "./components/ButtonsCancelConfirm";
import './style/weekendholidays.css'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const WeekEndHolidays = (props) => {
    const storestartDate = useSelector(state => state.startDate)
    const days = useSelector(state => state.days);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    useEffect(() => {
        var start = new Date(storestartDate);
        if (start.getDay() === 6) {
            start.setDate(start.getDate() + 2);
            setStartDate(start);
            var end = new Date(start);
            end.setDate(end.getDate() + Number(days) - 1);
            setEndDate(end)

        } else if (start.getDay() === 0) {
            start.setDate(start.getDate() + 1);
            setStartDate(start);
            var end = new Date(start);
            end.setDate(end.getDate() + Number(days) - 1);
            setEndDate(end)
        }

    }, [])
    return (
        <div className="size-week">
            <div className="block-confirmation">
                <HeaderConfirmation/>
                <div className="block-with-info">
                    <div className="txt-red">The selected interval includes only public holidays or weekend days.<br/>
                        Please review the selected dates.
                    </div>
                    <div className="week-position-icon">
                        <IconAndDateVacation startDate={startDate}
                                             endDate={endDate}
                                             days={days}/>
                    </div>

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
