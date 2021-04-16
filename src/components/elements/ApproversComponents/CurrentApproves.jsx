import imgavatar from "../../../image/avatar.png";

export const CurrentApproves = () => {
    return (
        <div className="block-current-approvers">
            <div className="div-current-approved">CURRENT APPROVER(S)</div>
            <div className="employee-current-approved">
                <img src={imgavatar}/>
                <div className="div-name-employee-current-approved">Will McConnel</div>
            </div>
        </div>
    )
}
