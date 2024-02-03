import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
