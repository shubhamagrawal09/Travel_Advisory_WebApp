import React from 'react';
import useStyles from './styles';
import { useMediaQuery } from '@mui/material';
import GoogleMapReact from 'google-map-react';


const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(('min-width:600px'));

  const coordinate = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBqkcOrlxCtFLtnalok5EOQcAn-RH9EJPc' }}
        defaultCenter={coordinate}
        center={coordinate}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map