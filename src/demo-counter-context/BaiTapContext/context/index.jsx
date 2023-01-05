import { createContext, useEffect, useState } from "react";
import { localStoregeUlti } from "../../../functions/localStorage";

const { get, set } = localStoregeUlti("todoInput", []);
export const InputContext = createContext();  

export const InputProider = (props) => {
  const [keyword, setKeyword] = useState("");
  const [todoItem, setTodoItem] = useState([]);

  useEffect(() => {
    setTodoItem(get());
  }, []);

  const counterContextValue = {
    todoItem: todoItem,
    keyword: keyword,
    handleTargetVlaue:(e)=>{
        setKeyword(e.target.value)
    },
    handleSubmit: () => {
      if(keyword === ""){
        alert("vui long nhap ")
      }else{
        setTodoItem((prev) => {
          const newJob = [keyword,...prev];
          set(newJob);
          return newJob;
        });
      }
      setKeyword("");
    },
  };
  
  return (
    <InputContext.Provider value={counterContextValue}>
      {props.children}
    </InputContext.Provider>
  );
};
