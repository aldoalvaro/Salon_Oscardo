import React, { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/tailwind.css";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Karyawan = lazy(() => import("./pages/Karyawan"));

const Login = lazy(() => import("./pages/Login")); 

const Loading = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#10b981] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/karyawan" element={<Karyawan />} />
          </Route>
          
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);