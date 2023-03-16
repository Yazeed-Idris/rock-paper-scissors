import {Header} from "./components/Header";
import {Moves} from "./components/Moves";
import { useState } from "react";
import { MatchContainer } from "./components/MatchContainer";

function App() {


  const [houseMove, setHouseMove] = useState(null)
  const [move, setPlayerMove] = useState(null);
  const [score, setScore] = useState(0);
  const [matchResult, setMatchResult] = useState(0)

    function chooseMove(playerMove) {
        // playerHistory should be used to make better decisions
        const randChoice = Math.floor(Math.random() * 2)
        
        let houseMoveC = null;
        if (randChoice === 0) {
            setHouseMove('rock');
            houseMoveC = 'rock';
        } else if (randChoice === 1) {
            setHouseMove('paper');
            houseMoveC = 'paper';
        } else {
            setHouseMove('scissors');
            houseMoveC = 'scissors';
        }

        let result = 0;
    if (playerMove !== houseMoveC) {
        if (playerMove === 'paper' && houseMoveC === 'rock') {
            result = 1;
        } else {
            result = -1;
        }

        if (playerMove === 'rock' && houseMoveC === 'paper') {
            result = -1;
        } else {
            result = 1;
        }

        if (playerMove === 'scissors' && houseMoveC === 'paper') {
            result = 1;
        } else {
            result = -1
        }
        console.log('player move:', playerMove, 'house move:', houseMoveC)
        setMatchResult(result);
        scoreHandler(result);
    }
  }
  async function moveHandler(playerMove) {
    chooseMove(playerMove);
    setPlayerMove(playerMove);

    

  }

  function scoreHandler(result) {
    if (score <= 0 && result < 0) return;
      setScore(score + result);
    
  }

  return (
    <div className="App h-full">
       <Header score={score} />
       {!move? 
       <Moves moveHandler={moveHandler} />
       : 
       <MatchContainer matchResult={matchResult} scoreHandler={scoreHandler} houseMove={houseMove} playerMove={move}/>
       }
        
    </div>
  )
}



export default App
