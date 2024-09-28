import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CountNumber from '../components/CountNumber';
import CountArray from '../components/CountArray';
import TikiOk from '../components/TikiOk';
import PasswordGenerator from '../components/PasswordGenerator';

const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<DrawerNavigator />} />
        </Routes>
      </NativeRouter>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Number" component={CountNumber} />
        <Drawer.Screen name="Array" component={CountArray} />
        <Drawer.Screen name="Tiki" component={TikiOk} />
        <Drawer.Screen name="Password" component={PasswordGenerator} />
    </Drawer.Navigator>
  );
}
