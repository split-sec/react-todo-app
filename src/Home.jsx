import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { UserContext } from "../context/UserInfoProvider";
import TodoList from "./components/TodoList";
import ContentForm from "./components/ContentForm";

export default function Home() {
  const value = useContext(UserContext);
  const { userName, todos, setTodos } = value;
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoContent, setEditTodoContent] = useState("");

  useEffect(() => {
    console.log("$", editTodoId);
  }, [editTodoId])

  function toggleEdit(id) {
    setEditTodoId(id);
    setEditTodoContent(todos.filter(todo => todo.id === id)[0].content);
  }

  function deleteTodo(id) {
    const result = todos.filter(todo => todo.id !== id);
    console.log([...result]);
    setTodos([
      ...result
    ]);
  }

  if(!userName.length > 0) return (<Navigate to="/" />)

  return (
    <div className={styles.container}>
      <p className={styles.topSection}>Hello {userName}</p>

      <div className={styles.addTodoContainer}>
        <ContentForm 
          editTodoId={editTodoId}
          editTodoContent={editTodoContent}
          setEditTodoId={setEditTodoId}
          setEditTodoContent={setEditTodoContent}
        />
      </div>

      <TodoList 
        toggleEdit={toggleEdit}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}