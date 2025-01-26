import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';

import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    // This code was related to speechState, but it can be removed now
    // if you have no other dependencies.
    executeScroll();
  }, []);

  return (
    <div>
      <Grid container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
  <Grid item xs={12} sm={4}>
    <Details title="Income" />
  </Grid>
  <Grid ref={main} item xs={12} sm={3}>
    <Main />
  </Grid>
  <Grid item xs={12} sm={4}>
    <Details title="Income" />
  </Grid>
  <Grid item xs={12} sm={4}>
    <Details title="Expense" />
  </Grid>
</Grid>

    </div>
  );
};

export default App;
