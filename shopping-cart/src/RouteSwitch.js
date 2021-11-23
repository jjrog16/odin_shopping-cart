import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

export default function RouteSwitch() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}