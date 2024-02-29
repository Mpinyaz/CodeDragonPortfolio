import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./routes/index";

const App = () => {
  const router = createBrowserRouter(PrivateRoutes());
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
