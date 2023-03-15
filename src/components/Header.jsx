import {Score} from "./Score";

export const Header = ({score}) => {
    return <div className='container flex justify-between mx-auto items-center py-4 px-6 border-2 rounded-xl border-Header-Outline bg-transparent text-white'>
        <div>
            <h1 className='font-Barlow-Semi-Condensed font-[700] leading-6 text-3xl'>
                ROCK
                <br/>PAPER
                <br/>SCISSORS
            </h1>
        </div>
        <Score score={12} />

    </div>
}
