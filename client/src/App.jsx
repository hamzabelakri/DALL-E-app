import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormField from "./Components/FormField";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Card from "./Components/Card";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/form" element={<FormField />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
