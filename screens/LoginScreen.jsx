// components/LoginScreen.jsx
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  SafeAreaView, Alert, StatusBar, ActivityIndicator, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useUser } from '../contexts/UserContext';
import styles from '../styles/LoginScreenStyles';

const LoginScreen = ({ navigation }) => {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://192.168.46.183:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      } else {
        Alert.alert('Login Failed', data.error);
      }
    } catch (error) {
      Alert.alert('Network Error', 'Unable to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#3b82f6" barStyle="light-content" />

      {/* Blue header with logo */}
      <View style={styles.header}>
        <Image source={require('../assets/doc.png')} style={styles.logo} />
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to your Doctrix account</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Email Field */}
        <Text style={styles.label}>Email Address</Text>
        <View style={[styles.inputWrapper, focusedField === 'email' && styles.inputFocused]}>
          <Icon name="mail" size={18} color="#6b7280" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#94a3b8"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
          />
        </View>

        {/* Password Field */}
        <Text style={[styles.label, { marginTop: 16 }]}>Password</Text>
        <View style={[styles.inputWrapper, focusedField === 'password' && styles.inputFocused]}>
          <Icon name="lock" size={18} color="#6b7280" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#94a3b8"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setFocusedField('password')}
            onBlur={() => setFocusedField(null)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={18} color="#6b7280" />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          style={[styles.loginButton, loading && styles.disabledButton]}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginText}>Login</Text>}
        </TouchableOpacity>

        {/* Signup Redirect */}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
