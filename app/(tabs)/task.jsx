import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, Clipboard } from 'react-native';
import { styled } from 'nativewind';

const Container = styled(View);
const HeaderText = styled(Text);
const TaskList = styled(View);
const TaskItem = styled(View);
const DropdownItem = styled(TouchableOpacity);

const tasks = [
  "Task: Carrying the Chairs (2 hours)",
  "Task: Wiping the Windows (1 hour)",
  "Task: Mop the Floor (1.5 hours)",
  "Task: Manage Your Garden (3 hours)"
];

const Task = () => {
  const [dropdownVisible, setDropdownVisible] = useState(Array(tasks.length).fill(false));

  const toggleDropdown = (index) => {
    const updatedDropdownVisible = [...dropdownVisible];
    updatedDropdownVisible[index] = !updatedDropdownVisible[index];
    setDropdownVisible(updatedDropdownVisible);
  };

  const handleCopyToClipboard = (task) => {
    Clipboard.setString(task);
    Alert.alert('Copied to Clipboard!', `Text "${task}" has been copied.`);
  };

  return (
    <Container className="flex-1 justify-center items-center bg-blue-100 p-4">
      {/* Logo */}
      <Image 
        source={require('../../assets/icons/cctc.png')} // Adjust path if necessary
        style={{ width: 100, height: 100, marginBottom: 20 }}
        resizeMode="contain"
      />
      {/* Header */}
      <HeaderText className="text-2xl font-bold mb-4 text-blue-700">
        NSTP Tasks
      </HeaderText>
      
      {/* Task List */}
      <TaskList className="w-full mb-4">
        {tasks.map((task, index) => (
          <View key={index}>
            {/* Task Item */}
            <TaskItem 
              className="p-4 mb-2 bg-white border border-gray-300 rounded-md shadow-sm"
              onPress={() => toggleDropdown(index)}
            >
              <Text className="text-lg font-bold text-gray-800">{task}</Text>
            </TaskItem>

            {/* Dropdown for Each Task */}
            {dropdownVisible[index] && (
              <View className="p-2 bg-gray-100 border border-gray-300 rounded-md mb-2">
                <DropdownItem 
                  className="mb-2" 
                  onPress={() => handleCopyToClipboard(task)}
                >
                  <Text className="text-gray-700">Copy Task</Text>
                </DropdownItem>
                <DropdownItem 
                  className="mb-2"
                  onPress={() => Alert.alert('Additional Option Selected', `Perform action for ${task}`)}
                >
                  <Text className="text-gray-700">Additional Option</Text>
                </DropdownItem>
              </View>
            )}
          </View>
        ))}
      </TaskList>
    </Container>
  );
};

export default Task;
