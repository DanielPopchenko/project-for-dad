import React from 'react';
import { Container } from './components/container/Container';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';

const App = () => {
  return (
    <div>
      <Container>
        <Sidebar />
        <Content />
      </Container>
    </div>
  );
};

export default App;
