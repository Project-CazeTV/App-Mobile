import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, View, Pressable, Modal } from 'react-native';
import AppText from "../../components/common/AppText";
import ColorTypes from '../../enumsCategories/ColorTypes';
import Routes from '../../routes/.'
import { removerCart } from '../Shop/utils/CartProducts';
import { useNavigation, useRoute } from "@react-navigation/native";

export default function LogoutTogglePortal({ onLogout, name }) {
    const [visible, setVisible] = useState(false);
    const handleClose = () => setVisible(false);
    const navigation = useNavigation();

    function logout() {
        removerCart();
        onLogout();
        navigation.navigate(Routes.HOME);
    }

    return (
        <>
            <Modal
                visible={visible}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Pressable style={styles.closeBtn} onPress={handleClose}> <AntDesign name="close" size={24} color="black" /></Pressable>
                        <AppText style={styles.title}>Logout</AppText>
                        <AppText style={styles.boxNameAccount}>Olá {name}!</AppText>
                        <AppText style={styles.boxText}>Deseja deslogar da conta?</AppText>
                        <Pressable style={styles.logoutBtn} onPress={() => {logout()}}>
                            <AppText style={styles.logoutText}>Deslogar da conta</AppText>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={() => { setVisible(!visible) }}>
                <AppText style={styles.avatarInitial}>Olá, {name}!</AppText>
            </Pressable >
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'white',
        padding: 30,
        paddingTop: 50,
        paddingInline: 40,
        borderRadius: 10,
        alignItems: 'center',
    },
    closeBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    title: {
        position: 'absolute',
        top: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    boxNameAccount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    boxText: {
        fontSize: 16,
        marginBottom: 20,
    },
    logoutBtn: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    logoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    avatarInitial: {
        width: 80,
        paddingTop: 20,
        paddingBottom: 20,
        color: ColorTypes.DARK,
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 800,
        fontSize: 14,
        position: 'relative',
    },
});