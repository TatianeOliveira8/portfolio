import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Curriculo from './pages/curriculo.jsx';

function LayoutWithNavbar({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function AppRoutes() {
// const location = useLocation();

  return (
    <Routes>
      <Route
        path="/curriculo"
        element={<Curriculo />}
      />
      <Route
        path="*"
        element={
          <LayoutWithNavbar>
            <Inicio />
          </LayoutWithNavbar>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
