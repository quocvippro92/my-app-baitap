import "./App.css";
import "./index.scss";
import "./styles/style.scss";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./layout/Header.jsx";
import Sidebar from "./layout/Sidebar";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import { useState } from "react";
import { MODE, ROUTE } from "./const/index";
import Layout from "./demo-counter-context/layout/LayoutCount";
import {
  CounterContext,
  CounterProvider,
} from "./demo-counter-context/context";
import DetailTaskForm from "./Shared/DetailtTaskForm";
import { LayoutInput } from "./demo-counter-context/BaiTapContext/layout/LayoutInput";
import {
  InputContext,
  InputProider,
} from "./demo-counter-context/BaiTapContext/context";

function App() {
  const [renderMode, setRenderMode] = useState(MODE.SHOW_LIST);
  const handleChangeRenderMode = (mode = MODE.ADD_NEW) => {
    setRenderMode(mode);
  };
  return (
    <InputProider>
      <LayoutInput />
    </InputProider>

    // <CounterProvider>
    //   <Layout/>
    // </CounterProvider>

    // <div className="layout">
    //   <Routes>
    //     <Route
    //       path={ROUTE.NOT_FOUND}
    //       element={
    //         <Link
    //           to={ROUTE.ALL}
    //           style={{
    //             display: "block",
    //             margin: "30% auto",
    //             fontSize: 60,
    //             fontWeight: "bold",
    //             width: 475,
    //           }}
    //         >
    //           404 NOT FOUND
    //         </Link>
    //       }
    //     />

    //       <Route
    //         path={ROUTE.ALL} element ={<Home />}
    //       />
    //   </Routes>





      // {/* <Header
      //   handleCreatorNewTask={() => handleChangeRenderMode(MODE.ADD_NEW)}
      // />
      // <Sidebar />
      // <Body
      // mode={renderMode}
      // handleChangeRenderMode={handleChangeRenderMode} />
      // {renderMode === MODE.SHOW_LIST && <Footer/>} */}
    // </div>
  );
}

export default App;
