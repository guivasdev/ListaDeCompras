import { useListaContext } from "@/context/ListaContext";
import { useEffect, useState } from "react";
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
        removerItemLista(listaDeIndices)
    }

    function buscarIndiceItemLista() {

        return listaItens.filter((item) => selecionarCheckbox.includes(item.idItemLista))
    }

    function removerItemLista(indiceItemLista: ItemListaCompra[]) {

        setListaItens((listaAtual) =>
            listaAtual.filter(
                (item) =>
                    !indiceItemLista.some(
                        (itemParaRemover) => itemParaRemover.idItemLista === item.idItemLista
                    )
            ));

        setSelecionarCheckbox([])
    }

    return {
        gerenciarExclusaoItemLista,
        manipularSelecaoCheckbox,
        selecionarCheckbox,
    }

}

export default useDeleteItemList