import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FloatingActionButtons from '../icon';
import InputFileUpload from '../uploadButton';
import axios from 'axios'; 
import { useLocation } from 'react-router-dom'; 
import {BasicButtons} from '../button'

const ImagePreview = ({ image }) => {
  if (!image) return null;
  return <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: '20%', height: 'auto', marginTop: '20px' }} />;
};

export default function Form() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [skills, setSkills] = useState([]); 
  const [job, setJob] = useState(''); 
  const [jobDescription, setJobDescription] = useState(''); 

  const location = useLocation();
  const { state } = location;

  const { firstName, lastName, _id } = state || {};
//console.log("id", _id)
 

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedImage(event.target.files[0]);
    }
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value.split(',').map((skill) => skill.trim())); // Assuming skills are comma-separated
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (uploadedImage) {
      formData.append('image', uploadedImage);
    }

    formData.append('aboutMe', document.getElementById('aboutMe').value);
      formData.append('skills', JSON.stringify(skills));
    formData.append('job', job);
    formData.append('jobdescription', jobDescription);
    console.log('Form Data:', formData);
    console.log('_id:', _id);

    try {
      const response = await axios.put(`http://localhost:5000/users/user/${_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('User data updated:', response.data);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
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
          <TextField
            label="Professional Summary"
            name="aboutMe"
            type="search"
            variant="standard"
            style={{ width: '100%', marginBottom: '20px' }}
          
          />
             <TextField
            label="Skills"
            name="skills"
            type="text"
            variant="standard"
            style={{ width: '100%', marginBottom: '20px' }}
            onChange={handleSkillsChange}
          />

          <TextField
            label="Job"
            name="job"
            type="search"
            variant="standard"
            style={{ width: '100%', marginBottom: '20px' }}
            onChange={(e) => setJob(e.target.value)}
          />

          <TextField
            label="Job Description"
            name="jobdescription"
            type="search"
            variant="standard"
            style={{ width: '100%', marginBottom: '20px' }}
            onChange={(e) => setJobDescription(e.target.value)}
          />

          <div style={{ width: '30%', marginTop: '5vh' }}>
            <InputFileUpload onChange={handleFileChange} />
          </div>

          <ImagePreview image={uploadedImage} />
          
            <BasicButtons />
          {/* <FloatingActionButtons onClick={handleSubmit} seize={'small'} /> */}
        </div>
      </Box>
    </>
  );
}
