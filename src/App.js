import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { GlobalStyle } from "./styles/globalStyle";
import userContext from './utils/contexts/userContext';
import { RegistrationPage } from "./pages/registrationPage";
import { ProfilePage } from "./pages/profilePage";
import { LoginPage } from "./pages/loginPage";
import { MoviesPage } from "./pages/moviesPage";
import { ConnectionsPage } from "./pages/connectionsPage";
import { UsersPage } from "./pages/usersPage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <>
      <GlobalStyle />
      <userContext.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />;
            <Route path="/cadastro" element={<RegistrationPage />} />;
            <Route path="/perfil" element={<ProfilePage />} />;
            <Route path="/filmes" element={<MoviesPage />} />;
            <Route path="/conexoes" element={<ConnectionsPage />} />;
            <Route path="/pessoas" element={<UsersPage />} />;
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>

  );
}

export default App;
