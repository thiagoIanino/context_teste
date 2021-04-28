import React from 'react';

import './App.css';
import Container from './componets/container'
import UserProvider from './context/user/user'


function App() {
  return (


     <UserProvider>
     <Container/>

     </UserProvider>
     
  );
}

export default App;
