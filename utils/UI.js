'use client';
import { useState } from 'react';
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Canvas from './Canvas';

export default function UI() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    
    <Stack direction="row" spacing={2}>
      <Button variant="contained"  color="success" className='btn' onClick={handleOpen}>Open Now</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-description"
      >
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%', 
                height: '90%', 
                bgcolor: 'white',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                overflow: 'auto', 
            }}
            >
          
          <section id="modal-description">
            <Canvas></Canvas>
          </section>
          <Button onClick={handleClose} variant="contained" color="primary">Close</Button>
        </Box>
      </Modal>
    </Stack>
    </>
  );
}
