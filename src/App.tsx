// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import NotFound from "./NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>AI-Powered Chat System</h1>
        <Routes>
          <Route path="" element={<Chat />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for undefined paths */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
