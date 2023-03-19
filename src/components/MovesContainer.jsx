import {MoveBadge} from "./MoveBadge.jsx";
import {useState} from "react";

export const MovesContainer = () => {

    const [moveNumber, setMoveNumber] = useState(4);

    return <div className="container w-fit h-fit p-20 relative ">
        <div className="grid grid-cols-3 grid-rows-2 place-items-center w-full h-full absolute top-0 left-0">

            <div className='flex col-start-1 col-end-4 justify-around sm:justify-between w-full'>
                {moveNumber === 4 || moveNumber === 1 ?
                    <div>
                        <MoveBadge setMoveNumber={setMoveNumber} move={"paper"}/>
                    </div> : <></>}
                {moveNumber === 4 || moveNumber === 3 ?
                    <div>
                        <MoveBadge setMoveNumber={setMoveNumber} move={"scissors"}/>
                    </div>
                    : <></>}
            </div>

            <div className="col-start-2 row-start-2 mb-4">
                {moveNumber === 4 || moveNumber === 2 ?
                    <MoveBadge setMoveNumber={setMoveNumber} move={"rock"}/>
                    : <></>}
            </div>
        </div>
        <img src="/src/assets/images/bg-triangle.svg" className="" alt="triangle background"/>
    </div>;
}
