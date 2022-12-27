import { useEffect, useState } from "react";
import TodoItem from "../components/todo-item/TodoItem";
import { MODE, STATUS } from "../const/index";
import { TodoList } from "../const/index";
import { localStoregeUlti } from "../functions/localStorage";
import DetailTaskForm from "../Shared/DetailtTaskForm";
import AddNewForm from "../Shared/Form";

const { get, set } = localStoregeUlti("todoItem", []);

const Body = ({ mode, handleChangeRenderMode }) => {
  // const {NEW,DOING,DONE} = STATUS;
  const [todoItems, setTodoItems] = useState([]);
  const [filterText, setFilterText] = useState([]);
  const [indexCurrentTask, setIndexCurrentTask] = useState(null);
  const [currentTask, setCurrentTask] = useState({
    title: "",
    creator: "",
    description: "",
    status: STATUS.NEW,
  });

  useEffect(() => {
    setTodoItems(get());
  }, []);
  useEffect(() => {
    const keyword = window.location.search.slice(9);
    setFilterText(keyword);
  });
  const handleShowDetailTask = (item, index) => {
    setCurrentTask(item);
    setIndexCurrentTask(index);
    handleChangeRenderMode(MODE.DETALL_TASK);
  };
  const renderTodoItem = () => {
    return todoItems
      .filter((item) => item.title.includes(filterText))
      .map((item, index) => (
        <TodoItem
          key={`${item.title}${index}`}
          title={item.title}
          creator={item.creator}
          status={item.status}
          description={item.description}
          handleClick={() => handleShowDetailTask(item, index)}
        />
      ));
  };
  const handleChangeTask = (e, item) => {
    e.preventDefault();
    const todoItemsLocalStorage = get();
    if (item) {
      todoItemsLocalStorage.splice(indexCurrentTask, 1, item);
    } else {
      todoItemsLocalStorage.splice(indexCurrentTask, 1);
    }
    setTodoItems([...todoItemsLocalStorage]);
    set([...todoItemsLocalStorage]);
    handleChangeRenderMode(MODE.SHOW_LIST);
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
              setTodoItems([data,...todoItems]);
              set([data,...todoItems]);
              handleChangeRenderMode(MODE.SHOW_LIST)
            }}
          />
        );
      case MODE.DETALL_TASK:
        return (
          <DetailTaskForm
            currentTask={currentTask}
            handleChangeTask={handleChangeTask}
          />
        );
      default:
        return renderTodoItem();
    }
  };
  return <div className="containerBody">{chooseMode()}</div>;
};
export default Body;
