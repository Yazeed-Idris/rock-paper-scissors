import {Header} from "./components/Header";
import {useState} from "react";
import {MovesContainer} from "./components/MovesContainer.jsx";
import {RulesButton} from "./components/RulesButton.jsx";
import {RulesModal} from "./components/RulesModal";


function App() {

    const [score, setScore] = useState(0);

    return (
        <div className='App flex flex-col justify-between h-full items-center'>
            <RulesModal/>
            <div className="flex flex-col items-center container">
                <div className='mt-12 mb-20 grid place-items-center'>
                    <Header score={score}/>
                </div>
                <MovesContainer/>
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
