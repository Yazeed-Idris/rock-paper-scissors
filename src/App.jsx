import {Header} from "./components/Header";
import { useState } from "react";
import {MoveBadge} from "./components/MoveBadge.jsx";

function App() {

    const [score, setScore] = useState(0);

  return (
    <div className="App h-full">
       <Header score={score} />
        <div className='container w-fit relative mx-auto'>
            <div className='grid grid-cols-3 grid-rows-2 place-items-center w-full absolute '>
                <div className='col-start-1 row-start-1'>

                <MoveBadge move={'paper'}/>
                </div>

                <div className='col-start-3 row-start-1'>

                <MoveBadge move={'scissors'}/>
                </div>

                <div className='col-start-2 row-start-2'>

                <MoveBadge move={'rock'} />
                </div>
            </div>
            <img src="/src/assets/images/bg-triangle.svg" className='' alt="triangle background"/>
        </div>


    </div>
  )
}



export default App
