import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '.';

const Stack = createNativeStackNavigator()

export default function StackNavigation() {

    return (
        <Stack.Navigator 
        initialRouteName={Routes.HOME}
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen
                name={Routes.LOGIN}
                component={SignInScreen}
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
        </Stack.Navigator>
    )
}