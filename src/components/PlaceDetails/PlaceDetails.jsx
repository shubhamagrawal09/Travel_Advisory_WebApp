import React from 'react'
import useStyles from './styles';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LocationOn, Phone } from '@mui/icons-material';

const PlaceDetails = ({place,selected, refProp}) => {
  const classes = useStyles();

  if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  return (
   <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place?.photo ? place?.photo?.images?.large?.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'}
        title={place?.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' >{place?.name}</Typography>
        <Box display="flex" justifyContent="space-between">
        <Rating size='small' value={Number(place?.rating)} readOnly />
          <Typography gutterBottom variant='subtitle1'>out of {place?.num_reviews} reviews</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place?.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place?.ranking}</Typography>
        </Box>
       { place?.cuisine?.map(({name}) => (
        <Chip key={name} size='small' label={name} className={classes.chip} />
       ))}
       {place?.address && (
        <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.subtitle}>
          <LocationOn /> {place?.address}
        </Typography>
       )}
         {place?.phone && (
        <Typography gutterBottom variant='subtitle2' color="textSecondary" className={classes.spacing}>
          <Phone /> {place?.phone}
        </Typography>
       )}
       <CardActions>
        <Button size='small' color='primary' onClick={() => window.open(place?.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size='small' color='primary' onClick={() => window.open(place?.website, '_blank')}>
          Website
        </Button>
       </CardActions>
      </CardContent>
   </Card>
  )
}

export default PlaceDetails