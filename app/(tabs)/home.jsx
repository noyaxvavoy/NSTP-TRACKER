import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { styles } from 'nativewind';

const Home = () => {
  const [rotcVisible, setRotcVisible] = useState(false);
  const [ltsVisible, setLtsVisible] = useState(false);
  const [cwtsVisible, setCwtsVisible] = useState(false);

  return (
    <ScrollView>
    <View className="flex-1 bg-blue-200 justify-center items-center p-6">
      
      <Image source={require("../../assets/icons/cctc.png")} className="w-24 h-24 mb-4" />
      <Text className="text-4xl font-extrabold text-blue-900 mb-4">
        Welcome to NSTP Tracker
      </Text>
      <Text className="text-lg font-bold text-blue-800 mb-6">
        Explore the features and track your progress with ease.
      </Text>

      
      <Text className="text-2xl font-extrabold text-blue-900 mb-4">
        What is NSTP (National Service Training Program)?
      </Text>
      <Text className="text-base text-gray-800 mb-6">
        The National Service Training Program (NSTP) is a government-mandated program in the Philippines that aims to enhance civic consciousness and defense preparedness among the youth. It is required for all Filipino students enrolled in baccalaureate degree courses or two-year technical-vocational programs.
      </Text>

      <Text className="text-lg font-bold text-blue-800 mb-2">NSTP offers three program components:</Text>

      
      <TouchableOpacity
        className="bg-white text-blue-700 text-lg font-bold py-3 px-4 rounded-md shadow-md w-full max-w-xs mb-4"
        onPress={() => setRotcVisible(true)}
      >
        <Text className="text-center text-blue-900">Reserve Officers' Training Corps (ROTC)</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        className="bg-white text-blue-700 text-lg font-bold py-3 px-4 rounded-md shadow-md w-full max-w-xs mb-4"
        onPress={() => setLtsVisible(true)}
      >
        <Text className="text-center text-blue-900">Literacy Training Service (LTS)</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        className="bg-white text-blue-700 text-lg font-bold py-3 px-4 rounded-md shadow-md w-full max-w-xs mb-4"
        onPress={() => setCwtsVisible(true)}
      >
        <Text className="text-center text-blue-900">Civic Welfare Training Service (CWTS)</Text>
      </TouchableOpacity>

      
      <Text className="text-lg font-bold text-blue-900 mt-6 mb-4">Why NSTP is Important</Text>
      <Text className="text-base text-gray-800">
        NSTP plays a critical role in shaping responsible citizens who contribute positively to society. It instills values of service, civic duty, and nationalism.
      </Text>

      
      <Modal visible={rotcVisible} animationType="slide" transparent={true}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white rounded-lg p-6 w-10/12 h-2/3">
           
              <Text className="text-2xl font-bold mb-4 text-blue-900">
                Reserve Officers' Training Corps (ROTC)
              </Text>
              <Text className="text-base text-gray-800">
                The ROTC aims to provide military education and training to tertiary level students in order to motivate, train, organize, and mobilize them for national defense preparedness. Students who choose this component undergo training that can lead to their commission as officers in the Armed Forces of the Philippines (AFP).
              </Text>
              <Text className="text-base text-gray-800 mt-4">
                ROTC's primary goal is to produce individuals who are ready to serve the country in times of need, such as national emergencies or during calamities.
              </Text>
            
            <TouchableOpacity onPress={() => setRotcVisible(false)} className="mt-4 bg-blue-600 p-3 rounded-md">
              <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      
      <Modal visible={ltsVisible} animationType="slide" transparent={true}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white rounded-lg p-6 w-10/12 h-2/3">
            
              <Text className="text-2xl font-bold mb-4 text-blue-900">Literacy Training Service (LTS)</Text>
              <Text className="text-base text-gray-800">
                The Literacy Training Service (LTS) is designed to train students to become teachers of literacy and numeracy skills to school children, out-of-school youth, and other segments of society who are in need of such services.
              </Text>
              <Text className="text-base text-gray-800 mt-4">
                This component is focused on community education and addressing literacy gaps, empowering the community through teaching.
              </Text>
            
            <TouchableOpacity onPress={() => setLtsVisible(false)} className="mt-4 bg-blue-600 p-3 rounded-md">
              <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={cwtsVisible} animationType="slide" transparent={true}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white rounded-lg p-6 w-10/12 h-2/3">
           
              <Text className="text-2xl font-bold mb-4 text-blue-900">
                Civic Welfare Training Service (CWTS)
              </Text>
              <Text className="text-base text-gray-800">
                The Civic Welfare Training Service (CWTS) focuses on activities that contribute to the general welfare and betterment of life for the members of the community.
              </Text>
              <Text className="text-base text-gray-800 mt-4">
                CWTS programs often involve organizing community service projects, environmental clean-ups, disaster response activities, and other civic work aimed at benefiting society.
              </Text>
            
            <TouchableOpacity onPress={() => setCwtsVisible(false)} className="mt-4 bg-blue-600 p-3 rounded-md">
              <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
    </ScrollView>
  );
};

export default Home;
