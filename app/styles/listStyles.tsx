import { ThemedStyle } from "@/theme/types"
import { ViewStyle, TextStyle } from "react-native"

export const $inputWrapper: ThemedStyle<ViewStyle> = (theme) => ({
    minHeight: 50,
    backgroundColor: theme.colors.palette.neutral100,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: theme.colors.separator,
})

export const $addButton: ThemedStyle<ViewStyle> = (theme) => ({
    width: 50,
    height: 50,
    minHeight: 50,
    borderRadius: 14,
    backgroundColor: theme.colors.tint,
    justifyContent: "center",
    alignItems: "center",
})

export const $listItem: ThemedStyle<ViewStyle> = (theme) => ({
    minHeight: 64,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.background,
})

export const $listItemText: ThemedStyle<TextStyle> = (theme) => ({
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
})

export const $list: ThemedStyle<ViewStyle> = (theme) => ({
    flex: 1,
    backgroundColor: theme.colors.background,
})

export const $listContent: ThemedStyle<ViewStyle> = (theme) => ({
    paddingHorizontal: theme.spacing.sm,
})

export const $checkboxContainer: ThemedStyle<ViewStyle> = (theme) => ({
    padding: theme.spacing.sm,
})