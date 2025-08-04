// styles/EditProfileStyles.js
import { StyleSheet } from "react-native";
import themeColors from "../theme";

export const getEditProfileStyles = (theme) => {
  const colors = themeColors[theme];

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },

    header: {
      backgroundColor: colors.primary,
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 50,
      paddingBottom: 16,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },

    backButton: {
      marginRight: 12,
      justifyContent: "center",
    },

    backIcon: {
      fontSize: 26,
      color: colors.onPrimary,
    },

    headerTitle: {
      color: colors.onPrimary,
      fontSize: 20,
      fontWeight: "bold",
    },

    container: {
      padding: 20,
      paddingBottom: 40,
    },

    inputGroup: {
      marginBottom: 20,
    },

    label: {
      fontSize: 14,
      color: colors.textMuted,
      marginBottom: 6,
      fontWeight: "600",
    },

    input: {
      backgroundColor: colors.card,
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.border,
      fontSize: 16,
      color: colors.text,
    },

    pickerWrapper: {
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      overflow: "hidden",
    },

    picker: {
      height: 50,
      color: colors.text,
      fontSize: 16,
    },

    submitButton: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: "center",
      marginTop: 30,
    },

    submitText: {
      color: colors.onPrimary,
      fontWeight: "bold",
      fontSize: 16,
    },

    buttonDisabled: {
      backgroundColor: colors.disabled,
    },
  });
};
