import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar, Animated, Easing } from "react-native";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(1)); // For smooth transition

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme) setTheme(savedTheme);
      } catch (e) {
        console.log("Error loading theme:", e);
      } finally {
        setLoading(false);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    // Animate before changing theme
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.3,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem("theme", newTheme);
    } catch (e) {
      console.log("Error saving theme:", e);
    }
  };

  // Change StatusBar dynamically
  useEffect(() => {
    StatusBar.setBarStyle(theme === "dark" ? "light-content" : "dark-content");
    StatusBar.setBackgroundColor(theme === "dark" ? "#000" : "#fff");
  }, [theme]);

  if (loading) return null; // Optionally return a splash/loading screen

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {children}
      </Animated.View>
    </ThemeContext.Provider>
  );
};
