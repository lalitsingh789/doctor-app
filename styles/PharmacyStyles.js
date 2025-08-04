import { StyleSheet } from 'react-native';

export const pharmacyStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.primary,
      padding: 20,
      paddingTop: 55,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.textOnPrimary,
      marginLeft: 10,
      flex: 1,
    },
    searchInput: {
      backgroundColor: colors.surface,
      borderRadius: 12,
      marginHorizontal: 15,
      paddingHorizontal: 14,
      paddingVertical: 10,
      fontSize: 14,
      marginTop: 15,
      marginBottom: 10,
      color: colors.text,
    },
    productCard: {
      flexDirection: 'row',
      padding: 12,
      backgroundColor: colors.cardBackground,
      borderRadius: 12,
      marginBottom: 15,
      alignItems: 'flex-start',
    },
    productImage: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      borderRadius: 6,
    },
    productInfo: {
      flex: 1,
    },
    productTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 2,
    },
    productCompany: {
      fontSize: 12,
      color: colors.subtext,
      marginBottom: 4,
    },
    productPrice: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: 8,
    },
    quantityRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    qtyButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 4,
    },
    qtyText: {
      color: colors.textOnPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    qtyValue: {
      marginHorizontal: 10,
      fontSize: 14,
      fontWeight: '600',
      color: colors.text,
    },
    addToCartButton: {
      backgroundColor: colors.accent,
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 6,
      alignSelf: 'flex-start',
    },
    addToCartText: {
      color: colors.textOnPrimary,
      fontSize: 12,
      fontWeight: 'bold',
    },
  });
