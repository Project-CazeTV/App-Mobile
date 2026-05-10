import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '.';
import HomeScreen from '../screens/Home';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/HomeLogin';
import DashboardOlympicNavigator from './DashboardOlympicNavigator';

const Stack = createNativeStackNavigator()

export default function StackNavigation() {

    return (
        <Stack.Navigator 
        initialRouteName={Routes.HOME}
        screenOptions={{
            headerShown: false,
        }}>
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
                name={Routes.OLYMPICDASHBOARD}
                component={DashboardOlympicNavigator}
                options={{ 
                    headerShown: false 
                }}
            />
        </Stack.Navigator>
    )
}