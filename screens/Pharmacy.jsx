import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { pharmacyStyles } from '../styles/PharmacyStyles';
import PharmacyList from '../components/pharmacy/pharmacyList';
import { useCart } from '../contexts/CartContext';
import { ThemeContext } from '../contexts/ThemeContext';
import themeColors from '../theme';

const Pharmacy = () => {
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  const { addToCart, cartItems } = useCart();

  // Theme context
  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = pharmacyStyles(colors); // dynamically generated styles

  useEffect(() => {
    const fetchPharmacyItems = async () => {
      try {
        const res = await fetch('http://192.168.46.183:5000/api/pharmacy');
        const data = await res.json();
        const itemsWithQty = data.map((item) => ({ ...item, quantity: 1 }));
        setItems(itemsWithQty);
      } catch (error) {
        console.error('Error fetching pharmacy items:', error);
      }
    };

    fetchPharmacyItems();
  }, []);

  const handleUpdateQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert('Added to Cart', `${item.title} x${item.quantity} added to your cart.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textOnPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>Doctrix Pharma</Text>

        {/* Cart with Badge */}
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart-outline" size={24} color={colors.textOnPrimary} />
          {cartItems.length > 0 && (
            <View style={[styles.badge, { backgroundColor: colors.danger }]}>
              <Text style={styles.badgeText}>{cartItems.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        placeholder="Search Medicines & Health Products"
        placeholderTextColor={colors.placeholder}
        style={styles.searchInput}
      />

      {/* Product List */}
      <PharmacyList
        items={items}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </SafeAreaView>
  );
};

export default Pharmacy;
