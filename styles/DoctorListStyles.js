import { StyleSheet } from 'react-native';
import themeColors from '../theme';

export const getDoctorListStyles = (theme) => {
  const colors = themeColors[theme];

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.primary,
      paddingHorizontal: 20,
      paddingTop: 45,
      paddingBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      marginRight: 10,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.onPrimary,
    },
    loader: {
      marginTop: 40,
    },
    scroll: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 15,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
    },
    cardTop: {
      flexDirection: 'row',
    },
    doctorImage: {
      width: 90,
      height: 90,
      borderRadius: 8,
      marginRight: 15,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      color: colors.text,
    },
    metaText: {
      color: colors.textMuted,
      marginTop: 4,
    },
    metaHighlight: {
      color: colors.primary,
      marginTop: 4,
    },
    rowBetween: {
      flexDirection: 'row',
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    happyPatients: {
      color: colors.success,
      fontWeight: '600',
    },
    rating: {
      color: colors.secondary,
      fontWeight: '600',
    },
    location: {
      marginTop: 8,
      color: colors.textMuted,
    },
    fee: {
      marginTop: 4,
      color: colors.text,
    },
    available: {
      marginTop: 4,
      color: colors.success,
      fontWeight: '600',
    },
    buttonRow: {
      flexDirection: 'row',
      marginTop: 10,
    },
    contactBtn: {
      flex: 1,
      padding: 10,
      backgroundColor: colors.infoBackground,
      borderRadius: 8,
      marginRight: 8,
      alignItems: 'center',
    },
    contactBtnText: {
      color: colors.primary,
      fontWeight: '600',
    },
    bookBtn: {
      flex: 1,
      padding: 10,
      backgroundColor: colors.primary,
      borderRadius: 8,
      alignItems: 'center',
    },
    bookBtnText: {
      color: colors.onPrimary,
      fontWeight: '600',
    },
    saveIcon: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: colors.card,
      padding: 5,
      borderRadius: 20,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
  });
};
