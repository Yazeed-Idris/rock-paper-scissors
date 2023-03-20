import {MoveBadge} from "./MoveBadge.jsx";
import {useState} from "react";

export const MovesContainer = ({moveClickedHandler}) => {

    const [clicked, setClicked] = useState(false);

    function handleClick(move) {
        setClicked(true)
        setTimeout(() => {
            moveClickedHandler(move)
        }, 300)
    }

    return <div
        className={`container w-fit h-fit p-20 ${clicked ? '-translate-x-[100vw] transition-all duration-300' : ''} relative`}>
        <div className="grid grid-cols-3 grid-rows-2 place-items-center w-full h-full absolute top-0 left-0">

            <div className='flex col-start-1 col-end-4 justify-around sm:justify-between w-full'>
                <div onClick={() => handleClick('paper')}>
                    <MoveBadge move={"paper"}/>
                </div>
                <div onClick={() => handleClick('scissors')}>
                    <MoveBadge move={"scissors"}/>
                </div>
            </div>

            <div onClick={() => handleClick('rock')} className="col-start-2 row-start-2 mb-4">
                <MoveBadge move={"rock"}/>
            </div>
        </div>
        <img src="/src/assets/images/bg-triangle.svg" className="" alt="triangle background"/>
    </div>;
}
