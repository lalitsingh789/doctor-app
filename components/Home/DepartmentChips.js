// components/DepartmentChips.jsx
import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { homeStyles } from '../../styles/HomeScreenStyles';

const DepartmentChips = ({ departments, selectedDept, setSelectedDept, showMore, setShowMore }) => {
  const displayedDepartments = showMore ? departments : departments.slice(0, 4);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 15 }}>
      {displayedDepartments.map((dept, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => setSelectedDept(dept)}
          style={homeStyles.chip(selectedDept === dept)}
        >
          <Text style={homeStyles.chipText(selectedDept === dept)}>{dept}</Text>
        </TouchableOpacity>
      ))}
      {!showMore && (
        <TouchableOpacity
          onPress={() => setShowMore(true)}
          style={homeStyles.chip(false)}
        >
          <Text style={homeStyles.chipText(false)}>More</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default DepartmentChips;
