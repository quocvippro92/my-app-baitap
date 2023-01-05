import { Link } from "react-router-dom";
import "./side-bar.scss";
export function SideBar() {
  return (
    <div className="side_bar">
      <div>
        <h1>SIDE-BAR</h1> 
      </div>
        <Link to={"/page-a"}> <h1>Page A</h1> </Link>
        <Link to={"/page-b"}> <h1>Page B</h1> </Link>    
        <Link to={"/page-c"}> <h1>Page C</h1> </Link>
          
    </div>
  );
}
