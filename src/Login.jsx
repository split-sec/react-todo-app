import { useContext } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserInfoProvider";

export default function Login() {
  const value = useContext(UserContext);
  const {userName, setUserName} = value;

  const navigate = useNavigate();

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form>
          <input
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={styles.input}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if(userName.trim().length > 0) {
                navigate("/home");
              } else {
                setUserName("");
              }
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}