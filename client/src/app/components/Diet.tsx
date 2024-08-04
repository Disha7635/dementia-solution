"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Box } from '@mui/material';

const mealTypes = ['breakfast', 'lunch', 'dinner', 'dessert'];
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const fetchMealData = async (type:any) => {
  const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
    params: {
      apiKey: 'd1972ac17f9e43dbaa182f29e782da7f', 
      cuisine: 'Mediterranean',
      type: type,
      number: 2 * 7,
    },
  });
  return response.data.results;
};

const Diet = () => {
  const [mealData, setMealData] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    dessert: [],
  });

  useEffect(() => {
    const fetchAllMeals = async () => {
      const mealPromises = mealTypes.map((type) => fetchMealData(type));
      const mealResults = await Promise.all(mealPromises);
      setMealData({
        breakfast: mealResults[0],
        lunch: mealResults[1],
        dinner: mealResults[2],
        dessert: mealResults[3],
      });
    };
    fetchAllMeals();
  }, []);

  return (
    <Container>
      {mealTypes.map((mealType) => (
        <Box key={mealType} mb={4}>
          <Typography variant="h4" gutterBottom>{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</Typography>
          <Grid container spacing={4}>
            {daysOfWeek.map((day, index) => (
              <Grid item key={day} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{day}</Typography>
                    {mealData[mealType].slice(index * 2, index * 2 + 2).map((recipe:any) => (
                      <Box key={recipe.id} mb={2}>
                        <CardMedia
                          component="img"
                          alt={recipe.title}
                          height="140"
                          image={recipe.image}
                          title={recipe.title}
                        />
                        <Typography variant="subtitle1">{recipe.title}</Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Diet;