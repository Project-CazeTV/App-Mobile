import { View, Text } from "react-native";
import Routes from ".";
import ColorTypes from "../assets/ColorTypes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import ShopScreen from "../screens/Shop";
import ShopCategories from "../enumsCategories/Shops";

const Tabs = createBottomTabNavigator()

export default function DashboardShopNavigator() {
    return (
        <Tabs.Navigator screenOptions={{
        headerShown: false}}>
            <Tabs.Screen 
            name="Produtos" component={ShopScreen}
            initialParams={{ category: ShopCategories.PRODUCTS }}
            options={{
                tabBarIcon: () => (
                <AntDesign name="product" size={24} color="black" />
                ),
            }}/>
            <Tabs.Screen 
            name="Pesquisar" component={ShopScreen}
            initialParams={{ category: ShopCategories.SEARCH }}
            options={{
                    tabBarIcon: () => (
                        <FontAwesome name="search" size={24} color="black" />
                    )
                }}/>
            <Tabs.Screen 
            name="Pedidos" component={ShopScreen}
            initialParams={{ category: ShopCategories.ORDER }}
            options={{
                    tabBarIcon: () => (
                        <Ionicons name="newspaper-outline" size={24} color="black" />
                    )
                }}/>
            <Tabs.Screen 
            name="Carrinho" component={ShopScreen}
            initialParams={{ category: ShopCategories.CART }}
            options={{
                    tabBarIcon: () => (
                        <AntDesign name="shopping-cart" size={24} color="black" />
                    )
                }}/>
        </Tabs.Navigator>
    )
}