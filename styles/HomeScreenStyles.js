// styles/HomeScreenStyles.js
import { Dimensions } from "react-native";
import themeColors from "../theme";

const { width } = Dimensions.get("window");

export const getHomeStyles = (theme) => {
  const colors = themeColors[theme];

  return {
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: (insets) => ({
      backgroundColor: colors.primary,
      padding: 20,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      paddingTop: insets.top + 20,
    }),
    greeting: {
      marginBottom: 10,
    },
    greetingText: {
      fontSize: 14,
      color: colors.textMuted,
    },
    greetingName: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.onPrimary,
    },
    subGreeting: {
      fontSize: 14,
      color: colors.textMuted,
      marginTop: 5,
    },
    searchBox: {
      marginTop: 10,
      flexDirection: "row",
      backgroundColor: colors.card,
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 8,
      alignItems: "center",
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: colors.text,
    },
    section: {
      padding: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 15,
      color: colors.text,
    },
    featureCard: {
      width: "47%",
      backgroundColor: colors.secondaryCard,
      borderRadius: 10,
      padding: 12,
      marginBottom: 12,
      alignItems: "center",
    },
    featureIcon: {
      fontSize: 30,
      color: colors.accent,
    },
    featureText: {
      fontSize: 13,
      fontWeight: "500",
      textAlign: "center",
      marginTop: 5,
      color: colors.text,
    },
    serviceItem: {
      width: "22%",
      alignItems: "center",
      marginBottom: 15,
    },
    serviceIconContainer: {
      backgroundColor: colors.secondaryCard,
      padding: 12,
      borderRadius: 50,
      marginBottom: 5,
    },
    serviceText: {
      fontSize: 12,
      textAlign: "center",
      color: colors.text,
    },
    chip: (isSelected) => ({
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: isSelected ? colors.primary : colors.card,
      borderRadius: 20,
      marginRight: 10,
    }),
    chipText: (isSelected) => ({
      color: isSelected ? colors.onPrimary : colors.text,
      fontWeight: "bold",
    }),
    doctorCard: {
      width: "47%",
      backgroundColor: colors.secondaryCard,
      borderRadius: 12,
      padding: 12,
      marginBottom: 15,
    },
    doctorImage: {
      width: "100%",
      height: 100,
      borderRadius: 8,
      marginBottom: 8,
    },
    doctorName: {
      fontWeight: "bold",
      fontSize: 14,
      color: colors.text,
    },
    doctorSpeciality: {
      fontSize: 12,
      color: colors.textMuted,
    },
    bottomNav: (insets) => ({
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: 10,
      paddingBottom: insets.bottom,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      backgroundColor: colors.card,
    }),
    badge: {
      position: "absolute",
      top: -6,
      right: -10,
      backgroundColor: colors.error,
      borderRadius: 10,
      paddingHorizontal: 5,
      paddingVertical: 1,
      minWidth: 18,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999,
    },
    badgeText: {
      color: colors.onError,
      fontSize: 10,
      fontWeight: "bold",
      textAlign: "center",
    },
  };
};
