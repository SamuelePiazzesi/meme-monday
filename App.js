import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import MainNavigator from './src/navigation';

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <MainNavigator />
    </ApplicationProvider>
  );
}
