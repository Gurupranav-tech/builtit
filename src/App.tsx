import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarDemo } from "./components/Navbar";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <NavbarDemo />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
