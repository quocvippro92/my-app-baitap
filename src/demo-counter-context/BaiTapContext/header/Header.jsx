import { useContext, useEffect, useState } from "react";
import { localStoregeUlti } from "../../../functions/localStorage";
import Body from "../../../layout/Body";
import { CounterContext } from "../../context";
import BodyContext from "../Body/Body";
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