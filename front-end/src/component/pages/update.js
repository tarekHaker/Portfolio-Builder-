import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputFileUpload from '../uploadButton';

const ImagePreview = ({ image }) => {
  if (!image) return null;
  return <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: '20%', height: 'auto', marginTop: '20px' }} />;
};

export default function FormUpdate() {
  const [data, setData] = useState({
    skills: '',
    job: '',
    jobdescription: '',
    userId: '',
    bibliography: '',
  });
  const location = useLocation();
  const { state } = location;


  const [uploadedImage, setUploadedImage] = useState(null);
  const [skills, setSkills] = useState('');
  const [job, setJob] = useState('');
  const [jobdescription, setJobDescription] = useState('');
  const [bibliography, setBibliography] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setSkills(state.skills);
      setJob(state.job);
      setJobDescription(state.jobdescription);
      setBibliography(state.bibliography);
      setUploadedImage(state.image ? new File([], state.image.name) : null);
    }
  }, [state]);
  const { firstName, lastName, _id } = state || {};
  console.log("id", _id);
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedImage(event.target.files[0]);
    }
  };

  const handleBibliographyChange = (event) => {
    setBibliography(event.target.value);
  };
console.log("Bibliography",bibliography)
  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };
  useEffect(() => {
    if (state) {
      setSkills(state.skills || '');
      setJob(state.job || '');
      setJobDescription(state.jobdescription || '');
      setBibliography(state.bibliography || '');
      setUploadedImage(state.image ? new File([], state.image.name) : null);
      setData((prevData) => ({ ...prevData, userId: _id || '' }));
    }
  }, [state]);
  //console.log("utilisateur", userId);
  const handleSubmit = async () => {
    const requestData = {
      bibliography,
    image: uploadedImage,
      skills,
      job,
      jobdescription,
      _id,
    };
  
    try {
      const response = await axios.put(`http://localhost:5000/portfolios/portfolios/${_id}`, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      window.alert('Update done successful');
      navigate('/portfolio');
     

      console.log('Portfolio created:', response.data);
    } catch (error) {
      console.error('Error updating portfolio:', error);
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
            value={skills}
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

          <div style={{ width: '30%', marginTop: '5vh' }}></div>
          <div style={{ width: '30%', marginTop: '5vh' }}>
            <InputFileUpload onChange={handleFileChange} />
          </div>
        <ImagePreview image={uploadedImage} />
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 'auto' }}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </div>
      </Box>
    </>
  );
}
