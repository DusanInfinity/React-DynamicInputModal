import React from 'react';
import { TextField } from '@mui/material';


const InputTextField = ({id, label, handleValueChange, ...otherParams}) => {

    const onChange = (e) => {
        const value = e.target.value;
        handleValueChange(id, value);
    }
    return ( 
        <TextField
            id={id}
            label={label}
            onChange={onChange}
            { ...otherParams }
        />
     );
}
 
export default InputTextField;