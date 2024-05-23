import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from "react-router-dom";

import "@scss/Global.scss"
import { PAGE_PATHS } from "@common/Constants"
import HomePage from "@pages/HomePage";
import ProjectsPage from "@pages/ProjectsPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={`${PAGE_PATHS.HOME}`} />} />
      <Route path={PAGE_PATHS.HOME} element={<HomePage />} />
      <Route path={PAGE_PATHS.PROJECTS} element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
