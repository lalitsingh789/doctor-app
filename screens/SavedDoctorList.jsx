// SavedDoctorList.jsx
import React from 'react';
import {
  View, Text, ScrollView, Image,
  TouchableOpacity, SafeAreaView
} from 'react-native';
import { useSavedDoctors } from '../contexts/SavedDoctorContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/DoctorListStyles';

const SavedDoctorList = () => {
  const { savedDoctors } = useSavedDoctors();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Saved Doctors</Text>
      </View>

      <ScrollView style={styles.scroll}>
        {savedDoctors.length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 50, fontSize: 16, color: '#666' }}>
            No saved doctors.
          </Text>
        ) : (
          savedDoctors.map((doc, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardTop}>
                <Image source={{ uri: doc.profile_image }} style={styles.doctorImage} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{doc.name}</Text>
                  <Text style={styles.metaText}>{doc.experience_years} years experience</Text>
                  <Text style={styles.metaHighlight}>{doc.review_count} Patient Stories</Text>
                </View>
              </View>

              <View style={styles.rowBetween}>
                <Text style={styles.happyPatients}>👍 {doc.happy_patients}+ Happy Patients</Text>
                <Text style={styles.rating}>⭐ {doc.rating}</Text>
              </View>

              <Text style={styles.location}>📍 {doc.location}</Text>
              <Text style={styles.fee}>₹ {doc.consultation_fee} Consultation Fees</Text>
              <Text style={styles.available}>NEXT AVAILABLE: {doc.availability}</Text>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.contactBtn}
                  onPress={() => navigation.navigate('Detail', { doctor: doc })}
                >
                  <Text style={styles.contactBtnText}>Details</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.bookBtn}
                  onPress={() => navigation.navigate('Book', { doctor: doc })}
                >
                  <Text style={styles.bookBtnText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedDoctorList;