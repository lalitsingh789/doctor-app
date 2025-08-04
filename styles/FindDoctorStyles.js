import { StyleSheet } from "react-native";
import themeColors from "../theme";

export const getFeaturesStyles = (theme) => {
  const colors = themeColors[theme];

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    topBar: {
      backgroundColor: colors.primary,
      paddingHorizontal: 20,
      paddingTop: 45,
      paddingBottom: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    backButton: {
      marginRight: 10,
    },
    topBarText: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.onPrimary,
    },
    scroll: {
      paddingHorizontal: 20,
    },
    searchSection: {
      marginTop: 25,
    },
    searchBox: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      fontSize: 16,
      color: colors.text,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.text,
      marginTop: 25,
      marginBottom: 12,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    featureCard: {
      width: "30%",
      backgroundColor: colors.accentLight || "#EEF1FF",
      borderRadius: 12,
      paddingVertical: 20,
      marginBottom: 18,
      alignItems: "center",
      justifyContent: "center",
    },
    featureText: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.text,
      textAlign: "center",
      marginTop: 6,
    },
    surgeryCard: {
      width: "47%",
      backgroundColor: colors.accentMedium || "#E0ECFF",
      borderRadius: 10,
      padding: 14,
      marginBottom: 15,
      flexDirection: "row",
      alignItems: "center",
    },
    surgeryText: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.primary,
      flexShrink: 1,
    },
    symptomCard: {
      width: "30%",
      backgroundColor: colors.warningLight || "#FFF5E5",
      borderRadius: 10,
      padding: 12,
      marginBottom: 15,
      alignItems: "center",
    },
    symptomText: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.warning,
      textAlign: "center",
      marginTop: 6,
    },
  });
};
