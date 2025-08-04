import { StyleSheet } from 'react-native';

export const signUpStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      paddingTop: 40,
      paddingBottom: 32,
      alignItems: 'center',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      backgroundColor: colors.primary,
    },
    headerIcon: {
      backgroundColor: colors.surface,
      padding: 14,
      borderRadius: 16,
      marginBottom: 12,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.textOnPrimary,
    },
    headerSubtitle: {
      fontSize: 14,
      color: colors.textOnPrimary,
      opacity: 0.8,
    },

    scrollContent: { padding: 20 },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 16,
      color: colors.text,
    },

    row: { flexDirection: 'row', justifyContent: 'space-between' },
    half: { flex: 1, marginHorizontal: 4 },

    inputWrapper: {
      backgroundColor: colors.surface,
      borderRadius: 14,
      borderWidth: 2,
      borderColor: colors.border,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputIconWrapper: {
      padding: 8,
      borderRadius: 8,
      marginRight: 10,
      backgroundColor: colors.surface,
    },
    input: { flex: 1, fontSize: 16, color: colors.text },

    pickerWrapper: {
      backgroundColor: colors.surface,
      borderRadius: 14,
      borderWidth: 2,
      borderColor: colors.border,
      marginBottom: 16,
      paddingHorizontal: 16,
    },
    pickerLabel: {
      color: colors.placeholder,
      marginTop: 8,
    },

    submitButton: {
      paddingVertical: 16,
      borderRadius: 14,
      alignItems: 'center',
      marginBottom: 24,
      backgroundColor: colors.primary,
    },
    submitText: { color: colors.textOnPrimary, fontSize: 16, fontWeight: 'bold' },

    footerText: { textAlign: 'center', marginTop: 16, color: colors.subtext },
  });
