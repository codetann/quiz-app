import { Routes, Route, useLocation } from "react-router-dom";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<div />} />
    </Routes>
  );
}

export { AppRoutes };
