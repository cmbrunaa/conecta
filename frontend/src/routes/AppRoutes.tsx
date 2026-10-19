import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Resume } from "../pages/Resume/Resume";
import { Courses } from "../pages/Courses/Courses";
import { Guide } from "../pages/Guide/Guide";
import { Security } from "../pages/Security/Security";
import { Opportunities } from "../pages/Opportunities/Opportunities";

import { ScrollToTop } from "../components/layout/ScrollToTop/ScrollToTop";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/curriculo" element={<Resume />} />

        <Route path="/cursos" element={<Courses />} />

        <Route path="/guia" element={<Guide />} />

        <Route path="/oportunidades" element={<Opportunities />} />

        <Route path="/seguranca" element={<Security />} />
      </Routes>
    </BrowserRouter>
  );
}