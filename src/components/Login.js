import React from 'react';
import NavBar from './NavBar';
import Input from './Input';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Login() {
    const [data, setData] = useState({});

    const handel = (event) => {
        const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}))
    // console.log(data);
    }

    const submit=(event)=>{
        event.preventDefault();
        console.log(data);  
    }
    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <>
            <div className="container">
                <NavBar login='active' />
                <div className="mainbox">
                    <div className="form">
                        <form onSubmit={submit} >
                            <h1><span>Login Form </span></h1>

                            <Input title='Username' name='username' type='text' value={data.username} onChange={handel} />
                            <Input title='Password' name='password' type='password'value={data.password} onChange={handel} />

                            <p>You Dont have Account <Link to="/signup"><span>click heare</span></Link></p>

                            <button className='formBtn' type="submit">Login</button>
                        </form>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Login
