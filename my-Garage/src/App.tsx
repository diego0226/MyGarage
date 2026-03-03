import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header";
import Home from "./features/home/Home";
import Footer from "./shared/Footer";
import GarageHome from "./features/Garage/GarageHome";
import CarsList from "./features/Garage/CarsList";
import CarDetails from "./features/Garage/CarDetails";
import User from "./features/user/user";
import NotFound from "./shared/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/garage.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/garage" element={<GarageHome />} />
              <Route path="/garage/:type" element={<CarsList />} />
              <Route path="/garage/:type/:id" element={<CarDetails />} />
              <Route path='/profile' element={<User />} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
