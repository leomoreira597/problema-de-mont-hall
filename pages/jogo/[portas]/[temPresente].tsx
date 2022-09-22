import React from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from "../../../styles/Jogo.module.css"
import Link from "../../../node_modules/next/link";
import { useRouter } from "../../../node_modules/next/router";

export default function Jogo() {
    const router = useRouter()
    const [portas, setPortas] = React.useState([])

    React.useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta} value={porta} onChange={novaPorta => {
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