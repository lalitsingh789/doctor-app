import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  SafeAreaView, Alert, ActivityIndicator, Dimensions, StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';

const { width } = Dimensions.get('window');

const SignUpScreen = ({ navigation }) => {
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
        // navigation.navigate('Login');
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
      <View style={{
        backgroundColor: '#fff', borderRadius: 14, borderWidth: 2,
        borderColor: isFocused ? '#3b82f6' : hasValue ? '#10b981' : '#e5e7eb',
        paddingHorizontal: 16, paddingVertical: 12, marginBottom: 16,
        flexDirection: 'row', alignItems: 'center',
      }}>
        <View style={{
          backgroundColor: isFocused ? '#3b82f6' : '#9ca3af',
          padding: 8, borderRadius: 8, marginRight: 10,
        }}>
          <Icon name={icon} size={18} color="#fff" />
        </View>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#94a3b8"
          secureTextEntry={isPassword && !showPassword}
          keyboardType={
            key === 'email' ? 'email-address' :
            key === 'phone' ? 'phone-pad' : 'default'
          }
          style={{ flex: 1, fontSize: 16, color: '#1e293b' }}
          value={form[key]}
          onChangeText={(text) => handleChange(key, text)}
          onFocus={() => setFocusedField(key)}
          onBlur={() => setFocusedField(null)}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={18} color="#6b7280" />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <StatusBar backgroundColor="#3b82f6" barStyle="light-content" />
      <View style={{
        backgroundColor: '#3b82f6', paddingTop: 40, paddingBottom: 32,
        alignItems: 'center', borderBottomLeftRadius: 24, borderBottomRightRadius: 24,
      }}>
        <View style={{ backgroundColor: '#fff', padding: 14, borderRadius: 16, marginBottom: 12 }}>
          <Icon name="user" size={30} color="#3b82f6" />
        </View>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#fff' }}>Join Clinix</Text>
        <Text style={{ fontSize: 14, color: '#e0f2fe' }}>Create your healthcare account</Text>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#334155', marginBottom: 16 }}>
          Personal Information
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, marginRight: 8 }}>
            {renderInput('user', 'First Name', 'firstname')}
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            {renderInput('user', 'Last Name', 'lastname')}
          </View>
        </View>

        {renderInput('mail', 'Email Address', 'email')}
        {renderInput('map-pin', 'Address', 'address')}
        {renderInput('phone', 'Phone Number', 'phone')}

        {/* Gender Picker */}
        <View style={{
          backgroundColor: '#fff', borderRadius: 14, borderWidth: 2,
          borderColor: form.gender ? '#10b981' : '#e5e7eb',
          marginBottom: 16, paddingHorizontal: 16
        }}>
          <Text style={{ color: '#6b7280', marginTop: 8 }}>Gender</Text>
          <Picker
            selectedValue={form.gender}
            onValueChange={(val) => handleChange('gender', val)}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        {/* Blood Group Picker */}
        <View style={{
          backgroundColor: '#fff', borderRadius: 14, borderWidth: 2,
          borderColor: form.blood_group ? '#10b981' : '#e5e7eb',
          marginBottom: 16, paddingHorizontal: 16
        }}>
          <Text style={{ color: '#6b7280', marginTop: 8 }}>Blood Group</Text>
          <Picker
            selectedValue={form.blood_group}
            onValueChange={(val) => handleChange('blood_group', val)}
          >
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

        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#334155', marginVertical: 16 }}>
          Security
        </Text>

        {renderInput('lock', 'Create Password', 'password', true)}

        {form.password.length > 0 && (
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 12, color: '#64748b', marginBottom: 8 }}>Password Strength</Text>
            <View style={{ flexDirection: 'row' }}>
              {[1, 2, 3, 4].map(level => (
                <View key={level} style={{
                  flex: 1, height: 4, borderRadius: 2, marginHorizontal: 2,
                  backgroundColor: form.password.length >= level * 2
                    ? form.password.length >= 8 ? '#10b981' : '#f59e0b'
                    : '#e5e7eb',
                }} />
              ))}
            </View>
          </View>
        )}

        <TouchableOpacity
          onPress={handleSignup}
          disabled={loading}
          activeOpacity={0.8}
          style={{
            backgroundColor: loading ? '#94a3b8' : '#3b82f6',
            paddingVertical: 16, borderRadius: 14, alignItems: 'center', marginBottom: 24,
          }}
        >
          {loading ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ActivityIndicator color="#fff" size="small" />
              <Text style={{ color: '#fff', marginLeft: 8, fontWeight: 'bold' }}>Creating Account...</Text>
            </View>
          ) : (
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Create My Account</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ textAlign: 'center', color: '#64748b' }}>
            Already have an account? <Text style={{ color: '#3b82f6', fontWeight: 'bold' }}>Sign In</Text>
          </Text>
        </TouchableOpacity>

        <Text style={{
          textAlign: 'center', fontSize: 12, color: '#9ca3af', marginTop: 16,
        }}>
          By signing up, you agree to our <Text style={{ color: '#3b82f6', fontWeight: '600' }}>Terms</Text> and{' '}
          <Text style={{ color: '#3b82f6', fontWeight: '600' }}>Privacy Policy</Text>.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
