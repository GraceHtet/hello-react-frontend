import React from 'react';
import { Routes, Route } from 'react-router';
import Greeting from './component/Greeting';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
};

export default App;
