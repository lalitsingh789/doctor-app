// styles/ProfileStyles.js
import { StyleSheet } from "react-native";

export const profileStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      padding: 20,
      backgroundColor: colors.primary,
      alignItems: "center",
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.textOnPrimary,
    },
    email: {
      fontSize: 14,
      color: colors.textOnPrimary,
      opacity: 0.8,
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 8,
    },
    sectionItem: {
      fontSize: 14,
      color: colors.subtext,
      marginVertical: 4,
    },
  });
