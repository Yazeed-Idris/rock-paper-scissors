import {Score} from "./Score";

export const Header = ({score}) => {
    return <div className='container mt-12 flex justify-between mx-auto items-center py-4 px-6 border-2 rounded-xl border-Header-Outline bg-transparent text-white'>
        <div>
            <h1 className='font-Barlow-Semi-Condensed font-[700] leading-7 text-4xl'>
                ROCK
                <br/>PAPER
                <br/>SCISSORS
            </h1>
        </div>
        <Score score={score} />
    </div>
}
