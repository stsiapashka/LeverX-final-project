export const BlockButtonsChange = (props) => {
    let closeDetailsInfo = () => {
        if (props.type === "Vacation leave")
            props.closeDetailsInfo(props.type)
        if (props.type === "Sick leave")
            props.closeDetailsInfo(props.type)
        if (props.type === "Own expense leave")
            props.closeDetailsInfo(props.type)
    }
    let openPanelChange = () => {
        if (props.type === "Vacation leave")
            props.showchangepanel(props.type)
        if (props.type === "Sick leave")
            props.showchangepanel(props.type)
        if (props.type === "Own expense leave")
            props.showchangepanel(props.type)
    }
    return (
        <div className="block-with-button-change">
            <a className="link-cancel-request">CANCEL<br/> REQUEST</a>
            <a className="link-change" onClick={openPanelChange}>CHANGE</a>
            <button className="button-change" onClick={closeDetailsInfo}>CLOSE</button>
        </div>
    )
}
