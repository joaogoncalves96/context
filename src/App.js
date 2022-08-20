import { useState } from 'react';
import Aluno from './aluno'
import UserProvider from './contexts/user';

function App() {

  return (
    <UserProvider>
    <div className="App">
      <h1>App</h1>
      <Aluno />
    </div>
    </UserProvider>
  );
}

export default App;
