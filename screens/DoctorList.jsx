import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getDoctorListStyles } from "../styles/DoctorListStyles";
import DoctorItem from "../components/doctorList/DoctorItem";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme";

const DoctorList = ({ route, navigation }) => {
  const { feature } = route.params;
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = getDoctorListStyles(theme);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch(
          `http://192.168.46.183:5000/api/doctors?department=${feature}`
        );
        const data = await res.json();
        setDoctors(data);
      } catch (err) {
        console.error("Error:", err.message);
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
          <Icon name="arrow-back" size={24} color={colors.onPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{feature}</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
      ) : (
        <ScrollView style={styles.scroll}>
          {doctors.map((doc, index) => (
            <DoctorItem
              key={index}
              doctor={doc}
              onPressDetail={() => navigation.navigate("Detail", { doctor: doc })}
              onPressBook={() => navigation.navigate("Book", { doctor: doc })}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DoctorList;
