import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from './src/Screens/Cart/Cart';
import Market from './src/Screens/Market/Market';
import LogIn from './src/Screens/Registeration/LogIn';
import CheckOut from './src/Screens/ChechOut/ChechOut';
import SignUp from './src/Screens/Registeration/SignUp';
import DoneOrder from './src/Screens/DoneOrder/DoneOrder';
import SelectStore from './src/Screens/SelectStore/SelectStore';
import OrderHistory from './src/Screens/OrderHistory/OrderHistory';
import OrderWaiting from './src/Screens/OrderWaiting/OrderWaiting';
import SplashScreen from './src/Screens/Registeration/SplashScreen';
import SplashScreen2 from './src/Screens/Registeration/SplashScreen2';
import LanguageSelect from './src/Screens/Registeration/LanguageSelect';

import './src/constants/IMLocalize';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
        initialRouteName="SplashScreen">
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="DoneOrder" component={DoneOrder} />
        <Stack.Screen name="SelectStore" component={SelectStore} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="OrderWaiting" component={OrderWaiting} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
        <Stack.Screen name="LanguageSelect" component={LanguageSelect} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
