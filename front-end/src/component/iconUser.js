import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { useNavigate } from 'react-router-dom'

export default function FloatingButtons({ seize }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ '& > :not(style)': { m: 1 },marginLeft:'50%',padding:'20px'}} onClick={()=>{navigate('/form')}}>
      <Fab color="primary" aria-label="add" size= {seize }>
        <AddIcon />
      </Fab>
    
    </Box>
  );
}