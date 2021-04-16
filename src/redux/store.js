import approved from "../image/approved.svg"
import avatar from "../image/avatar.png"
import JohnSmith from "../image/JohnSmith.svg"
import MikeSmith from "../image/MikeSmith.svg"
import KatrinBrown from "../image/KatrinBrown.svg"
import update from 'react-addons-update';


const {createStore} = require("redux");
const initialstate = {
        startDate: Date.now(),
        endDate: Date.now(),
        select: "Vacation leave",
        alldays: 147,
        days: 1,
        created: new Date("2019/09/1"),
        alreadyApproved: [{img: approved, name: "John Smith", comments: "Have a nice vacation!"},
            {img: approved, name: "John Smith", comments: "Have a nice vacation!"}],
        currentApprover: {img: avatar, name: "Will McConnel"},
        nextApprover: [{img: JohnSmith, name: "John Smith"},
            {img: MikeSmith, name: "Mike Smith"}],
        notifiedUsers: [{img: avatar, name: "Will McConnel"},
            {img: JohnSmith, name: "John Smith"},
            {img: MikeSmith, name: "Mike Smith"}],
        docregistration: {img: KatrinBrown, name: "Katrin Brown"},
        comment: "",
        itemvacation: {},
        itemsick: {},
        itemown: {},
        vacationrequest: [],
        sickleave: [],
        ownexpense: []
    }
;

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case "Start_Date":
            return {...state, startDate: action.payload};
        case "End_Date":
            return {...state, endDate: action.payload};
        case "Add_Comment":
            return {...state, comment: action.payload};
        case "Add_Select":
            return {...state, select: action.payload};
        case "COUNT_DAY":
            return {...state, days: action.payload}
        case "ADD_ITEM_VACATION":
            return {...state, itemvacation: action.payload};
        case "ADD_ITEM_SICK":
            return {...state, itemsick: action.payload};
        case "ADD_ITEM_OWN":
            return {...state, itemown: action.payload}
        case "Add_Vacation_Request":
            state.alldays = state.alldays - state.days;
            let vacation = {
                id: action.payload,
                startDate: state.startDate,
                endDate: state.endDate,
                days: state.days,
                created: state.created,
                comment: state.comment,
                select: state.select,
                alreadyApproved: state.alreadyApproved,
                currentApprover: state.currentApprover,
                nextApprover: state.nextApprover,
                docregistration: state.docregistration
            }
            if (+state.created === +new Date("2019/09/1")) {
                return {
                    ...state,
                    vacationrequest: [...state.vacationrequest, vacation],
                    created: new Date("2018/09/1")

                };
            } else {
                return {
                    ...state,
                    vacationrequest: [...state.vacationrequest, vacation],
                    created: new Date("2019/09/1")
                };
            }
        case "Add_Sick_Leave" :
            state.alldays = state.alldays - state.days;
            let sick = {
                id: action.payload,
                startDate: state.startDate,
                endDate: state.endDate,
                created: state.created,
                comment: state.comment,
                select: state.select,
                notifiedUsers: state.notifiedUsers,
                docregistration: state.docregistration
            }
            if (+state.created === +new Date("2019/09/1")) {
                return {
                    ...state,
                    sickleave: [...state.sickleave, sick],
                    created: new Date("2018/09/1")
                }
            } else {
                return {
                    ...state,
                    sickleave: [...state.sickleave, sick],
                    created: new Date("2019/09/1")
                }
            }
            ;
        case "Add_Own_Expense":
            let own = {
                id: action.payload,
                startDate: state.startDate,
                endDate: state.endDate,
                created: state.created,
                comment: state.comment,
                select: state.select,
                alreadyApproved: state.alreadyApproved,
                currentApprover: state.currentApprover,
                nextApprover: state.nextApprover,
                docregistration: state.docregistration
            }

            if (+state.created === +new Date("2019/09/1")) {
                return {
                    ...state,
                    ownexpense: [...state.ownexpense, own],
                    created: new Date("2018/09/1")
                }
            } else {
                return {
                    ...state,
                    ownexpense: [...state.ownexpense, own],
                    created: new Date("2019/09/1")
                }
            }
            ;
        case "Update_Vacation_Request":
            return update(state, {
                vacationrequest: {
                    [action.payload - 1]: {
                        days: {$set: state.days},
                        startDate: {$set: state.startDate},
                        endDate: {$set: state.endDate},
                        comment: {$set: state.comment},
                        select: {$set: state.select}
                    }
                }
            });
        case "Update_Sick_Leave":
            return update(state, {
                sickleave: {
                    [action.payload - 1]: {
                        startDate: {$set: state.startDate},
                        endDate: {$set: state.endDate},
                        comment: {$set: state.comment},
                        select: {$set: state.select}
                    }
                }
            });
        case "Update_Own_Expense":
            return update(state, {
                ownexpense: {
                    [action.payload - 1]: {
                        days: {$set: state.days},
                        startDate: {$set: state.startDate},
                        endDate: {$set: state.endDate},
                        comment: {$set: state.comment},
                        select: {$set: state.select}
                    }
                }
            });

        default:
            return state;
    }

}
export const store = createStore(reducer);
