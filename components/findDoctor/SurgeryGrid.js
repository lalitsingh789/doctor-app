import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../../styles/FindDoctorStyles';

const SurgeryGrid = ({ surgeries }) => (
  <View style={styles.grid}>
    {surgeries.map((surgery, index) => (
      <View key={index} style={styles.surgeryCard}>
        <MaterialCommunityIcons name={surgery.icon} size={24} color="#2e4aef" style={{ marginRight: 10 }} />
        <Text style={styles.surgeryText}>{surgery.title}</Text>
      </View>
    ))}
  </View>
);

export default SurgeryGrid;
