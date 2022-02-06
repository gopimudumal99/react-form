import React from 'react';
import { useState} from 'react';

const initialstate = {
    name: "",
    email: "",
    age: "",
}

function Events() {
    const [data, setData] = useState(initialstate) 
    const handleChange = e => { 
       const {name,value} = e.target
        setData({ ...data, [name]: value })
    }
    const handleClick = () => { 
        console.log(data)
    }
    const { name,email,age} = data
    return <div>
        <h1>Events,useRef,Forms and More</h1>
        <input value={name} name="name" onChange={handleChange} />
        <br/>
        <input value={email} name="email"  onChange={handleChange} />
        <br/>
        <input value={age}  name="age" onChange={handleChange} />
        <br/>
        <button onClick={handleClick} >click</button>
  </div>;
}

export default Events;


