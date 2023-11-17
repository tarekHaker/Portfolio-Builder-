import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NavUser from './navUser';
import FloatingButtons from '../iconUser';
import Button from '@mui/material/Button';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();

  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const id = params.get('id');

  const [portfolios, setPortfolios] = useState([]);
  const [portfolioCount, setPortfolioCount] = useState(0);
  console.log(portfolioCount);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/portfolios/portfolios/${id}`);
        console.log('API response:', response.data);
        setPortfolios(response.data);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };

    fetchPortfolios();
  }, [id]);

  useEffect(() => {
    const fetchPortfolioCount = async () => {
      try {
        const userId = params.get('id');
        const response = await axios.get(`http://localhost:5000/portfolios/portfolios/count/${userId}`);
        setPortfolioCount(response.data.count);
      } catch (error) {
        console.error('Error fetching portfolio count:', error);
      }
    };

    fetchPortfolioCount();
  }, [params]);

  useEffect(() => {
    console.log('Updated Portfolios:', portfolios);
  }, [portfolios]);
  const handleEditClick = (portfolioItem) => {
    navigate('/update', {
      state: {
        userId: portfolioItem.user,
        skills: portfolioItem.skills,
        job: portfolioItem.job,
        jobdescription: portfolioItem.jobdescription,
        bibliography: portfolioItem.bibliography,
        experience1: portfolioItem.experience1,
        experiencedescription1: portfolioItem.experiencedescription1,
        experience2: portfolioItem.experience2,
        experiencedescription2: portfolioItem.experiencedescription2,
        education1: portfolioItem.education1,
        education2: portfolioItem.education2,
        descriptioneducation1: portfolioItem.descriptioneducation1,
        descriptioneducation2: portfolioItem.descriptioneducation2,
        image: portfolioItem.image,
        _id: portfolioItem._id,
      },
    });
  };
  
  return (
    <div>
      <NavUser />
      <div className='backgroundOnly'>
        <div className='portfiolo'>
          {Array.isArray(portfolios) && portfolios.length > 0 ? (
            (() => {
              const portfolioItems = [];
              for (let i = 0; i < portfolioCount; i++) {
                const portfolioItem = portfolios[i];

                const imageSrc =
                  portfolioItem.image &&
                  portfolioItem.image.contentType &&
                  portfolioItem.image.data &&
                  `data:${portfolioItem.image.contentType};base64,${portfolioItem.image.data.toString('base64')}`;

                console.log('imageSrc:', imageSrc);

                portfolioItems.push(
                  <Card key={portfolioItem._id} sx={{ maxWidth: 300, margin: '3%' }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={imageSrc || 'https://www.farrer.co.uk/globalassets/work-from-home.jpg?width=840&height=473&mode=crop'}
                      title={portfolioItem.job}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {portfolioItem.job}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {portfolioItem.jobdescription}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Button
         size="small"
         onClick={() => {
         console.log('Editing portfolio:', { ...portfolios[i] });
           navigate('/update', {
            state: {
        ...portfolios[i], 
      },
    });
  }}
>
  Edit
</Button>

                      <Button size="small">Show </Button>
                    </CardActions>
                  </Card>
                );
              }
              return portfolioItems;
            })()
          ) : (
            <p>No portfolios available</p>
          )}
        </div>
        <FloatingButtons />
      </div>
    </div>
  );
}
