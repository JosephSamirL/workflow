import React, { useEffect, useState } from 'react';
import "./App.css"
import ReactPlayer from 'react-player'
import Timer from 'react-compound-timer'
import { FiPlay, FiPause,} from "react-icons/fi";

import {GrNext} from "react-icons/gr";

export const Player = () => {
   const [diff , setDiff] = useState(new Date())
   
   const[vids, setVids] = useState(["https://www.youtube.com/watch?v=l9nh1l8ZIJQ&t=820s","https://www.youtube.com/watch?v=f02mOEt11OQ","https://www.youtube.com/watch?v=lTRiuFIWV54","https://www.youtube.com/watch?v=Ie5koh4qvJc","https://www.youtube.com/watch?v=hj83cwfOF3Y","https://www.youtube.com/watch?v=w23f0ILRyjw","https://www.youtube.com/watch?v=2GjPQfdQfMY","https://www.youtube.com/watch?v=jrTMMG0zJyI"])
   let [len, setLen] = useState(0)
   const [check, setCheck] = useState(false)
   
   useEffect(() => {
      setInterval(() => {
          setDiff(new Date())
          
      }, 1000);
   }, [])
   

    return (
		
    <>
      
        <div className="w-99vh flex flex-col mx-auto flex-wrap text-center">
        <h1 className="m-0">T I M E</h1>
<div id="clockdiv">
  <div className="m-1">
    <span class="hours">{diff.getHours()}</span>
    <div class="smalltext">Hours</div>
  </div>
  <div className="m-1">
    <span class="minutes">{diff.getMinutes()}</span>
    <div class="smalltext">Minutes</div>
  </div>
  <div className="m-1">
    <span class="seconds">{diff.getSeconds()}</span>
    <div class="smalltext">Seconds</div>
  </div>
</div>
<Timer
    initialTime={0}
    startImmediately={false}
    onStart={() => console.log("Jjjj")}
    onResume={() => console.log('onResume hook')}
    onPause={() => console.log('onPause hook')}
    onStop={() => console.log('onStop hook')}
    onReset={() => console.log('onReset hook')}
>
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
          <h1 className="m-0">Work Time</h1>
            <div id="clockdiv">
                <div className="m-1">
              <span class="hours"> <Timer.Hours /></span>
              <div class="smalltext">Hours</div>
            </div>
            <div className="m-1">
            <span class="minutes"><Timer.Minutes /></span>
            <div class="smalltext">Minutes</div>
          </div>
          <div className="m-1">
            <span class="seconds"><Timer.Seconds /></span>
            <div class="smalltext">Seconds</div>
          </div>
            </div>
            <br />
            <div>
                <button className="p-3 bg-green-500 mx-auto my-2 border rounded-xl " onClick={start}>Start</button>
                <button className="p-3 bg-green-500 mx-auto my-2 border rounded-xl " onClick={pause}>Pause</button>
                <button className="p-3 bg-green-500 mx-auto my-2 border rounded-xl " onClick={resume}>Resume</button>
              
                <button className="p-3 bg-green-500 mx-auto my-2 border rounded-xl " onClick={reset}>Reset</button>
            </div>
        </React.Fragment>
    )}
</Timer>


      

        </div>
        <div className="w-99vh flex flex-row mx-auto flex-wrap ">
        <div className="text-right w-1/6"><button className="p-3 bg-green-500 my-2 border rounded-xl " onClick={()=>{setCheck(!check)}}>{check ? <FiPause/>:<FiPlay/>}</button></div>
        <div  class="p-4 w-4/6 mx-auto  ">
        <ReactPlayer controls={true} loop={true} light={true} playing={check} width="100%" height="100%"  url={vids[len]} />
		</div>
    <div className=" w-1/6"><button onClick={()=>{len >= vids.length - 1? setLen(0): setLen(++len)}} className="p-3 bg-green-500  my-2 border rounded-xl " ><GrNext/></button></div>
        
        </div>
        </>);
};
