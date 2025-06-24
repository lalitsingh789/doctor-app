import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../../styles/BookDetailStyles';

const BookingForm = ({
  date, setDate, time, setTime,
  showDatePicker, setShowDatePicker,
  showTimePicker, setShowTimePicker,
  type, setType,
  problem, setProblem,
  fullName, setFullName,
  age, setAge,
  relation, setRelation,
  gender, setGender,
}) => (
  <View style={styles.formContainer}>
    <Text style={styles.label}>Select Date</Text>
    <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputBox}>
      <Text>{date.toDateString()}</Text>
    </TouchableOpacity>
    {showDatePicker && (
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(e, d) => { setShowDatePicker(false); if (d) setDate(d); }}
      />
    )}

    <Text style={styles.label}>Select Time</Text>
    <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.inputBox}>
      <Text>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
    </TouchableOpacity>
    {showTimePicker && (
      <DateTimePicker
        value={time}
        mode="time"
        display="default"
        onChange={(e, t) => { setShowTimePicker(false); if (t) setTime(t); }}
      />
    )}

    <Text style={styles.label}>Appointment Type</Text>
    <View style={styles.typeRow}>
      {['Online', 'At Clinic'].map((t) => (
        <TouchableOpacity
          key={t}
          onPress={() => setType(t)}
          style={[styles.typeOption, type === t && styles.selectedType]}
        >
          <Text style={{ color: type === t ? '#fff' : '#000' }}>{t}</Text>
        </TouchableOpacity>
      ))}
    </View>

    <Text style={styles.label}>Explain Your Problem</Text>
    <TextInput
      multiline numberOfLines={4} value={problem}
      onChangeText={setProblem} placeholder="Describe your issue"
      style={styles.problemInput}
    />

    <Text style={styles.label}>Add Patient Details</Text>
    {[{ label: 'Full Name', value: fullName, setter: setFullName },
      { label: 'Age', value: age, setter: setAge, keyboardType: 'numeric' },
      { label: 'Relation', value: relation, setter: setRelation }].map(({ label, value, setter, keyboardType }, i) => (
      <View key={i} style={styles.fieldGroup}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={setter}
          placeholder={`Enter ${label}`}
          keyboardType={keyboardType || 'default'}
          style={styles.textField}
        />
      </View>
    ))}

    <Text style={styles.label}>Gender</Text>
    <View style={styles.genderRow}>
      {['Male', 'Female', 'Other'].map((g) => (
        <TouchableOpacity
          key={g}
          onPress={() => setGender(g)}
          style={[styles.genderOption, gender === g && styles.selectedGender]}
        >
          <Text style={{ color: gender === g ? '#fff' : '#000' }}>{g}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default BookingForm;
