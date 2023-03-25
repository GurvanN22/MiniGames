import React from 'react'
//import { useState } from 'react'
//import Logo from '../assets/img/react.svg'


function Memory(props){

    let GuessCardToGuess = props.MemoryCard.length //nombre de carte à trouver
    let Card =RandomArray(DoubleArray(props.MemoryCard)) //Double the array and randomize it Duo(name,name,copy)
    let CheckCard = []  //array to check if the 2 cards are the same


    function addCheckCard(card){ //add the card to the check card array
        if (CheckCard.length < 1){
            CheckCard.push(card)
            return true
        }else if (CheckCard.length <2){
        for (let i = 0; i < CheckCard.length; i++) {
            console.log(CheckCard[i].card!==card.card)
            if (CheckCard[i].card!==card.card){
                CheckCard.push(card)
                return true
            }
        }
    }
    return false
    }

    function DoubleArray(Array){
        //double the array by copying it and renaming it
        let DoubleArray =[] 
        for (let i = 0; i < Array.length; i++) {
            DoubleArray.push(`${Array[i]}___copy`)
        }
        DoubleArray = Array.concat(DoubleArray)
        return DoubleArray
    }

    function RandomArray(Array){
        let RandomArray = Array.sort(() => Math.random() - 0.5)
        return RandomArray
    }

    function checkDouble(){
        if (CheckCard.length >= 2){
            setTimeout(() => { //1 seconde avant de check les carte pour laisser le temps au joueur de voir les cartes
                //check si les 2 cartes sont identiques
                let card1 = CheckCard[0].card.split('___')
                let card2 = CheckCard[1].card.split('___')
                if (card1[0] === card2[0]){
                    console.log('Clique sur 2 cartes identiques')
                    for (let i = 0; i< 2; i++){
                        document.getElementById(CheckCard[i].card).style.backgroundColor = 'green' //met les cartes en vert
                        document.getElementById(CheckCard[i].card).disabled = true //désactive les cartes
                    }
                    CheckCard = [] //vide le tableau pour pouvoir cliquer sur une nouvelle paire
                    GuessCardToGuess -= 1 //enlève 1 carte à trouver
                    if (GuessCardToGuess === 0){
                        console.log('Gagné')
                        document.getElementById('start').style.display = 'block'
                        alert('Gagné')
                    }
                }else{
                    for (let i = 0; i< CheckCard.length; i++){      //Remet les cartes en bleu
                        document.getElementById(CheckCard[i].card).style.backgroundColor = 'blue'
                        document.getElementById(CheckCard[i].card).style.fontSize = '0px'
                        }
                    CheckCard = [] //vide le tableau pour pouvoir cliquer sur une nouvelle paire
                    }
            }, 1000)
        }else{
            console.log('Cliqué sur 2 cartes')
        }
    }

    function removeCopyForDisplay(Array){
        let ArrayWithoutCopy = []
        for (let i = 0; i < Array.length; i++) {
            ArrayWithoutCopy.push(Array[i].split('_')[0])
        }
        return ArrayWithoutCopy[0]
    }

    const DisplayCard = Card.map((card) =>  //affiche les cartes
            <button onClick = { () => checkInformation({card})} className='Cards' id={card}>{removeCopyForDisplay(card)}</button>

    )

    

 function checkInformation(a){
        if (addCheckCard(a)){
        document.getElementById(a.card).style.backgroundColor = 'red'
        document.getElementById(a.card).style.fontSize = '2vw'
        checkDouble()

 }
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