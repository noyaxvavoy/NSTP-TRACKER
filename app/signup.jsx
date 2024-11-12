import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, router} from 'expo-router'; 
import CustomButton from '../components/custombutton';
import FormField  from '../components/formfield';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [course, setCourse] = useState('');
  const [gender, setGender] = useState(''); 
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const courses = [
    { label: 'Select a course...', value: '' },
    { label: 'Computer Science', value: 'computer_science' },
    { label: 'Information Technology', value: 'information_technology' },
    { label: 'Business Administration', value: 'business_administration' },
    { label: 'BSED', value: 'bsed' },
    
  ];

  const router = useRouter(); 

  const [form, setForm]=useState({
    email:'',
    password:'',
    confirmPassword:'',
  })

  const handleSignup = () => {
    console.log('Signup pressed with email:', email);
    
    router.push('/login'); 
  };

  const handleCourseSelect = (courseValue) => {
    setCourse(courseValue);
    setDropdownVisible(false); 
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <ImageBackground 
      source={require('../assets/icons/logocctc.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image 
          source={require('../assets/icons/cctc.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>NSTP Tracker</Text>
        <Text style={styles.quote}>Tracking Progress, Fostering Service</Text>

        <Text style={styles.title}>Sign Up</Text>

        <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-5"
                  keyboardType="email-address"
             />
       <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
        />
        <FormField
            title="Confirm Password"
            value={form.confirmpassword}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
        />

       
        <Text style={styles.label}>Select Course:</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Text style={styles.dropdownText}>{course || 'Select a course...'}</Text>
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdownMenu}>
            {courses.map((courseItem) => (
              <TouchableOpacity
                key={courseItem.value}
                style={styles.dropdownItem}
                onPress={() => handleCourseSelect(courseItem.value)}
              >
                <Text>{courseItem.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.label}>Select Gender:</Text>
        <View style={styles.radioContainer}>
          <View style={styles.radioOption}>
            <Text>Male</Text>
            <TouchableOpacity onPress={() => setGender('male')}>
              <View style={[styles.radioCircle, gender === 'male' && styles.selectedRadio]} />
            </TouchableOpacity>
          </View>
          <View style={styles.radioOption}>
            <Text>Female</Text>
            <TouchableOpacity onPress={() => setGender('female')}>
              <View style={[styles.radioCircle, gender === 'female' && styles.selectedRadio]} />
            </TouchableOpacity>
          </View>
          <View style={styles.radioOption}>
            <Text>Other</Text>
            <TouchableOpacity onPress={() => setGender('other')}>
              <View style={[styles.radioCircle, gender === 'other' && styles.selectedRadio]} />
            </TouchableOpacity>
          </View>
        </View>

        <CustomButton 
        
        title = "Sign Up"containerStyles="mt-4 items-center"
        handlePress={()=> router.push('/login')}>
          
        </CustomButton>

        <Text style={styles.text}>
          Already have an account?{' '}
          
        </Text>
      </View>
    </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    width: '100%',
    padding: 16,
  },
  logo: {
    width: 150,  
    height: 150, 
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  dropdown: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  dropdownText: {
    color: '#000',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 60, 
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    zIndex: 1,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft: 5,
  },
  selectedRadio: {
    backgroundColor: '#007BFF', 
  },
  text: {
    marginTop: 16,
  },
  link: {
    color: 'blue',
  },
  welcomeText: {
    color: 'blue',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quote: {
    color: 'gray',
    fontSize: 25,
    fontStyle: 'italic',
    marginBottom: 20,
  },
});