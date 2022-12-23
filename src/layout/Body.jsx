import { useState } from "react";
import TodoItem from "../components/todo-item/TodoItem";
import { MODE, STATUS } from "../const/index";
import { TodoList } from "../const/index";
import { localStoregeUlti } from "../functions/localStorage";
import AddNewForm from "../Shared/Form";

const {get,set} = localStoregeUlti('todoItem',[]);

const Body = ({ mode, handleChangeRenderMode }) => {
  // const {NEW,DOING,DONE} = STATUS;
  const [todoItems, setTodoItems] = useState([]);

  const renderTodoItem = () => {
    return todoItems.map((item, index) => (
      <TodoItem
        key={`${item.title}${index}`}
        title={item.title}
        creator={item.creator}
        status={item.status}
        description={item.description}
      />
    ));
  };

  const chooseMode = () => {
    switch (mode) {
      case MODE.SHOW_LIST:
        return renderTodoItem();
      case MODE.ADD_NEW:
        return (
          <AddNewForm
            handleSubmit={(e) => {
              e.preventDefault();
              const data = {
                title: e.target[0].value,
                creator: e.target[1].value,
                description: e.target[2].value,
                status: STATUS.NEW,
              };
              const todoItemLocalStorage = get ();
              setTodoItems([data, ...todoItemLocalStorage]);
              set([data,...todoItemLocalStorage])
              handleChangeRenderMode(MODE.SHOW_LIST);
            }}
          />
        );
      default:
        return renderTodoItem();
    }
  };
  return <div className="containerBody">{chooseMode()}</div>;
};
export default Body;
