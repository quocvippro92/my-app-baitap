import Body from "../../../layout/Body";
import BodyContext from "../Body/Body";
import Header from "../header/Header";
import "./layout.scss"

export const LayoutInput = () => {
  return (
  
    <div className="styleLayout">
          <Header />
          <BodyContext/>
    </div>
    
  );
};
