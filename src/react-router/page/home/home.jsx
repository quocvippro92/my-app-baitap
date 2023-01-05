import { Outlet } from "react-router-dom";
import { LayoutReactRouter } from "../../layout/LayoutReactRouter";

function Home() {
    return <LayoutReactRouter content={<Outlet/>} />
}

export default Home;