import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/BookDetailStyles';

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Icon name="arrow-back" size={22} color="#fff" />
      <Text style={styles.headerTitle}>Booking</Text>
    </TouchableOpacity>
  </View>
);

export default Header;