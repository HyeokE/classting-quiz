import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import Error from '../pages/Error';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/:id'} element={<Quiz />} />
        <Route path={'/result'} element={<Result />} />
        <Route path={'*'} element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Layout;
