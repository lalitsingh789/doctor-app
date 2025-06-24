// components/DoctorList.jsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { homeStyles } from '../../styles/HomeScreenStyles';

const DoctorList = ({ doctors, selectedDept }) => {
  return (
    <>
      <Text style={homeStyles.sectionTitle}>Top {selectedDept} Doctors</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {(doctors[selectedDept] || []).map((doc, i) => (
          <View key={i} style={homeStyles.doctorCard}>
            <Image
              source={{ uri: doc.profile_image?.trim() || '' }}
              style={homeStyles.doctorImage}
              resizeMode="cover"
            />
            <Text style={homeStyles.doctorName}>{doc.name}</Text>
            <Text style={homeStyles.doctorSpeciality}>{doc.speciality}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default DoctorList;
