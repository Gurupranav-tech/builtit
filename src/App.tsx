import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
