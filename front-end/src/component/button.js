import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'

export default function ContainedButtons() {
    const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" style={{marginBottom:'5vh'}}  onClick={()=>{navigate('/form')}}  >Start</Button>
      
    </Stack>
  );
}
