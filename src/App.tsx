import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu, MenuItem } from "./components/ui/Navbar"; // Adjust the import path as necessary

const Home = lazy(() => import("./pages/home"));

function App() {
  const [active, setActive] = useState(null);

  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <p>Home Description</p>
          </MenuItem>
          {/* Add more MenuItems as needed */}
        </Menu>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;