import {useEffect, useMemo, useRef, useState} from "react";
import {MoveBadge} from "./MoveBadge";

export const MatchContainer = ({userPick, housePick, matchResult, handlePlayAgain, on, setOn}) => {

    const [showHousePick, setShowHousePick] = useState(false)
    const [showEmptyDiv, setShowEmptyDiv] = useState(true)
    const emptyDivRef = useRef(null);
    const housePickRef = useRef(null);
    const emptyDivInViewPort = useIsInViewport(emptyDivRef)
    useEffect(() => {
        if (emptyDivInViewPort && on === 1) {
            setTimeout(() => {
                setShowEmptyDiv(false)
            }, 500)
            setTimeout(() => {
                setShowHousePick(true)
            }, 535)
        }
    }, [emptyDivInViewPort, on])

    function useIsInViewport(ref) {
        const [isIntersecting, setIsIntersecting] = useState(false);

        const observer = useMemo(
            () =>
                new IntersectionObserver(([entry]) =>
                    setIsIntersecting(entry.isIntersecting),
                ),
            [],
        );

        useEffect(() => {
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
        }, [ref, observer]);

        return isIntersecting;
    }

    function handleClick() {
        setShowEmptyDiv(true);
        setShowHousePick(false);
        setOn(0)
        handlePlayAgain();
    }

    return <div>

        <div className={`flex justify-around w-full`}>
            <div>
                <h1 className='text-center text-white text-2xl font-Barlow-Semi-Condensed font-[700] mb-12 sm:mb-24'>YOU
                    PICKED</h1>
                <div
                    className={`scale-110 rounded-full ${matchResult === 1 && showHousePick ? 'shadow-circle z-10' : 'z-20'} relative`}>
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
                        onClick={handleClick}
                        className='w-full py-3 bg-white rounded-lg text-Dark transition-all duration-100 shadow-lg mt-3 px-16 font-Barlow-Semi-Condensed font-[600] tracking-widest hover:text-Rock-Gradient-to'>PLAY
                        AGAIN
                    </button>
                </div>
            </div>
            <div>
                <h1 className='text-center text-white text-2xl font-Barlow-Semi-Condensed font-[700] mb-12 sm:mb-24'>HOUSE
                    PICKED</h1>


                <div>{showHousePick ?
                    <div
                        className={`scale-110 rounded-full ${matchResult === -1 && showHousePick ? 'shadow-circle z-10' : 'z-20'} relative`}
                        ref={housePickRef}>
                        {<MoveBadge move={housePick} cursor={'default'}/>}
                    </div> :
                    <div className='grid place-items-center' ref={emptyDivRef}>

                        <div
                            className={`${showEmptyDiv ? ' h-32 w-32 sm:w-44 sm:h-44' : 'w-0 h-0'} rounded-full bg-black bg-opacity-25 mx-auto transition-all duration-400`}></div>
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
                <button onClick={handleClick}
                        className='w-full py-3 bg-white rounded-lg text-Dark transition-all duration-100 shadow-lg mt-3 px-16 font-Barlow-Semi-Condensed font-[600] tracking-widest hover:text-Rock-Gradient-to'>PLAY
                    AGAIN
                </button>
            </div>
        </div>
    </div>
}
