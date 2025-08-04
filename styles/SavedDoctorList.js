import { StyleSheet } from 'react-native';

export const savedDoctorStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: colors.primary,
    },
    backButton: {
      marginRight: 12,
    },
    headerText: {
      color: colors.textOnPrimary,
      fontSize: 18,
      fontWeight: 'bold',
    },
    scroll: {
      padding: 16,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 50,
      fontSize: 16,
      color: colors.subtext,
    },
    card: {
      backgroundColor: colors.cardBackground,
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      shadowColor: colors.shadow,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
    },
    cardTop: {
      flexDirection: 'row',
      marginBottom: 12,
    },
    doctorImage: {
      width: 64,
      height: 64,
      borderRadius: 32,
      marginRight: 12,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
    },
    metaText: {
      fontSize: 13,
      color: colors.subtext,
    },
    metaHighlight: {
      fontSize: 13,
      color: colors.accent,
      fontWeight: '600',
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 6,
    },
    happyPatients: {
      fontSize: 13,
      color: colors.subtext,
    },
    rating: {
      fontSize: 13,
      color: colors.primary,
    },
    location: {
      fontSize: 13,
      color: colors.subtext,
      marginVertical: 2,
    },
    fee: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.text,
    },
    available: {
      fontSize: 12,
      color: colors.accent,
      marginVertical: 4,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
    },
    contactBtn: {
      flex: 1,
      marginRight: 8,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 8,
      alignItems: 'center',
    },
    contactBtnText: {
      color: colors.primary,
      fontWeight: '600',
    },
    bookBtn: {
      flex: 1,
      backgroundColor: colors.primary,
      paddingVertical: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    bookBtnText: {
      color: colors.textOnPrimary,
      fontWeight: '600',
    },
  });
