import React from 'react';
import MainScreen from './components/MainScreen';

import CountContextProvider from './context/countContextProvider';

export default function App() {
  return (
    <CountContextProvider>
      <MainScreen />
    </CountContextProvider>
  );  
}