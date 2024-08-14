import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Dashboard from './components/Dashboard';
import { PacmanLoader } from 'react-spinners';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 10000);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(loaderTimeout);
    }, 2000);

    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (isLoading && showLoader) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PacmanLoader color="#3B82F6" size={30} />
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<ContactForm />} />
          <Route path="/edit/:id" element={<ContactForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
