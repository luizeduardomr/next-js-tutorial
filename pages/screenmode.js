import { useState } from "react";

function Nome() {
  const [nome, setNome] = useState("amigo(a)");
  const [mode, setMode] = useState('Light Background');

  function addMode(){
    var modo = document.getElementById('modo');
    if(modo.value== 'Light Background'){
      document.body.style.background = "#dbdbdb";
      setMode('Dark Background');
    }
    else{
      setMode('Light Background');
      document.body.style.background = "#27252c";

    }
  }

  function addName() {
    var newNome = document.getElementById("nomeid").value;
    document.getElementById("nomeid").addEventListener("keyup", event => {
      if(event.key !== "Enter") return; // Use `.key` instead.
      document.getElementById("inputName").click(); // Things you want to do.
      event.preventDefault(); // No need to `return false;`.
  });
    setNome(newNome);
  }



  return (
    <div>
      <div class="container">
        <h2>
          Olá, {nome}!<small>Seja bem vindo(a) :)</small>
        </h2>
          <div class="group">
            <input
              type="text"
              id="nomeid"
              placeholder="Digite seu nome"s
            ></input>
            <input onClick={addName} id="inputName" value="Enviar" type="submit">
            </input>
          </div>
      </div>
      <input type="submit" id="modo" value={mode} onClick={addMode}></input>
    </div>
  )
}
function index() {
  return (
    <Nome />
  )
}

export default index;
