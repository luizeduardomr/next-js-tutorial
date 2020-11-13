import { useState } from "react";
import Link from "next/link";

function Nome() {
  const [nome, setNome] = useState("amigo(a)");
  const [mode, setMode] = useState("Light Mode");

  function addMode() {
    var modo = document.getElementById("modo");
    if (modo.value == "Light Mode") {
      document.body.style.background = "#dbdbdb";
      document.getElementById("container").style.background = "#cacaca";
      document.getElementById("title").style.color = "#000";
      document.getElementById("title-small").style.color = "green";
      setMode("Dark Mode");
    } else {
      setMode("Light Mode");
      document.body.style.background = "#27252c";
      document.getElementById("container").style.background = "#33303a";
      document.getElementById("title").style.color = "aliceblue";
      document.getElementById("title-small").style.color = "#98d6ec";
    }
  }

  function addName() {
    var newNome = document.getElementById("nomeid").value;
    document.getElementById("nomeid").addEventListener("keyup", (event) => {
      if (event.key !== "Enter") return; // Use `.key` instead.
      document.getElementById("inputName").click(); // Things you want to do.
      event.preventDefault(); // No need to `return false;`.
    });
    setNome(newNome);
  }

  return (
    <div>
      <Link id="link" href="./todolist">
        <a>Página To-Do-List!</a>
      </Link>
      <div id="container" class="container">
        <h2 id="title">
          Olá, {nome}!<small id="title-small">Seja bem vindo(a) :)</small>
        </h2>
        <div class="group">
          <input
            type="text"
            id="nomeid"
            placeholder="Digite seu nome"
            s
          ></input>
          <input
            onClick={addName}
            id="inputName"
            value="Enviar"
            type="submit"
          ></input>
        </div>
      </div>
      <input type="submit" id="modo" value={mode} onClick={addMode}></input>
    </div>
  );
}
function index() {
  return <Nome />;
}

export default index;
