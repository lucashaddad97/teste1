import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [mensagem, setMensagem] = useState("");

  const handleClick = () => {
    setMensagem("🚀 React + Bootstrap funcionando no Vercel!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4 text-center" style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="mb-3">Teste React + Bootstrap</h1>
        <p className="text-muted">Clique no botão para testar</p>

        <button className="btn btn-primary" onClick={handleClick}>
          Testar
        </button>

        {mensagem && (
          <div className="alert alert-success mt-4" role="alert">
            {mensagem}
          </div>
        )}
      </div>
    </div>
  );
}
