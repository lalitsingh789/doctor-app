import React, { useState, useContext } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  SafeAreaView, Alert, ActivityIndicator, StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import { ThemeContext } from '../contexts/ThemeContext';
import themeColors from '../theme';
import { signUpStyles } from '../styles/signUpStyles';

const SignUpScreen = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = signUpStyles(colors);

  const [form, setForm] = useState({
    firstname: '', lastname: '', email: '', address: '',
    phone: '', password: '', gender: '', blood_group: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSignup = async () => {
    const { firstname, lastname, email, password } = form;
    if (!firstname || !lastname || !email || !password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://192.168.46.183:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        Alert.alert('Success', data.message);
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', data.error);
      }
    } catch {
      Alert.alert('Error', 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (icon, placeholder, key, isPassword = false) => {
    const isFocused = focusedField === key;
    const hasValue = form[key]?.length > 0;
    return (
      <View
        style={[
          styles.inputWrapper,
          { borderColor: isFocused ? colors.primary : hasValue ? colors.success : colors.border }
        ]}
      >
        <View style={[styles.inputIconWrapper, { backgroundColor: isFocused ? colors.primary : colors.muted }]}>
          <Icon name={icon} size={18} color="#fff" />
        </View>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={isPassword && !showPassword}
          keyboardType={key === 'email' ? 'email-address' : key === 'phone' ? 'phone-pad' : 'default'}
          style={[styles.input, { color: colors.text }]}
          value={form[key]}
          onChangeText={(text) => handleChange(key, text)}
          onFocus={() => setFocusedField(key)}
          onBlur={() => setFocusedField(null)}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={18} color={colors.muted} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <View style={styles.headerIcon}>
          <Icon name="user" size={30} color={colors.primary} />
        </View>
        <Text style={styles.headerTitle}>Join Clinix</Text>
        <Text style={styles.headerSubtitle}>Create your healthcare account</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Personal Information</Text>
        <View style={styles.row}>
          <View style={styles.half}>{renderInput('user', 'First Name', 'firstname')}</View>
          <View style={styles.half}>{renderInput('user', 'Last Name', 'lastname')}</View>
        </View>

        {renderInput('mail', 'Email Address', 'email')}
        {renderInput('map-pin', 'Address', 'address')}
        {renderInput('phone', 'Phone Number', 'phone')}

        {/* Gender Picker */}
        <View style={[styles.pickerWrapper, { borderColor: form.gender ? colors.success : colors.border }]}>
          <Text style={[styles.pickerLabel, { color: colors.placeholder }]}>Gender</Text>
          <Picker selectedValue={form.gender} onValueChange={(val) => handleChange('gender', val)}>
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        {/* Blood Group Picker */}
        <View style={[styles.pickerWrapper, { borderColor: form.blood_group ? colors.success : colors.border }]}>
          <Text style={[styles.pickerLabel, { color: colors.placeholder }]}>Blood Group</Text>
          <Picker selectedValue={form.blood_group} onValueChange={(val) => handleChange('blood_group', val)}>
            <Picker.Item label="Select Blood Group" value="" />
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="AB-" value="AB-" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
          </Picker>
        </View>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>Security</Text>
        {renderInput('lock', 'Create Password', 'password', true)}

        <TouchableOpacity
          onPress={handleSignup}
          disabled={loading}
          style={[styles.submitButton, { backgroundColor: loading ? colors.muted : colors.primary }]}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.submitText}>Create My Account</Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.footerText, { color: colors.subtext }]}>
            Already have an account? <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
