import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import { SavedDoctorProvider } from './contexts/SavedDoctorContext';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FindDoctor from './screens/FindDoctor';
import DoctorList from './screens/DoctorList';
import DoctorDetail from './screens/DoctorDetail';
import BookDetail from './screens/BookDetail';
import BookList from './screens/BookList';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import Pharmacy from './screens/Pharmacy';
import CartList from './screens/CartList';
import SavedDoctorList from './screens/SavedDoctorList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <UserProvider>
        <SavedDoctorProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Splash" component={SplashScreen} />
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
        </SafeAreaProvider>
        </SavedDoctorProvider>
      </UserProvider>
    </CartProvider>
  );
}