export const Moves = ({moveHandler}) => {
    return <div className='h-fit mt-24 bg-no-repeat relative p-16 w-fit bg-cover mx-auto'>
        <div className='w-36 h-36 absolute left-1 top-1 rounded-full from-Paper-Gradient-from bg-gradient-to-b to-Paper-Gradient-to grid place-items-center'>
            <div className='absolute h-28 w-28 px-6 py-4 grid place-items-center rounded-full bg-white'>
                <img onClick={() => moveHandler('paper')} src="/src/assets/images/icon-paper.svg" alt="paper"/>
            </div>
        </div>
        <div className='w-36 h-36 absolute right-1 top-1 rounded-full from-Scissors-Gradient-from bg-gradient-to-b to-Scissors-Gradient-to grid place-items-center'>
            <div className='absolute h-28 w-28 px-6 py-4 grid place-items-center rounded-full bg-white'>
                <img onClick={() => moveHandler('scissors')} src="/src/assets/images/icon-scissors.svg" alt="paper"/>
            </div>
        </div>
        <div className='w-36 h-36 absolute bottom-1 inset-x-1/2 right-1/2 ml-[-4.5rem]  rounded-full from-Rock-Gradient-from bg-gradient-to-b to-Rock-Gradient-to grid place-items-center'>
            <div className='absolute h-28 w-28 px-6 py-4 grid place-items-center rounded-full bg-white'>
                <img onClick={() => moveHandler('rock')} src="/src/assets/images/icon-rock.svg" alt="paper"/>
            </div>
        </div>
        <img src="/src/assets/images/bg-triangle.svg" className='' alt="triangle background"/>
    </div>
}
