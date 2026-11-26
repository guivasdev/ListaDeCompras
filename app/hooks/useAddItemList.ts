import { useListaContext } from "@/context/ListaContext";
import { save } from "@/utils/storage";
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
        const listaAtualizada = inserirItemLista(entradaCampoItem)

        salvarItemDaLista(listaAtualizada);
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

        const listaAtualizada = [...listaItens, item]

        setListaItens(listaAtualizada)

        return listaAtualizada
    }

    function salvarItemDaLista(listaAtualizada: ItemListaCompra[]) {

        save('chaveListaDeCompras', listaAtualizada)
        console.log('lista: ' + listaAtualizada)
    }

    return {
        entradaCampoItem,
        setEntradaCampoItem,
        gerenciarAdicaoItem,
    }
}

export default useAddItemList;