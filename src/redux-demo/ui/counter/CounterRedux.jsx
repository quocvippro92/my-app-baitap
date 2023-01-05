import { useDispatch } from "react-redux";
import { decrease, increase } from "../../slice/counterslice";


function CounterRedux() {
    const dispatch = useDispatch();// useDispatch:  Móc này trả về một tham chiếu đến dispatchhàm từ cửa hàng Redux. Bạn có thể sử dụng nó để gửi hành động khi cần thiết.

    const handleIncrease = ()=>{
        dispatch(increase(2));
        
    }
    const handleDecrease = ()=>{
        dispatch(decrease(1));
    }
    return (<div>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
    </div>
    );
}

export default CounterRedux;