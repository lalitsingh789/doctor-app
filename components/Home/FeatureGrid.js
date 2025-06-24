// components/FeatureGrid.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { homeStyles } from '../../styles/HomeScreenStyles';
import { useNavigation } from '@react-navigation/native';

const FeatureGrid = ({ features, setShowMore }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={homeStyles.sectionTitle}>Find the doctor for your health problem</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {features.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (item.title === 'More') {
                setShowMore(true);
              } else {
                navigation.navigate('List', { feature: item.title });
              }
            }}
            style={homeStyles.serviceItem}
          >
            <View style={homeStyles.serviceIconContainer}>
              <MaterialCommunityIcons name={item.icon} size={26} color="#5B57F1" />
            </View>
            <Text style={homeStyles.serviceText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FeatureGrid;
