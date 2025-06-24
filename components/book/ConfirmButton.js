import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../../styles/BookDetailStyles';

const ConfirmButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.confirmButton}>
    <Text style={styles.confirmButtonText}>Confirm Booking</Text>
  </TouchableOpacity>
);

export default ConfirmButton;
