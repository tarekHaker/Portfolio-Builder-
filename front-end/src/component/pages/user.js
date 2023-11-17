import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NavUser from './navUser';
import FloatingButtons from '../iconUser';
import Button from '@mui/material/Button';
import MediaCard from '../portfiolo';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';

export default function User() {
  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const id = params.get('id');

  const [portfolios, setPortfolios] = useState([]);
  const portfolioCount = params.get('portfolioCount') || 0;
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
                console.log(portfolioItem);

                const imageSrc =
                  portfolioItem.image &&
                  portfolioItem.image.contentType 
                  &&
                  portfolioItem.image.data
                   &&
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
                      <Button size="small" onClick={() => { /* Handle edit action */ }}>Edit</Button>
                      <Button size="small" onClick={() => { /* Handle show action */ }}>Show</Button>
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
        <MediaCard />
      </div>
    </div>
  );
}