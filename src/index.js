import React from "react";
import ReactDOM from "react-dom/client";
import './styles/main.sass'
import "./styles/banner.sass";
import "./styles/campotexto.sass";
import "./styles/rodape.sass";
import "./styles/botao.sass";
import "./styles/formulario.sass";
import "./styles/funcionario.sass";
import "./styles/time.sass";
import "./styles/listasuspensa.sass";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
