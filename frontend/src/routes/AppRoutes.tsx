import { Routes, Route } from "react-router-dom";
import { HomePage } from "../features/home";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}

      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      {/* 404 */}

      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center text-2xl font-bold">
            404 - Page introuvable
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
