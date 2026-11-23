import { Alert, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import { Text } from "@/components/Text"
import { Button } from "./Button"
import { Icon } from "./Icon"

export interface AlertButtonProps {
  style?: StyleProp<ViewStyle>
}

export const AlertButton = (props: AlertButtonProps) => {
  const { style } = props
  const $styles = [$container, style]
  const { themed } = useAppTheme();

  const createTwoButtonAlert = () =>
    Alert.alert('Mensagem de Confirmação!', 'Você deseja confirmar a exclusão dos itens selecionados ?', [
      {
        text: 'NÃO',
        onPress: () => console.log('NÃO Pressed'),
        style: 'cancel',
      },
      { text: 'SIM', onPress: () => console.log('SIM Pressed') },
    ]);
  return (
    <View style={$styles}>
      <Button
        style={themed($removeButton)}
        onPress={() => createTwoButtonAlert()}
        LeftAccessory={(props) => (
          <Icon
            size={props.pressableState.pressed ? 24 : 22}
            icon="x"
            color={"black"}
          />
        )}
      />
    </View>
  )
}

const $container: ViewStyle = {
  justifyContent: "center",
}

const $removeButton: ThemedStyle<ViewStyle> = (theme) => ({
  width: 50,
  height: 50,
  minHeight: 50,
  borderRadius: 14,
  backgroundColor: theme.colors.palette.primary300,
  justifyContent: "center",
  alignItems: "center",
})