import "./styles.css";
import { MyComponent } from "./components/AboutContent";
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

export default function App() {
  return (
    <div className="App">
      <Header />
      <MyComponent />
      <Footer />
    </div>
  );
}
