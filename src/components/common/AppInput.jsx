import { StyleSheet, Text, View, TextInput } from 'react-native';
import ColorTypes from '../../enumsCategories/ColorTypes';
import AppText from '../../components/common/AppText';

export default function AppInput({
    icon,
    placeholder,
    value,
    onChangeText,
    secure = false,
    maxLength = 30,
    ...props
}) {

    return (
        <View style={styles.inputContainer}>
            {icon}
            <TextInput style={styles.inputText} value={value} onChangeText={onChangeText} maxLength={maxLength} placeholder={placeholder} secureTextEntry={secure}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: ColorTypes.GRAY,
        paddingLeft: 10,
    },
    inputText: {
        minWidth: 250,
        fontSize: 16,
        padding: 12,
        borderRadius: 8,
        outlineStyle: 'none',
        color: ColorTypes.DARK,
        placeholderTextColor: ColorTypes.GRAYTEXT,
    },
});