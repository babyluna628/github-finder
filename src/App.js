import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import Alert from "./components/layout/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState("");
  const handleAlert = (msg) => {
    setAlert(msg);
    //3초후에 메시지 사라짐
    setTimeout(() => setAlert(""), 3000);
  };
  return (
    <GithubProvider>
      <BrowserRouter>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title="Github Finder" />

          <main className="container mx-auto px-3 pb-12">
            <Alert alert={alert} />
            <Routes>
              <Route path="/" element={<Home handleAlert={handleAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
