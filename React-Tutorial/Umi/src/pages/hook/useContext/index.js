import React from 'react';
import { UserContextProvider } from './userContext';
import App from './app';

export default function HookContext(props) {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
}
