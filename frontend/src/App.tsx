import React, { useState, useEffect } from "react";
import Animation from "./components/Animation";


function App() {
  const [lightPosition, setLightPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the light position from 0% to 100%
      setLightPosition((prevPosition) =>
        prevPosition === 100 ? 0 : prevPosition + 1
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Animation />
    </div>
  );
}

export default App;
