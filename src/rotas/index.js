import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContatoScreen from "../screens/ContatoScreen.jsx";
import HomeScreen from "../screens/HomeScreen";
import Body from "../componentes/Body.jsx";
import Calculadora from "../componentes/calculadora.jsx";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<HomeScreen />} path="/" />
          <Route element={<Calculadora />} path="/calculadora" />
          <Route element={<ContatoScreen />} path="/contato" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}