import React, { useEffect, useContext } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme";
import { splashStyles } from "../styles/SplashScreenStyles";

SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = splashStyles(colors);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <TouchableWithoutFeedback onPress={() => navigation.replace("Onboarding")}>
      <View style={styles.container}>
        <Image
          source={require("../assets/doc.png")}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.title}>Tap to Continue</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SplashScreenComponent;
