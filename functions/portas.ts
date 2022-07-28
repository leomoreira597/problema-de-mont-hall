import PortaModel from "../model/porta";

export function criarPortas(qtde: number, selecionada: number): PortaModel[]{
    return Array.from({length: qtde}, (_, i) => {
        const numero = i +1 
        const temPresente = numero === selecionada
        return new PortaModel(numero, temPresente) 
    })
}

export function atualizarPortas(portas: PortaModel[], portaModficada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModficada.numero

        if(igualAModificada){
            return portaModficada
        }
        else{
            return portaModficada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })
}