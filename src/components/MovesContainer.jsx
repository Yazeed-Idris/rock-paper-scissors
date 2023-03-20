import {MoveBadge} from "./MoveBadge.jsx";
import {useState} from "react";

export const MovesContainer = () => {

    const [moveNumber, setMoveNumber] = useState(4);

    return <div className=" w-full h-fit p-20 relative ">
        <div
            className={`${moveNumber !== 4 ? 'flex justify-around' : 'grid'} grid-cols-3 grid-rows-2 place-items-center w-full h-full absolute top-0 left-0`}>

            <div
                className={`flex col-start-1 col-end-4 justify-around sm:justify-between w-full ${moveNumber !== 4 ? '' : ''}`}>
                <div className={`${moveNumber !== 1 ? 'invisible' : ''}`}>
                    <MoveBadge setMoveNumber={setMoveNumber} move={"paper"}/>
                </div>
                {moveNumber === 4 || moveNumber === 3 ?
                    <div
                        className={`${moveNumber === 3 ? 'scale-125 transition-all duration-700 left-0 top-0' : 'left-1/2'} absolute`}>
                        <MoveBadge setMoveNumber={setMoveNumber} move={"scissors"}/>
                    </div>
                    : <div></div>}
            </div>

            <div className={`${moveNumber !== 4 ? 'scale-100' : 'scale-0'} transition-all duration-700`}>
                <h1 className='font-Barlow-Semi-Condensed font-[700] text-white text-4xl'>Hello World!</h1>
            </div>
            <div className="col-start-2 row-start-2 mb-4">
                {moveNumber === 4 || moveNumber === 2 ?
                    <MoveBadge setMoveNumber={setMoveNumber} move={"rock"}/>
                    : <div></div>}
            </div>
        </div>
        <img src="/src/assets/images/bg-triangle.svg" className={`mx-auto ${moveNumber !== 4 ? 'invisible' : ''}`}
             alt="triangle background"/>

    </div>;
}
