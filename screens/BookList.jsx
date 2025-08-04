// ✅ screens/BookList.jsx
import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import BookingCard from "../components/bookList/BookingCard";
import TabSelector from "../components/bookList/TabSelector";
import Header from "../components/bookList/Header";
import { useUser } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme"; // your theme.js
import { styles } from "../styles/BookListStyles"; // styles file for BookList

const BookList = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme]; // dynamically pick theme colors

  const fetchBookings = async () => {
    try {
      if (!user?.email) return;
      const res = await fetch(
        `http://192.168.46.183:5000/api/bookings?email=${user.email}`
      );
      const data = await res.json();
      const clean = Array.isArray(data)
        ? data.filter((b) => b && b.doctorId)
        : [];
      setBookings(clean);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    try {
      const res = await fetch(
        `http://192.168.46.183:5000/api/bookings/${id}/cancel`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.log("Raw error response:", text);
        throw new Error("Server error");
      }

      const data = await res.json();
      if (data.booking?.isCancelled) {
        Alert.alert("Cancelled", "Appointment moved to Cancelled tab");
        fetchBookings(); // refresh
      } else {
        Alert.alert("Error", "Failed to cancel appointment");
      }
    } catch (err) {
      console.error("Cancel error:", err);
      Alert.alert("Error", "Something went wrong");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [user?.email]);

  const filteredBookings = bookings.filter((b) => {
    if (activeTab === "Ongoing")
      return b.isCancelled !== true && b.isCompleted !== true;
    if (activeTab === "Cancelled") return b.isCancelled === true;
    return true;
  });

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={{ marginTop: 40 }}
      />
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header navigation={navigation} textColor={colors.text} />
      <TabSelector
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        textColor={colors.text}
      />
      <ScrollView
        contentContainerStyle={[
          styles.scrollView,
          { backgroundColor: colors.background },
        ]}
      >
        {filteredBookings.map((item, index) => (
          <BookingCard
            key={index}
            item={item}
            activeTab={activeTab}
            onCancel={() => handleCancel(item._id)}
            textColor={colors.text}
            cardColor={colors.card}
          />
        ))}
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   scrollView: { padding: 20 },
// });

export default BookList;
