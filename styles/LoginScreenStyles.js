// styles/LoginScreenStyles.js
import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    paddingVertical: height * 0.06,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  brand: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 6,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#e0f2fe',
  },
  form: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 14,
  },
  inputFocused: {
    borderColor: '#3b82f6',
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1e293b',
  },
  loginButton: {
    backgroundColor: '#3b82f6',
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#94a3b8',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#64748b',
    fontSize: 13,
  },
  signupLink: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
});
