import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { homeStyles } from '../../styles/HomeScreenStyles';
import { useNavigation } from '@react-navigation/native';

const services = [
  { title: 'Clinic Appointment', icon: 'calendar-check' },
  { title: 'Medicines', icon: 'pill' },
  { title: 'Lab Tests', icon: 'flask-outline' },
  { title: 'Surgeries', icon: 'hospital-box-outline' }
];

const BookServiceGrid = () => {
  const navigation = useNavigation();

  const handlePress = (title) => {
    switch (title) {
      case 'Clinic Appointment':
        navigation.navigate('Find');
        break;
      case 'Medicines':
        navigation.navigate('Pharmacy');
        break;
      // Add more if needed
      default:
        break;
    }
  };

  return (
    <View>
      <Text style={homeStyles.sectionTitle}>Book Services</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {services.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => handlePress(item.title)}
            style={homeStyles.featureCard}
          >
            <MaterialCommunityIcons name={item.icon} style={homeStyles.featureIcon} />
            <Text style={homeStyles.featureText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BookServiceGrid;
