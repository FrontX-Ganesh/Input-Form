import { useState } from 'react';
import './App.css';

function App() {

  const [lastValue, fullName] = useState({
    fname : "",
    lname : "",
    email : "",
    mobileNumber : ""
  });

  let nameEvent = (event) => {
    
    const {value,name} = event.target;
    fullName((preValue) =>{
      return{
        ...preValue,
        [name] : value
      }
      // if(name === 'fname'){
      //   return {
      //     fname : value,
      //     lname : preValue.lname,
      //     email : preValue.email
      //   }
      // }else if(name === 'lname'){
      //   return {
      //     fname : preValue.fname,
      //     lname : value,
      //     email : preValue.email
      //   }
      // }else {
      //   return {
      //     fname : preValue.fname,
      //     lname : preValue.lname,
      //     email : value
      //   }
      // }
    })

  }
  return (
    <>
      <label style={{fontSize : '25px', color:'yellow'}}>Hello, {lastValue.fname} {lastValue.lname}  <br />
      {lastValue.email}  <br /> {lastValue.mobileNumber} </label>
      <input type="text" className='inputTag capital' name="fname" onChange={nameEvent} placeholder="Enter first name" />
      <input type="text" className='inputTag capital' name="lname" onChange={nameEvent} placeholder="Enter last name" />
      <input type="text" className='inputTag' name="email" onChange={nameEvent} placeholder="Enter email" />
      <input type="number" className='inputTag' name="mobileNumber" onChange={nameEvent} placeholder="Enter phone number" />
    </>
  );
}

export default App;
