import React, { useRef, useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme";
import { onboardingStyles } from "../styles/OnboardingStyles";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = onboardingStyles(colors);

  const onboardingData = [
    {
      id: 1,
      image: require("../assets/p1.png"),
      title: "Your health is your",
      highlightWord: "priority",
      description:
        "Book appointments, manage prescriptions, and connect with expert doctors — all from one trusted app.",
      backgroundColor: "#E8F4FD",
    },
    {
      id: 2,
      image: require("../assets/p2.png"),
      title: "Consult with doctors",
      highlightWord: "online",
      description:
        "Skip the waiting room. Clinix connects you to certified healthcare professionals via secure video calls.",
      backgroundColor: "#F3E8FF",
    },
    {
      id: 3,
      image: require("../assets/p3.jpg"),
      title: "Stay informed, stay",
      highlightWord: "healthy",
      description:
        "Receive health tips, medication reminders, and personalized updates — all designed to keep you well.",
      backgroundColor: "#E8F8F5",
    },
  ];

  const handleScroll = (e) => {
    const slideSize = e.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(e.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation?.replace("Login");
    }
  };

  const goToSlide = (index) => {
    scrollViewRef.current?.scrollTo({ x: index * width, animated: true });
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={colors.background}
      />

      {/* Skip Button */}
      <TouchableOpacity
        onPress={() => navigation?.replace("Signup")}
        style={styles.skipButton}
      >
        <Text style={[styles.skipText, { color: colors.text }]}>Skip</Text>
      </TouchableOpacity>

      {/* Onboarding Slides */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      >
        {onboardingData.map((item) => (
          <View key={item.id} style={[styles.slide, { width }]}>
            <View
              style={[
                styles.imageContainer,
                { backgroundColor: item.backgroundColor, height: height * 0.55 },
              ]}
            >
              <Image source={item.image} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                {item.title} <Text style={{ color: colors.primary }}>{item.highlightWord}</Text>
              </Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Indicators & Button */}
      <View style={styles.footer}>
        <View style={styles.indicators}>
          {onboardingData.map((_, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => goToSlide(i)}
              style={[
                styles.indicator,
                {
                  width: currentIndex === i ? 20 : 8,
                  backgroundColor:
                    currentIndex === i ? colors.primary : colors.placeholder,
                },
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          onPress={goToNext}
          style={[styles.button, { width: width - 40, backgroundColor: colors.primary }]}
        >
          <Text style={styles.buttonText}>
            {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
