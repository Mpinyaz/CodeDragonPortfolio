import "./styles.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import { ThemeToggler } from "./components/ThemeToggler";

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <ThemeToggler />
      <Routes>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
