import { Routes as Router, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Login, Signup } from "@services";

const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Router location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Router>
    </AnimatePresence>
  );
};

export { Routes };
