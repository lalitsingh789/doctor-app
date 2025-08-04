import React, { useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DoctorTabs from "../components/doctorDetail/DoctorTabs";
import DoctorStats from "../components/doctorDetail/DoctorStats";
import { getDoctorDetailStyles } from "../styles/DoctorDetailStyles";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme";

const DoctorDetail = ({ route, navigation }) => {
  const { doctor } = route.params;
  const [activeTab, setActiveTab] = useState("Details");
  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = getDoctorDetailStyles(theme);

  const renderList = (list, icon = "") =>
    list.map((item, index) => (
      <Text key={index} style={[localStyles.listItem, { color: colors.text }]}>
        {icon} {item}
      </Text>
    ));

  const renderTabContent = () => {
    switch (activeTab) {
      case "Details":
        return (
          <View style={localStyles.section}>
            <Text style={[localStyles.sectionTitle, { color: colors.text }]}>About Me</Text>
            <Text style={[localStyles.subText, { color: colors.textMuted }]}>
              {doctor.about}
            </Text>

            <Text style={[localStyles.sectionTitle, { color: colors.text }]}>Services</Text>
            {renderList(doctor.services)}

            <Text style={[localStyles.sectionTitle, { color: colors.text }]}>Expertise</Text>
            {renderList(doctor.expertise)}

            <Text style={[localStyles.sectionTitle, { color: colors.text }]}>Languages</Text>
            {renderList(doctor.languages)}
          </View>
        );

      case "Address":
        return (
          <View style={localStyles.section}>
            <Text style={[localStyles.subText, { color: colors.textMuted }]}>📍 {doctor.address}</Text>
            <Text style={[localStyles.subText, { color: colors.textMuted }]}>📞 {doctor.contact_number}</Text>
            <Text style={[localStyles.subText, { color: colors.textMuted }]}>📧 {doctor.email}</Text>
            <Text style={[localStyles.subText, { color: colors.textMuted }]}>🕒 {doctor.availability}</Text>
          </View>
        );

      case "Reviews":
        return (
          <View style={[localStyles.section, { alignItems: "center" }]}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: colors.warning }}>
              {doctor.rating}
            </Text>
            <Text style={[localStyles.subText, { color: colors.textMuted }]}>
              ({doctor.review_count} Ratings)
            </Text>
            <TouchableOpacity style={{ marginTop: 15 }}>
              <Text style={{ color: colors.primary, fontWeight: "bold" }}>
                View More Reviews ➔
              </Text>
            </TouchableOpacity>
          </View>
        );

      case "Education":
        return <View style={localStyles.section}>{renderList(doctor.education, "🎓")}</View>;

      case "Experience":
        return <View style={localStyles.section}>{renderList(doctor.experience, "💼")}</View>;

      case "Awards":
        return <View style={localStyles.section}>{renderList(doctor.awards, "🏆")}</View>;

      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerRow}>
          <Icon name="arrow-back" size={22} color={colors.onPrimary} />
          <Text style={styles.headerText}>Doctor Details</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <DoctorStats doctor={doctor} />
        <DoctorTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderTabContent()}
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("Book", { doctor })}
        style={styles.bookButton}
      >
        <Text style={styles.bookButtonText}>
          Book Now: <Text style={{ fontWeight: "bold" }}>₹ {doctor.consultation_fee}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  section: { padding: 20 },
  sectionTitle: { fontWeight: "bold", fontSize: 16, marginBottom: 10 },
  subText: { marginBottom: 10 },
  listItem: { marginBottom: 10 },
});

export default DoctorDetail;
