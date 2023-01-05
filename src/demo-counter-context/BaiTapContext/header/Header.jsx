import { useContext } from "react";
import { InputContext } from "../context";



function Header (){
    const context = useContext(InputContext)
    return(
        <div className="styleHeader">
            <input type='text'  value={context.keyword} onChange={context.handleTargetVlaue}></input>
            <button  onClick={context.handleSubmit}>Add</button>
        </div>
    )
}
export default Header