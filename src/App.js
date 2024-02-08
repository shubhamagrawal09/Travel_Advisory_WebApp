import { CssBaseline, Grid } from '@mui/material';
import React from 'react'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme();

function App() {
  return (
   <>
     <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12} md={4}>
        <List />
      </Grid>
      <Grid item xs={12} md={8}>
        <Map />
      </Grid>
    </Grid>
    </ThemeProvider>
   </>
  );
}

export default App;
