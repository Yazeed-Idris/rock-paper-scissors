import {Header} from "./components/Header";
import {useState} from "react";
import {MovesContainer} from "./components/MovesContainer.jsx";
import {RulesButton} from "./components/RulesButton.jsx";
import {MatchContainer} from "./components/MatchContainer";


function App() {

    const [score, setScore] = useState(0);
    const [moveClicked, setMoveClicked] = useState(false);
    const [playerMove, setPlayerMove] = useState(null)
    const [houseMove, setHouseMove] = useState(null)
    const [matchResult, setMatchResult] = useState(0)

    function moveClickedHandler(move) {
        setMoveClicked(true);
        setPlayerMove(move);
        const randomNum = Math.floor(Math.random() * 3);
        let randomHouseMove = randomNum === 0 ? 'paper' : randomNum === 1 ? 'rock' : 'scissors'
        setHouseMove(randomHouseMove);
        let point = calculateResult(move, randomHouseMove);
        if (score + point >= 0) {

            setScore(score + point);
        }

    }

    function calculateResult(userPick, housePick) {
        if (userPick === housePick) {
            setMatchResult(0);
            return 0;
        }
        if ((userPick === 'paper' && housePick === 'rock') || (userPick === 'rock' && housePick === 'scissors') || (userPick === 'scissors' && housePick === 'paper')) {
            setMatchResult(1);
            return 1;
        }
        setMatchResult(-1);
        return -1;
    }

    function handlePlayAgain() {
        setMoveClicked(false)
        setPlayerMove(null)
        setHouseMove(null)
    }

    return (
        <div className='App flex flex-col justify-between h-full items-center overflow-hidden'>
            <div className="flex flex-col items-center container">
                <div className='mt-12 w-full mb-20 grid place-items-center'>
                    <Header score={score}/>
                </div>
                <div className='flex w-full'>
                    <div
                        className={`${!moveClicked ? 'translate-x-0' : 'translate-x-[-100vw] '} transition-all duration-300`}>

                        {!moveClicked ? <MovesContainer moveClickedHandler={moveClickedHandler}/> : ''}
                    </div>
                    <div
                        className={`${!moveClicked ? 'translate-x-[100vw]  invisible h-0 w-0' : 'translate-x-[0]'} w-full transition-transform duration-700 container w-full`}>
                        <MatchContainer userPick={playerMove}
                                        housePick={houseMove}
                                        setScore={setScore}
                                        matchResult={matchResult}
                                        handlePlayAgain={handlePlayAgain}
                        />
                    </div>
                </div>
            </div>
            <div className='mb-12 w-full lg:mr-24'>
                <div className='w-full flex justify-center lg:justify-end '>
                    <RulesButton/>
                </div>
            </div>
        </div>

    )
}


export default App
