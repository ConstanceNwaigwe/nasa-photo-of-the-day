import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [photos, setPhotos] = useState([]);
  const [currentPhotosId, setCurrentPhotosId] = useState(null);

  useEffect(() => {
    
    const apiUrl = "https://api.nasa.gov/planetary/apod";
    axios
    .get(apiUrl)
    .then((response) => {
      setPhotos(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
