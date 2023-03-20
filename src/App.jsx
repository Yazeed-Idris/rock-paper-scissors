import {Header} from "./components/Header";
import {useState} from "react";
import {MovesContainer} from "./components/MovesContainer.jsx";
import {RulesButton} from "./components/RulesButton.jsx";


function App() {

    const [score, setScore] = useState(0);
    const [moveClicked, setMoveClicked] = useState(false);

    function moveClickedHandler() {
        setMoveClicked(true);
    }

    return (
        <div className='App flex flex-col justify-between h-full items-center overflow-x-hidden'>
            <div className="flex flex-col items-center container">
                <div className='mt-12 mb-20 grid place-items-center'>
                    <Header score={score}/>
                </div>
                {!moveClicked ? <MovesContainer moveClickedHandler={moveClickedHandler}/> : ''}
                <div
                    className={`${!moveClicked ? 'translate-x-[100vw]' : ''} transition-all duration-100`}>
                    <h1>Hello world</h1>
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
