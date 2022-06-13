import "./App.css";
import React, { useState } from "react";
import Bgcolor from "./bgcolor";
import Faqpage from "./faqpage";
import Loginpage from "./loginpage";
import Counter from "./counter";
import Movie from "./movie";

function App() {
  const [num, setnum] = useState();
  const displayExcercise = (num) => {
    setnum(num);
  };
  return (
    <div className="App">
      <button onClick={() => displayExcercise(1)}>Exercise 1</button>
      <button onClick={() => displayExcercise(2)}>Exercise 2</button>
      <button onClick={() => displayExcercise(3)}>Exercise 3</button>
      <button onClick={() => displayExcercise(4)}>Exercise 4</button>
      <button onClick={() => displayExcercise(5)}>Exercise 5</button>
      <button onClick={() => displayExcercise(6)}>Exercise 6</button>
      <button onClick={() => displayExcercise(7)}>Exercise 7</button>
      <div>
        {num === 1 && <Bgcolor />}
        {num === 2 && <Faqpage />}
        {num === 3 && <Loginpage />}
        {num === 4 && <Counter />}
        {num === 5 && <Movie />}
      </div>
    </div>
  );
}

export default App;
