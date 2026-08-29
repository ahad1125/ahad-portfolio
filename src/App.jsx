import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layouts/root-layout";
import AppLayout from "./components/layouts/app-layout";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import ProjectsPage from "./pages/projects";
import ProjectDetailPage from "./pages/project-detail";
import NotFoundPage from "./pages/not-found";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
