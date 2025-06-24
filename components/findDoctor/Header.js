import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/FindDoctorStyles';

const Header = ({ navigation }) => (
  <View style={styles.topBar}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
    <Text style={styles.topBarText}>Find Doctors</Text>
  </View>
);

export default Header;
