import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
const App = () => {
  const { user } = useAuthContext();

  return (
    <div className="app container mx-auto">
      <div className="upperlevel-contents min-h-screen">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};
