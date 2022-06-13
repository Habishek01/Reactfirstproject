// import React, { useState } from "react";
// import "./App.css";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bgcolor: "",
//     };
//   }
//   colorchange = (e) => {
//     this.setState({ bgcolor: "red" });
//   };
//   render() {
//     return (
//       <div
//         className="App"
//         style={{ backgroundColor: this.state.bgcolor }}
//         type="button"
//         id="button"
//       >
//         <h1>
//           Background color: <span id="color">Color</span>
//         </h1>
//         <div id="button">
//           <button onClick={this.colorchange}>Click me</button>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function Bgcolor() {
  const [isBackgroundRed, setIsBackgroundRed] = useState(false);

  const colorchange = () => {
    setIsBackgroundRed(!isBackgroundRed);
  };

  console.log(isBackgroundRed);

  return (
    <div
      style={{
        backgroundColor: isBackgroundRed ? "red" : "blue",
      }}
    >
      <div>backgroundColor</div>
      <button onClick={colorchange}>click here</button>
    </div>
  );
}

// ReactDOM.render(<bgcolor />, document.getElementById("root"));
