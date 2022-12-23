import "./App.css";
import "./index.scss";
import "./styles/style.scss";
import Header from "./layout/Header.jsx";
import Sidebar from "./layout/Sidebar";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import { useState } from "react";
import { MODE } from "./const/index";
import Layout from "./demo-counter-context/layout/LayoutCount";
import { CounterContext, CounterProvider } from "./demo-counter-context/context";

function App() {
  const [renderMode, setRenderMode] = useState(MODE.SHOW_LIST);
  const handleChangeRenderMode = (mode) => {
    setRenderMode(mode);
  };
  return (
    // <CounterProvider>
    //   <Layout/>
    // </CounterProvider>

    
    <div className="layout">
      <Header
        handleCreatorNewTask={() => handleChangeRenderMode(MODE.ADD_NEW)}
      />
      <Sidebar />
      <Body 
      mode={renderMode} 
      handleChangeRenderMode={handleChangeRenderMode} />
      {renderMode === MODE.SHOW_LIST && <Footer/>}
    </div>
  );
}

export default App;
