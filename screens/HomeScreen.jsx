import React, { useEffect, useState, useContext } from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { baseFeatures, moreFeatures } from "../consts/Features";
import { getHomeStyles } from "../styles/HomeScreenStyles";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme";

import Header from "../components/Home/Header";
import BookServiceGrid from "../components/Home/BookServiceGrid";
import FeatureGrid from "../components/Home/FeatureGrid";
import DepartmentChips from "../components/Home/DepartmentChips";
import DoctorList from "../components/Home/DoctorList";

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { email } = route?.params || {};

  // Theme handling
  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const homeStyles = getHomeStyles(theme); // <- dynamic styles

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [departmentDoctors, setDepartmentDoctors] = useState({});
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState(null);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `http://192.168.46.183:5000/api/auth/user?email=${email}`
        );
        const data = await res.json();
        if (res.ok) setUser(data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };
    if (email) fetchUser();
  }, [email]);

  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        const res = await fetch(`http://192.168.46.183:5000/api/doctors`);
        const data = await res.json();
        if (res.ok) {
          const grouped = data.reduce((acc, doc) => {
            if (!acc[doc.department]) acc[doc.department] = [];
            acc[doc.department].push(doc);
            return acc;
          }, {});
          setDepartmentDoctors(grouped);
          const deptList = Object.keys(grouped);
          setDepartments(deptList);
          setSelectedDept(deptList[0]);
        }
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };
    fetchAllDoctors();
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user?.email) return;
      try {
        const res = await fetch(
          `http://192.168.46.183:5000/api/bookings?email=${user.email}`
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          const active = data.filter((b) => b && b.doctorId && !b.isCancelled);
          setBookingCount(active.length);
        }
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };
    fetchBookings();
  }, [user?.email]);

  const features = showMore
    ? [...baseFeatures, ...moreFeatures]
    : [...baseFeatures.slice(0, 13), { title: "More", icon: "dots-horizontal" }];

  return (
    <View style={[homeStyles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
        <Header user={user} loading={loading} insets={insets} colors={colors} />
        <View style={homeStyles.section}>
          <BookServiceGrid colors={colors} />
          <FeatureGrid features={features} setShowMore={setShowMore} colors={colors} />
          <DepartmentChips
            departments={departments}
            selectedDept={selectedDept}
            setSelectedDept={setSelectedDept}
            showMore={showMore}
            setShowMore={setShowMore}
            colors={colors}
          />
          <DoctorList doctors={departmentDoctors} selectedDept={selectedDept} colors={colors} />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={[homeStyles.bottomNav(insets), { backgroundColor: colors.card }]}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons name="home" size={26} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Bookings", { email: user?.email })}>
          <View style={{ position: "relative" }}>
            <MaterialCommunityIcons name="calendar" size={26} color={colors.textSecondary} />
            {bookingCount > 0 && (
              <View style={homeStyles.badge}>
                <Text style={homeStyles.badgeText}>{bookingCount}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <MaterialCommunityIcons name="chat-outline" size={26} color={colors.textSecondary} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile", { email: user?.email })}>
          <MaterialCommunityIcons name="account-outline" size={26} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
