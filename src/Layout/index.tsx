import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import Error from '../pages/Error';
import Navigation from '../components/common/Navigation';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <div
        style={{
          display: 'flex',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/quiz/:id'} element={<Quiz />} />
          <Route path={'/result'} element={<Result />} />
          <Route path={'*'} element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
