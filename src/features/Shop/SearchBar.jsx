import { StyleSheet, View, TextInput } from 'react-native';
import AppText from "../../components/common/AppText";
import ColorTypes from '../../enumsCategories/ColorTypes';
import { useNavigation } from "@react-navigation/native";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function SearchBar({placeHolder,value,onChange, maxLength=20}) {

    return (
        <View style={styles.searchContainer}>
            <EvilIcons style={styles.icon} name="search" size={26} color="black" />
            <TextInput
                type="text"
                placeholder={placeHolder}
                style={styles.searchBar}
                value={value}
                maxLength={maxLength}
                onChange={onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
searchContainer: {
    position: "relative",
    width: "100%",
    maxWidth: 768,
    marginTop: 10,
    marginBottom: 20,
  },

  icon: {
    position: "absolute",
    left: 10,
    top: "41%",
    color: ColorTypes.GRAYTEXT,
    transform: [{ translateY: -11 }],
    zIndex: 1,
    opacity: 0.7,
  },

  searchBar: {
    width: "100%",
    padding: 10,
    paddingLeft: 45,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: ColorTypes.GRAYTEXT,
    backgroundColor: ColorTypes.BACKGROUNDWHITE,
    fontSize: 18,
    color: ColorTypes.DARK,
    opacity: 0.7,
  },
});