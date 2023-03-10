import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Platform, NativeModules } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from './Screens/Home';
import SettingsScreen from './Screens/Settings';

const { StatusBarManager } = NativeModules;
const Stack = createNativeStackNavigator();

export default function App() {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Employess Tracker',
              headerRight: (() => { 
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log('Pressed Add button ', count, ' times');
                      setCount(() => count + 1);
                    }}
                  >
                    <AntDesign name="pluscircleo" size={24} color="black" />
                  </TouchableOpacity>
                )
              }),
              // statusBarStyle: 'light',
            }}
          />
          <Stack.Screen 
            name="Settings" 
            component={SettingsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'pink',
    // paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
    // borderColor: 'red', borderWidth: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
