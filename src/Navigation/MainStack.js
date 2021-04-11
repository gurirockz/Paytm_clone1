import React from 'react';
import DrawerRoutes from './DrawerRoutes';
import navigationStrings from '../constants/navigationStrings';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, QrScanner} from '../Screens';

const Stack = createStackNavigator();
export default function () {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.DRAWER_ROUTES}
        options={{
          headerShown: false,
        }}
        component={DrawerRoutes}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name={navigationStrings.QR_SCANNER}
      component={QrScanner}
      options={{headerShown: false}}/>
    </>
  );
}
