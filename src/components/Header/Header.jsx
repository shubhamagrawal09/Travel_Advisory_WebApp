import React, { useState } from 'react'
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material'
import { Autocomplete } from '@react-google-maps/api'
import { Search } from '@mui/icons-material'
import useStyles from './styles';

const Header = ({ setCoordinates }) => {
    const classes = useStyles();
    const [autoComplete, setAutoComplete] = useState(null)

    const onLoad = (autoC) => setAutoComplete(autoC);

    const onPlaceChanged = () => {
      const lat = autoComplete.getPlace().geometry.location.lat();
      const lng = autoComplete.getPlace().geometry.location.lng();
  
      setCoordinates({ lat, lng });
    };

  return (
    <AppBar position="static">
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.title}>
        Travel Advisor
      </Typography>
      <Box display="flex">
        <Typography variant="h6" className={classes.title}>
          Explore new places
        </Typography>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase placeholder="Search…"  />
          </div>
        </Autocomplete>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Header