import {HeaderConfirmation} from "./components/HeaderConfirmation";
import {IconAndDateVacation} from "./components/IconAndDateVacation";
import {ButtonsCancelConfirm} from "./components/ButtonsCancelConfirm";
import './style/lessthan2week.css'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const LessThan2week = (props) => {
    const storestartDate = Date.now()
    const days = useSelector(state => state.days);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    useEffect(() => {
        var start = new Date(storestartDate);
        start.setDate(start.getDate() + Number(14));
        setStartDate(start);
        var end = new Date(storestartDate);
        end.setDate(end.getDate() + 14 + Number(days) - 1);
        setEndDate(end)
    }, [])
    return (
        <div className="size-less">
            <div className="block-confirmation">
                <HeaderConfirmation/>
                <div className="block-with-info">
                    <div className="txt-red">Please submit your request at least two weeks before the desired<br/> start
                        date.
                    </div>
                    <div className="txt-less-2-week">Would you like to confirm the request with the dates as suggested
                        below?
                    </div>
                    <IconAndDateVacation startDate={startDate}
                                         endDate={endDate}
                                         days={days}/>
                </div>
                <div className="less-buttons">
                    <ButtonsCancelConfirm close={props.close}
                                          startDate={startDate}
                                          endDate={endDate}
                                          days={days}/>
                </div>
            </div>
        </div>
    )
}
