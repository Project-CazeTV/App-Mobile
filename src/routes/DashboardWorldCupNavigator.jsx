import Routes from ".";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import WorldCupScreen from "../screens/WorldCup";
import WorldCupCategories from "../enumsCategories/WorldCup";
import ColorTypes from "../enumsCategories/ColorTypes";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tabs = createBottomTabNavigator()

export default function DashboardWorldCupNavigator() {
    const insets = useSafeAreaInsets();

    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: ColorTypes.BACKGROUNDWHITE,
                height: 65,
                borderTopWidth: 1,
                elevation: 0,
                paddingBottom: insets.bottom,
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
            name="FIFA 26" component={WorldCupScreen}
            initialParams={{ category: WorldCupCategories.INFORMATIONS }}
            options={{
                tabBarIcon: ({ focused }) => (
                <Ionicons name="football" size={24} color={focused ? ColorTypes.DARK : ColorTypes.GRAY} />
                ),
            }}/>
            <Tabs.Screen 
            name="Grupos" component={WorldCupScreen}
            initialParams={{ category: WorldCupCategories.GROUPS }}
            options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="groups" size={34} color={focused ? ColorTypes.DARK : ColorTypes.GRAY} />
                    )
                }}/>
            <Tabs.Screen 
            name="Eliminatórias" component={WorldCupScreen}
            initialParams={{ category: WorldCupCategories.QUALIFIERS }}
            options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="apartment" size={24} color={focused ? ColorTypes.DARK : ColorTypes.GRAY} />
                    )
                }}/>
            <Tabs.Screen 
            name="Finais" component={WorldCupScreen}
            initialParams={{ category: WorldCupCategories.FINALS }}
            options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="trophy" size={24} color={focused ? ColorTypes.DARK : ColorTypes.GRAY} />
                    )
                }}/>
        </Tabs.Navigator>
    )
}