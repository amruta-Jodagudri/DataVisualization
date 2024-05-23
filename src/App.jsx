import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BarChart/>} />
        <Route path="/component2" element={<PieChart/>} />
        <Route path="/component3" element={<LineChart/>} />
        <Route path="/component4" element={<RadarChart/>} />
      </Routes>
    </Router>
  );
};

export default App;
