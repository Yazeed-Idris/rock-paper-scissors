export const MatchContainer = ({userPick, housePick, matchResult, showHousePick = true}) => {
    return <div className={`flex justify-around `}>
        <div>
            <h1 className='text-center text-white text-2xl font-Barlow-Semi-Condensed font-[700] mb-24'>YOU PICKED</h1>
            <div className='scale-150'>

                {userPick}
            </div>
        </div>
        <div className='grid place-items-center'>
            <div>
                {matchResult === 1 ?
                    <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>YOU
                        WIN</h1>
                    :
                    matchResult === -1 ?
                        <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>YOU
                            LOOSE</h1>
                        :
                        <h1 className='text-center text-white text-4xl font-Barlow-Semi-Condensed font-[700] tracking-widest'>DRAW</h1>}
                <button
                    className='w-full py-3 bg-white rounded-lg text-Dark transition-all duration-100 shadow-lg mt-3 px-16 font-Barlow-Semi-Condensed font-[600] tracking-widest hover:text-Rock-Gradient-to'>PLAY
                    AGAIN
                </button>
            </div>
        </div>
        <div>
            <h1 className='text-center text-white text-2xl font-Barlow-Semi-Condensed font-[700] mb-24'>HOUSE
                PICKED</h1>
            <div className={`${showHousePick ? 'scale-150' : 'h-44 w-44 bg-black bg-opacity-25 rounded-full'}`}>
                {showHousePick ? housePick : ''}
            </div>
        </div>
    </div>
}
