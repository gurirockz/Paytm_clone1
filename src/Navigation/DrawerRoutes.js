import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import Login from '../Screens/Login/Login';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{drawerLabel: 'Login'}}
      />
    </Drawer.Navigator>
  );
}
