import React from 'react';
import MainPage from './pages/MainPage';
import ThemeContext from './components/Context/Context';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Rules from './pages/rules';
import ErrorPage from './pages/404';
function App() {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ modal, setModal }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="/privacy" element={<PrivacyPolicy />} exact />
          <Route path="/rules" element={<Rules />} exact />
          <Route path="*" element={<ErrorPage />} exact />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
