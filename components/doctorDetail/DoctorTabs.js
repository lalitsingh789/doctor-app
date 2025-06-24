import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TABS = ['Details', 'Address', 'Reviews', 'Education', 'Experience', 'Awards'];

const DoctorTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 15 }}>
      {TABS.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setActiveTab(tab)}
          style={{
            borderBottomWidth: activeTab === tab ? 2 : 0,
            borderColor: '#2563eb',
            padding: 8,
            marginHorizontal: 5,
          }}>
          <Text style={{ color: activeTab === tab ? '#2563eb' : '#64748b', fontWeight: 'bold' }}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DoctorTabs;
