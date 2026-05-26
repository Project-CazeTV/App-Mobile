import Routes from ".";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShopScreen from "../screens/Shop";
import CartScreen from "../screens/Cart";
import SearchProductsScreen from "../screens/SearchProducts";
import ShopCategories from "../enumsCategories/Shops";
import ColorTypes from "../enumsCategories/ColorTypes";

const Tabs = createBottomTabNavigator()

export default function DashboardShopNavigator() {
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
                name={Routes.SHOP} component={ShopScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="product" size={24} color={focused ? ColorTypes.DARK : ColorTypes.GRAY} />
                    ),
                }} />
            <Tabs.Screen
                name={Routes.SHOPSEARCH} component={SearchProductsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="search" size={24} color={focused ? ColorTypes.DARK : ColorTypes.GRAY} />
                    )
                }} />
            {/* <Tabs.Screen 
            name="Pedidos" component={ShopScreen}
            initialParams={{ category: ShopCategories.ORDER }}
            options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="newspaper-outline" size={24} color={focused ? ColorTypes.DARK : ColorTypes.GRAY} />
                    )
                }}/> */}
            <Tabs.Screen
                name={Routes.CART} component={CartScreen}
                options={{
                    headerShown: false,
                    tabBarStyle: {
                        display: "none",
                    },
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="shopping-cart" size={24} color={focused ? ColorTypes.DARK : ColorTypes.GRAY} />
                    )
                }} />
        </Tabs.Navigator>
    )
}