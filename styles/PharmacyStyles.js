import { StyleSheet } from 'react-native';

export const pharmacyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#2e4aef',
    padding: 20,
    paddingTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },
  searchInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    marginHorizontal: 15,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    marginTop: 15,
    marginBottom: 10,
  },
  productCard: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#f8f8ff',
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'flex-start',
    gap: 12,
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
    color: '#333',
    marginBottom: 2,
  },
  productCompany: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e4aef',
    marginBottom: 8,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
    color: '#000',
  },
  addToCartButton: {
    backgroundColor: '#1877FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
