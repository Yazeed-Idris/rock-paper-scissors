import {Header} from "./components/Header";
import { useState } from "react";
import {MovesContainer} from "./components/MovesContainer.jsx";



function App() {

    const [score, setScore] = useState(0);

  return (
    <div className="App h-full">
        <Header score={score}/>
        <MovesContainer/>
    </div>
  )
}



export default App
