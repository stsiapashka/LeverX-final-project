import './style/CommentComponent.css'
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
export const CommentComponent = (props) => {
    const dispatch = useDispatch();
    const [text,setText]=useState(props.comment)
    useEffect(()=>{
        dispatch({type: "Add_Comment", payload: ""});
    },[])
    let inputcomment=(event)=>{
        dispatch({type: "Add_Comment", payload: event.target.value});
        setText(event.target.value);
    }
    return (
        <div>
            <div className="div-comments">Comment</div>
            <textarea type="text" className="input-comment" onChange={inputcomment} value={text}/>
        </div>
    )
}
