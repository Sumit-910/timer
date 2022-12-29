import React, { useState, memo } from "react";

export default memo(function TimerBody() {
  
  const [hours, sethours] = useState("00");
  const [mins, setmins] = useState("00");
  const [secs, setsecs] = useState("00");

  function myInterval(){};

  const onClickStart = () => {
  
  let hour = document.getElementById("hours").value? document.getElementById("hours").value : 0 ;
  let min = document.getElementById("minutes").value>0? document.getElementById("minutes").value : 0 ;
  let sec = document.getElementById("seconds").value>0? document.getElementById("seconds").value : 0 ;

    sethours(hour = hour < 24 ? hour : 23);
    setmins(min = min < 60 ? min : 59);
    setsecs(sec = sec < 60 ? sec : 59);

    let total = parseInt(hour)*3600 + parseInt(min)*60 + parseInt(sec);
    const tot = (total*1000)+1000;

    setTimeout(() => {
      clearInterval(myInterval);
      sethours("00");
      setmins("00");
      setsecs("00");
    }, tot);
      
    window.myInterval = setInterval(() => {
        //seconds
        sec = total%60;
        setsecs(sec > 9 ? sec : "0" + sec);
        //minutes
        min = (Math.floor(total/60))%60;
        setmins(min > 9 ? min : "0" + min);
        //hours
        hour = (Math.floor(total/3600))%24;
        sethours(hour > 9 ? hour : "0" + hour);

        if(total>0){total--;}
      }, 1000);
      
  };
  const onClickStop = () =>{
    clearInterval(window.myInterval);
    sethours("00");
    setmins("00");
    setsecs("00");
  }
  
  

  return (
    <>
      <section className="timerContainer">
        <section className="timer">
          <div className="first">
            <h2>Countdown Timer</h2>
          </div>
          <div className="second">
            <section>
              <p>{hours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{mins}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{secs}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
          <div className="entry">
            <p>Hours :</p>
            <input type="number" name="" id="hours" />
            <p>Minutes :</p>
            <input type="number" name="" id="minutes" />
            <p>Seconds :</p>
            <input type="number" name="" id="seconds" />
          </div>
          <br />
          <section className="btnc">
          <button onClick={onClickStart} className="Btn">
            Start
          </button>
          <button onClick={onClickStop} className="Btn">
            Stop
          </button>
          </section>
        </section>
      </section>
    </>
  );
});
