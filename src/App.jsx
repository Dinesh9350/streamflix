import React, { Profiler } from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  MovieInformation,
  Movies,
  Navbar,
  Profile,
  Actors,
} from './components';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Router>
          <Routes>
            <Route exact path='/movies/:id' element={<MovieInformation />} />
            <Route exact path='/actors/:id' element={<Actors />} />
            <Route exact path='/' element={<MovieInformation />} />
            <Route exact path='/profile/:id' element={<Profile />} />
          </Routes>
        </Router>
        </div>
      </main>
    </div>
  );
}

export default App;
