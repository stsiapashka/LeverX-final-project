import {HeaderConfirmation} from "./components/HeaderConfirmation";
import {IconAndDateVacation} from "./components/IconAndDateVacation";
import './style/dublicaterequest.css'
import {useSelector} from "react-redux";

export const DublicateRequest = (props) => {
    const startDate = useSelector(state => state.startDate);
    const endDate = useSelector(state => state.endDate);
    const days = useSelector(state => state.days);
    let close = () => {
        props.close();
    }
    return (
        <div className="size-dublicate">
            <div className="block-confirmation">
                <HeaderConfirmation/>
                <div className="block-with-info">
                    <div className="txt-red">It looks like you already have a request for the same period. Please<br/>
                        check the dates of your request.
                    </div>
                    <div className="week-position-icon">
                        <IconAndDateVacation startDate={startDate}
                                             endDate={endDate}
                                             days={days}/>
                    </div>

                </div>
                <div className="dublicate-buttons">
                    <div className="block-buttons-cancel-confirm">
                        <div className="hr-dublicate"></div>
                        <button className="button-OK" onClick={close}>OK, GOT IT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
