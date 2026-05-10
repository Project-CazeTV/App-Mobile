import { View, Text } from "react-native";
import Routes from ".";
import ColorTypes from "../assets/ColorTypes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import OlympicScreen from "../screens/Olympic";
import OlympicCategories from "../enumsCategories/Olympics";

const Tabs = createBottomTabNavigator()

export default function DashboardOlympicNavigator() {
    return (
        <Tabs.Navigator screenOptions={{
        headerShown: false}}>
            <Tabs.Screen 
            name="Verão" component={OlympicScreen}
            initialParams={{ category: OlympicCategories.SUMMER }}
            options={{
                tabBarIcon: () => (
                <AntDesign name="sun" size={24} color="black" />
                ),
            }}/>
            <Tabs.Screen 
            name="Inverno" component={OlympicScreen}
            initialParams={{ category: OlympicCategories.WINTER }}
            options={{
                    tabBarIcon: () => (
                        <FontAwesome name="snowflake-o" size={24} color="black" />
                    )
                }}/>
        </Tabs.Navigator>
    )
}