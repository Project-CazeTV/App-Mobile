import { logosTime } from "../../mocks/logosTime";
import CardArtilharia from "./CardArtilharia";
import { StyleSheet, View } from 'react-native';
import AppText from '../../components/common/AppText';
import ColorTypes from '../../enumsCategories/ColorTypes';

export default function Artilharia({ artilheiros }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText style={styles.headerText}>RANKING</AppText>
                <AppText style={styles.headerText}>GOLS</AppText>
            </View>
            {artilheiros.map((artilheiro) => (
                <View style={styles.artilheiro}>
                    <CardArtilharia artilheiro={artilheiro} logoTeam={logosTime[artilheiro.clube]} showGoals={true} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingInline: 50,
    },
    headerText: {
        fontWeight: 800,
        color: ColorTypes.DARK,
    },
});