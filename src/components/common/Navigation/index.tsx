import React from 'react';
import { NavigationInner, NavigationWrapper } from './styled';
import Stopwatch from '../Stopwatch';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationInner>
        <Stopwatch />
      </NavigationInner>
    </NavigationWrapper>
  );
};

export default Navigation;
