import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() =>
  import("../features/home").then((module) => ({
    default: module.HomePage,
  })),
);

const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));

const RegisterPage = lazy(() => import("../features/auth/pages/RegisterPage"));

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Chargement...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center text-2xl font-bold">
              404 - Page introuvable
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
}
