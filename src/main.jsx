import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import PortfolioIndex from "./pages/PortfolioIndex.jsx";
import Contact from "./pages/ContactIndex.jsx";
import ScrollToTop from "./hooks/ScrollToTheTop.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter >
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<PortfolioIndex />}></Route>
          <Route path="/portfolio/:projectId" element={<ProjectDetails/>} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
