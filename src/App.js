import { RegistrationPage } from "./pages/registrationPage";
import { LoginPage } from "./pages/loginPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />;
          <Route path="/cadastro" element={<RegistrationPage />} />;
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
