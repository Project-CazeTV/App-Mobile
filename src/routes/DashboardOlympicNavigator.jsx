import Routes from ".";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import OlympicScreen from "../screens/Olympic";
import OlympicCategories from "../enumsCategories/Olympics";
import ColorTypes from "../enumsCategories/ColorTypes";

const Tabs = createBottomTabNavigator()

export default function DashboardOlympicNavigator() {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: ColorTypes.BACKGROUNDWHITE,
                height: 65,
                borderTopWidth: 1,
                elevation: 0,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
            },
            tabBarActiveTintColor: ColorTypes.DARK,
            tabBarInactiveTintColor: ColorTypes.GRAY,
            tabBarActiveBackgroundColor: ColorTypes.GRAY,
        }}>
            <Tabs.Screen
                name="Verão" component={OlympicScreen}
                initialParams={{ category: OlympicCategories.SUMMER }}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign
                            name="sun"
                            size={24}
                            color={focused ? ColorTypes.DARK : ColorTypes.GRAY}
                        />
                    ),
                }} />
            <Tabs.Screen
                name="Inverno" component={OlympicScreen}
                initialParams={{ category: OlympicCategories.WINTER }}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="snowflake-o" size={24} color={focused ? ColorTypes.DARK : ColorTypes.GRAY} />
                    )
                }} />
        </Tabs.Navigator>
    )
}