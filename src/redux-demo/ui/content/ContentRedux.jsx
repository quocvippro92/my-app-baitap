import { useSelector } from "react-redux";
import BodyRedux from "../body/BodyRedux";
function ContentRedux() {
    //useSelector: Cho phép bạn trích xuất dữ liệu từ trạng thái cửa hàng Redux, sử dụng chức năng chọn.
    const count = useSelector((state)=>state.counterReducer.count); //dùng hàm useSelector để lấy state rootStore
    
    return (<div className="contentRedux">
        <h1>{count}</h1>
        <BodyRedux/>
    </div>);
}

export default ContentRedux;