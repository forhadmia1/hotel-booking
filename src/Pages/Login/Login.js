import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useGoogleSignin from '../../Hooks/useGoogleSignin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [signInGoogle] = useGoogleSignin();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const signInuser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
        navigate('/');
    }

    return (
        <div className='d-flex justify-content-center my-5'>
            <div style={{ width: "400px" }} className='shadow-lg rounded p-4'>
                <h3 className='text-center mt-5'>LogIn </h3>
                <Form onSubmit={signInuser}>
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control
                        onBlur={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                    />
                    <Form.Label htmlFor="password" className='mt-4'>Password:</Form.Label>
                    <Form.Control
                        onBlur={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                    />
                    <div>
                        <p className='text-center mt-2'>Create an account? <Link className='text-danger fw-bold' to='/signup'>Sign Up</Link></p>
                    </div>
                    <div className='d-flex justify-content-center w-100 my-4'>
                        <Button className='px-5 btn-secondary fw-bold' type='submit'>Login</Button>
                    </div>
                </Form>
                <hr />
                <div>
                    <button onClick={signInGoogle} className='btn btn-light w-100 btn-outline-secondary'>Sign in with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;