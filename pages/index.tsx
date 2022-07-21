import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import React from "react";

export default function Home() {
  const [p1, setP1] = React.useState(new PortaModel(1, false, false))
  return (
    <div style={{display: "flex"}}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  )
}
