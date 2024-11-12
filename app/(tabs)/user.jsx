import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  const firstName = "Nestor"; // Replace with dynamic data if available
  const lastName = "Alegada"; // Replace with dynamic data if available
  const course = "BSIT"; // Replace with dynamic data if available
  const year = "3rd Year"; // Replace with dynamic data if available
  const gender = "Male"; // Replace with dynamic data if available

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/icons/user.png')} // Path to your profile image
        style={styles.profileImage}
      />
      <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>

      {/* Table-like structure for displaying student information */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>First Name:</Text>
          <Text style={styles.tableData}>{firstName}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Last Name:</Text>
          <Text style={styles.tableData}>{lastName}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Course:</Text>
          <Text style={styles.tableData}>{course}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Year:</Text>
          <Text style={styles.tableData}>{year}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Gender:</Text>
          <Text style={styles.tableData}>{gender}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#EBF8FF', // Light blue background applied here
  },
  profileImage: {
    width: 100,  // Adjust size as needed
    height: 100, // Adjust size as needed
    borderRadius: 50, // Make it circular
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0277BD', // Darker blue for the name
  },
  table: {
    width: '100%', // Make it full width
    padding: 10,
    borderWidth: 1,
    borderColor: '#81D4FA', // Light blue border
    borderRadius: 5,
    backgroundColor: '#E1F5FE', // Very light blue background for the table
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#B3E5FC', // Light blue for row borders
  },
  tableHeader: {
    fontWeight: 'bold',
    color: '#0288D1', 
  },
  tableData: {
    color: '#01579B', 
  },
});

export default Profile;
