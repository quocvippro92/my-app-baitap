import { useContext } from "react"
import { ALERT } from "../const";
import AlertContext from "../context/AlertContext";


const Alert = ()=>{
    const alert = useContext(AlertContext);

    const chooseStyleAlert = ()=>{
        switch (alert.alert){
            case ALERT.SUCCESS:
                return 'alert--success';
            case ALERT.ERROR:
                return 'alert--error';
            default:
                return 'alert--none';
        }
    };
    return(
        <div className={`alert ${chooseStyleAlert()}`}>
            <p className="alert__content">{alert.alertText}</p>
            <button className="alert__clear" onClick={alert.clear}>
                DISMISS
            </button>
        </div>
    )
}
export default Alert;