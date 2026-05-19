import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppText from '../components/common/AppText';
import ColorTypes from '../enumsCategories/ColorTypes';
import FontTypes from '../enumsCategories/FontTypes';
import SectionTitle from '../components/common/SectionTitle';
import CardCampeonato from '../features/Championships/CardCampeonato';
import { paulista, carioca, mineiro, gauchao, brasileirao, copaDoBrasil, libertadores, sulAmericana } from '../mocks/championships';

export default function OthersChampionships({ navigation }) {

    return (
        <ScrollView style={styles.container}>
            <AppText style={styles.titleSection}>Campeonatos</AppText>
            <SectionTitle
                title={'Estaduais'}
                color={ColorTypes.BLUE}
                number={"00"}
                inline
            />
            <CardCampeonato navigation={navigation} campeonato={paulista} />
            <CardCampeonato navigation={navigation} campeonato={carioca} />
            <CardCampeonato navigation={navigation} campeonato={mineiro} />
            <CardCampeonato navigation={navigation} campeonato={gauchao} />
            <View style={styles.space} />
            <SectionTitle
                title={'Europeus'}
                color={ColorTypes.RED}
                number={"00"}
                inline
            />
            <AppText style={styles.serImplementado}>Ainda será implementado</AppText>
            <SectionTitle
                title={'Outros'}
                color={ColorTypes.YELLOW}
                number={"00"}
                inline
            />
            <CardCampeonato navigation={navigation} campeonato={brasileirao} />
            <CardCampeonato navigation={navigation} campeonato={copaDoBrasil} />
            <CardCampeonato navigation={navigation} campeonato={libertadores} />
            <CardCampeonato navigation={navigation} campeonato={sulAmericana} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorTypes.BACKGROUNDWHITE,
        paddingInline: 20,
        paddingBottom: 80,
    },
    titleSection: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
        fontFamily: FontTypes.COPA,
        fontSize: 40,
        fontWeight: '800',
        color: ColorTypes.YELLOW,
        letterSpacing: 3,
        textAlign: 'center',
    },
    space: {
        height: 50,
    },
    serImplementado: {
        textAlign: 'center',
        color: '#aaa',
        paddingVertical: 30,
    }
});
