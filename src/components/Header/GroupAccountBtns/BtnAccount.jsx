import photoAnnaSmith from '../../../image/photoAnnaSmith.svg'

export const BtnAccount = () => {
    return (
        <div className="btnaccount">
            <img className="accountphoto" src={photoAnnaSmith}/>
            <div className="accountfullname">
                <div className="accountname">ANNA</div>
                <div className="accountsurname"> SMITH</div>
            </div>
        </div>
    )
}

