import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Impressum from "./pages/impressum.jsx";
import WebsiteStats from "./pages/websiteStats.jsx";
import NotFound from "./pages/notfound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/ryijun-landing-page" element={<App />} />
        <Route path="/ryijun-landing-page/imprint" element={<Impressum />} />
        <Route path="/ryijun-landing-page/stats" element={<WebsiteStats />} />
      </Routes>
    </Router>
  </StrictMode>
);
