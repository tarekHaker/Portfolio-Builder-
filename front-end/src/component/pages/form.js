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
import { useNavigate } from 'react-router-dom';

const ImagePreview = ({ image }) => {
  if (!image) return null;
  return <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: '20%', height: 'auto', marginTop: '20px' }} />;
};

export default function Form() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [skills, setSkills] = useState(''); 
  const [job, setJob] = useState(''); 
  const [jobDescription, setJobDescription] = useState(''); 
  const [aboutMe, setAboutMe] = useState(''); 
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const { firstName, lastName, _id } = state || {};
console.log("id", _id)
 
//const addProductPurchase = async (id, values) => {
  //try {
    //await axios({
      //method: "put",
      //headers: {
        //Accept: "application/json",
      //"Content-Type": "application/json;charset=UTF-8",
      //},
      //url: `http://localhost:5000/users/user/${_id}`,
      //data: {
       // productList: values.productList,
      //},
    //});
    //return "success";
    // return data;
 // } catch (error) {
   // console.log(error.message);
  //}
//};
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedImage(event.target.files[0]);
    }
  };

  const handleaboutMeChange = (event) => {
    setAboutMe(event.target.value);
  };
  console.log(aboutMe);

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };
  console.log(job);

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };
  console.log(jobDescription);

  const handleSkillsChange = (event) => {
    setSkills(event.target.value); 
  };
  console.log(skills);
  const [data, setData] = useState({})
 


  const handleSubmit = async () => {
    setData( 
       {   image:uploadedImage,
      aboutMe: aboutMe,
      skills: skills,
      job: job,
      jobDescription:jobDescription
  
     })
     console.log("ikram",data);

         console.log('_id:', _id);
    try {
      console.log('Form Data:', data);

      const response = await axios.put(`http://localhost:5000/users/user/${_id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/user');
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
            value={aboutMe}
              onChange={handleaboutMeChange}
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
            value={jobDescription}
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