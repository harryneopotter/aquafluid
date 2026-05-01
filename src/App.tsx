import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductDetailPage from './components/ProductDetailPage';
import DistributorsPage from './components/DistributorsPage';
import SolutionsPage from './components/SolutionsPage';
import AcademyPage from './components/AcademyPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-brand-aqua/30 bg-bg-primary transition-colors duration-500 text-text-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/distributors" element={<DistributorsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/academy" element={<AcademyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
