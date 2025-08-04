// styles/CartStyles.js
import { StyleSheet } from "react-native";
import themeColors from "../theme"; // <-- your theme.js

export const getCartStyles = (theme) => {
  const colors = themeColors[theme];

  return StyleSheet.create({
    header: {
      backgroundColor: colors.primary,
      padding: 18,
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      paddingTop: 40,
    },
    headerText: {
      color: colors.onPrimary,
      fontSize: 18,
      fontWeight: "bold",
    },
    itemCard: {
      flexDirection: "row",
      marginBottom: 15,
      backgroundColor: colors.surface,
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
      gap: 12,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 6,
      resizeMode: "contain",
    },
    title: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 4,
    },
    price: {
      fontSize: 12,
      color: colors.secondaryText,
      marginBottom: 6,
    },
    controls: {
      flexDirection: "row",
      alignItems: "center",
    },
    qtyButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 4,
    },
    qtyText: {
      color: colors.onPrimary,
      fontSize: 16,
      fontWeight: "bold",
    },
    qtyValue: {
      marginHorizontal: 10,
      fontSize: 14,
      fontWeight: "600",
      color: colors.text,
    },
    footer: {
      padding: 16,
      borderTopWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surface,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 20,
      paddingBottom: 40,
    },
    total: {
      fontSize: 16,
      fontWeight: "bold",
      paddingBottom: 4,
      color: colors.text,
    },
    checkoutButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 6,
    },
  });
};
