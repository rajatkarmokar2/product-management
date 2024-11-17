import * as React from 'react';
import Box from '@mui/material/Box';
import MiModal from '@mui/material/Modal';

const Modal = ( { open = false,onClose,children } ) => {
    return (
        <MiModal
            open={ open }
            onClose={ onClose }
        >
            <Box className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded'>
                { children }
            </Box>
        </MiModal>
    );
}

export default Modal
