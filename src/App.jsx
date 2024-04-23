import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./routes/index";
import { useEffect, useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { Toaster } from "sonner";
const App = () => {
  const router = createBrowserRouter(PrivateRoutes());
  const [showSplashscreen, setShowSplashscreen] = useState(
    () => !JSON.parse(localStorage.getItem("showedSplashscreen")),
  );

  useEffect(() => {
    setTimeout(() => {
      setShowSplashscreen(false);
      localStorage.setItem("showedSplashscreen", JSON.stringify(true));
    }, 9000);
  }, []);
  return showSplashscreen ? (
    <SplashScreen />
  ) : (
    <div className="App">
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
