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
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const ImagePreview = ({ image }) => {
  if (!image) return null;
  return <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: '20%', height: 'auto', marginTop: '20px' }} />;
};

export default function Form() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [skills, setSkills] = useState(''); 
  const [job, setJob] = useState(''); 
  const [jobdescription, setJobDescription] = useState(''); 
  const [bibliography, setBibliography] = useState(''); 
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const [data, setData] = useState({
    skills: '',
    job: '',
    jobdescription: '',
    userId: '',
    bibliography: '',
  });
  const { firstName, lastName, _id } = state || {};
console.log("id", _id)
 

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedImage(event.target.files[0]);
    }
  };

  const handleBibliographyChange = (event) => {
    setBibliography(event.target.value);
  };


  const handleJobChange = (event) => {
    setJob(event.target.value);
  };


  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };


  const handleSkillsChange = (event) => {
    setSkills(event.target.value); 
  };
  console.log(skills);
  useEffect(() => {
    console.log('Updated Data:', data);
  }, [data]); 
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('bibliography', bibliography);
    formData.append('image', uploadedImage);
    formData.append('skills', skills);
    formData.append('job', job);
    formData.append('jobdescription', jobdescription);
    formData.append('userId', _id);
  
    console.log("ikram", formData);
  
    console.log('_id:', _id);
    try {
      console.log("test", formData);
      const response = await axios.post(`http://localhost:5000/portfolios/portfolios`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/user');
      console.log('Portfolio created:', response.data);
    } catch (error) {
      console.error('Error creating portfolio:', error);
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
            name="bibliography"
            type="search"
            variant="standard"
            style={{ width: '100%', marginBottom: '20px' }}
            value={bibliography}
              onChange={handleBibliographyChange}
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
            value={job}
            onChange={handleJobChange}
          />
          <TextField
            label="Job Description"
            name="jobdescription"
            type="search"
            variant="standard"
            style={{ width: '100%', marginBottom: '20px' }}
            value={jobdescription}
            onChange={handleJobDescriptionChange}
          />

          <div style={{ width: '30%', marginTop: '5vh' }}>
          
          </div>
          <div style={{ width: '30%', marginTop: '5vh' }}>
            <InputFileUpload onChange={handleFileChange} />
          </div>
          <ImagePreview image={uploadedImage} />

          <BasicButtons onClick={handleSubmit} firstName={firstName} lastName={lastName} _id={_id}
           handleSubmit={handleSubmit} />
        </div>
      </Box>
    </>
  );
}