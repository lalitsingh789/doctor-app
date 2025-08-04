import React, { useContext } from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";
import { SavedDoctorProvider } from "./contexts/SavedDoctorContext";

// Screens
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import FindDoctor from "./screens/FindDoctor";
import DoctorList from "./screens/DoctorList";
import DoctorDetail from "./screens/DoctorDetail";
import BookDetail from "./screens/BookDetail";
import BookList from "./screens/BookList";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import Pharmacy from "./screens/Pharmacy";
import CartList from "./screens/CartList";
import SavedDoctorList from "./screens/SavedDoctorList";

import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerRight: () => (
            <Ionicons
              name={theme === "dark" ? "sunny-outline" : "moon-outline"}
              size={24}
              color={theme === "dark" ? "#FFD700" : "#333"}
              onPress={toggleTheme}
              style={{ marginRight: 15 }}
            />
          ),
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Find" component={FindDoctor} />
        <Stack.Screen name="List" component={DoctorList} />
        <Stack.Screen name="Detail" component={DoctorDetail} />
        <Stack.Screen name="Book" component={BookDetail} />
        <Stack.Screen name="Bookings" component={BookList} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Pharmacy" component={Pharmacy} />
        <Stack.Screen name="Cart" component={CartList} />
        <Stack.Screen name="SavedDoctors" component={SavedDoctorList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <UserProvider>
          <SavedDoctorProvider>
            <SafeAreaProvider>
              <AppNavigator />
            </SafeAreaProvider>
          </SavedDoctorProvider>
        </UserProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
