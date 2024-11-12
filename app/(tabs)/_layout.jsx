import React from 'react'
import {View, Image} from 'react-native'
import {Tabs, Redirect,SplashScreen} from 'expo-router'
import { icons} from '../../assets/constants'
SplashScreen.preventAutoHideAsync();

const TabIcon =({icon, color, name, focused}) => {
    return (
        <View>
            <Image 
            source={icon}
            resizeMode ="contain"
             className="w-6 h-6"
             colorTitnt= {color}
            />
        </View>
        );
};


const TabLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen
            name="home"
            options ={{
                title: 'Home',
                headerShown: 'false',
                tabBarIcon: ({color,focused}) =>(
                    <TabIcon
                    icon ={icons.home}
                    color ={color}
                    name ="Home"
                    focused ={focused}
                    />
                )
            }}
            /> //End of Home Icon
            <Tabs.Screen
            name="task"
            options ={{
                title: 'Task',
                headerShown: 'false',
                tabBarIcon: ({color,focused}) =>(
                    <TabIcon
                    icon ={icons.task}
                    color ={color}
                    name ="Task"
                    focused ={focused}
                    />
                )
            }}
            /> //End of Task Icon
             <Tabs.Screen
            name="menu"
            options ={{
                title: 'Menu',
                headerShown: 'false',
                tabBarIcon: ({color,focused}) =>(
                    <TabIcon
                    icon ={icons.menu}
                    color ={color}
                    name ="Menu"
                    focused ={focused}
                    />
                )
            }}
            />
             
             <Tabs.Screen
            name="user"
            options ={{
                title: 'User',
                headerShown: 'false',
                tabBarIcon: ({color,focused}) =>(
                    <TabIcon
                    icon ={icons.user}
                    color ={color}
                    name ="User"
                    focused ={focused}
                    />
                )
            }}
            />
    </Tabs>
    </>
  )
}

export default TabLayout