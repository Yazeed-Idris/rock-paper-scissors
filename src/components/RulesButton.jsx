import {useState} from "react";
import {RulesModal} from "./RulesModal";

export const RulesButton = () => {

    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(true);
    }

    return (

        <div>
            <button
                onClick={handleClick}
                className='bg-transparent border-2 border border-white rounded-2xl text-white text-3xl tracking-widest font-Barlow-Semi-Condensed font-[600] px-12 py-3'>
                RULES
            </button>
            {showModal ? <RulesModal setShowModal={setShowModal}/> : ''}
        </div>)

}
