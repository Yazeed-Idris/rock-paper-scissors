export const MoveBadge = ({move}) => {

    if (move === 'paper') {
        return (

            <div className='bg-Paper-Gradient-from w-fit rounded-full'>
                <div className='bg-black bg-opacity-30 w-fit rounded-full pb-2'>
                    <div
                        className='bg-gradient-to-b from-Paper-Gradient-from to-Paper-Gradient-to col-span-1 row-span-1 rounded-full p-6 px-7 w-fit'>
                        <div className='bg-white w-fit rounded-full'>
                            <div className='bg-black rounded-full pt-2 bg-opacity-25'>
                                <div className='bg-white w-fit rounded-full grid place-items-center w-32 h-32 opacity-100'>
                                    <img className='object-contain' src='/src/assets/images/icon-paper.svg'
                                         alt='paper badge'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (move === 'rock') {
        return <div className='bg-Rock-Gradient-from w-fit rounded-full'>
            <div className='bg-black bg-opacity-30 w-fit rounded-full pb-2'>
                <div
                    className='bg-gradient-to-b from-Rock-Gradient-from to-Rock-Gradient-to col-span-1 row-span-1 rounded-full p-6 px-7 w-fit'>
                    <div className='bg-white w-fit rounded-full'>
                        <div className='bg-black rounded-full pt-2 bg-opacity-25'>
                            <div className='bg-white w-fit rounded-full grid place-items-center h-32 w-32 opacity-100'>
                                <img className='object-contain' src='/src/assets/images/icon-rock.svg'
                                     alt='rock badge'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    } else {
        return <div className='bg-Scissors-Gradient-from w-fit rounded-full'>
            <div className='bg-black bg-opacity-30 w-fit rounded-full pb-2'>
                <div
                    className='bg-gradient-to-b from-Scissors-Gradient-from to-Scissors-Gradient-to col-span-1 row-span-1 rounded-full p-6 px-7 w-fit'>
                    <div className='bg-white w-fit rounded-full'>
                        <div className='bg-black rounded-full pt-2 bg-opacity-25'>
                            <div className='bg-white w-fit rounded-full grid place-items-center w-32 h-32 opacity-100'>
                                <img className='object-contain' src='/src/assets/images/icon-scissors.svg'
                                     alt='scissors badge'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }


}
