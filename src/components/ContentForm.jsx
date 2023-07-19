import { useContext, useEffect, useState } from "react";
import styles from "../Home.module.scss";
import { UserContext } from "../../context/UserInfoProvider";

export default function ContentForm({
  editTodoId,
  editTodoContent,
  setEditTodoId,
  setEditTodoContent
}) {
  const [newTodoContent, setNewTodoContent] = useState("");

  const value = useContext(UserContext);
  const { todos, setTodos } = value;

  function addNewTodo() {
    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1]?.id + 1 || todos.length,
        content: newTodoContent
      }
    ]);
    setNewTodoContent("");
  }

  function editTodo() {
    let arrayIndex;
    let copyTodos = [...todos]
    copyTodos.forEach((todo, index) => {
      if(todo.id === editTodoId) {
        arrayIndex = index;
      }
    });

    copyTodos.splice(arrayIndex, 1, {
      id: editTodoId,
      content: editTodoContent
    });

    setTodos([
      ...copyTodos
    ]);

    setEditTodoId(null);
    setEditTodoContent("");
  }

  return (
    <form>
      <input
        placeholder="Text goes here..."
        value={typeof editTodoId === "number" ? editTodoContent : newTodoContent}
        className={styles.input}
        onChange={typeof editTodoId === "number" ? 
          (e) => setEditTodoContent(e.target.value) :
          (e) => setNewTodoContent(e.target.value)
        }
      />
      <button
      className={typeof editTodoId === "number" ? 
          styles.editButton : styles.addButton}
        onClick={typeof editTodoId === "number" ? (e) => {
          e.preventDefault();
          if(editTodoContent.trim().length > 0) {
            editTodo();
          } else {
            setEditTodoContent("");
            setEditTodoId(null);
          }
        } : (e) => {
          e.preventDefault();
          if(newTodoContent.trim().length > 0) {
            addNewTodo();
          } else {
            setNewTodoContent("");
          }
        }}
      >
        {typeof editTodoId === "number" ? "Edit Todo" : "Add Todo"}
      </button>
    </form>
  )
}