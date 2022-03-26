import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import Error from '../pages/Error';

const Layout = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<Home />} />
      <Route path={'/:id'} element={<Quiz />} />
      <Route path={'/result'} element={<Result />} />
      <Route path={'*'} element={<Error />} />
    </Routes>
  );
};

export default Layout;
