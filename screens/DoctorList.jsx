import React, { useEffect, useState } from 'react';
import {
  View, Text, SafeAreaView, ScrollView,
  ActivityIndicator, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/DoctorListStyles';
import DoctorItem from '../components/doctorList/DoctorItem';

const DoctorList = ({ route, navigation }) => {
  const { feature } = route.params;
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch(`http://192.168.46.183:5000/api/doctors?department=${feature}`);
        const data = await res.json();
        setDoctors(data);
      } catch (err) {
        console.error('Error:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [feature]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{feature}</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#1877FF" style={styles.loader} />
      ) : (
        <ScrollView style={styles.scroll}>
          {doctors.map((doc, index) => (
            <DoctorItem
              key={index}
              doctor={doc}
              onPressDetail={() => navigation.navigate('Detail', { doctor: doc })}
              onPressBook={() => navigation.navigate('Book', { doctor: doc })}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DoctorList;
