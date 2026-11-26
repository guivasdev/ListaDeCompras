import { useListaContext } from "@/context/ListaContext";
import { useState } from "react";
import { save } from "@/utils/storage";
import { ItemListaCompra } from "./useAddItemList";

const useDeleteItemList = () => {
    const { listaItens, setListaItens } = useListaContext();
    const [selecionarCheckbox, setSelecionarCheckbox] = useState<string[]>([]);
    function manipularSelecaoCheckbox(idItemLista: string) {
        setSelecionarCheckbox((prev) =>
            prev.includes(idItemLista)
                ? prev.filter((itemId) => itemId !== idItemLista)
                : [...prev, idItemLista]
        );
    }

    function gerenciarExclusaoItemLista() {
        const listaDeIndices = buscarIndiceItemLista()
        const listaAtualizada = removerItemLista(listaDeIndices)
        salvarItemDaLista(listaAtualizada);
    }

    function buscarIndiceItemLista() {
        return listaItens.filter((item) => selecionarCheckbox.includes(item.idItemLista))
    }

    function removerItemLista(indiceItemLista: ItemListaCompra[]) {

        const listaAtualizada =
            listaItens.filter(
                (item) =>
                    !indiceItemLista.some(
                        (itemParaRemover) => itemParaRemover.idItemLista === item.idItemLista
                    )
            );

        setListaItens(listaAtualizada)

        setSelecionarCheckbox([])

        return listaAtualizada
    }

    function salvarItemDaLista(listaAtualizada: ItemListaCompra[]) {
        save('chaveListaDeCompras', listaAtualizada)
        console.log('lista: ' + listaAtualizada)
    }


    return {
        gerenciarExclusaoItemLista,
        manipularSelecaoCheckbox,
        selecionarCheckbox,
    }

}

export default useDeleteItemList