import { useListaContext } from "@/context/ListaContext";
import { useState } from "react";

export interface ItemListaCompra {
    idItemLista: string
    nomeItemLista: string,
    estaMarcadoItemLista: boolean,
}

const useAddItemList = () => {

    const [entradaCampoItem, setEntradaCampoItem] = useState("")
    const { listaItens, setListaItens } = useListaContext();

    function gerenciarAdicaoItem() {

        validarCampoItem(entradaCampoItem);
        inserirItemLista(entradaCampoItem);
        setEntradaCampoItem('')
    }

    function validarCampoItem(entradaCampoItem: string) {
        if (entradaCampoItem.length == 0 || entradaCampoItem.trim().length == 0)
            throw new Error("Erro em validar campo de Item");
    }

    function inserirItemLista(entradaCampoItem: string) {

        const idItemLista = Date.now();
        const item: ItemListaCompra = {
            idItemLista: idItemLista.toString(),
            nomeItemLista: entradaCampoItem,
            estaMarcadoItemLista: false
        }
        setListaItens([...listaItens, item])
        
    }

    return {
        entradaCampoItem,
        setEntradaCampoItem,
        gerenciarAdicaoItem,
    }
}

export default useAddItemList;