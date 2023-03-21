export const RulesModal = ({setShowModal}) => {

    function handleClick() {
        setShowModal(false)
    }

    return <div className='w-full h-full absolute z-40 grid place-items-center left-0 top-0'>
        <div
            className='bg-white h-screen w-screen sm:h-fit sm:w-fit absolute grid grid-rows-3 place-items-center sm:flex sm:flex-col sm:p-10 sm:py-7 z-50 sm:rounded-lg'>
            <div className='flex justify-center sm:justify-between w-full mb-12'>
                <h1
                    className='text-center font-Barlow-Semi-Condensed font-[700] text-4xl text-Dark'>RULES</h1>
                <img onClick={handleClick} src="./images/icon-x-button.svg"
                     className='hidden sm:inline object-contain cursor-pointer'
                     alt="close button"/>
            </div>
            <div>
                <img src="./images/image-rules-bonus.svg"
                     alt="Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizards poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproofs Spock, Spock vaporises Rock, and as it always has Rock crushes Scissors"
                     className='mx-auto object-contain mx-10'/>
                <p className='text-center font-Barlow-Semi-Condensed font-[700] text-xl text-Dark mt-7'>If you are not
                    familiar with the game <a className='text-blue-500 underline hover:text-blue-700'
                                              href="https://www.youtube.com/watch?v=iSHPVCBsnLw&ab_channel=WarnerBros.TV">click
                        here</a></p>
            </div>
            <img onClick={handleClick} className='mt-20 sm:hidden'
                 src="./images/icon-x-button.svg" alt="close button"/>
        </div>
        <div className='h-full w-full bg-black opacity-50' onClick={handleClick}>

        </div>
    </div>
}
