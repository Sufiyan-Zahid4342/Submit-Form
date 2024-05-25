import { FaRegTrashCan } from "react-icons/fa6";
import Button from "./Button";
import { AiOutlineLoading } from "react-icons/ai";

const List = (props) => {
  const { todos, markAsComplete, deleteTodo, delete_loading } = props;

  let currentIndex = -1;
  console.log({ delete_loading, currentIndex });
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>{todo.title}</p>

            <p style={{ flexShrink: 0 }}>
              {todo.completed == false ? (
                <Button
                  onClick={() => {
                    markAsComplete(index);
                  }}
                >
                  Pending
                </Button>
              ) : (
                <span style={{ color: "green" }}>Completed</span>
              )}
              <Button
                bgcolor="red"
                style={{ marginLeft: 12, borderRadius: 50 }}
                onClick={() => {
                  currentIndex = index;
                  deleteTodo(index);
                }}
              >
                {delete_loading && currentIndex === index ? (
                  <AiOutlineLoading />
                ) : (
                  <FaRegTrashCan />
                )}
              </Button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
