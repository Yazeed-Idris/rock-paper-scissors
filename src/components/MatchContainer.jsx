import {useState} from "react";
import {MoveBadge} from "./MoveBadge";

export const MatchContainer = ({userPick, housePick, matchResult, handlePlayAgain}) => {

    const [showHousePick, setShowHousePick] = useState(false)
    const [showEmptyDiv, setShowEmptyDiv] = useState(true)

    if (housePick) {
        setTimeout(() => {
            setShowEmptyDiv(false)
        }, 2200)
        setTimeout(() => {
            setShowHousePick(true)
        }, 2235)
    }


    return <div>

        <div className={`flex justify-around `}>
            <div>
                <h1 className='text-center text-white text-2xl font-Barlow-Semi-Condensed font-[700] mb-12 sm:mb-24'>YOU
                    PICKED</h1>
                <div className='scale-110'>
                    {<MoveBadge cursor={'default'} move={userPick}/>}
                </div>
            </div>
            <div className=' place-items-center hidden sm:grid sm:mx-6'>
                <div>
                    {
                        showHousePick ?
                            (matchResult === 1 ?
                                <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>YOU
                                    WIN</h1>
                                :
                                matchResult === -1 ?
                                    <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>YOU
                                        LOOSE</h1>
                                    :
                                    <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>DRAW</h1>)
                            :
                            <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>PICKING...</h1>
                    }
                    <button
                        className='w-full py-3 bg-white rounded-lg text-Dark transition-all duration-100 shadow-lg mt-3 px-16 font-Barlow-Semi-Condensed font-[600] tracking-widest hover:text-Rock-Gradient-to'>PLAY
                        AGAIN
                    </button>
                </div>
            </div>
            <div>
                <h1 className='text-center text-white text-2xl font-Barlow-Semi-Condensed font-[700] mb-12 sm:mb-24'>HOUSE
                    PICKED</h1>


                <div>{showHousePick ?
                    <div className='scale-110'>
                        {<MoveBadge move={housePick} cursor={'default'}/>}
                    </div> :
                    <div className='grid place-items-center'>

                        <div
                            className={`${showEmptyDiv ? ' h-44 w-44' : 'w-0 h-0'} rounded-full bg-black bg-opacity-25 mx-auto transition-all duration-400`}></div>
                    </div>
                }

                </div>
            </div>

        </div>

        <div className=' place-items-center mt-10 sm:mt-0 grid sm:hidden sm:mx-6'>
            <div>
                {
                    showHousePick ?
                        (matchResult === 1 ?
                            <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>YOU
                                WIN</h1>
                            :
                            matchResult === -1 ?
                                <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>YOU
                                    LOOSE</h1>
                                :
                                <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>DRAW</h1>)
                        :
                        <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>PICKING...</h1>
                }
                <button onClick={handlePlayAgain}
                        className='w-full py-3 bg-white rounded-lg text-Dark transition-all duration-100 shadow-lg mt-3 px-16 font-Barlow-Semi-Condensed font-[600] tracking-widest hover:text-Rock-Gradient-to'>PLAY
                    AGAIN
                </button>
            </div>
        </div>
    </div>
}
