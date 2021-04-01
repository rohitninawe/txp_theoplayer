/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import TheoPlayerViewScreen from './src/TheoPlayerViewScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
    return (
      <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={()=>navigation.navigate("Player")}>
        <Text>Player Screen (Click me)</Text>
      </TouchableOpacity>
    );
  }
  
  const Stack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Player" component={TheoPlayerViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;
