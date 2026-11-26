import { FC, useState } from "react"
import { ViewStyle, FlatList, View, Modal, Alert, Pressable, Text, TextStyle } from "react-native"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"
import { Screen } from "@/components/Screen"
import { ListItem } from "@/components/ListItem"
import { Checkbox } from "@/components/Toggle/Checkbox"
import { Button } from "@/components/Button"
import { TextField } from "@/components/TextField"
import { Icon } from "@/components/Icon"
import { useAppTheme } from "@/theme/context"
import { ThemedStyle } from "@/theme/types"
import { AlertButton } from "@/components/AlertButton"
import useAddItemList from "@/hooks/useAddItemList"
import { useListaContext } from "@/context/ListaContext"
import useEditItemList from "@/hooks/useEditItemList"
import { $centeredView, $modalView, $modalInput, $modalButton, $modalButtonText } from "@/styles/modelStyles"
import { $inputWrapper, $addButton, $list, $listContent, $checkboxContainer, $listItem, $listItemText } from "@/styles/listStyles"
import useDeleteItemList from "@/hooks/useDeleteItemList"

interface HomeScreenProps extends AppStackScreenProps<"Home"> { }

export const HomeScreen: FC<HomeScreenProps> = () => {
  const { themed } = useAppTheme()

  const { listaItens } = useListaContext();

  const { entradaCampoItem, setEntradaCampoItem,
    gerenciarAdicaoItem } = useAddItemList()

  const { entradaCampoItemEdicao, setEntradaCampoItemEdicao, estadoEditarItemLista,
    gerenciarEdicaoItem, iniciarEdicaoItem, setEstadoEditarItemLista } = useEditItemList()

  const { manipularSelecaoCheckbox, selecionarCheckbox, gerenciarExclusaoItemLista } = useDeleteItemList()

  return (
    <Screen
      style={themed($root)}
      contentContainerStyle={{ flex: 1 }}
      safeAreaEdges={["bottom", "end", "left", "start"]}
      preset="fixed"
    >

      {selecionarCheckbox.length > 0 &&
        <View style={themed($header)}>
          <AlertButton gerenciarExclusaoItemLista={gerenciarExclusaoItemLista} />
        </View>
      }
      {/* Cabeçalho / Inserção de item */}
      <View style={themed($header)}>
        <TextField
          value={entradaCampoItem}
          onChangeText={setEntradaCampoItem}
          placeholder="Inserir item aqui..."
          containerStyle={{ flex: 1 }}
          inputWrapperStyle={themed($inputWrapper)}
        />

        <Button
          style={themed($addButton)}
          onPress={() => gerenciarAdicaoItem()}
          LeftAccessory={(props) => (
            <Icon
              size={props.pressableState.pressed ? 24 : 22}
              icon="add"
              color={"black"}
            />
          )}
        />
      </View>

      {/* Lista de itens */}
      <FlatList
        style={themed($list)}
        contentContainerStyle={themed($listContent)}
        data={listaItens}
        keyExtractor={(item) => item.idItemLista}
        renderItem={({ item }) => (
          <ListItem

            onLongPress={() => iniciarEdicaoItem(item.idItemLista)}
            text={item.nomeItemLista}
            LeftComponent={
              <Checkbox
                containerStyle={themed($checkboxContainer)}
                value={selecionarCheckbox.includes(item.idItemLista)}
                onValueChange={() =>
                  manipularSelecaoCheckbox(item.idItemLista)
                }
                LabelTextProps={{ size: "lg" }}
              />
            }
            bottomSeparator
            style={themed($listItem)}
            textStyle={themed($listItemText)}
          />
        )}
      />

      {/* Modal de edição */}
      <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        visible={estadoEditarItemLista}
        navigationBarTranslucent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setEstadoEditarItemLista(!estadoEditarItemLista)
        }}
      >
        <View style={themed($centeredView)}>
          <View style={themed($modalView)}>
            <TextField
              value={entradaCampoItemEdicao}
              onChangeText={setEntradaCampoItemEdicao}
              placeholder="Inserir novo texto aqui..."
              containerStyle={{ width: "100%" }}
              textAlign="center"
              inputWrapperStyle={themed($modalInput)}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: '100%' }}>
              <Pressable
                style={themed($modalButton)}
                onPress={() => gerenciarEdicaoItem()}
              >
                <Text style={themed($modalButtonText)}>
                  Atualizar
                </Text>
              </Pressable>

              <Pressable
                style={themed($modalButton)}
                onPress={() =>
                  setEstadoEditarItemLista(!estadoEditarItemLista)
                }
              >
                <Text style={themed($modalButtonText)}>
                  Fechar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  )
}

const $root: ThemedStyle<ViewStyle> = (theme) => ({
  flex: 1,
  backgroundColor: theme.colors.background,
})

const $header: ThemedStyle<ViewStyle> = (theme) => ({
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: theme.spacing.sm,
  paddingVertical: theme.spacing.sm,
  gap: theme.spacing.sm,
})