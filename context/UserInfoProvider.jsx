import { createContext, useState } from "react";

export const UserContext = createContext({
  userName: "",
  setUserName: () => {},
  todos: [],
  setTodos: () => {}
});

export default function UserInfoProvider({children}) {
  const [userName, setUserName] = useState("");
  const [todos, setTodos] = useState([]);

  const values = {
    userName,
    setUserName,
    todos,
    setTodos
  }

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}