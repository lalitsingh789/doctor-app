import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/FindDoctorStyles';

const SearchBar = () => (
  <View style={styles.searchSection}>
    <View style={styles.searchBox}>
      <Icon name="search-outline" size={20} color="#9ca3af" />
      <TextInput
        placeholder="Search symptoms, specialities"
        placeholderTextColor="#9ca3af"
        style={styles.searchInput}
      />
      <Icon name="options-outline" size={20} color="#9ca3af" />
    </View>
  </View>
);

export default SearchBar;
