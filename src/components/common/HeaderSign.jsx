import { StyleSheet, View, Image } from 'react-native';
import ColorTypes from '../../enumsCategories/ColorTypes';
import AppText from '../../components/common/AppText';

export default function HeaderSign(props) {

    return (
        <View style={styles.header}>
            <View style={styles.headerLogos}>            
                <Image source={require('../../assets/images/logos/CazéTVNomePreto.png')} style={styles.logoCaze} />
                <View style={styles.divider} />
                <Image source={require('../../assets/images/logos/logo-copa-escuro.png')} style={styles.logoFifa} />
            </View>
            <AppText style={styles.welcomeText}>
                Seja bem-vindo a <AppText style={{ fontWeight: 'bold' }}>Cazé TV</AppText>. {props.text}
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerLogos: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '30px',
    },

    logoCaze: {
        height: 60,
        width: 120,
        resizeMode: 'contain',
    },

    logoFifa: {
        height: 60,
        width: 60,
    },

    divider: {
        width: '2px',
        height: '50px',
        backgroundColor: ColorTypes.GRAY,
    },

    welcomeText: {
        fontSize: '13px',
        textAlign: 'center',
        marginBottom: '30px',
        maxWidth: '300px',
    },
});