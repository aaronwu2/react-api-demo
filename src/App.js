  import { useEffect, useState } from "react";
                      //import React, { useState, useEffect} from React;
import Axios from "axios";


function App() {
  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data);
      setCatFact(res.data.fact);
    });
  }, []);
  return (
    <div>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
