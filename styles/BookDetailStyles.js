// ✅ styles/BookDetailStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fc'
  },
  scrollView: {
    padding: 20
  },
  headerContainer: {
    backgroundColor: '#1877FF',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  doctorCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2
  },
  doctorImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginRight: 15
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1e3a8a'
  },
  doctorTitle: {
    color: '#6b7280',
    marginTop: 4
  },
  doctorQualifications: {
    color: '#94a3b8'
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1e293b'
  },
  inputBox: {
    backgroundColor: '#f1f5f9',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1'
  },
  typeRow: {
    flexDirection: 'row',
    marginBottom: 12
  },
  typeOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    marginRight: 10
  },
  selectedType: {
    backgroundColor: '#2563eb'
  },
  problemInput: {
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    height: 100,
    textAlignVertical: 'top'
  },
  fieldGroup: {
    marginBottom: 12
  },
  textField: {
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#cbd5e1'
  },
  genderRow: {
    flexDirection: 'row',
    marginBottom: 12
  },
  genderOption: {
    padding: 10,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    marginRight: 10
  },
  selectedGender: {
    backgroundColor: '#2563eb'
  },
  confirmButton: {
    backgroundColor: '#16a34a',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
