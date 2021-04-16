import {BtnSend} from "./GroupAccountBtns/BtnSend";
import {BtnAccount} from "./GroupAccountBtns/BtnAccount";
import {BtnExit} from "./GroupAccountBtns/BtnExit";
import './accountbtns.css';

export const GroupAccountBtns = () => {
    return (
        <div>
            <BtnSend/>
            <BtnAccount/>
            <BtnExit/>
        </div>
    )
}
