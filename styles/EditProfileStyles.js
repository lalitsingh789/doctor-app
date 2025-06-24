import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },

  header: {
    backgroundColor: '#1877FF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  backButton: {
    marginRight: 12,
    justifyContent: 'center',
  },

  backIcon: {
    fontSize: 26,
    color: '#fff',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 25,
  },

  inputGroup: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 6,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    fontSize: 16,
    color: '#0f172a',
  },

  pickerWrapper: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    overflow: 'hidden',
  },

  picker: {
    height: 50,
    color: '#0f172a',
    fontSize: 16,
  },

  submitButton: {
    backgroundColor: '#1877FF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },

  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttonDisabled: {
    backgroundColor: '#94a3b8',
  },
});
