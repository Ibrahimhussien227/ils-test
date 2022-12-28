import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route page="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
