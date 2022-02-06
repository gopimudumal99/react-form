import React from 'react';

function Render() {
const [isLoading,setIsLoding] = React.useState(false)
const [isError,setIsError] = React.useState(false)
const [show,setShow] = React.useState(false)
    const fetchData = () => { 
        setIsLoding(true)
        setIsError(false)
        setTimeout(() => {
            setIsLoding(false)
        }, 2000);
    }

    
    const fetchDatawithError = () => { 
        setIsLoding(true)
        // setIsError(false)
        setTimeout(() => {
            setIsLoding(false)
            setIsError(true)
        }, 2000);
    }
    

    return isLoading ? (
        <h2>...Loding

        </h2>) : isError ? (
            <div>
                <h3>Someting went wrong</h3>
                <button onClick={fetchData}>do you want to fetchData again</button>
            </div>
        ) : (
        <div>
            <h1>Hello I'm Back</h1>
                    <button onClick={fetchData}>fetch the data</button>
                    <br />
            <button onClick={fetchDatawithError}>fetch the data with error</button>
            <br />
                    <button onClick={() => setShow((prev) => !prev)}>
                        { show ? "Hide":"Show"}</button>
                    <br />
            {show && new Date().toLocaleString()}       
        </div>
    );
    
}

export default Render;
