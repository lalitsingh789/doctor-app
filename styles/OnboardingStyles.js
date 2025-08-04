// styles/OnboardingStyles.js
import { StyleSheet } from "react-native";

export const onboardingStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    skipButton: {
  position: "absolute",
  top: 50,
  right: 20,
  zIndex: 10,
  padding: 10,
},
skipText: {
  fontSize: 16,
  fontWeight: "500",
},
imageContainer: {
  width: "100%",
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
  overflow: "hidden",
},
textContainer: {
  alignItems: "center",
  paddingHorizontal: 20,
  marginTop: 40,
},
footer: {
  paddingHorizontal: 20,
  paddingBottom: 50,
  alignItems: "center",
},
indicators: {
  flexDirection: "row",
  marginBottom: 30,
},
indicator: {
  height: 8,
  borderRadius: 4,
  marginHorizontal: 4,
},

    slide: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    image: {
      width: "80%",
      height: 300,
      resizeMode: "contain",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.text,
      marginTop: 20,
    },
    description: {
      fontSize: 16,
      textAlign: "center",
      color: colors.subtext,
      marginVertical: 10,
    },
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 14,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginTop: 20,
    },
    buttonText: {
      color: colors.textOnPrimary,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
