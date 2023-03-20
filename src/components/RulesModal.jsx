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
                <img onClick={handleClick} src="/src/assets/images/icon-x-button.svg"
                     className='hidden sm:inline object-contain'
                     alt="close button"/>
            </div>
            <img src="/src/assets/images/image-rules-bonus.svg"
                 alt="Rock beats Scissors, Scissors beats Paper, and Paper beats Rock"
                 className='mx-auto object-contain mx-10'/>
            <img onClick={handleClick} className='mt-20 sm:hidden'
                 src="/src/assets/images/icon-x-button.svg" alt="close button"/>
        </div>
        <div className='h-full w-full bg-black opacity-50' onClick={handleClick}>

        </div>
    </div>
}
