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
        className={`container mx-auto w-fit h-fit p-20 ${clicked ? '-translate-x-[100vw] transition-all duration-300' : ''} relative`}>
        <div className="grid grid-cols-11 grid-rows-11 place-items-center w-full h-full absolute top-0 left-0">

            <div onClick={() => handleClick('spock')} className={`col-start-3 row-start-2 mt-[-2rem]`}>
                <MoveBadge move={"spock"}/>
            </div>
            <div onClick={() => handleClick('lizard')} className={`col-start-4 row-start-7`}>
                <MoveBadge move={"lizard"}/>
            </div>
            <div onClick={() => handleClick('scissors')} className={`col-start-6 row-start-1`}>
                <MoveBadge move={"scissors"}/>
            </div>
            <div onClick={() => handleClick('rock')} className={`col-start-8 row-start-7 `}>
                <MoveBadge move={"rock"}/>
            </div>
            <div onClick={() => handleClick('paper')} className={`col-start-9 row-start-2 mt-[-2rem]`}>
                <MoveBadge move={"paper"}/>
            </div>


        </div>
        <img src="/public/images/bg-pentagon.svg" className="" alt="pentagon background"/>
    </div>;
}
