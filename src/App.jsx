import "./styles.css";
import { MyComponent } from "./components/AboutContent";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <MyComponent />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
