import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import InvestWithLimitedRisk from "./pages/InvestWithLimitedRisk/InvestWithLimitedRisk";
import ModelB from "./pages/ModelB/ModelB";
import ModelC from "./pages/ModelC/ModelC";

const App = () => (
  <Router>
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/limit-risk" element={<InvestWithLimitedRisk />} />
          <Route path="/hedge" element={<ModelB />} />
          <Route path="/staked-capital" element={<ModelC />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
