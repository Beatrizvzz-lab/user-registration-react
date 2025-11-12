import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/App";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
