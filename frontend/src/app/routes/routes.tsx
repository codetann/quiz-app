import { Routes, Route, useLocation } from "react-router-dom";
import { Login } from "@features";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export { AppRoutes };
