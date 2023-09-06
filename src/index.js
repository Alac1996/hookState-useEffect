import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// step-1 : เก็บ Input จาก User => React State
// step-2 : handle จังหวะ submit

function App() {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="App">
      {/* {header} */}
      <div className="header">
        <h1>Movie App</h1>
      </div>

      {/* {Input} */}
      <form className="Search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="keyword ?"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* {Result} */}
      <div className="movie-lists">
        <div className="movie">Movie-1</div>
        <div className="movie">Movie-2</div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
