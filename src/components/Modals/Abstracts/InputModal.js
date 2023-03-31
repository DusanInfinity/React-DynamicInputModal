import { Modal } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const childrenDivStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const InputModal = ({ open, handleClose, handleSave, children, initialState }) => {
    const [dataState, setDataState] = useState(initialState ?? {});

    const setData = (id, value) => {
        const newData = {};
        newData[id] = value;

        setDataState(s => ({ ...s, ...newData}));
    }

    const onSave = () => {
        const data = dataState;
        handleSave(data);
    }

    const isChildEmptyAndRequired = (childProps) => {
        if(childProps.required && !dataState[childProps.id])
            return true;
        else
            return false;
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <div style={childrenDivStyle}>
                {
                    React.Children.map(children, child => {
                        if (React.isValidElement(child) && child.props.id)
                        {
                            console.log(child.props.id);
                            return React.cloneElement(child, { 
                                handleValueChange: setData, error: 
                                isChildEmptyAndRequired(child.props),
                                style: { marginTop: '20px'}
                             });
                        }
                            
                        return child;
                    })
                }
                <Button onClick={onSave}>Save</Button>
            </div>
            </Box>
        </Modal>
    );
}
 
export default InputModal;