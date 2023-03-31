import React, { useState } from 'react';
import Button from '@mui/material/Button';
import InputModal from './Abstracts/InputModal';
import InputTextView from '../FormParts/InputTextField';
import InputTextField from '../FormParts/InputTextField';

const CreateGroupModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSave = (data) => {
        console.log('Save', data);
    }


    return (
        <div>

            <Button className='App-link' onClick={handleOpen}styles={{color: 'white'}}>Open modal</Button>
            <InputModal
                open={open}
                handleClose={handleClose}
                handleSave={onSave}
            >
                <InputTextField
                    id="groupName"
                    label="Name"
                    required
                    fullWidth
                />

                <InputTextField
                    id="groupTag"
                    label="Tag"
                    fullWidth
                />
            </InputModal>
        </div>
    );
}
 
export default CreateGroupModal;