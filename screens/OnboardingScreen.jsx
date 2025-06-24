import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const onboardingData = [
    {
      id: 1,
      image: require('../assets/p1.png'),
      title: 'Your health is your',
      highlightWord: 'priority',
      description: 'Book appointments, manage prescriptions, and connect with expert doctors — all from one trusted app.',
      backgroundColor: '#E8F4FD',
    },
    {
      id: 2,
      image: require('../assets/p2.png'),
      title: 'Consult with doctors',
      highlightWord: 'online',
      description: 'Skip the waiting room. Clinix connects you to certified healthcare professionals via secure video calls.',
      backgroundColor: '#F3E8FF',
    },
    {
      id: 3,
      image: require('../assets/p3.jpg'),
      title: 'Stay informed, stay',
      highlightWord: 'healthy',
      description: 'Receive health tips, medication reminders, and personalized updates — all designed to keep you well.',
      backgroundColor: '#E8F8F5',
    },
  ];

  const handleScroll = (e) => {
    const slideSize = e.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(e.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      scrollViewRef.current?.scrollTo({ x: (currentIndex + 1) * width, animated: true });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation?.replace('Login');
    }
  };

  const goToSlide = (index) => {
    scrollViewRef.current?.scrollTo({ x: index * width, animated: true });
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <TouchableOpacity onPress={() => navigation?.replace('Signup')} style={{ position: 'absolute', top: 50, right: 20, zIndex: 10, padding: 10 }}>
        <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Skip</Text>
      </TouchableOpacity>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={{ flex: 1 }}
      >
        {onboardingData.map((item) => (
          <View key={item.id} style={{ width, flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
            <View style={{ width, height: height * 0.55, backgroundColor: item.backgroundColor, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, overflow: 'hidden' }}>
              <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
            </View>
            <View style={{ alignItems: 'center', paddingHorizontal: 20, marginTop: 40 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2D3748', textAlign: 'center', lineHeight: 32, marginBottom: 15 }}>
                {item.title} <Text style={{ color: '#FF6B35' }}>{item.highlightWord}</Text>
              </Text>
              <Text style={{ fontSize: 16, color: '#718096', textAlign: 'center', lineHeight: 24, marginBottom: 40 }}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={{ paddingHorizontal: 20, paddingBottom: 50, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          {onboardingData.map((_, i) => (
            <TouchableOpacity key={i} onPress={() => goToSlide(i)} style={{
              width: currentIndex === i ? 20 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: currentIndex === i ? '#4A90E2' : '#E2E8F0',
              marginHorizontal: 4,
            }} />
          ))}
        </View>
        <TouchableOpacity
          onPress={goToNext}
          style={{
            width: width - 40,
            height: 56,
            backgroundColor: '#4A90E2',
            borderRadius: 28,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#4A90E2',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>
            {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
