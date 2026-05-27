import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '.';
import HomeScreen from '../screens/Home';
import NewsScreen from '../screens/News';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';
import ProductScreen from '../screens/Product';
import CartScreen from '../screens/Cart';
import DrawerNavigator from './DrawerNagivator';
import DashboardWorldcupNavigator from './DashboardWorldCupNavigator';
import DashboardOlympicNavigator from './DashboardOlympicNavigator';
import ChampionshipScreen from '../screens/Championship';
import OthersChampionshipsScreen from '../screens/OthersChampionships';
import DashboardShopNavigator from './DashboardShopNavigator';

const Stack = createNativeStackNavigator()

export default function StackNavigation() {

    return (
        <Stack.Navigator 
        initialRouteName={Routes.DRAWER}
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen
                name={Routes.DRAWER}
                component={DrawerNavigator}
            />
            <Stack.Screen
                name={Routes.LOGIN}
                component={LoginScreen}
            />
            <Stack.Screen
                name={Routes.SIGNUP}
                component={SignUpScreen}
            />
            <Stack.Screen
                name={Routes.PROFILE}
                component={ProfileScreen}
            />
            <Stack.Screen
                name={Routes.NEWS_DETAIL}
                component={NewsScreen}
            />
            <Stack.Screen
                name={Routes.OTHERSCHAMPIONSHIPS}
                component={OthersChampionshipsScreen}
            />
            <Stack.Screen
                name={Routes.CHAMPIONSHIP}
                component={ChampionshipScreen}
            />
            <Stack.Screen
                name={Routes.PRODUCT}
                component={ProductScreen}

            />
            <Stack.Screen
                name={Routes.CART}
                component={CartScreen}

            />
        </Stack.Navigator>
    )
}