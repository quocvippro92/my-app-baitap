import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ListTodoItem from "../components/ListTodoItem";
import { ITEM_PER_PAGE, LIST_TO_DO_KEY, STATUS } from "../const";
import { localStoregeUlti } from "../functions/localStorage";
import usePagination from "../hooks/usePagination";
import Footer from "../layout/Footer";

const { get } = localStoregeUlti(LIST_TO_DO_KEY, []);

const Doing = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [searchParams] = useSearchParams();
  const { jumpPage, currentData, currentPage, maxPage } = usePagination(
    todoItems,
    ITEM_PER_PAGE
  );

  useEffect(() => {
    const listTodo = get().filter(
      (item) =>
        item.status === STATUS.DOING &&
        item.title.toLowerCase().includes(searchParams.get("keyword") || "")
    );
    setTodoItems(listTodo);
  }, [searchParams]);

  return (
    <>
      <ListTodoItem todoItems={currentData} />
      {maxPage > 1 && (
        <Footer
          currentPage={currentPage}
          jumpPage={jumpPage}
          maxPage={maxPage}
        />
      )}
    </>
  );
};
export default Doing;
