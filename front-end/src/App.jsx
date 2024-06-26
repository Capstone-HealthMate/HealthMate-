import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import DetailPage from "./pages/DetailPage";
import "./index.css";

import DisscusPage from "./pages/DisscusPage";

import DetaiilDisscusPage from "./pages/DetaiilDisscusPage";

import AuthLayout from "./components/layout/auth.jsx";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AddArticlePage from "./pages/AddArticlePage.jsx";

import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/article/:id" element={<DetailPage />} />
        <Route path="/article/add" element={<AddArticlePage />} />
        <Route path="/discuss" element={<DisscusPage />} />
        <Route path="/discuss/:id" element={<DetaiilDisscusPage />} />
      </Routes>
    </div>
  );
}

export default App;
