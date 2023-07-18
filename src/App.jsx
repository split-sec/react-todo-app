import { createContext, useState } from "react"
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import UserInfoProvider from "../context/UserInfoProvider"

function App() {
  return (
    <>
      <UserInfoProvider>
        <Router>
          <Routes>
            <Route
              element={<Login />}
              path="/"
            />
            <Route
              element={<Home />}
              path="/home"
            />
          </Routes>
        </Router>
      </UserInfoProvider>
    </>
  )
}

export default App
