import { useState } from "react"
import Box from "./box";

let winner =null;
let finalResult="";

function GameBox(){

  const [trackClick,setTrackClick] = useState(new Array(9).fill(null));
  const [boxValue,setBoxValue] = useState("X");

  function handleClick(id){
    if(winner!=null){
      return;
    }
    setTrackClick((prevTrack)=>{
      const newTrack = [...prevTrack];
      newTrack[id]=boxValue;
      return newTrack;
    })
    if(boxValue==="X"){
      setBoxValue("O");
    }
    else{
      setBoxValue("X");
    }
  }
  winner = CheckWinner(trackClick);
  finalResult = result(winner);

  function result(winner){
    if(winner===null){
      return winner;
    }
  }


  function CheckWinner(output){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(output[a],output[b],output[c]);
      if(output[a] && output[a] === output[b] && output[a] === output[c]){
        return output[a];
      }
    }
    return null;
  }

  function replay(){
    setTrackClick(new Array(9).fill(null));
  }

  

    return(
      <>
      <h1>{winner!=null ? "Winner is " + winner : "Final Result : "+finalResult}</h1>

      <div className='box-wrapper'>
          {trackClick.map((value,index)=>{
             return (<Box handleClick={handleClick} value={value} key={index} id={index}></Box>);
          })}
    </div>
    <button onClick={replay}>Re-Match</button>
    </>
    )
}

export default GameBox