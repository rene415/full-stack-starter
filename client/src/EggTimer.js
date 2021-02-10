import { useState } from "react";
import Countdown from "./Countdown";

function EggTimer() {
    const [seconds, setSeconds] = useState(0);

    function onSecondsChanged (event){
        const newSeconds = parseInt(event.target.value);
        setSeconds(newSeconds);
    }

    return(
        <div className="EggTimer">
            <h1>Egg Timer</h1>
            <input type="number" value={seconds} onChange={onSecondsChanged}/>
            <p>Current Seconds {seconds}</p>
            <Countdown seconds={seconds} />
        </div>
    )
}

export default EggTimer;