import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import Error from '../pages/Error';

const Layout = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path={'/*'} element={<Home />} />
      <Route path={'/quiz/:id'} element={<Quiz />} />
      <Route path={'/result'} element={<Result />} />
      <Route path={'*'} element={<Error />} />
    </Routes>
  );
};

export default Layout;
