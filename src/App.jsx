import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./routes/index";
import { Toaster } from "sonner";
const App = () => {
  const router = createBrowserRouter(PrivateRoutes());
  return (
    <div className="App">
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
