import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  Switch, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useUser } from '../contexts/UserContext'; // ✅ Context for user

const Profile = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { user, setUser } = useUser(); // ✅ Access and clear user
  const [pushEnabled, setPushEnabled] = useState(true);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          setUser(null); // ✅ Clear context
          navigation.replace('Login'); // ✅ Navigate to Login
        }
      }
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={{
        backgroundColor: '#1877FF',
        paddingTop: insets.top + 10,
        paddingBottom: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>
          My Profile
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Name + Edit */}
        <View style={{
          backgroundColor: '#1877FF',
          padding: 20,
          alignItems: 'center',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
            {user?.firstname ? `${user.firstname} ${user.lastname}` : 'Loading...'}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile', { email: user?.email })}
            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}
          >
            <MaterialCommunityIcons name="account-edit-outline" size={18} color="#fff" />
            <Text style={{ color: '#fff', marginLeft: 5 }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Info Card */}
        <View style={{
          padding: 20, backgroundColor: '#f9f9f9',
          marginTop: 15, borderRadius: 12
        }}>
          <Text style={{
            fontSize: 16, color: '#333', fontWeight: 'bold',
            marginBottom: 12
          }}>
            Personal Information
          </Text>
          {[
            { label: 'Email', value: user?.email },
            { label: 'Phone Number', value: user?.phone },
            { label: 'Address', value: user?.address },
            { label: 'Gender', value: user?.gender },
            { label: 'Blood Group', value: user?.blood_group }
          ].map((item, i) => (
            <View key={i} style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 14, color: '#999' }}>{item.label}</Text>
              <Text style={{ fontSize: 16, color: '#333' }}>
                {item.value || 'Not provided'}
              </Text>
            </View>
          ))}
        </View>

        {/* General Section */}
        <View style={{ padding: 20 }}>
          <Text style={{ color: '#333', fontWeight: 'bold', marginBottom: 10 }}>General</Text>
          {[
            { label: 'My Cart', icon: 'wallet-outline', route: 'Cart' },
            { label: 'Saved Doctor', icon: 'heart-outline', route: 'SavedDoctors' },
            { label: 'My Appointment', icon: 'calendar-outline', route: 'Bookings' }
          ].map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate(item.route)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 14,
                borderBottomWidth: 1,
                borderBottomColor: '#eee'
              }}
            >
              <Icon name={item.icon} size={20} color="#2e4aef" style={{ width: 30 }} />
              <Text style={{ fontSize: 16, color: '#333' }}>{item.label}</Text>
            </TouchableOpacity>
          ))}

          {/* Notifications */}
          <Text style={{ color: '#333', fontWeight: 'bold', marginVertical: 10 }}>Account</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 14,
            borderBottomWidth: 1,
            borderBottomColor: '#eee'
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="notifications-outline" size={20} color="#2e4aef" style={{ width: 30 }} />
              <Text style={{ fontSize: 16, color: '#333' }}>Push Notification</Text>
            </View>
            <Switch
              value={pushEnabled}
              onValueChange={val => setPushEnabled(val)}
              trackColor={{ true: '#2e4aef', false: '#ccc' }}
              thumbColor="#fff"
            />
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              marginTop: 30,
              backgroundColor: '#ef4444',
              paddingVertical: 14,
              borderRadius: 10,
              alignItems: 'center'
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
