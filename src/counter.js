import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    console.log("inside");
    console.log(count);
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(count * 0);
  };

  return (
    <div>
      <div className="App">
        <h1>Counter</h1>
        <span id="number">{count}</span>
      </div>
      <div className="content">
        <button onClick={Decrement}>Decrease</button>
        <button onClick={Increment}>Increase</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;

//HELLO WORLD INSIDE A DIV
// function App() {
//   return (
//     <div>
//       <div className="box">
//         <span className="iBox">Hello World!</span>
//       </div>
//     </div>
//   );
// }
// export default App;
