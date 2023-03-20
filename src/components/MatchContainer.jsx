export const MatchContainer = ({userPick, housePick, matchResult}) => {
    return <div className={`flex justify-between items-center`}>
        <div>
            <h1 className='text-center text-white text-2xl font-Barlow-Semi-Condensed font-[700] mb-12'>YOU PICKED</h1>
            {userPick}
        </div>
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
        <div>
            <h1 className='text-center text-white text-2xl font-Barlow-Semi-Condensed font-[700] mb-12'>HOUSE
                PICKED</h1>
            {housePick}
        </div>
    </div>
}
