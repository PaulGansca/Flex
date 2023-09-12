import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/Home";
import OurWorkPage from "./pages/OurWork";
import ProjectOnePage from "./pages/ProjectOne";
import ScrollToTop from "./util/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="our-work">
            <Route index element={<OurWorkPage />} />
            <Route path="project-1" element={<ProjectOnePage />} />
          </Route>
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
