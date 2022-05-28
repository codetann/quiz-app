import { Routes as Router, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Login } from "@features";

const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Router location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<p>Other</p>} />
      </Router>
    </AnimatePresence>
  );
};

export { Routes };
