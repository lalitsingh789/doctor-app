import { StyleSheet } from 'react-native';
import themeColors from '../theme'; // your theme.js

export const getDoctorDetailStyles = (theme) => {
  const colors = themeColors[theme];

  return StyleSheet.create({
    header: {
      backgroundColor: colors.primary,
      paddingTop: 50,
      paddingBottom: 15,
      paddingHorizontal: 20,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerText: {
      color: colors.onPrimary,
      fontWeight: 'bold',
      marginLeft: 6,
      fontSize: 20,
    },
    bookButton: {
      backgroundColor: colors.secondary,
      paddingVertical: 12,
      margin: 15,
      marginTop: 30,
      marginBottom: 30,
      borderRadius: 25,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    bookButtonText: {
      color: colors.onSecondary,
      fontWeight: '600',
      fontSize: 16,
    },
  });
};
