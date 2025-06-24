import React from 'react';
import { View, Text, Image } from 'react-native';

const DoctorStats = ({ doctor }) => {
  return (
    <View style={{ backgroundColor: '#f0f4ff', padding: 20, alignItems: 'center' }}>
      <Image
        source={{ uri: doctor?.profile_image?.startsWith('http') ? doctor.profile_image : 'https://via.placeholder.com/300' }}
        style={{ width: '100%', height: 300, borderRadius: 12, marginBottom: 10 }}
        resizeMode="cover"
      />
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1e293b' }}>{doctor.name}</Text>
      <Text style={{ color: '#64748b', marginVertical: 5 }}>{doctor.qualifications?.join(', ')}</Text>
      <Text style={{ color: '#475569', marginBottom: 10 }}>{doctor.title} • {doctor.location}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        <Stat label="Years" value={doctor.experience_years} />
        <Stat label="Happy" value={doctor.happy_patients} />
        <Stat label="Rating" value={doctor.rating} />
        <Stat label="Reviews" value={doctor.review_count} />
      </View>
    </View>
  );
};

const Stat = ({ label, value }) => (
  <View style={{ alignItems: 'center' }}>
    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#1e293b' }}>{value}</Text>
    <Text style={{ color: '#6b7280' }}>{label}</Text>
  </View>
);

export default DoctorStats;
