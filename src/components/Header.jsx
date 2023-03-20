import {Score} from "./Score";

export const Header = ({score}) => {
    return <div
        className='container w-full flex justify-between items-center py-4 px-6 border-4 rounded-xl border-Header-Outline bg-transparent text-white'>
        <div className='mr-14 sm:mr-56 lg:mr-80'>
            <h1 className='font-Barlow-Semi-Condensed font-[700] leading-6 sm:leading-7 text-3xl sm:text-4xl'>
                ROCK
                <br/>PAPER
                <br/>SCISSORS
                <br/>LIZARD
                <br/>SPOCK
            </h1>
        </div>
        <Score score={score}/>
    </div>
}
