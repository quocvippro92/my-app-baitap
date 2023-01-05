import "./App.css";
import "./index.scss";
import "./styles/style.scss";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Home from "./screens/Home";
import EditAddNew from "./screens/EditAddNew";
import New from "./screens/New";
import Doing from "./screens/Doing";
import Done from "./screens/Done";
import All from "./screens/All";
import { ALERT, ROUTE } from "./const";
import { InputProider } from "./demo-counter-context/BaiTapContext/context";
import { LayoutInput } from "./demo-counter-context/BaiTapContext/layout/LayoutInput";
import { ReactRouterDemoApp } from "./react-router/ReactRouterDemoApp";
import HttpRequestDemo from "./http-request-demo/HttpRequestDemo";
import Alert from "./components/Alert";
import ContentRedux from "./redux-demo/ui/content/ContentRedux";
import {Provider} from "react-redux";
import {  rootStored} from "../src/baitap-redux/store/storeBaiTapRedux"
import BodyBaiTapRedux from "./baitap-redux/ui/body/bodyBaiTapRedux";
import {rootStore} from "../src/redux-demo/store/index"

function App() {
  return (
    <Provider store = {rootStored} >
       <BodyBaiTapRedux/>
   </Provider>
    

    // REDUX
    // <Provider store = {rootStore} >
    //   <ContentRedux/>
    // </Provider>
    
    // <HttpRequestDemo/>

    // <BrowserRouter>
    //   <ReactRouterDemoApp/>
    // </BrowserRouter>
    

    // <InputProider>
    //   <LayoutInput />
    // </InputProider>

    // <CounterProvider>
    //   <Layout/>
    // </CounterProvider>

  //   <div className="layout">
  //     <Routes>
  //       <Route
  //         path={ROUTE.NOT_FOUND}
  //         element={
  //           <Link
  //             to={ROUTE.ALL}
  //             style={{
  //               display: "block",
  //               margin: "30% auto",
  //               fontSize: 60,
  //               fontWeight: "bold",
  //               width: 475,
  //             }}
  //           >
  //             404 NOT FOUND
  //           </Link>
  //         }
  //       />
  //       <Route path={ROUTE.ALL} element={<Home />}>
  //         <Route path={ROUTE.ADD_NEW} element={<EditAddNew />} />
  //         <Route path={ROUTE.NEW} element={<New />} />
  //         <Route path={ROUTE.DOING} element={<Doing />} />
  //         <Route path={ROUTE.DONE} element={<Done />} />
  //         <Route path={ROUTE.DETAIL} element={<EditAddNew isEditTask />}>
  //           <Route
  //             path={ROUTE.DETAIL_TASK}
  //             element={<EditAddNew isEditTask />}
  //           />
  //           <Route index element={<div>không có</div>} />
  //         </Route>
  //         <Route index element={<All />} />
  //       </Route>
  //     </Routes>
  //     <Alert/>
  //   </div>
  );
}

export default App;
