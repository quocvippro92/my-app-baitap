import { useDispatch, useSelector } from "react-redux";
import {deleteItem} from "../../slice/creatersSliceBaiTap"
import "./style.scss"
function CounterBaiTapRedux({keyword}) {
    const input = useSelector(state=>state.InputReducer.list);
    const dispatch = useDispatch();
    const handleDelete = ()=>{
        dispatch(deleteItem(keyword))
    }
    return (
        input.map((todo,index)=>(
            <div key={index} className="style-item">
                <p>{todo}</p>
                <button onClick={handleDelete} className="btn-delete">DELETE</button>
                </div>
        ))
     );
}

export default CounterBaiTapRedux;