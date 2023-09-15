import React from 'react';
import { Container } from './components/container/Container';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';

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
