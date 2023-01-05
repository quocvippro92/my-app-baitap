import { useEffect, useState } from "react";
import axios from "axios";

function HttpRequestDemo() {
    // cách hiển thị khi lấy dữ liệu từ thằng clear vs thèn server
    const [todoList,setTodoList] = useState([])
  // npm i --save axios
  useEffect(() => {
    axios
      .get("http://localhost:3000/todo-item")
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>
    {todoList.map((item)=>(
        <h1>{item.description}</h1>
    ))}
  </div>;
}

export default HttpRequestDemo;
