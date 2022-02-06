import React from 'react';

const initial = {
    first_name: "",
    last_name:"",
    email: "",
    phone_no: "",
    isMarried: "",
    gender:""
    
}

function Form() {
    const [formData,setFormData] = React.useState(initial)
    const fileref = React.useRef()
    const {first_name,last_name,email,phone_no,isMarried,gender} = formData

    const handleChange = (e) => { 
        let { name, value, checked, type } = e.target
        value = type === "checkbox" ? checked : value // check box
        
        setFormData({...formData,[name]:value})
    }
    const onSubmit = (e) => { 
        e.preventDefault()
        console.log(formData)
        console.log(fileref.current.files[0])

    }
  return <div>
      <h1>Form: Person Details</h1>
      <form onSubmit={onSubmit}>
          <label htmlFor="">
              First Name :
              <input type="text" name="first_name" value={first_name} onChange={handleChange}/>
          </label>
          <br />   
          <br />
          
         <label htmlFor="">
              Last Name:
              <input type="text" name="last_name" value={last_name} onChange={handleChange}/>
          </label>
         <br />
         <br />
          <label htmlFor="">
              Email:
              <input type="text" name="email" value={email} onChange={handleChange}/>
          </label>
         <br />
         <br />
          <label htmlFor="">
              Phone No:
              <input type="text" name="phone_no" value={phone_no} onChange={handleChange}/>
          </label>
          <br />
          <br />
          <label htmlFor="">
              isMarried
              <input type="checkbox" name="isMarried" id="" value={isMarried} onChange={handleChange}/>
          </label>
          <br />
          <br />
        <label htmlFor="">
              Gender
              <select onChange={handleChange} value={gender} name="gender" id="">
                  <option value="">select</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="non">Not disclose</option>
              </select>
          </label>
          <br />
          <br />      
         <label htmlFor="">
              Upload profilePic
              <input type="file" ref={fileref}  />

          </label>
          <button>submit</button>
      </form>
  </div>;
}

export default Form;

