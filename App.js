import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {Provider} from "react-redux";
import {store} from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator} from '@react-navigation/stack';
import PlansScreen from './screens/PlansScreen';

export default function App() {
  const Stack=createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown:false,
              }}
              />
          
          <Stack.Screen 
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown:false,
              }}
              />
          </Stack.Navigator>

          <Stack.Screen 
              name='PlansScreen'
              component={PlansScreen}
              options={{
                headerShown:false,
              }}
            />
          
        </SafeAreaProvider>  
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
