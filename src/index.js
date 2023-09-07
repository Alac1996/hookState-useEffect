import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// step-1 : รู้ว่า user กดปุ่มไหน ?
// step-2 : Make HTTP Request, after setState

function App() {
  const [category, setCategory] = useState("not-selected");
  const [count, setCount] = useState(0);

  // DEFINE
  // url : http://jsonplaceholder.typicode.com/<categories>
  async function fetchLists() {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    try {
      let response = await fetch(`${BASE_URL}/${category}`, { method: "GET" });
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Syntax : useEffect(setUp,dependenciesArray)

  //#### 1 every render, rerender
  // When useEffect work
  // After first Render
  // useEffect(() => {
  //   console.log("## 1 Effect Hook - Every render,rerender");
  // });

  useEffect(() => {
    console.log("Effect Run");
  });

  // ### 2 After firstRender
  useEffect(() => {
    console.log("Effect Run");
  }, []);

  //  #### 3 : firstRender , Rerender with category change
  useEffect(() => {
    console.log("## 2 Effect Hook - Category - MAKE HTTP with", category);
    if (category !== "") fetchLists();
  }, [category]);

  useEffect(() => {
    console.log("## 3 Effect Hook - Count");
  }, [count]);

  useEffect(() => {
    console.log("### 4: Effect Hook - All");
  }, [count, category]);

  console.log("render,rerender");

  return (
    <div>
      <h1>useEffect : {category || "not-select"}</h1>
      <div className="button_group">
        <button onClick={() => setCategory("posts")}>posts</button>
        <button onClick={() => setCategory("photos")}>photos</button>
        <button onClick={() => setCategory("todo")}>todo</button>
        <button onClick={() => setCategory("users")}>users</button>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <div>{count}</div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>

      <ul className="lists">
        <li className="list_item">item-1</li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
