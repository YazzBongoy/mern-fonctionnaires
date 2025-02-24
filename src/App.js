import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Fonctionnaires from "./pages/Fonctionnaires";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/fonctionnaires" element={<ProtectedRoute><Fonctionnaires /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
