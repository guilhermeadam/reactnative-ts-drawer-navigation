import React from 'react';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Settings from './pages/Settings';

const Drawer = createDrawerNavigator();

const iSignedIn = true;

export default function Routes() {
    return (
        iSignedIn ? (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Contacts" component={Contacts} />
                    <Drawer.Screen name="Settings" component={Settings} />
                </Drawer.Navigator>
            </NavigationContainer> 
        </SafeAreaView>
        ) : (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Home} />
                </Drawer.Navigator>
            </NavigationContainer>  
        </SafeAreaView>
        )
    );
}