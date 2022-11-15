import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateScreen from './src/screens/CreateScreen';
import ProcessScreen from './src/screens/ProcessScreen';
import DoneScreen from './src/screens/DoneScreen';

//Redux
import { Provider } from 'react-redux';
import store from './src/store';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider
      store={store}
    >
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name='Create' component={CreateScreen}/>
        <Tab.Screen name='Process' component={ProcessScreen}/>
        <Tab.Screen name='Done' component={DoneScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
