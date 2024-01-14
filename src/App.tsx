import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbr from "./compsonts/Navbr/Navbr";
import Home from "./compsonts/Home/Home";
import Login from "./compsonts/login/login";
import Maison from "./data/maisonTyp";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Logique de connexion, par exemple, mise à jour de l'état isAuthenticated
    setIsAuthenticated(true);
    // Déclarez la fonction handleHiddenLinksChange ici
    const handleHiddenLinksChange = () => {
      // Mettez ici la logique pour changer l'état des liens en fonction de newState
      // Par exemple, vous pourriez mettre à jour l'état dans le composant App
      // ou appeler une fonction spécifique du composant Navbr si nécessaire.
    };

    const handleLogin = () => {
      // Logique de connexion, par exemple, mise à jour de l'état isAuthenticated
      setIsAuthenticated(true);
    };
  };

  return (
    <div className="App">
      <Router>
        <Navbr />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/Home" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
