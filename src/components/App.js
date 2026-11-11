
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
     <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
