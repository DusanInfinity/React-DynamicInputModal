import React, { useState } from 'react';
import Button from '@mui/material/Button';
import InputModal from './Abstracts/InputModal';
import InputTextField from '../FormParts/InputTextField';
import InputCheckbox from '../FormParts/InputCheckbox';

const CreateGroupModal = () => {
    const [currState, setOpen] = useState({ open: false, initialState: {}});
    const handleOpen = () => setOpen(s => ({ ...s, open: true, initialState: { groupName: undefined }}));
    const handleClose = () => setOpen(s => ({ ...s, open: false}));

    const onSave = (data) => {
        console.log('Save', data);
        setOpen(false);
    }


    return (
        <div>

            <Button onClick={handleOpen}style={{color: 'black', fontSize: '50px'}}>Open modal</Button>
            <InputModal
                open={currState.open}
                handleClose={handleClose}
                handleSave={onSave}
                initialState={currState.initialState}
            >
                <InputTextField
                    id="groupName"
                    label="Name"
                    required
                    errorText={'You need to enter group name!'}
                    helperText={'Name that will be used for new group.'}
                    fullWidth
                />

                <InputTextField
                    id="groupTag"
                    label="Tag"
                    required
                />

                <InputCheckbox
                    id="isAdmin"
                    label="Is Admin"
                    formControlLabelProps={{
                        labelPlacement: 'start'
                    }}
                />
                <InputCheckbox
                    id="isAdmin2"
                    label="Is Admin2"
                />
            </InputModal>
        </div>
    );
}
 
export default CreateGroupModal;