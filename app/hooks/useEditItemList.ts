import { useListaContext } from "@/context/ListaContext";
import { useState } from "react";
import { ItemListaCompra } from "./useAddItemList";

const useEditItemList = () => {
    const [entradaCampoItemEdicao, setEntradaCampoItemEdicao] = useState("")
    const [estadoEditarItemLista, setEstadoEditarItemLista] = useState(false)
    const [idItemListaBusca, setIdItemListaBusca] = useState<string>('')
    const { listaItens, setListaItens } = useListaContext();


    function iniciarEdicaoItem(idItemLista: string) {
        setIdItemListaBusca(idItemLista)
        setEstadoEditarItemLista(true)
    }

    function gerenciarEdicaoItem() {
        const indiceDaLista = buscarIndiceItemLista()
        editarItemLista(indiceDaLista)
    }

    function buscarIndiceItemLista(): number {
        const indice = listaItens.findIndex((item: { idItemLista: string; }) => item.idItemLista === idItemListaBusca);
        return Number(indice)
    }

    function editarItemLista(indiceItemLista: number) {
        const novoItem: ItemListaCompra = {
            idItemLista: listaItens[indiceItemLista].idItemLista,
            nomeItemLista: entradaCampoItemEdicao,
            estaMarcadoItemLista: listaItens[indiceItemLista].estaMarcadoItemLista
        }

        const copiaDaLista = [...listaItens]
        copiaDaLista.splice(indiceItemLista, 1, novoItem)
        setListaItens(copiaDaLista)
        setEntradaCampoItemEdicao('')
    }

    return {
        entradaCampoItemEdicao,
        setEntradaCampoItemEdicao,

        iniciarEdicaoItem,
        setEstadoEditarItemLista,
        estadoEditarItemLista,
        gerenciarEdicaoItem,
    }
}

export default useEditItemList;