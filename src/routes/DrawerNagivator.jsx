import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ColorTypes from '../enumsCategories/ColorTypes';
import Routes from '.';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import WorldcupScreen from '../screens/WorldCup';
import DashboardOlympicNavigator from './DashboardOlympicNavigator';
import ChampionshipScreen from '../screens/Championship';
import DashboardShopNavigator from './DashboardShopNavigator';
import HistoryScreen from '../screens/History';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName={Routes.HOME}
            screenOptions={({ navigation }) => ({
                header: () => <CustomHeader navigation={navigation} />,
                drawerPosition: 'right',
                drawerStyle: {
                    backgroundColor: ColorTypes.BACKGROUNDWHITE,
                    width: 300,
                },
            })}
            drawerContent={(props) => (
                <CustomDrawerContent {...props} />
            )}>
            <Drawer.Screen
                name={Routes.PROFILE}
                component={ProfileScreen}
                options={{
                    drawerItemStyle: {
                        display: 'none',
                    }
                }}
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
                name={Routes.SHOPDASHBOARD}
                component={DashboardShopNavigator}
            />
            <Drawer.Screen
                name={Routes.HISTORY}
                component={HistoryScreen}
            />
        </Drawer.Navigator>
    )
}

function CustomHeader({ navigation }) {
    return (
        <View>
            <View style={stylesHeader.topBar}>
                <View style={[stylesHeader.color, { backgroundColor: ColorTypes.YELLOW }]} />
                <View style={[stylesHeader.color, { backgroundColor: ColorTypes.RED }]} />
                <View style={[stylesHeader.color, { backgroundColor: ColorTypes.GREEN }]} />
                <View style={[stylesHeader.color, { backgroundColor: ColorTypes.BLUE }]} />
            </View>

            <View style={stylesHeader.header}>
                <Image
                    source={require('../assets/images/logos/caze.png')}
                    style={stylesHeader.logo}
                />

                <View style={stylesHeader.rightIcons}>
                    <Pressable style={stylesHeader.profileButton}
                        onPress={() => navigation.navigate(Routes.LOGIN)}>
                        <Ionicons name="person" size={25} color="black" />
                    </Pressable>

                    <Pressable onPress={() => navigation.openDrawer()}>
                        <FontAwesome6 name="align-right" size={35} color="black" />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={stylesDrawerContent.container}
        >
            <View style={stylesDrawerContent.header}>
                <Image
                    source={require('../assets/images/logos/CazéTVNomePreto.png')}
                    style={stylesDrawerContent.logoHeaderContent}
                />
                <Pressable
                    onPress={() => props.navigation.closeDrawer()}
                >
                    <MaterialIcons
                        name="close"
                        size={40}
                        color={ColorTypes.DARK}
                    />
                </Pressable>
            </View>
            <DrawerItem
                label="HOME"
                onPress={() => props.navigation.navigate(Routes.HOME)}
            />

            <View style={stylesDrawerContent.divider} />
            <DrawerItem
                label="COPA DO MUNDO 2026 FIFA"
                onPress={() => props.navigation.navigate(Routes.WORLDCUP)}
            />

            <View style={stylesDrawerContent.divider} />
            <DrawerItem
                label="OLIMPÍADAS"
                onPress={() => props.navigation.navigate(Routes.OLYMPICDASHBOARD)}
            />

            <View style={stylesDrawerContent.divider} />
            <DrawerItem
                label="CAMPEONATOS"
                onPress={() => props.navigation.navigate(Routes.CHAMPIONSHIP)}
            />

            <View style={stylesDrawerContent.divider} />
            <DrawerItem
                label="LOJA"
                onPress={() => props.navigation.navigate(Routes.SHOPDASHBOARD)}
            />

            <View style={stylesDrawerContent.divider} />
            <DrawerItem
                label="HISTÓRIA"
                onPress={() => props.navigation.navigate(Routes.HISTORY)}
            />
            <View style={stylesDrawerContent.divider} />

            <View style={stylesDrawerContent.divider2} />
            <View style={stylesDrawerContent.footer}>
                <Image style={stylesDrawerContent.logoFooter} source={require('../assets/images/logos/caze.png')} />
                <View style={stylesDrawerContent.descriptionFooter}>
                    <Text style={stylesDrawerContent.descriptionFooter}>Copyright © 2026 Cazé TV.</Text>
                    <Text style={stylesDrawerContent.descriptionFooter}>Todos os direitos reservados.</Text>
                    <Text style={stylesDrawerContent.descriptionFooter}>Termos de Uso</Text>
                    <Text style={stylesDrawerContent.descriptionFooter}>Política de Privacidade</Text>
                    <Text style={stylesDrawerContent.descriptionFooter}>Contato</Text>
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

const stylesHeader = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        height: 6,
    },
    color: {
        flex: 1,
    },
    header: {
        height: 100,
        backgroundColor: ColorTypes.BACKGROUND,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 40,
    },
    profileButton: {
        width: 45,
        height: 45,
        borderRadius: '100%',
        padding: 25,
        backgroundColor: "#86868636",
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const stylesDrawerContent = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorTypes.BACKGROUND,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    logoHeaderContent: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: ColorTypes.DARK,
    },
    divider: {
        height: 2,
        backgroundColor: ColorTypes.GRAY,
        marginHorizontal: 10,
    },
    divider2: {
        height: 2,
        marginTop: 'auto',
        marginBottom: 20,
        backgroundColor: ColorTypes.GRAY,
        marginHorizontal: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    logoFooter: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },
    descriptionFooter: {
        fontSize: 12,
        color: ColorTypes.DARK,
        fontWeight: 'bold',
    }
});