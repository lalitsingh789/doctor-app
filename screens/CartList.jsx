import React from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { useCart } from '../contexts/CartContext';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/CartStyles';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigation = useNavigation();

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Your Cart</Text>
      </View>

      <ScrollView style={{ padding: 15 }}>
        {cartItems.map(item => (
          <View key={item._id} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>₹{item.price} x {item.quantity}</Text>
              <View style={styles.controls}>
                <TouchableOpacity onPress={() => updateQuantity(item._id, -1)} style={styles.qtyButton}>
                  <Text style={styles.qtyText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qtyValue}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item._id, 1)} style={styles.qtyButton}>
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeFromCart(item._id)} style={{ marginLeft: 10 }}>
                  <Ionicons name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ₹{getTotal()}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Cart;
