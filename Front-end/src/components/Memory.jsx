import React from 'react'
import { useState } from 'react'
import Logo from '../assets/img/react.svg'


function Memory(props){



    function DoubleArray(Array){
        //double the array by copying it and renaming it
        let DoubleArray =[] 
        for (let i = 0; i < Array.length; i++) {
            DoubleArray.push(`${Array[i]}copy`)
        }
        DoubleArray = Array.concat(DoubleArray)
        return DoubleArray
    }

    function RandomArray(Array){
        let RandomArray = Array.sort(() => Math.random() - 0.5)
        return RandomArray
    }

    let CheckCard = []

    function checkDouble(){
        if (CheckCard.length >= 2){
            //Attendre 1 seconde
            setTimeout(() => {
                //check if the 2 cards are the same first letter 
                if (CheckCard[0].card[0] === CheckCard[1].card[0]){
                    console.log('Clique sur 2 cartes identiques')
                    for (let i = 0; i< CheckCard.length; i++){
                        document.getElementById(CheckCard[i].card).style.backgroundColor = 'green'
                        document.getElementById(CheckCard[i].card).disabled = true
                    }
                    //checkcard is empty
                    CheckCard = []
                }else{
            for (let i = 0; i< CheckCard.length; i++){
               document.getElementById(CheckCard[i].card).style.backgroundColor = 'blue'
            }
            //checkcard is empty
            CheckCard = []
        }
    }, 1000)
        }else{
            console.log('Cliqué sur 2 cartes')
        }
    }

    let Card =RandomArray(DoubleArray(props.MemoryCard))
    console.log(Card)

    const DisplayCard = Card.map((card) =>  
            <button onClick = { () => checkInformation({card})} className='Cards' id={card}></button>
    )

    

 function checkInformation(a){
        console.log(a.card)
        CheckCard.push(a)
        console.log(CheckCard)
        document.getElementById(a.card).style.backgroundColor = 'red'
        checkDouble()
        
    






        
    }


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