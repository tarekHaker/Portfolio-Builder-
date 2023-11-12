import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FloatingActionButtons from '../icon'; 
import InputFileUpload from '../uploadButton'; 

const ImagePreview = ({ image }) => {
  if (!image) return null;
  return <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: '20%', height: 'auto', marginTop: '20px' }} />;
};

export default function Form() {
  const [educationFields, setEducationFields] = useState(['Education ']);
  const [workFields, setWorkFields] = useState(['Work Experience ']);
  const [uploadedImage, setUploadedImage] = useState(null);

  const addEducationField = () => {
    setEducationFields([...educationFields, `Education ${educationFields.length + 1}`]);
  };

  const addWorkField = () => {
    setWorkFields([...workFields, `Work Experience ${workFields.length + 1}`]);
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    if (uploadedImage) {
      formData.append('image', uploadedImage);
    }
   
    console.log('Form Submitted', formData); 
  };

  return (
    <>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5vh', paddingBottom: '15vh', backgroundColor: '#e1e1db' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '70%', backgroundColor: 'white', padding: '3vh 6vh', borderRadius: '15px' }}>
          <TextField label="Name" type="search" variant="standard" style={{ width: '100%', marginBottom: '20px' }} />
          <TextField label="Last name" type="search" variant="standard" style={{ width: '100%', marginBottom: '20px' }} />

          {educationFields.map((label, index) => (
            <TextField
              key={index}
              label={label}
              type="search"
              variant="standard"
              style={{ width: '100%', marginBottom: '20px' }}
              InputProps={{
                endAdornment: index === educationFields.length - 1 && (
                  <InputAdornment position="end">
                    <IconButton onClick={addEducationField}>
                      <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          ))}

          {workFields.map((label, index) => (
            <TextField
              key={index}
              label={label}
              type="search"
              variant="standard"
              style={{ width: '100%', marginBottom: '20px' }}
              InputProps={{
                endAdornment: index === workFields.length - 1 && (
                  <InputAdornment position="end">
                    <IconButton onClick={addWorkField}>
                      <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          ))}

          <TextField label="About you" type="search" variant="standard" style={{ width: '100%', marginBottom: '20px' }} />

          <div style={{ width: '30%', marginTop: '5vh' }}>
            <InputFileUpload onChange={handleFileChange} />
          </div>

          <ImagePreview image={uploadedImage}  />

          <FloatingActionButtons onClick={handleSubmit} seize={'small'} /> 
        </div>
      </Box>
    </>
  );
}
