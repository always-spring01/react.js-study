
import Btn from "./Btn.js";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.Title}>
        Welcome Back!
      </h1>
      <Btn text={123}/>
    </div>
  );
}

export default App;
