/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen';
import Semesters from './src/screens/Semesters';
import Profile from './src/screens/ProfileScreen';
import FacultyList from './src/screens/FacultyScreen';

const stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={HomeScreen}/>
        <stack.Screen name='Semesters' component={Semesters}/>
        <stack.Screen name='Profile' component={Profile}/>
        <stack.Screen name='Faculty List' component={FacultyList}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
