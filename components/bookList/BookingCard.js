import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/BookListStyles';

const BookingCard = ({ item, activeTab, onCancel }) => {
  const doctor = item.doctorId || {};
  const imageUrl = doctor.profile_image?.startsWith('http')
    ? doctor.profile_image
    : 'https://via.placeholder.com/75';

  return (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{doctor.name || 'Doctor Name'}</Text>
          <Text style={styles.title}>{doctor.title || 'Specialist'}</Text>
          <Text style={styles.qualification}>
            {doctor.qualifications?.join(', ') || 'Qualifications'}
          </Text>
          <Text
            style={[
              styles.typeTag,
              item.type === 'Online' ? styles.typeOnline : styles.typeClinic
            ]}
          >
            {item.type}
          </Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Icon name="calendar-outline" size={16} color="#64748b" />
          <Text style={styles.infoText}>{item.date}</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="time-outline" size={16} color="#64748b" />
          <Text style={styles.infoText}>{item.time}</Text>
        </View>
        <View style={styles.infoItem}>
          <Icon name="id-card-outline" size={16} color="#64748b" />
          <Text style={styles.infoText}>{item._id?.slice(-6).toUpperCase()}</Text>
        </View>
      </View>

      {activeTab === 'Ongoing' && (
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.buttonText}>Cancel Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rescheduleButton}>
            <Text style={styles.buttonText}>Re-Schedule</Text>
          </TouchableOpacity>
        </View>
      )}

      {activeTab === 'Cancelled' && (
        <Text style={styles.cancelledText}>This appointment is cancelled</Text>
      )}
    </View>
  );
};

export default BookingCard;
