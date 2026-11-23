import { ThemedStyle } from "@/theme/types"
import { ViewStyle, TextStyle } from "react-native"

export const $centeredView: ThemedStyle<ViewStyle> = (theme) => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: theme.spacing.lg,
  backgroundColor: "rgba(0, 0, 0, 0.45)",
})

export const $modalView: ThemedStyle<ViewStyle> = (theme) => ({
  width: "100%",
  backgroundColor: theme.colors.background,
  borderRadius: 24,
  padding: theme.spacing.lg,
  gap: theme.spacing.lg,
  elevation: 8,
})

export const $modalInput: ThemedStyle<ViewStyle> = (theme) => ({
  minHeight: 50,
  borderRadius: 12,
  backgroundColor: theme.colors.background,
  borderWidth: 1,
  borderColor: theme.colors.separator,
})

export const $modalButton: ThemedStyle<ViewStyle> = (theme) => ({
  justifyContent: "center",
  alignItems: "center",
  minWidth: 130,
  maxWidth: 200,
  minHeight: 48,
  borderRadius: 14,
  backgroundColor: theme.colors.tint,
  padding: theme.spacing.sm,
})

export const $modalButtonText: ThemedStyle<TextStyle> = (theme) => ({
  color: theme.colors.palette.neutral100,
  fontSize: 16,
  fontWeight: "600",
})