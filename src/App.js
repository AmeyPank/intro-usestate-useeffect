import React, { useEffect, useState } from "react";
import "./App.css"
function App() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  function Count1() {
    setCounter1(() => counter1 + 1)
  }
  function Count2() {
    setCounter2(() => counter2 + 1)
  }



  useEffect(() => {
    console.log("Inside useEffect")
  }, [counter1,counter2])


  return (
    <div className="App">
      <button onClick={Count1}>Click 1 </button>
      <p>{counter1}</p>
      <button onClick={Count2}>Click 2 </button>
      <p>{counter2}</p>
    </div>
  );
}

export default App;
