import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../../styles/FindDoctorStyles';

const FeatureGrid = ({ features, navigation, onMorePress }) => (
  <View style={styles.grid}>
    {features.map((feature, index) => (
      <TouchableOpacity
        key={index}
        style={styles.featureCard}
        onPress={() =>
          feature.title === 'More'
            ? onMorePress()
            : navigation.navigate('List', { feature: feature.title })
        }
      >
        <MaterialCommunityIcons name={feature.icon} size={28} color="#5B57F1" />
        <Text style={styles.featureText}>{feature.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default FeatureGrid;
