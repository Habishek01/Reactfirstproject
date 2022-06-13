import React, { useState, useRef } from "react";

function Movie() {
  const [movies, setMovies] = useState(["aaa", "bbb", "ccc"]);
  const inputRef = useRef();
  const addItems = () => {
    let newMovie = inputRef.current.value;
    const updatedMovies = movies.concat(newMovie);
    setMovies(updatedMovies);
    inputRef.current.value = "";
  };
  const deleteItems = (index) => {
    movies.splice(index, 1);
    console.log(index);
    setMovies([...movies]);
    console.log(movies);
  };

  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            {movie}
            <button onClick={() => deleteItems(index)}>Delete</button>
          </div>
        );
      })}
      <input placeholder="add items" ref={inputRef}></input>
      <button onClick={addItems}>submit</button>
    </div>
  );
}
export default Movie;
