// styles/BookingListStyles.js
import { StyleSheet } from 'react-native';
import themeColors from '../theme';

export const getBookingListStyles = (theme) => {
  const colors = themeColors[theme];

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.primary,
      paddingTop: 50,
      paddingBottom: 15,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 20,
      color: colors.onPrimary,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    tabs: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: colors.surface,
      paddingVertical: 10,
    },
    tabButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
    },
    tabActive: {
      backgroundColor: colors.primary,
    },
    tabText: {
      fontWeight: 'bold',
    },
    tabTextActive: {
      color: colors.onPrimary,
    },
    tabTextInactive: {
      color: colors.muted,
    },
    scrollView: {
      padding: 20,
    },
    card: {
      backgroundColor: colors.surface,
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    cardRow: {
      flexDirection: 'row',
    },
    image: {
      width: 75,
      height: 75,
      borderRadius: 10,
      marginRight: 15,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      color: colors.text,
    },
    title: {
      color: colors.secondaryText,
      marginTop: 2,
    },
    qualification: {
      color: colors.muted,
      marginBottom: 4,
    },
    typeTag: {
      fontSize: 12,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
      alignSelf: 'flex-start',
      fontWeight: '600',
      marginTop: 4,
    },
    typeOnline: {
      backgroundColor: colors.infoBackground,
      color: colors.infoText,
    },
    typeClinic: {
      backgroundColor: colors.warningBackground,
      color: colors.warningText,
    },
    infoRow: {
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    infoText: {
      marginLeft: 6,
      color: colors.secondaryText,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    cancelButton: {
      backgroundColor: colors.error,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
    },
    rescheduleButton: {
      backgroundColor: colors.primaryDark,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
    },
    buttonText: {
      color: colors.onPrimary,
      fontWeight: 'bold',
    },
    cancelledText: {
      color: colors.error,
      fontSize: 12,
      marginTop: 10,
      fontStyle: 'italic',
      fontWeight: '600',
    },
  });
};
