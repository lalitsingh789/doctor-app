// styles/LoginScreenStyles.js
import { StyleSheet, Dimensions } from "react-native";
import themeColors from "../theme";

const { height } = Dimensions.get("window");

export const getLoginScreenStyles = (theme) => {
  const colors = themeColors[theme];

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.primary,
      alignItems: "center",
      paddingVertical: height * 0.06,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    logo: {
      width: 100,
      height: 100,
      resizeMode: "contain",
      marginBottom: 8,
    },
    brand: {
      fontSize: 20,
      color: colors.onPrimary,
      fontWeight: "500",
      marginBottom: 6,
    },
    welcome: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.onPrimary,
    },
    subtitle: {
      fontSize: 14,
      color: colors.onPrimaryVariant || colors.onPrimary,
    },
    form: {
      flex: 1,
      padding: 20,
    },
    label: {
      fontSize: 14,
      color: colors.text,
      marginBottom: 8,
    },
    inputWrapper: {
      flexDirection: "row",
      backgroundColor: colors.card,
      alignItems: "center",
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: 14,
    },
    inputFocused: {
      borderColor: colors.primary,
    },
    inputIcon: {
      marginRight: 8,
      color: colors.text,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: colors.text,
    },
    loginButton: {
      backgroundColor: colors.primary,
      marginTop: 24,
      paddingVertical: 16,
      borderRadius: 14,
      alignItems: "center",
    },
    disabledButton: {
      backgroundColor: colors.disabled,
    },
    loginText: {
      color: colors.onPrimary,
      fontSize: 16,
      fontWeight: "bold",
    },
    signupText: {
      textAlign: "center",
      marginTop: 20,
      color: colors.textMuted,
      fontSize: 13,
    },
    signupLink: {
      color: colors.primary,
      fontWeight: "bold",
    },
  });
};
