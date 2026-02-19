import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext.jsx";
import "./App.css";

function App() {
  const { user, setUser } = useContext(GlobalContext);

  return (
    <div className="card">
      <h1>Hello {user}</h1>

      <button onClick={() => setUser("Student")}>
        Change Name
      </button>
    </div>
  );
}

export default App;
