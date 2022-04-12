import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useGoogleSignin from '../../Hooks/useGoogleSignin';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signInGoogle] = useGoogleSignin();
    const [match, setMatch] = useState(true)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const createUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMatch(!match)
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='d-flex justify-content-center my-5'>
            <div style={{ width: "400px" }} className='shadow-lg rounded p-4'>
                <h3 className='text-center mt-5'>Sign Up</h3>
                <Form onSubmit={createUser}>
                    <Form.Label htmlFor="email" className='mt-4'>Email:</Form.Label>
                    <Form.Control
                        onBlur={(e) => { setEmail(e.target.value) }}
                        type="email"
                        id="email"
                    />
                    <Form.Label htmlFor="password" className='mt-4'>Password:</Form.Label>
                    <Form.Control
                        onBlur={(e) => { setpassword(e.target.value) }}
                        type="password"
                        id="password"
                        className={match || 'text-danger'}
                    />
                    <Form.Label htmlFor="confrim-password" className='mt-4'>Confrim Password:</Form.Label>
                    <Form.Control
                        onBlur={(e) => { setConfirmPassword(e.target.value) }}
                        type="password"
                        id="confrim-password"
                        className={match || 'text-danger'}
                    />
                    <p className='text-center text-danger'><small>{error && error.message}</small></p>
                    <p className='text-center text-danger'><small>{match || "password didn't match"}</small></p>
                    <div>
                        <p className='text-center mt-2'>Already have an account? <Link className='text-danger fw-bold' to='/login'>Log In</Link></p>
                    </div>
                    <div className='d-flex justify-content-center w-100 my-4'>
                        <Button className='px-5 btn-secondary fw-bold' type='submit'>Sign UP</Button>
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

export default Signup;