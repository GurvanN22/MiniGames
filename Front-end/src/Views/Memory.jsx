import React from "react";
import MemoryComponent from "../components/Memory";
import TopBar from "../components/TopBar";


const MemoryCard = ["a","b","c","d","e","f"]

function Memory() {
    function UseAPIToCreateMemory(Title, Content) {
        // Todo
    }


    return (
        <div>
        <TopBar />
        <MemoryComponent UseAPIToCreateMemory={UseAPIToCreateMemory} MemoryCard={MemoryCard} />
        </div>
    );
    }

export default Memory