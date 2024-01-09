import React from 'react';
import './App.css';
import './fonts/3270Condensed-Regular.otf';
import './fonts/3270SemiCondensed-Regular.otf';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage';
const App: React.FC = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='' element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
