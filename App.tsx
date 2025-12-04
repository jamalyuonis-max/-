import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Issues from './pages/Issues';
import News from './pages/News';
import Contact from './pages/Contact';
import InternationalLaw from './pages/InternationalLaw';
import GeminiAssistant from './components/GeminiAssistant';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>(Language.EN);

  return (
    <Router>
      <Layout language={language} setLanguage={setLanguage}>
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
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
