// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Services from './components/Services';
import Blog from './components/Blog';
import PriceEstimator from './components/PriceEstimator';
import VirtualConsultation from './components/VirtualConsultation';
import LiveChat from './components/LiveChat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/price-estimator" element={<PriceEstimator />} />
        <Route path="/virtual-consultation" element={<VirtualConsultation />} />
        <Route path="/live-chat" element={<LiveChat />} />
      </Routes>
    </Router>
  );
};

export default App;
