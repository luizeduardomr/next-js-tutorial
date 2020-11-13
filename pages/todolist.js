import { useState } from "react";
import Link from "next/link";

function TodoList() {
  const [valor, setValor] = useState("");
  function addLi() {
    setValor(newValue);
  }
  return (
    <div>
      <Link id="link" href="./">
        <a>Página Inicial!</a>
      </Link>
      <h2>To Do List!</h2>
    </div>
  );
}
function index() {
  return(
    <todoForm/>,
  <TodoList />);
}

export default index;
