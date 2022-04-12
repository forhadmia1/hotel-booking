import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <div className='py-5'>
            <div className='w-100'>
                <h2 className='text-center mb-3'>Lets stay in touch!!</h2>
                <div className='d-flex w-50 mx-auto'>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;