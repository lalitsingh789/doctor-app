import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import * as ExpoSplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');
ExpoSplashScreen.preventAutoHideAsync();

const SplashScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <TouchableWithoutFeedback onPress={() => navigation.replace('Onboarding')}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#1877FF',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 30,
        }}
      >
        <Image
          source={require('../assets/doc.png')}
          resizeMode="contain"
          style={{
            width: width * 0.6,
            height: width * 0.6,
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
            color: '#E6F0FF',
            textAlign: 'center',
            letterSpacing: 1,
            paddingBottom: 20,
          }}
        >
          
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SplashScreen;
