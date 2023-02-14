import React, { ChangeEvent } from 'react';
import './formInput.css';

const FormInput = (props: { name: string | undefined; placeholder: string | undefined; }) => {

    const onChange = (e: ChangeEvent) => {
        
    }

    return (
        <div className='formInput'>
            <input name={props.name} placeholder={props.placeholder} />
        </div>
    );
}

export default FormInput;