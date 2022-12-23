import { useContext } from "react";
import Body from "../body/Body";
import { CounterContext } from "../context";

const Layout = ()=>{
   const context = useContext(CounterContext)
    return (
      <>
      <Body/>
        <div> Increase: {context.globalCount}</div>
      </>
    )
}
export default Layout;