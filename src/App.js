import { CssBaseline, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getPlacesData } from './api';


const theme = createTheme();
 

function App() {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  },[])

  useEffect(() => {
    getPlacesData(bounds?.sw,bounds?.ne)
    .then((data) => {
      setPlaces(data)
    })
  },[coordinates, bounds])

  return (
   <>
     <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12} md={4}>
        <List places={places} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
      </Grid>
    </Grid>
    </ThemeProvider>
   </>
  );
}

export default App;
