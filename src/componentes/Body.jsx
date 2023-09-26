import { Outlet } from "react-router-dom";
import Cabecalho from "./Cabecalho";
import Footer from "./Footer";
import Calculadora from "./calculadora";


export default function Body() {
  return (
    <div>
      <Cabecalho />
      <Calculadora />
      <Outlet />
      <Footer />
    </div>
  );
}