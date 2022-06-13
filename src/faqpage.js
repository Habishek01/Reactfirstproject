import React, { useState } from "react";
import "./faq.css";

function Faqpage() {
  const [visible, setVisible] = useState();

  const showone = () => setVisible("one");
  const showtwo = () => setVisible("two");
  const showthree = () => setVisible("three");

  return (
    <div className="App">
      <div className="question">
        What is a faq page?
        <button onClick={showone}>+</button>
      </div>
      {visible === "one" && (
        <div className="answer">
          A faq page is a page for questions and answers asked frequently.
        </div>
      )}

      <div className="question">
        What is a faq page?
        <button onClick={showtwo}>+</button>
      </div>
      {visible === "two" && (
        <div className="answer">
          A faq page is a page for questions and answers asked frequently.
        </div>
      )}

      <div className="question">
        What is a faq page?
        <button onClick={showthree}>+</button>
      </div>
      {visible === "three" && (
        <div className="answer">
          A faq page is a page for questions and answers asked frequently.
        </div>
      )}
    </div>
  );
}

export default Faqpage;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   // const [reviews, addReviews] = useState([""]);
//   const [show, setShow] = useState({
//     one: false,
//     two: false,
//     three: false,
//   });

//   console.log(show);

//   // const showAnswer = () => {};

//   return (
//     <div className="App">
//       <div className="question">
//         What is a faq page?
//         <button
//           onClick={() => setShow({ one: !show.one, two: false, three: false })}
//         >
//           +
//         </button>
//       </div>
//       {show.one && (
//         <div className="answer">
//           A faq page is a page for questions and answers asked frequently.
//         </div>
//       )}
//       <div className="question">
//         What is a faq page?
//         <button
//           onClick={() => setShow({ one: false, two: !show.two, three: false })}
//         >
//           +
//         </button>
//       </div>
//       {show.two && (
//         <div className="answer">
//           A faq page is a page for questions and answers asked frequently.
//         </div>
//       )}
//       <div className="question">
//         What is a faq page?
//         <button
//           onClick={() =>
//             setShow({ one: false, two: false, three: !show.three })
//           }
//         >
//           +
//         </button>
//       </div>
//       {show.three && (
//         <div className="answer">
//           A faq page is a page for questions and answers asked frequently.
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
