
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from "./component/about";
import Contact from "./component/contact";
import Destination from "./component/destinations";
import Home from "./component/home";
import Layout from "./component/layout";
import Tour_packages from "./component/tour_packages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tour_packages" element={<Tour_packages />} />
          <Route path="destination" element={<Destination />} />
          <Route path="tour_packages" element={<Tour_packages />} />
          <Route path="contact" element={<Contact />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
