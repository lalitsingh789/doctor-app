import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/BookListStyles';

const TabSelector = ({ activeTab, setActiveTab }) => (
  <View style={styles.tabs}>
    {['Ongoing', 'Cancelled'].map(tab => (
      <TouchableOpacity
        key={tab}
        onPress={() => setActiveTab(tab)}
        style={[styles.tabButton, activeTab === tab && styles.tabActive]}
      >
        <Text style={[
          styles.tabText,
          activeTab === tab ? styles.tabTextActive : styles.tabTextInactive
        ]}>
          {tab} Appointment
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default TabSelector;
