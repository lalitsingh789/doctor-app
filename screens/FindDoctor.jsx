import React, { useState, useContext } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme";

import {
  baseFeatures,
  moreFeatures,
  surgeries,
  symptoms,
} from "../consts/Features";
import Header from "../components/findDoctor/Header";
import SearchBar from "../components/findDoctor/SearchBar";
import FeatureGrid from "../components/findDoctor/FeatureGrid";
import SurgeryGrid from "../components/findDoctor/SurgeryGrid";
import SymptomGrid from "../components/findDoctor/SymptomGrid";
import { getFindDoctorStyles } from "../styles/FindDoctorStyles";

const FindDoctor = ({ navigation }) => {
  const [showMore, setShowMore] = useState(false);
  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = getFindDoctorStyles(theme);

  const combinedFeatures = [...baseFeatures, ...moreFeatures];
  const allFeatures = showMore
    ? combinedFeatures
    : [
        ...combinedFeatures.slice(0, 12),
        { title: "More", icon: "dots-horizontal" },
      ];

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} colors={colors} />
      <ScrollView style={styles.scroll}>
        <SearchBar colors={colors} />

        <Text style={styles.sectionTitle}>Most Searched Specialities</Text>
        <FeatureGrid
          features={allFeatures}
          navigation={navigation}
          colors={colors}
        />

        <Text style={styles.sectionTitle}>Common Surgeries</Text>
        <SurgeryGrid surgeries={surgeries} colors={colors} />

        <Text style={styles.sectionTitle}>Symptoms</Text>
        <SymptomGrid symptoms={symptoms} colors={colors} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FindDoctor;
