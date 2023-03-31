import { Modal } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
    alignItems: 'flex-start'
}

const InputModal = ({ open, handleClose, handleSave, children, initialState }) => {
    const [dataState, setDataState] = useState(initialState ?? {});

    const setData = (id, value) => {
        const newData = {};
        newData[id] = value;

        setDataState(s => ({ ...s, ...newData}));
    }

    const onSave = () => {
        const initialData = {};
        React.Children.forEach(children, child => {
            if(React.isValidElement(child) && child.props.id)
            {
                initialData[child.props.id] = undefined;
            }
        })
        const data = { ...initialData, ...dataState };
        handleSave(data);
    }

    const onClose = () => {
        setDataState(initialState ?? {});
        handleClose();
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
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <div style={childrenDivStyle}>
                {
                    React.Children.map(children, child => {
                        if (React.isValidElement(child) && child.props.id)
                        {
                            console.log(child.props.id);
                            return React.cloneElement(child, { 
                                handleValueChange: setData, 
                                error: isChildEmptyAndRequired(child.props),
                                style: { marginTop: '10px', marginBottom: '10px'},
                                value: dataState[child.props.id] || ''
                             });
                        }
                            
                        return child;
                    })
                }
                <Button onClick={onSave} style={{alignSelf: 'center'}}>Save</Button>
            </div>
            </Box>
        </Modal>
    );
}
 
export default InputModal;