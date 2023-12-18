import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import PortfolioIndex from "./pages/PortfolioIndex.jsx";
import Contact from "./pages/ContactIndex.jsx";
import ScrollToTop from "./hooks/ScrollToTheTop.jsx";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/portfolio-app" element={<App />} />
          <Route path="/portfolio-app/contact" element={<Contact />} />
          <Route path="/portfolio-app/portfolio" element={<PortfolioIndex />} />
          <Route
            path="/portfolio-app/portfolio/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="*" element={<Navigate to="/portfolio-app" />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
);
