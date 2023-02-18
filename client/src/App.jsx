import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("/");
      const data = await response.json();
      setMessage(data);
    })();
  }, []);

  return <div>{message ?? "-"}</div>;
};

export default App;
