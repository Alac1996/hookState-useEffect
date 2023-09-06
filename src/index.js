import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// step-1 รู้ว่า user กดปุ่มไหน ?

function App() {
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log("Effect Hook");
  });

  return (
    <div>
      <h1>useEffect</h1>
      <div className="button_group">
        <button onClick={() => setCategory("posts")}>posts</button>
        <button onClick={() => setCategory("photos")}>photos</button>
        <button onClick={() => setCategory("todo")}>todo</button>
        <button onClick={() => setCategory("users")}>users</button>
      </div>

      <ul className="lists">
        <li className="list_item">item-1</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
