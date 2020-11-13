import { useState } from "react";
import Link from "next/link";

function TodoList() {
  return (
    <div>
      <Link id="link" href="./">
        <a>Página Inicial!</a>
      </Link>
      ,<h2>Hello!</h2>
    </div>
  );
}
function index() {
  return <TodoList />;
}

export default index;
