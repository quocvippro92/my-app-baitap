import { Content } from "../content/Content";
import { SideBar } from "../side-bar/SideBar";
import "./layoutreactrouter.scss"

export function LayoutReactRouter ({content}){
    return <div className="layout_react_router">
        <SideBar/>
        <Content content = {content}/>
    </div>
}