import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { SchoolScreen } from "../components/school/SchoolScreen";

export const SchoolRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SchoolScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
