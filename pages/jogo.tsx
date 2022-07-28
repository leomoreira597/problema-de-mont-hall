import React from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import styles from "../styles/Jogo.module.css"
import Link from "../node_modules/next/link";

export default function Jogo() {
    const [portas, setPortas] = React.useState(criarPortas(4, 3))

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta value={porta} onChange={novaPorta => {
                setPortas(atualizarPortas(portas, novaPorta))
            }} />

        })
    }
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    );
}