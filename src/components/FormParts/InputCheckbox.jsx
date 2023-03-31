import React from 'react';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

const InputCheckbox = ({ id, label, value, handleValueChange, formControlLabelProps, ...otherProps}) => {

    const onChange = (e) => {
        const checked = e.target.checked;
        handleValueChange(id, checked);
    }

    return ( 
        <FormControlLabel 
            control={
                <Checkbox 
                    id={id}
                    onChange={onChange}
                    checked={value === true}
                    { ...otherProps }
                />} 
            label={label}
            { ...formControlLabelProps }
        />
     );
}
 
export default InputCheckbox;