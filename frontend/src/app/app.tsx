import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoutes } from "@routes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export { App };
