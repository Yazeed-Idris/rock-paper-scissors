import {Header} from "./components/Header";
import {useState} from "react";
import {MovesContainer} from "./components/MovesContainer.jsx";
import {RulesButton} from "./components/RulesButton.jsx";
import {MatchContainer} from "./components/MatchContainer";
import {MoveBadge} from "./components/MoveBadge";


function App() {

    const [score, setScore] = useState(0);
    const [moveClicked, setMoveClicked] = useState(false);
    const [playerMove, setPlayerMove] = useState(null)
    const [houseMove, setHouseMove] = useState(null)

    function moveClickedHandler(move) {
        setMoveClicked(true);
        setPlayerMove(move);
        const randomNum = Math.floor(Math.random() * 3);
        randomNum === 0 ? setHouseMove('paper') : randomNum === 1 ? setHouseMove('rock') : setHouseMove('scissors');
    }

    return (
        <div className='App flex flex-col justify-between h-full items-center overflow-hidden'>
            <div className="flex flex-col items-center container">
                <div className='mt-12 w-full mb-20 grid place-items-center'>
                    <Header score={score}/>
                </div>
                {!moveClicked ? <MovesContainer moveClickedHandler={moveClickedHandler}/> : ''}
                <div
                    className={`${!moveClicked ? 'translate-x-[100vw]  invisible h-0 w-0' : ''} transition-all duration-300 container w-full`}>
                    <MatchContainer userPick={<MoveBadge cursor={'default'} move={playerMove}/>}
                                    housePick={<MoveBadge cursor={'default'} move={houseMove}/>}
                                    matchResult={1}/>
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
