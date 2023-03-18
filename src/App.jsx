import {Header} from "./components/Header";
import { useState } from "react";
import {PaperMoveBadge} from "./components/PaperMoveBadge.jsx";

function App() {

    const [score, setScore] = useState(0);

  return (
    <div className="App h-full">
       <Header score={score} />
        <div className='flex items-center'>
            <PaperMoveBadge move={'paper'}/>
            <PaperMoveBadge move={'scissors'}/></div>

    </div>
  )
}



export default App
