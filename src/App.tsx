import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/student/dashboard" element={
        <ProtectedRoute allowedRoles={["student"]}>
          <div className="p-8">
            <h1 className="text-2xl font-bold">Student Dashboard</h1>
            <p>Coming soon...</p>
          </div>
        </ProtectedRoute>
      } />


      <Route path="/instructor/dashboard" element={
        <ProtectedRoute allowedRoles={["instructor"]}>
          <div className="p-8">
            <h1 className="text-2xl font-bold">Instructor Dashboard</h1>
            <p>Coming soon...</p>
          </div>
        </ProtectedRoute>
      } />

      <Route path="/admin/dashboard" element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <div className="p-8">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p>Coming soon...</p>
          </div>
        </ProtectedRoute>
      } />

      <Route path="/unauthorized" element={
        <div className="p-8">
          <h1 className="text-2xl font-bold text-red-600">Unauthorized</h1>
          <p>You don't have permission to access this page.</p>
        </div>
      } />
    </Routes>
  );
}

export default App;