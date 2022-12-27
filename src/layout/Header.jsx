import { useState } from "react";

function Header({handleCreatorNewTask}) {
  const [keyword,setKeyword]=useState('')
  const handleSearchClick = ()=>{
    window.location.search = `?keyword=${keyword.trim()}`
    setKeyword('');
  }
  return (
    <div className="containerHeader">
      <div className="containerHeader__left">
        <button onClick={handleCreatorNewTask}>Create New Task</button>
      </div>
      <div className="containerHeader__right">
        <input type="text" placeholder="Type something to search" onChange={(e)=>setKeyword(e.target.value) } value = {keyword}/>
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
}
export default Header;
