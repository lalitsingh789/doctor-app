// ✅ screens/BookDetail.jsx
import React, { useState } from 'react';
import {
  View, ScrollView, Alert
} from 'react-native';
import Header from '../components/book/Header';
import DoctorCard from '../components/book/DoctorCard';
import BookingForm from '../components/book/BookingForm';
import ConfirmButton from '../components/book/ConfirmButton';
import { styles } from '../styles/BookDetailStyles';
import { useUser } from '../contexts/UserContext'; // ✅ import context

const BookDetail = ({ route, navigation }) => {
  const { user } = useUser(); // ✅ access logged-in user
  const { doctor } = route.params;

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [type, setType] = useState('');
  const [problem, setProblem] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [relation, setRelation] = useState('');

  const handleConfirmBooking = async () => {
    if (!date || !time || !type || !problem || !fullName || !age || !gender || !relation) {
      alert('Please fill all fields');
      return;
    }

    if (!user?.email) {
      alert('User not logged in');
      return;
    }

    const booking = {
      doctorId: doctor._id,
      date: date.toISOString().split('T')[0],
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type,
      problem,
      patient: {
        fullName,
        age: parseInt(age),
        gender,
        relation
      },
      isCancelled: false,
      isCompleted: false,
      user: {
        email: user.email,
        name: user.firstname || ''
      }
    };

    try {
      const res = await fetch('http://192.168.46.183:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });

      if (res.ok) {
        const result = await res.json();
        Alert.alert('Success', 'Booking Confirmed!');
        navigation.goBack();
      } else {
        const error = await res.json();
        console.log(error);
        Alert.alert('Error', error.message || 'Booking failed!');
      }

    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <DoctorCard doctor={doctor} />
        <BookingForm
          doctor={doctor}
          date={date} time={time}
          setDate={setDate} setTime={setTime}
          showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker}
          showTimePicker={showTimePicker} setShowTimePicker={setShowTimePicker}
          type={type} setType={setType}
          problem={problem} setProblem={setProblem}
          fullName={fullName} setFullName={setFullName}
          age={age} setAge={setAge}
          relation={relation} setRelation={setRelation}
          gender={gender} setGender={setGender}
        />
        <ConfirmButton onPress={handleConfirmBooking} />
      </ScrollView>
    </View>
  );
};

export default BookDetail;
