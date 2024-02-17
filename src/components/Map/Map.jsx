import React from 'react';
import makeStyles from './styles';
import { Paper, Rating, Typography, useMediaQuery } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import { LocationOnOutlined } from '@mui/icons-material';


const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {
  const classes = makeStyles();
  const matches = useMediaQuery('(min-width:600px)');
  console.log('sashaaaa',weatherData)
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBqkcOrlxCtFLtnalok5EOQcAn-RH9EJPc' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => setChildClicked(child)}
      > 
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place?.latitude)}
            lng={Number(place?.longitude)}
            key={i}
          >
            {
              !matches ? (
                <LocationOnOutlined color='primary' fontSize='large' />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                    {place?.name}
                  </Typography>
                  <img 
                    className={classes.pointer} 
                    src={place?.photo ? place?.photo?.images?.large?.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'}
                    alt={place?.name}  
                  />
                  <Rating size='small' value={Number(place?.rating)} readOnly />
                </Paper>
              )
            }
          </div>
        ))}
        {
         Object.values(weatherData)?.map((data,i) => (
            <div key={i} lat={data?.coord?.lat} lng={data?.coord?.lon}>
              {console.log('first image',data?.weather[0]?.icon)}
              <img width="120" height="100" src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} />
            </div>
          ))
        }
      </GoogleMapReact>
    </div>
  )
}

export default Map