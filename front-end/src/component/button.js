import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export function ContainedButtons({firstName, lastName, _id}) {
  const navigate = useNavigate();
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" style={{marginBottom:'5vh'}} onClick={() => {         
           navigate('/form', { state: { firstName, lastName,  _id } });
        }}>Start</Button>
      </Stack>
    </>
  );
};

export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" >
     
      <Button variant="contained" style={{marginLeft:'50%'}}>Create your beautiful portfolio !</Button>
      
    </Stack>
  );
}
