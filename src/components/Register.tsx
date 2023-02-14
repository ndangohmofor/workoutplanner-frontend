import React, { useState } from 'react';
import FormInput from './FormInput';

const Register = () => {

    const handleSubmit = (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(Object.entries(data.entries()));
    }

    return (
        <div className='register'>
            <form>
                <FormInput name='username' placeholder="Username" />
                <FormInput name='email' placeholder="Email" />
                <FormInput name='password' placeholder="Password" />
                <FormInput name='confirmPassword' placeholder="Confirm Password" />
            </form>
        </div>
    )
}
export default Register;