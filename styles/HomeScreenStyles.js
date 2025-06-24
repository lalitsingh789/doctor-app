// styles/HomeScreenStyles.js
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const homeStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: (insets) => ({
    backgroundColor: '#1877FF',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: insets.top + 20
  }),
  
  greeting: {
    marginBottom: 10
  },
  greetingText: {
    fontSize: 14,
    color: '#f1f1f1'
  },
  greetingName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  subGreeting: {
    fontSize: 14,
    color: '#f1f1f1',
    marginTop: 5
  },
  searchBox: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  },
  section: {
    padding: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  featureCard: {
    width: '47%',
    backgroundColor: '#EEF1FF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center'
  },
  featureIcon: {
    fontSize: 30,
    color: '#5B57F1'
  },
  featureText: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5
  },
  serviceItem: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 15
  },
  serviceIconContainer: {
    backgroundColor: '#EEF1FF',
    padding: 12,
    borderRadius: 50,
    marginBottom: 5
  },
  serviceText: {
    fontSize: 12,
    textAlign: 'center'
  },
  chip: (isSelected) => ({
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: isSelected ? '#2e4aef' : '#f1f1f1',
    borderRadius: 20,
    marginRight: 10
  }),
  chipText: (isSelected) => ({
    color: isSelected ? '#fff' : '#333',
    fontWeight: 'bold'
  }),
  doctorCard: {
    width: '47%',
    backgroundColor: '#f3f6ff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15
  },
  doctorImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 14
  },
  doctorSpeciality: {
    fontSize: 12,
    color: '#555'
  },
  
  bottomNav: (insets) => ({
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingBottom: insets.bottom,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    backgroundColor: '#fff'
  }),
  badge: {
  position: 'absolute',
  top: -6,
  right: -10,
  backgroundColor: '#ef4444',
  borderRadius: 10,
  paddingHorizontal: 5,
  paddingVertical: 1,
  minWidth: 18,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999
},
badgeText: {
  color: '#fff',
  fontSize: 10,
  fontWeight: 'bold',
  textAlign: 'center'
}};
