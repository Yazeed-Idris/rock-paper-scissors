import {Header} from "./components/Header";
import {Moves} from "./components/Moves";
import { useState } from "react";
import { MatchContainer } from "./components/MatchContainer";

function App() {

  const [move, setPlayerMove] = useState(null);

  function moveHandler(playerMove) {
    console.log('you chose:', playerMove)
    setPlayerMove(playerMove)
  }

  return (
    <div className="App h-full">
       <Header score={12} />
       {!move? 
       <Moves moveHandler={moveHandler} />
       : 
       <MatchContainer playerMove={move}/>
       }
        
    </div>
  )
}



export default App
