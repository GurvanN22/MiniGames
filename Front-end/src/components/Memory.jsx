import React from 'react'
import { useState } from 'react'
import Logo from '../assets/img/react.svg'


function Memory(props){



    function DoubleArray(Array){
        let DoubleArray = Array.concat(Array)
        return DoubleArray
    }

    function RandomArray(Array){
        let RandomArray = Array.sort(() => Math.random() - 0.5)
        return RandomArray
    }


    let Card =RandomArray(DoubleArray(props.MemoryCard))

    const DisplayCard = Card.map((card) => 
        <div className='Card'>
            <button>{card}</button>
            </div>
    )


    return(
        <div>
        <div id='start'>
            Start
        </div>
        <div id='memory'>
            {DisplayCard}
        </div>
        </div>

    )
}

export default Memory