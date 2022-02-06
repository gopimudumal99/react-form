import React from 'react';

function UseRef() {
    const ref = React.useRef()
    const [time, setTime] = React.useState(0)
    const [isRunning, setIsRunning] = React.useState(false)
    const timerRef = React.useRef()

    React.useEffect(() => { 
        startTimer();
        //cleanup
        return stopTimer
    },[])

    const startTimer = () => { 
        if (isRunning) { 
            return
        }
        timerRef.current = setInterval(() => { 
               setTime((pre)=>pre+1)
        }, 1000)
        setIsRunning(true)
    }

    const stopTimer = () => { 
        clearInterval(timerRef.current)
        setIsRunning(false)
    }

    const onSubmit = () => { 
        console.log(ref.current.files[0])
    }

    return (<div>
        <h1>Counter</h1>
        <h3>{time}</h3>
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>PAUSE</button>
        
        <h4>image</h4>
        <input type="file" ref={ref} />
        <button onClick={onSubmit}>submit</button>
    </div>
    );
}

export default UseRef;
