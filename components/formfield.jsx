import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import  icons  from "../assets/constants/images";
import {FontAwesome} from "@expo/vector-icons";

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-lg text-blue-600  font-extrabold">{title}</Text>
      <View className="w-full h-[50px]  px-4 bg-white-500 rounded-2xl border-2 border-blue-400 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-black font-u_regular text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.invisible}
              className="w-6 h-6 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
{title === "Confirm Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.invisible}
              className="w-6 h-6 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

{title === "Email" && (
          <TouchableOpacity >
            <FontAwesome name="envelope"size={20}/>
          </TouchableOpacity>
          )}
      </View>
    </View>
  );
};
export default FormField;

