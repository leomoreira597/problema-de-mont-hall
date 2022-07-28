import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import React from "react";
import { atualizarPortas, criarPortas } from "../functions/portas";

export default function Home() {
  const [portas, setPortas] = React.useState(criarPortas(4,3))

  function renderizarPortas(){
    return portas.map(porta => {
      return <Porta value={porta} onChange={novaPorta => {
        setPortas(atualizarPortas(portas, novaPorta))
      }}/>

    })
  }

  return (
    <div style={{display: "flex"}}>
      {renderizarPortas()}
    </div>
  )
}
