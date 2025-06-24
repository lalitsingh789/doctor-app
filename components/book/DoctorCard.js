import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../styles/BookDetailStyles';

const DoctorCard = ({ doctor }) => (
  <View style={styles.doctorCard}>
    <Image source={{ uri: doctor.profile_image }} style={styles.doctorImage} />
    <View style={{ flex: 1 }}>
      <Text style={styles.doctorName}>{doctor.name}</Text>
      <Text style={styles.doctorTitle}>{doctor.title}</Text>
      <Text style={styles.doctorQualifications}>{doctor.qualifications?.join(', ')}</Text>
    </View>
  </View>
);

export default DoctorCard;
