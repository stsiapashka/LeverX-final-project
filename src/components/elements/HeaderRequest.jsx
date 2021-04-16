import imgcopy from "../../image/copy.svg";

export const HeaderRequest = (props) => {
    return (
        <div className="header-request">
            <div className="text-request-for-vacation">{props.header}</div>
            <img src={imgcopy}/>
        </div>
    )
}
