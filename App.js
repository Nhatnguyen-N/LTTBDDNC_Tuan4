
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ColorScreen from './screens/ColorScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> 
          <Stack.Screen name="ColorScreen" component={ColorScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}


