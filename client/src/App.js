import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/hello");
      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>React + Node.js POC</h1>

      <button onClick={callBackend}>
        Call Backend
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;