// styles/CartStyles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2e4aef',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingTop: 40,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemCard: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f1f4ff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    color: '#555',
    marginBottom: 6,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    backgroundColor: '#2e4aef',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  qtyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qtyValue: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fefefe',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  checkoutButton: {
    backgroundColor: '#2e4aef',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
});
