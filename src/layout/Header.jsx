import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ROUTE } from "../const";

function Header({handleCreatorNewTask}) {
  const [keyword,setKeyword]=useState('')
  const [searchParams,setSearchParams] = useSearchParams()
  const handleSearchClick = ()=>{
    searchParams.set("keyword",keyword.trim().toLowerCase())
    setSearchParams(searchParams);
    setKeyword('');
  }
  return (
    <div className="containerHeader">
      <div className="containerHeader__left">
        <button onClick={handleCreatorNewTask}>
          <Link to={ROUTE.ADD_NEW} style ={{color:"white"}}>
          Create New Task
          </Link>
          </button>
      </div>
      <div className="containerHeader__right">
        <input type="text" placeholder="Type something to search" onChange={(e)=>setKeyword(e.target.value) } value = {keyword}/>
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
}
export default Header;
