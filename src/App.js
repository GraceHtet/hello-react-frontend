import React from 'react';
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import Greeting from './component/Greeting';
import store from './store/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
