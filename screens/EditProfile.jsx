import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/Ionicons";
import { getEditProfileStyles } from "../styles/EditProfileStyles"; // <-- correct import
import { useUser } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme";

const EditProfile = ({ route, navigation }) => {
  const { email } = route.params || {};
  const { setUser } = useUser();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    gender: "",
    blood_group: "",
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = getEditProfileStyles(theme); // <-- use here inside component

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://192.168.46.183:5000/api/auth/user?email=${email}`);
        const data = await res.json();
        if (res.ok && data.user) {
          setForm(data.user);
        } else {
          Alert.alert("Error", "User not found");
        }
      } catch {
        Alert.alert("Error", "Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
    if (email) fetchUser();
  }, [email]);

  const handleSubmit = async () => {
    if (!email) return Alert.alert("Error", "Email is required");
    setSubmitting(true);
    try {
      const payload = { email, ...form };
      const res = await fetch(`http://192.168.46.183:5000/api/auth/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        Alert.alert("Success", data.message);
        setUser({ ...form, email });
        navigation.goBack();
      } else {
        Alert.alert("Error", data.error);
      }
    } catch {
      Alert.alert("Error", "Update failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {["firstname", "lastname", "phone", "address"].map((field) => (
          <View key={field} style={styles.inputGroup}>
            <Text style={styles.label}>{field.toUpperCase()}</Text>
            <TextInput
              value={form[field]}
              onChangeText={(val) => handleChange(field, val)}
              style={styles.input}
              placeholderTextColor={colors.placeholder}
              keyboardType={field === "phone" ? "phone-pad" : "default"}
            />
          </View>
        ))}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={form.gender}
              onValueChange={(val) => handleChange("gender", val)}
              style={styles.picker}
              dropdownIconColor={colors.text}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Blood Group</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={form.blood_group}
              onValueChange={(val) => handleChange("blood_group", val)}
              style={styles.picker}
              dropdownIconColor={colors.text}
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
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={submitting}
          style={[styles.submitButton, submitting && styles.buttonDisabled]}
        >
          {submitting ? (
            <ActivityIndicator color={colors.onPrimary} />
          ) : (
            <Text style={styles.submitText}>Save Changes</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
