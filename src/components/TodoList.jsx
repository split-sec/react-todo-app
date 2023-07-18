import { useContext } from "react";
import { UserContext } from "../../context/UserInfoProvider";
import styles from "../Home.module.scss";

export default function TodoList({
  toggleEdit,
  deleteTodo
}) {
  const value = useContext(UserContext);
  const { todos } = value;

  return (
    <div className={styles.todosContainer}>
    {
      todos?.map((todo, index) => {
        return (
          <div
            className={styles.todoList}
            key={index}
          >
            <p className={styles.todoContent}>{todo.content}</p>
            <div className={styles.buttonContainer}>
              <button
                onClick={() => toggleEdit(todo.id)}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )
      })
    }
    </div>
  )
}