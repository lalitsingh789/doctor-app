import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1877FF',
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
    color: '#fff',
  },
  loader: {
    marginTop: 40,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#F9FAFB',
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
  },
  metaText: {
    color: '#6B7280',
    marginTop: 4,
  },
  metaHighlight: {
    color: '#1877FF',
    marginTop: 4,
  },
  rowBetween: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  happyPatients: {
    color: '#10B981',
    fontWeight: '600',
  },
  rating: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  location: {
    marginTop: 8,
    color: '#6B7280',
  },
  fee: {
    marginTop: 4,
    color: '#374151',
  },
  available: {
    marginTop: 4,
    color: '#22C55E',
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contactBtn: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E0F2FE',
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  contactBtnText: {
    color: '#1877FF',
    fontWeight: '600',
  },
  bookBtn: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1877FF',
    borderRadius: 8,
    alignItems: 'center',
  },
  bookBtnText: {
    color: '#fff',
    fontWeight: '600',
  },
  saveIcon: {
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: '#fff',
  padding: 5,
  borderRadius: 20,
  elevation: 2,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 2,
},

});
