import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
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
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  scroll: {
    paddingHorizontal: 20,
  },
  searchSection: {
    marginTop: 25,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 25,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '30%',
    backgroundColor: '#EEF1FF',
    borderRadius: 12,
    paddingVertical: 20,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginTop: 6,
  },
  surgeryCard: {
    width: '47%',
    backgroundColor: '#E0ECFF',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  surgeryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2e4aef',
    flexShrink: 1,
  },
  symptomCard: {
    width: '30%',
    backgroundColor: '#FFF5E5',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  symptomText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#F59E0B',
    textAlign: 'center',
    marginTop: 6,
  },
});
