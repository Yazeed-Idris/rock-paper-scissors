import {useState} from "react";

export const MoveBadge = ({move, cursor}) => {

    const [shown, setShown] = useState(false);

    function delayShown() {
        setTimeout(() => {
            setShown(true);
        }, 100)
    }

    delayShown();

    if (move === 'paper') {
        return (
            <div
                className={`bg-Paper-Gradient-from w-fit rounded-full shadow-2xl ${shown ? '' : 'scale-0'} transition-all duration-700 ${!cursor ? 'cursor-pointer hover:scale-110' : ''}`}>
                <div className='bg-black bg-opacity-30 w-fit rounded-full pb-2'>
                    <div
                        className='bg-gradient-to-b from-Paper-Gradient-from to-Paper-Gradient-to col-span-1 row-span-1 rounded-full p-4 px-5 sm:p-5 sm:px-6 w-fit'>
                        <div className='bg-white w-fit rounded-full'>
                            <div className='bg-black rounded-full pt-2 bg-opacity-25'>
                                <div
                                    className='bg-white rounded-full grid place-items-center w-26 h-24 sm:w-36 sm:h-34 opacity-100'>
                                    <img className='object-contain sm:w-24 sm:h-20'
                                         src='./images/icon-paper.svg'
                                         alt='paper badge'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (move === 'rock') {
        return <div
            className={`bg-Rock-Gradient-from w-fit rounded-full shadow-2xl ${shown ? '' : 'scale-0'} transition-all duration-700 ${!cursor ? 'cursor-pointer hover:scale-110' : ''}`}>
            <div className='bg-black bg-opacity-30 w-fit rounded-full pb-2'>
                <div
                    className='bg-gradient-to-b from-Rock-Gradient-from to-Rock-Gradient-to col-span-1 row-span-1 rounded-full p-4 px-5 sm:p-5 sm:px-6 w-fit'>
                    <div className='bg-white w-fit rounded-full'>
                        <div className='bg-black rounded-full pt-2 bg-opacity-25'>
                            <div
                                className='bg-white rounded-full grid place-items-center w-26 h-24 sm:w-36 sm:h-34 opacity-100'>
                                <img className='object-contain sm:w-20 sm:h-16' src='./images/icon-rock.svg'
                                     alt='rock badge'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    } else {
        return <div
            className={`bg-Scissors-Gradient-from w-fit rounded-full shadow-2xl ${shown ? '' : 'scale-0'} transition-all duration-700 ${!cursor ? 'cursor-pointer hover:scale-110' : ''}`}>
            <div className='bg-black bg-opacity-30 w-fit rounded-full pb-2'>
                <div
                    className='bg-gradient-to-b from-Scissors-Gradient-from to-Scissors-Gradient-to col-span-1 row-span-1 rounded-full p-4 px-5 sm:p-5 sm:px-6 w-fit'>
                    <div className='bg-white w-fit rounded-full'>
                        <div className='bg-black rounded-full pt-2 bg-opacity-25'>
                            <div
                                className='bg-white rounded-full grid place-items-center w-26 h-24 sm:w-36 sm:h-34 opacity-100'>
                                <img className='object-contain sm:w-24 sm:h-20'
                                     src='./images/icon-scissors.svg'
                                     alt='scissors badge'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }


}
