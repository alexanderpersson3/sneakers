import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductDetails from "./pages/ProductDetails";
type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductDetails />} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/register" element={<div>register</div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
