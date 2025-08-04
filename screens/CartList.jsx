import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import themeColors from "../theme";
import { getCartStyles } from "../styles/CartStyles";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const colors = themeColors[theme];
  const styles = getCartStyles(theme);

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={[localStyles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.onPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Your Cart</Text>
      </View>

      {/* Cart Items */}
      <ScrollView style={{ padding: 15 }}>
        {cartItems.length === 0 ? (
          <Text style={{ color: colors.text, textAlign: "center", marginTop: 50 }}>
            Your cart is empty.
          </Text>
        ) : (
          cartItems.map((item) => (
            <View key={item._id} style={styles.itemCard}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>
                  ₹{item.price} x {item.quantity}
                </Text>
                <View style={styles.controls}>
                  <TouchableOpacity
                    onPress={() => updateQuantity(item._id, -1)}
                    style={styles.qtyButton}
                  >
                    <Text style={styles.qtyText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyValue}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => updateQuantity(item._id, 1)}
                    style={styles.qtyButton}
                  >
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => removeFromCart(item._id)}
                    style={{ marginLeft: 10 }}
                  >
                    <Ionicons name="trash" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ₹{getTotal()}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={{ color: colors.onPrimary, fontWeight: "bold" }}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: { flex: 1 },
});

export default Cart;
