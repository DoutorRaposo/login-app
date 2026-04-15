import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <Routes>
      {routes.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
}

export default App;
