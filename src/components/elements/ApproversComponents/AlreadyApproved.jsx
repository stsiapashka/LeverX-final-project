export const AlreadyApproved = (props) => {
    return (
        <div className="block-already-approved">
            <div className="div-already-approved">ALREADY APPROVED</div>
            {props.alreadyApproved.map((item, index) => {
                return <div className="employee-already-approved" key={index}>
                    <img src={item.img}/>
                    <div className="div-name-employee-approved">{item.name}</div>
                    <div className="div-employee-comments">Comments: {item.comments}</div>
                </div>
            })}
        </div>
    )
}
