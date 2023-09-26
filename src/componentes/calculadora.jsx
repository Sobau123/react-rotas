import { useState } from "react";
import { Link } from "react-router-dom";

export default function Calculadora() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [soma, setSoma] = useState(0);
  const [mulplicacao, setMultiplicacao] = useState(0)

  return (
    <div className="App">
      <Link to="/contato">ir para calculadora</Link>

      <h1>Meu primeiro App em React</h1>
      <input type="text" value={contador1} onChange={() => { }} />
      <input type="text" value={contador2} onChange={() => { }} />
      <input type="text" value={soma} onChange={() => { }} />
      <input type="text" value={mulplicacao} onChange={() => { }} />
      <button onClick={() => setContador1(contador1 + 1)}> Clique aqui</button>
      <button onClick={() => setContador2(contador2 + 1)}> Clique aqui</button>
      <button onClick={() => setSoma(contador1 + contador2)}>Somar</button>
      <button onClick={() => setMultiplicacao(contador1 * contador2 * soma)}>Mulplicação</button>
    </div>
  );
}