import React, { useEffect, useState } from 'react';
import { StopWatchNumber, StopWatchWrapper } from './styled';
import { useLocation } from 'react-router-dom';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setRunning(false);
      setTime(0);
    }
    if (location.pathname.includes('quiz')) {
      setRunning(true);
    }
    if (location.pathname.includes('result')) {
      setRunning(false);
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
    if (running) {
      interval;
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <StopWatchWrapper>
      <StopWatchNumber>
        {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
      </StopWatchNumber>
      <StopWatchNumber>
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
      </StopWatchNumber>
      <StopWatchNumber>{('0' + ((time / 10) % 100)).slice(-2)}</StopWatchNumber>
    </StopWatchWrapper>
  );
};
export default Stopwatch;
