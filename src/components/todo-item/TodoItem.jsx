import { Link } from "react-router-dom";
import { ROUTE } from "../../const";

function TodoItem({
  title,
  creator,
  status,
  description,
  handleClick,
  idTask,
}) {
  return (
    <div
      className="containerItem"
      to={`${ROUTE.DETAIL}/${idTask}`}
      style={{ cursor: "pointer" }}
    >
      <Link to={`${ROUTE.DETAIL}/${idTask}`}>
        <p className="containerItem__title">Title:{title}</p>
        <p className="containerItem__creator">Creator:{creator}</p>
        <p
          className={`containerItem__status containerItem__status--${status?.toLowerCase()}`}
        >
          
          Status:{status}
        </p>
        <hr className="containerItem__linkBreak" />
        <div className="containerItem__description">
          <p>Description:</p>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default TodoItem;
