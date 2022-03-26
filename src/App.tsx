import React from 'react';
import Layout from './Layout';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Layout />
    </div>
  );
}

export default App;
