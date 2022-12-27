import { useContext } from "react";
import { InputContext } from "../context";

function BodyContext (){
    const conText = useContext(InputContext)
    return (
        <div className="styleBody">
           {conText.todoItem.map((todo,index) => (
                    <p key={index}>{todo}</p>
                ))}
        </div>
    )
}
export default BodyContext;