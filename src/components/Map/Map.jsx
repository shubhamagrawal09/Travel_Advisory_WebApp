import React from 'react';
import makeStyles from './styles';
import { useMediaQuery } from '@mui/material';
import GoogleMapReact from 'google-map-react';


const Map = ({ setCoordinates, setBounds, coordinates  }) => {
  const classes = makeStyles();
  const isMobile = useMediaQuery(('min-width:600px'));

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
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map