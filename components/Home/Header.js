import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { homeStyles } from '../../styles/HomeScreenStyles';
import { useUser } from '../../contexts/UserContext';

const Header = ({ insets }) => {
  const { user } = useUser();

  return (
    <View style={homeStyles.header(insets)}>
      <View style={homeStyles.greeting}>
        <Text style={homeStyles.greetingText}>Hello,</Text>
        <Text style={homeStyles.greetingName}>
          {user?.firstname ? `Welcome, ${user.firstname}` : 'Guest'}
        </Text>
        <Text style={homeStyles.subGreeting}>Wishing you a healthy day ahead!</Text>
      </View>
      <View style={homeStyles.searchBox}>
        <Icon name="search" size={20} color="#9ca3af" />
        <TextInput
          placeholder="Search for Doctor, Service..."
          placeholderTextColor="#9ca3af"
          style={homeStyles.searchInput}
        />
        <Icon name="options-outline" size={20} color="#9ca3af" />
      </View>
    </View>
  );
};

export default Header;
