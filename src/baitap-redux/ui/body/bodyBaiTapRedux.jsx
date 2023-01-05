import { useState } from "react";
import { useDispatch } from "react-redux";
import CounterBaiTapRedux from "../counter/CounterBaiTapRedux";
import {addItem} from "../../slice/creatersSliceBaiTap"
import "./style.scss"

function BodyBaiTapRedux() {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();
    const handleAddItem = ()=>{
        dispatch(addItem(keyword))
        setKeyword('')
    }
    return ( <div className="redux-baitap">
        <input type='text' value={keyword} onChange ={e=>setKeyword(e.target.value)}/>
        <button  onClick={handleAddItem} className="btn-body">Add</button>
        <CounterBaiTapRedux keyword={keyword} />
    </div> );
}

export default BodyBaiTapRedux;