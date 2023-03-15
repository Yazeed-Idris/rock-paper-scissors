export const Score = ({score}) => {

    return <div className='container shadow-lg rounded-lg bg-white w-fit px-12 py-4'>
        <p className='text-Score font-Barlow-Semi-Condensed font-[600] tracking-widest text-center leading-4'>SCORE</p>
        <h1 className='text-Score-Number font-Barlow-Semi-Condensed text-6xl font-[700] text-center '>{score}</h1>
    </div>
}
