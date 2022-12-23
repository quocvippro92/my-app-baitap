import { useContext } from "react"
import { CounterContext } from "../context"
import './count.scss'


const Counter = ()=>{
    const context = useContext(CounterContext)
    
    const handleIncrease = ()=>{
        context.inCrease();
    }
    const handleDecrease = ()=>{
        context.deCrease();
    }
        return(
            <>
            <button onClick={handleIncrease} className='count'>InCrease</button>
            {context.globalCount}
            <button onClick={handleDecrease} className='count'>DeCrease</button>
            </>          
        )
}
export default Counter;