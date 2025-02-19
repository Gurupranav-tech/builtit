import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import TechClubs from "./pages/Clubs/TechClubs";
import CultClubs from "./pages/Clubs/CultClubs";
import SportsClubs from "./pages/Clubs/SportsClubs";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clubs/tech" element={<TechClubs />} />
            <Route path="/clubs/cult" element={<CultClubs />} />
            <Route path="/clubs/sports" element={<SportsClubs />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
