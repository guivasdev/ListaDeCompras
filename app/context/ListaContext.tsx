import { load } from '@/utils/storage';
import { createContext, useContext, useState, ReactNode } from 'react';

interface ItemListaCompra {
  idItemLista: string
  nomeItemLista: string,
  estaMarcadoItemLista: boolean,
}

interface ListaContextData {
  listaItens: ItemListaCompra[];
  setListaItens: React.Dispatch<React.SetStateAction<ItemListaCompra[]>>;
}

const ListaContext = createContext<ListaContextData>({} as ListaContextData);

export function ListaProvider({ children }: { children: ReactNode }) {
  const [listaItens, setListaItens] = useState<ItemListaCompra[]>(
    () => load<ItemListaCompra[]>("chaveListaDeCompras") ?? []
  )
  return (
    <ListaContext.Provider value={{ listaItens, setListaItens }}>
      {children}
    </ListaContext.Provider>
  );
}

// Hook interno para facilitar o acesso ao contexto
export const useListaContext = () => useContext(ListaContext);