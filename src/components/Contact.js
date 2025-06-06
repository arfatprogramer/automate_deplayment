import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Input from './Input';
import './css/contact.css';
import { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({});

  const handel = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
    // console.log(data);
  }

  const submit = (event) => {
    event.preventDefault();
    console.log(data);
  }


  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div className="container">
      <NavBar contact='active' />
      <div className="mainbox">

        <div className="form">
          <form onSubmit={submit}>
            <h1><span>Contact </span> Me</h1>

            <Input title='First Name' name='firstName' type='text'value={data.firstName} onChange={handel}  />
            <Input title='Last Name' name='lastName' type='text' value={data.lastName} onChange={handel} />
            <Input title='Phone Number' name='phone' type='text'value={data.phone} onChange={handel}  />
            <Input title='Gmail' name='gmail' type='email' value={data.gmail} onChange={handel} />
            <Input title='Purpose' name='Purpose' type='text' value={data.Purpose} onChange={handel} />

            <button className='formBtn' type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact
