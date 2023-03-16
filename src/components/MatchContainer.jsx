import { useState } from "react"
import { PaperMove } from "./PaperMove"
import { RockMove } from "./RockMove"
import { ScissorsMove } from "./ScissorsMove"

export const MatchContainer = ({playerMove}) => {

    const [houseMove, setHouseMove] = useState(null)
    
    return <div className="container mx-auto mt-24 flex justify-around text-white">
        <div className="flex flex-col items-center justify-between">
            <h2 className="font-Barlow-Semi-Condensed font-[700] text-center text-2xl mb-10">YOU PICKED</h2>
            {playerMove === 'paper'? 
            <PaperMove></PaperMove>
            :
            playerMove === 'scissors'?
            <ScissorsMove></ScissorsMove>
            :
            <RockMove></RockMove>
        }
        </div>
        <div className="flex flex-col items-center justify-between">
            <h2 className="font-Barlow-Semi-Condensed font-[700] text-center text-2xl mb-10">THE HOUSE PICKED</h2>
            {!houseMove? 
            <div className="w-64 h-64 grid place-items-center">
                <div className="h-56 w-56 bg-black opacity-20 rounded-full"></div> 
            </div>
            : 
            <></>}
        </div>
    </div>
}