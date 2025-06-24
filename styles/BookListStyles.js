import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fc'
  },
  header: {
    backgroundColor: '#1877FF',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20
  },
  tabActive: {
    backgroundColor: '#1877FF'
  },
  tabText: {
    fontWeight: 'bold'
  },
  tabTextActive: {
    color: '#fff'
  },
  tabTextInactive: {
    color: '#64748b'
  },
  scrollView: {
    padding: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  cardRow: {
    flexDirection: 'row'
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginRight: 15
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1e3a8a'
  },
  title: {
    color: '#6b7280',
    marginTop: 2
  },
  qualification: {
    color: '#94a3b8',
    marginBottom: 4
  },
  typeTag: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    fontWeight: '600',
    marginTop: 4
  },
  typeOnline: {
    backgroundColor: '#e0f2fe',
    color: '#0284c7'
  },
  typeClinic: {
    backgroundColor: '#fef9c3',
    color: '#f59e0b'
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    marginLeft: 6,
    color: '#475569'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  cancelButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  rescheduleButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  cancelledText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 10,
    fontStyle: 'italic',
    fontWeight: '600'
  }
  
});