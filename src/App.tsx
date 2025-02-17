import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
