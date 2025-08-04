import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useSavedDoctors } from '../contexts/SavedDoctorContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../contexts/ThemeContext';
import themeColors from '../theme'; // <-- updated to match your existing theme structure
import { savedDoctorStyles } from '../styles/SavedDoctorList';

const SavedDoctorList = () => {
  const { savedDoctors } = useSavedDoctors();
  const navigation = useNavigation();

  // Theme integration
  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = savedDoctorStyles(colors);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={colors.textOnPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: colors.textOnPrimary }]}>
          Saved Doctors
        </Text>
      </View>

      <ScrollView style={styles.scroll}>
        {savedDoctors.length === 0 ? (
          <Text style={[styles.emptyText, { color: colors.subtext }]}>
            No saved doctors.
          </Text>
        ) : (
          savedDoctors.map((doc, index) => (
            <View key={index} style={[styles.card, { backgroundColor: colors.cardBackground }]}>
              <View style={styles.cardTop}>
                <Image source={{ uri: doc.profile_image }} style={styles.doctorImage} />
                <View style={{ flex: 1 }}>
                  <Text style={[styles.name, { color: colors.text }]}>{doc.name}</Text>
                  <Text style={[styles.metaText, { color: colors.subtext }]}>
                    {doc.experience_years} years experience
                  </Text>
                  <Text style={[styles.metaHighlight, { color: colors.accent }]}>
                    {doc.review_count} Patient Stories
                  </Text>
                </View>
              </View>

              <View style={styles.rowBetween}>
                <Text style={[styles.happyPatients, { color: colors.subtext }]}>
                  👍 {doc.happy_patients}+ Happy Patients
                </Text>
                <Text style={[styles.rating, { color: colors.primary }]}>
                  ⭐ {doc.rating}
                </Text>
              </View>

              <Text style={[styles.location, { color: colors.subtext }]}>
                📍 {doc.location}
              </Text>
              <Text style={[styles.fee, { color: colors.text }]}>
                ₹ {doc.consultation_fee} Consultation Fees
              </Text>
              <Text style={[styles.available, { color: colors.accent }]}>
                NEXT AVAILABLE: {doc.availability}
              </Text>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.contactBtn, { borderColor: colors.primary }]}
                  onPress={() => navigation.navigate('Detail', { doctor: doc })}
                >
                  <Text style={[styles.contactBtnText, { color: colors.primary }]}>
                    Details
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.bookBtn, { backgroundColor: colors.primary }]}
                  onPress={() => navigation.navigate('Book', { doctor: doc })}
                >
                  <Text style={[styles.bookBtnText, { color: colors.textOnPrimary }]}>
                    Book Now
                  </Text>
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
