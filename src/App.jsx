import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from 'react-hot-toast';

import {ThemeProvider} from "./Utils/ThemeContext"

import OpeningPage from "./Pages/OpeningPage";
import HomePage from "./Pages/HomePage";

function App() {
  const location = useLocation();
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<OpeningPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
