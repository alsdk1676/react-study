import React from 'react';
import Child from './Child';
import { FontSizeProvider } from './FontContext';

const Parent = () => {
  return (
    <FontSizeProvider>
      <Child />
    </FontSizeProvider>
  );
};

export default Parent;