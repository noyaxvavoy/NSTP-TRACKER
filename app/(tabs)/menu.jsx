import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Menu = () => {
  const menuOptions = [
    { label: 'Home', onPress: () => alert('Navigating to Home') },
    { label: 'Tasks', onPress: () => alert('Navigating to Tasks') },
    { label: 'Account Settings', onPress: () => alert('Navigating to Account Settings') },
    { label: 'Help', onPress: () => alert('Navigating to Help') },
    { label: 'Feedback', onPress: () => alert('Navigating to Feedback') },
    { label: 'Log Out', onPress: () => alert('Logging Out') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      {menuOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={option.onPress}
        >
          <Text style={styles.menuText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EBF8FF', // Light blue background
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0277BD', // Darker blue for the header
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#E1F5FE', // Very light blue background for menu items
    borderColor: '#81D4FA', // Light blue border
    borderWidth: 1,
    shadowColor: '#000', // Add shadow for depth
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  menuText: {
    fontSize: 18,
    color: '#01579B', // Dark blue text
    textAlign: 'center',
  },
});

export default Menu;
