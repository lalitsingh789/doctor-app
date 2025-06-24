import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { baseFeatures, moreFeatures, surgeries, symptoms } from '../consts/Features';
import Header from '../components/findDoctor/Header';
import SearchBar from '../components/findDoctor/SearchBar';
import FeatureGrid from '../components/findDoctor/FeatureGrid';
import SurgeryGrid from '../components/findDoctor/SurgeryGrid';
import SymptomGrid from '../components/findDoctor/SymptomGrid';
import { styles } from '../styles/FindDoctorStyles';

const FindDoctor = ({ navigation }) => {
  const [showMore, setShowMore] = useState(false);

  const combinedFeatures = [...baseFeatures, ...moreFeatures];
  const allFeatures = showMore
    ? combinedFeatures
    : [...combinedFeatures.slice(0, 12), { title: 'More', icon: 'dots-horizontal' }];

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView style={styles.scroll}>
        <SearchBar />

        <Text style={styles.sectionTitle}>Most Searched Specialities</Text>
        <FeatureGrid
          features={allFeatures}
          navigation={navigation}
          onMorePress={() => setShowMore(true)}
        />

        <Text style={styles.sectionTitle}>Common Surgeries</Text>
        <SurgeryGrid surgeries={surgeries} />

        <Text style={styles.sectionTitle}>Symptoms</Text>
        <SymptomGrid symptoms={symptoms} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FindDoctor;
