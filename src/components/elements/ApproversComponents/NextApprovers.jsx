import JohnSmith from "../../../image/JohnSmith.svg";
import MikeSmith from "../../../image/MikeSmith.svg";

export const NextApprovers = () => {
    return (
        <div className="block-next-approvers">
            <div className="div-next-approver">NEXT APPROVER(S)</div>
            <div className="employee-next-approved">
                <img src={JohnSmith}/>
                <div className="div-name-employee-next-approved">John Smith</div>
            </div>
            <div className="employee-next-approved">
                <img src={MikeSmith}/>
                <div className="div-name-employee-next-approved">Mike Smith</div>
            </div>
        </div>
    )
}
