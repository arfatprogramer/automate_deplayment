import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Input from './Input';
import { Link } from 'react-router-dom';

function Signup() {
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
        document.title = "signUp";
    }, []);
    return (
        <>
            <div className="container">
                <NavBar login='active' />
                <div className="mainbox">
                    <div className="form">
                        <form onSubmit={submit}>
                            <h1><span>SignUp Form </span></h1>

                            <Input title='First Name' name='firstName' type='text' value={data.firstName} onChange={handel} />
                            <Input title='Last Name' name='lastName' type='text' value={data.lastName} onChange={handel} />
                            <Input title='Phone Number' name='phone' type='text' value={data.phone} onChange={handel} />
                            <Input title='Gmail' name='gmail' type='email' value={data.gmail} onChange={handel} />
                            <Input title='Username' name='username' type='text' value={data.username} onChange={handel} />
                            <Input title='Password' name='password' type='password' value={data.password} onChange={handel} />
                            <Input title='Confirm Password' name='Cpassword' type='password' value={data.Cpassword} onChange={handel} />
                            <p>You  have alredy Account? <Link to="/login"><span>click heare</span></Link></p>
                            <button className='formBtn' type="submit">SignUP</button>
                        </form>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Signup
