import { Routes, Route, useLocation } from "react-router-dom";
import { Login, Register } from "@features";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export { AppRoutes };
