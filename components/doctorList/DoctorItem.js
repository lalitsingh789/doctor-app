import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/DoctorListStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSavedDoctors } from '../../contexts/SavedDoctorContext';

const DoctorItem = ({ doctor, onPressDetail, onPressBook }) => {
  const navigation = useNavigation();
  const { savedDoctors, toggleSavedDoctor } = useSavedDoctors();
  const isSaved = savedDoctors.some(d => d._id === doctor._id);

  const handleSave = () => {
    toggleSavedDoctor(doctor);
    navigation.navigate('SavedDoctors'); // Navigate to saved doctors
  };

  return (
    <View style={styles.card}>
      {/* Save Icon */}
      <TouchableOpacity onPress={handleSave} style={styles.saveIcon}>
        <Icon
          name={isSaved ? 'bookmark' : 'bookmark-outline'}
          size={22}
          color="#1877FF"
        />
      </TouchableOpacity>

      <View style={styles.cardTop}>
        <Image source={{ uri: doctor.profile_image }} style={styles.doctorImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.metaText}>{doctor.experience_years} years experience</Text>
          <Text style={styles.metaHighlight}>{doctor.review_count} Patient Stories</Text>
        </View>
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.happyPatients}>👍 {doctor.happy_patients}+ Happy Patients</Text>
        <Text style={styles.rating}>⭐ {doctor.rating}</Text>
      </View>

      <Text style={styles.location}>{doctor.location}</Text>
      <Text style={styles.fee}>₹ {doctor.consultation_fee} Consultation Fees</Text>
      <Text style={styles.available}>NEXT AVAILABLE: {doctor.availability}</Text>

      <View style={styles.buttonRow}>
        {/* Replace 'Contact Hospital' with 'Show Details' and link to detail screen */}
        <TouchableOpacity style={styles.contactBtn} onPress={onPressDetail}>
          <Text style={styles.contactBtnText}>Show Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookBtn} onPress={onPressBook}>
          <Text style={styles.bookBtnText}>Book Clinic Visit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorItem;
