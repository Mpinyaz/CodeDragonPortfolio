import "./styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./routes/index";

const App = () => {
  const router = createBrowserRouter(PrivateRoutes());
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
