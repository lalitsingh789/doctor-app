import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme";
import { profileStyles } from "../styles/ProfileScreenStyles";

export default function Profile() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = profileStyles(colors);

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { user, setUser } = useUser();
  const [pushEnabled, setPushEnabled] = useState(true);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: () => {
          setUser(null);
          navigation.replace("Login");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.textOnPrimary} />
        </TouchableOpacity>
        <Text style={styles.name}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Name + Edit (No Avatar) */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {user?.firstname ? `${user.firstname} ${user.lastname}` : "Loading..."}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditProfile", { email: user?.email })
            }
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <MaterialCommunityIcons
              name="account-edit-outline"
              size={18}
              color={colors.textOnPrimary}
            />
            <Text style={{ color: colors.textOnPrimary, marginLeft: 5 }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Personal Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          {[
            { label: "Email", value: user?.email },
            { label: "Phone Number", value: user?.phone },
            { label: "Address", value: user?.address },
            { label: "Gender", value: user?.gender },
            { label: "Blood Group", value: user?.blood_group },
          ].map((item, i) => (
            <View key={i} style={{ marginBottom: 12 }}>
              <Text style={styles.sectionItem}>{item.label}</Text>
              <Text style={[styles.sectionItem, { color: colors.text }]}>
                {item.value || "Not provided"}
              </Text>
            </View>
          ))}
        </View>

        {/* General */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          {[
            { label: "My Cart", icon: "wallet-outline", route: "Cart" },
            { label: "Saved Doctor", icon: "heart-outline", route: "SavedDoctors" },
            { label: "My Appointment", icon: "calendar-outline", route: "Bookings" },
          ].map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate(item.route)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 14,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
              }}
            >
              <Icon
                name={item.icon}
                size={20}
                color={colors.primary}
                style={{ width: 30 }}
              />
              <Text style={{ fontSize: 16, color: colors.text }}>{item.label}</Text>
            </TouchableOpacity>
          ))}

          {/* Dark Mode Toggle */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 14,
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <Text style={{ fontSize: 16, color: colors.text }}>Dark Mode</Text>
            <Switch
              value={theme === "dark"}
              onValueChange={toggleTheme}
              thumbColor={theme === "dark" ? "#fff" : "#000"}
            />
          </View>

          {/* Notifications */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 14,
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="notifications-outline"
                size={20}
                color={colors.primary}
                style={{ width: 30 }}
              />
              <Text style={{ fontSize: 16, color: colors.text }}>
                Push Notification
              </Text>
            </View>
            <Switch
              value={pushEnabled}
              onValueChange={(val) => setPushEnabled(val)}
              trackColor={{ true: colors.primary, false: "#ccc" }}
              thumbColor="#fff"
            />
          </View>

          {/* Logout */}
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              marginTop: 30,
              backgroundColor: "#ef4444",
              paddingVertical: 14,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
