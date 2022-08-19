import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navpage } from "./pages/Main";
import { Aboutpage } from "./pages/About";
import { ConverterPage } from "./pages/Converter";
function App() {
  return (
    <BrowserRouter>
      <div className=" static font-mono text-slate-100">
        <Header />
        <div className="container mx-auto mt-2">
          <Routes>
            <Route element={<Navpage />} path="/" />
            <Route element={<Aboutpage />} path="/about" />
            <Route element={<ConverterPage />} path="/converter/:category" />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
