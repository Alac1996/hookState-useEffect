import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// step-1 : เก็บ Input จาก User => React State
// step-2 : handle จังหวะ submit
// step-3 Make HTTP Request => Get Data
// step-4 เอา Data มาแสดงผล (เก็บเป็น React State)

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDRhZDg0YTEzODRkMDRjNGY0YWVlMzZmNGE5YjE0OCIsInN1YiI6IjVlZWUwOTAwYjA0NjA1MDAzNDBlOTg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7gQK0dgqOvsQmsHsgtOmsqKVFmnb1urXF3q9AkqyCE";

function App() {
  const [keyword, setKeyword] = useState("");
  const [movieLists, setMovieLists] = useState([]);
  const [totalPage, setTotalPage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    let url = `${BASE_URL}/search/keyword?query=${keyword}&page=1`;
    let option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    try {
      const response = await fetch(url, option);
      const data = await response.json();
      setMovieLists(data.results);
      setTotalPage(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {/* {header} */}
      <div className="header">
        <h1>Movie Search</h1>
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

      <div>
        {Array.from(Array(totalPage).keys()).map((n) => (
          <button>{n + 1}</button>
        ))}
      </div>

      {/* {Result} */}
      <div className="movie-lists">
        {movieLists.map((movie) => (
          <div key={movie.id} className="movie">
            {movie.name}
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
