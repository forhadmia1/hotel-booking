import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <div style={{ width: "400px" }} className='shadow-lg rounded p-4'>
                <h3 className='text-center mt-5'>Sign Up</h3>
                <Form >
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control
                        type="text"
                        id="name"
                    />
                    <Form.Label htmlFor="email" className='mt-4'>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        id="email"
                    />
                    <Form.Label htmlFor="password" className='mt-4'>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                    />
                    <Form.Label htmlFor="confrim-password" className='mt-4'>Confrim Password:</Form.Label>
                    <Form.Control
                        type="password"
                        id="confrim-password"
                    />
                    <div>
                        <p className='text-center mt-2'>Already have an account? <Link className='text-danger fw-bold' to='/login'>Log In</Link></p>
                    </div>
                    <div className='d-flex justify-content-center w-100 my-4'>
                        <Button className='px-5 btn-secondary fw-bold' type='submit'>Sign UP</Button>
                    </div>
                </Form>
                <hr />
                <div>
                    <button className='btn btn-light w-100 btn-outline-secondary'>Sign in with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;