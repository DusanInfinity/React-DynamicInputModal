import React from 'react';
import { TextField } from '@mui/material';


const InputTextField = ({id, label, handleValueChange, error, errorText, helperText, ...otherProps}) => {

    const onChange = (e) => {
        const value = e.target.value;
        handleValueChange(id, value);
    }
    return ( 
        <TextField
            id={id}
            label={label}
            onChange={onChange}
            error={error}
            helperText={(error && errorText) || helperText}
            { ...otherProps }
        />
     );
}
 
export default InputTextField;