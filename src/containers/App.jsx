import React from 'react';
import { Container } from 'reactstrap';
import Navigation from '../components/Navigation';
import Page from './Page';

const App = () => {

  return (
    <Container fluid="sm">
      <Navigation />
      <Page />
    </Container>
  );
}

export default App;