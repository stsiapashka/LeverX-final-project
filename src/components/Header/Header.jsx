import './header.css'
import {SiteLogo} from "./SiteLogo";
import {PanelWithLinks} from "./PanelWithLinks";
import {GroupAccountBtns} from "./GroupAccountBtns";

export default Headers = (props) => {
    return (
        <div>
            <div className="header">
                <SiteLogo/>
                <PanelWithLinks/>
                <GroupAccountBtns/>
            </div>
            <div className="undoheader">
                <div className="slaider"></div>
            </div>
        </div>
    )
}
