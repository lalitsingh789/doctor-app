// ✅ styles/BookDetailStyles.js (Updated for theme support)
import { StyleSheet } from 'react-native';

export const bookDetailStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      padding: 20,
    },
    headerContainer: {
      backgroundColor: colors.primary,
      paddingTop: 50,
      paddingBottom: 15,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      marginLeft: 10,
      fontSize: 20,
      color: colors.textOnPrimary,
      fontWeight: 'bold',
    },
    doctorCard: {
      backgroundColor: colors.cardBackground,
      flexDirection: 'row',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    doctorImage: {
      width: 75,
      height: 75,
      borderRadius: 10,
      marginRight: 15,
    },
    doctorName: {
      fontWeight: 'bold',
      fontSize: 16,
      color: colors.text,
    },
    doctorTitle: {
      color: colors.subtext,
      marginTop: 4,
    },
    doctorQualifications: {
      color: colors.subtext,
    },
    formContainer: {
      backgroundColor: colors.cardBackground,
      padding: 20,
      borderRadius: 12,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 8,
      color: colors.text,
    },
    inputBox: {
      backgroundColor: colors.surface,
      padding: 12,
      borderRadius: 10,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: colors.border,
      color: colors.text,
    },
    typeRow: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    typeOption: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: colors.surface,
      borderRadius: 10,
      marginRight: 10,
    },
    selectedType: {
      backgroundColor: colors.primary,
    },
    problemInput: {
      backgroundColor: colors.surface,
      borderRadius: 10,
      padding: 12,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.border,
      height: 100,
      textAlignVertical: 'top',
      color: colors.text,
    },
    fieldGroup: {
      marginBottom: 12,
    },
    textField: {
      backgroundColor: colors.surface,
      borderRadius: 10,
      padding: 12,
      borderWidth: 1,
      borderColor: colors.border,
      color: colors.text,
    },
    genderRow: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    genderOption: {
      padding: 10,
      backgroundColor: colors.surface,
      borderRadius: 10,
      marginRight: 10,
    },
    selectedGender: {
      backgroundColor: colors.primary,
    },
    confirmButton: {
      backgroundColor: colors.success,
      padding: 15,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 30,
    },
    confirmButtonText: {
      color: colors.textOnPrimary,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
