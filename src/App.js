import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SharedNavbar from "./components/SharedNavbar";
import SingleCocktail from "./components/SingleCocktail";
import Error from "./components/Error";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedNavbar />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cocktail/:cocktailId" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}
