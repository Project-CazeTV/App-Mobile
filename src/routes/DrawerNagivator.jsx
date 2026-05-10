import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import Routes from '.';
import ProfileScreen from '../screens/Profile';
import HomeScreen from '../screens/Home';
import WorldcupScreen from '../screens/WorldCup';
import DashboardOlympicNavigator from './DashboardOlympicNavigator';
import ChampionshipScreen  from '../screens/Championship';
import ShopScreen from '../screens/Shop';
import HistoryScreen from '../screens/History';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name={Routes.PROFILE} 
                component={ProfileScreen} 
            />
            <Drawer.Screen 
                name={Routes.HOME} 
                component={HomeScreen} 
            />
            <Drawer.Screen 
                name={Routes.WORLDCUP} 
                component={WorldcupScreen} 
            />
            <Drawer.Screen
                name={Routes.OLYMPICDASHBOARD}
                component={DashboardOlympicNavigator}
            />
            <Drawer.Screen 
                name={Routes.CHAMPIONSHIP} 
                component={ChampionshipScreen} 
            />
            <Drawer.Screen 
                name={Routes.SHOP} 
                component={ShopScreen} 
            />
            <Drawer.Screen
                name={Routes.HISTORY}
                component={HistoryScreen}
            />
        </Drawer.Navigator>
    )
}