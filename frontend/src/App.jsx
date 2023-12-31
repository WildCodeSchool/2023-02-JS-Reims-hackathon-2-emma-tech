import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Android from "./pages/Android";
import Ios from "./pages/Ios";
import Stockage from "./pages/Stockage";
import Faq from "./pages/Faq";
import Confirmation from "./components/Confirmation";
import StockageRecap from "./components/StockageRecap";
import SurveyRecap from "./components/SurveyRecap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/ajoute-un-appareil" element={<Survey />} />
        <Route path="/android" element={<Android />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/recapitulatif" element={<SurveyRecap />} />
        <Route path="/stockage" element={<Stockage />} />
        <Route path="/stockage/recapitulatif" element={<StockageRecap />} />
        <Route path="/foire-aux-questions" element={<Faq />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
