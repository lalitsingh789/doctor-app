import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DoctorTabs from '../components/doctorDetail/DoctorTabs';
import DoctorStats from '../components/doctorDetail/DoctorStats';
import { styles } from '../styles/DoctorDetailStyles';

const DoctorDetail = ({ route, navigation }) => {
  const { doctor } = route.params;
  const [activeTab, setActiveTab] = useState('Details');

  const renderTabContent = () => {
    const renderList = (list, icon = '') =>
      list.map((item, index) => (
        <Text key={index} style={{ marginBottom: 10, color: '#374151' }}>
          {icon} {item}
        </Text>
      ));

    switch (activeTab) {
      case 'Details':
        return (
          <View style={{ padding: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>About Me</Text>
            <Text style={{ color: '#6B7280', marginBottom: 10 }}>{doctor.about}</Text>

            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Services</Text>
            {renderList(doctor.services)}

            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Expertise</Text>
            {renderList(doctor.expertise)}

            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Languages</Text>
            {renderList(doctor.languages)}
          </View>
        );

      case 'Address':
        return (
          <View style={{ padding: 20 }}>
            <Text style={{ color: '#6B7280', marginBottom: 10 }}>📍 {doctor.address}</Text>
            <Text style={{ color: '#6B7280', marginBottom: 10 }}>📞 {doctor.contact_number}</Text>
            <Text style={{ color: '#6B7280', marginBottom: 10 }}>📧 {doctor.email}</Text>
            <Text style={{ color: '#6B7280', marginBottom: 10 }}>🕒 {doctor.availability}</Text>
          </View>
        );

      case 'Reviews':
        return (
          <View style={{ padding: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#f59e0b' }}>{doctor.rating}</Text>
            <Text style={{ marginTop: 5, color: '#6B7280' }}>({doctor.review_count} Ratings)</Text>
            <TouchableOpacity style={{ marginTop: 15 }}>
              <Text style={{ color: '#2563eb', fontWeight: 'bold' }}>View More Reviews ➔</Text>
            </TouchableOpacity>
          </View>
        );

      case 'Education':
        return <View style={{ padding: 20 }}>{renderList(doctor.education, '🎓')}</View>;

      case 'Experience':
        return <View style={{ padding: 20 }}>{renderList(doctor.experience, '💼')}</View>;

      case 'Awards':
        return <View style={{ padding: 20 }}>{renderList(doctor.awards, '🏆')}</View>;

      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerRow}>
          <Icon name="arrow-back" size={22} color="#fff" />
          <Text style={styles.headerText}>Doctor Details</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <DoctorStats doctor={doctor} />
        <DoctorTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderTabContent()}
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('Book', { doctor })}
        style={styles.bookButton}
      >
        <Text style={styles.bookButtonText}>
          Book Now: <Text style={{ fontWeight: 'bold' }}>₹ {doctor.consultation_fee}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorDetail;
