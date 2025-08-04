import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const splashStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 30,
    },
    logo: {
      width: width * 0.6,
      height: width * 0.6,
      marginBottom: 20,
      resizeMode: "contain",
    },
    text: {
      fontFamily: "Montserrat-Bold",
      fontSize: 20,
      color: "#E6F0FF",
      textAlign: "center",
      letterSpacing: 1,
      paddingBottom: 20,
    },
  });
