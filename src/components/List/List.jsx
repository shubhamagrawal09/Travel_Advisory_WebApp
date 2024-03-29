import React, { createRef, useEffect, useState } from 'react'
import useStyles from './styles';
import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';


const List = ({places, childClicked, isLoading, type, setType, rating, setRating}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  console.log({childClicked})

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
    setElRefs(refs)
  },[places])
  
  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
      {
        isLoading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : 
      (
        <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place,i) => (
          <Grid  ref={elRefs[i]} item key={i} xs={12}>
            <PlaceDetails place={place} selected={Number(childClicked) === i} refProp={elRefs[i]} />
          </Grid>
        ))}
      </Grid>
      </>)}
    </div>
  )
}

export default List