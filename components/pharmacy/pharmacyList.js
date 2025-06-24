import React from 'react';
import {
  View, Text, Image, TouchableOpacity, FlatList
} from 'react-native';
import { pharmacyStyles as styles } from '../../styles/PharmacyStyles';

const PharmacyList = ({ items, onAddToCart, onUpdateQuantity }) => {
  if (!items || items.length === 0) {
    return <Text style={{ textAlign: 'center', marginTop: 20 }}>No products available.</Text>;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ padding: 15, paddingBottom: 120 }}
      renderItem={({ item }) => (
        <View style={styles.productCard}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productCompany}>By {item.company || 'Generic'}</Text>
            <Text style={styles.productPrice}>MRP ₹{item.price}</Text>

            <View style={styles.quantityRow}>
              <TouchableOpacity onPress={() => onUpdateQuantity(item._id, -1)} style={styles.qtyButton}>
                <Text style={styles.qtyText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.qtyValue}>{item.quantity || 1}</Text>
              <TouchableOpacity onPress={() => onUpdateQuantity(item._id, 1)} style={styles.qtyButton}>
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => onAddToCart(item)}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default PharmacyList;