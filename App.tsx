import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Issues from './pages/Issues';
import News from './pages/News';
import Contact from './pages/Contact';
import InternationalLaw from './pages/InternationalLaw';
import WhatWeDo from './pages/WhatWeDo';
import GeminiAssistant from './components/GeminiAssistant';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <Layout language={language} setLanguage={setLanguage} theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/what-we-do" element={<WhatWeDo language={language} />} />
          <Route path="/issues" element={<Issues language={language} />} />
          <Route path="/international-law" element={<InternationalLaw language={language} />} />
          <Route path="/news" element={<News language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
      </Layout>
      <GeminiAssistant language={language} />
    </Router>
  );
}

export default App;