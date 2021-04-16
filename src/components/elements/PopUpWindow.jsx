import './style/popupwindow.css'

export const PopUpWindow = () => {
    return (
        <div className="block-popup-window">
            <div className="text-popup-window">
                The days calculated here are calendar days:<br/>
                <b>Calendar days = Work days + Weekends</b><br/>
            </div>
            <div className="text2-popup-window">
                Number of days can be adjusted by Personnel<br/>
                Officer (Katsiaryna Barysik) in accordance with<br/>
                the current legislation.
            </div>
        </div>
    )
}
