import React from 'react'
import useStyles from './styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PlaceDetails = ({place}) => {
  const classes = useStyles();

  return (
   <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place?.photo ? place?.photo?.images?.large?.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'}
        title={place?.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' >{place?.name}</Typography>
      </CardContent>
   </Card>
  )
}

export default PlaceDetails