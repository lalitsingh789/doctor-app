import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../../styles/FindDoctorStyles';

const SymptomGrid = ({ symptoms }) => (
  <View style={styles.grid}>
    {symptoms.map((symptom, index) => (
      <View key={index} style={styles.symptomCard}>
        <MaterialCommunityIcons name={symptom.icon} size={24} color="#F59E0B" />
        <Text style={styles.symptomText}>{symptom.title}</Text>
      </View>
    ))}
  </View>
);

export default SymptomGrid;
