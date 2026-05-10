import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '.';
import HomeScreen from '../screens/Home';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';
import DrawerNavigator from './DrawerNagivator';
import DashboardOlympicNavigator from './DashboardOlympicNavigator';
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
                name={Routes.HOME}
                component={HomeScreen}
                options={{ 
                    headerTitle: 'Início' 
                }}
            />
            <Stack.Screen
                name={Routes.LOGIN}
                component={LoginScreen}
                options={{ 
                    headerTitle: 'Autenticação' 
                }}
            />
            <Stack.Screen
                name={Routes.SIGNUP}
                component={SignUpScreen}
                options={{ 
                    headerTitle: 'Cadastro' 
                }}
            />
            <Stack.Screen
                name={Routes.PROFILE}
                component={ProfileScreen}
                options={{ 
                    headerTitle: 'Perfil' 
                }}
            />
            <Stack.Screen
                name={Routes.OLYMPICDASHBOARD}
                component={DashboardOlympicNavigator}
                options={{ 
                    headerShown: false 
                }}
            />
            <Stack.Screen
                name={Routes.SHOPDASHBOARD}
                component={DashboardShopNavigator}
                options={{ 
                    headerShown: false 
                }}
            />
        </Stack.Navigator>
    )
}