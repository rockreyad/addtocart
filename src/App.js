import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";
import Header from "./components/Header";
import ItemsDetails from "./components/ItemsDetails";
import "./styles/tailwind.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/cart" element={<CardsDetails/>}/>
        <Route path="/item" element={<ItemsDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
