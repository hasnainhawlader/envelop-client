import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { user } = useAuthContext();
  return (
    <div className="app container mx-auto">
      <Navbar />
      <div className="upperlevel-container min-h-screen">
        <Routes>
          <Route
            path="/"
            element={!user ? <Navigate to="/login" /> : <Chat />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default App;
