import React from "react";
import Cartao from "../components/Cartao";
import style from "../styles/Formulario.module.css";
import Link from "../node_modules/next/link";

export default function Formulario() {

  return (
    <div className={style.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao></Cartao>children
        <Cartao></Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/4/2`}>
            <a>
              <h2>
                iniciar
              </h2>
            </a>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
