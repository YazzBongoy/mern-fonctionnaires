import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Fonctionnaires from "./pages/Fonctionnaires";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";

<Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

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
