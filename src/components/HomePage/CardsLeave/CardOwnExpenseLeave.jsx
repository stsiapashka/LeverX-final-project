import imgown from "../../../image/Own.svg";
import "./style/cardOwnLeave.css"
import {BlockButtonAddRequest} from "../../elements/BlockButtonAddRequest";
import {useState} from "react";
import {DataInputOwn} from "../../elements/DataInputComponents/DataInputOwn";

export const CardOwnExpenseLeave = (props) => {
    const startDate = Date.now();
    const endDate = new Date("2022/12/31");
    const datePickerEnd = Date.now();

    let select = (select) => {
        props.selectreq(select);
    }
    return (
        <div className="card-own-leave">
            <img className="img-request" src={imgown}/>
            <div>
                <div className="div-new">New</div>
                <div className="div-request">Request</div>
                <DataInputOwn disabled={false}
                              selectreq={select}
                              startDate={startDate}
                              endDate={endDate}
                              datePickerEnd={datePickerEnd}
                              countDay=""
                              comment=""/>
                <div className="block-own-button-add-request">
                    <BlockButtonAddRequest/>
                </div>
            </div>
        </div>
    )
}
