import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <BasicInfo />
    </div>
  );
}

export default App;
