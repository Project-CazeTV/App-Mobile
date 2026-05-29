import { StyleSheet, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ButtonSign(props) {
    return (
          <Pressable style={styles.submitBtn} onPress={props.function}>
            <AntDesign name="arrow-right" size={24} color="white" />
          </Pressable>
    );
}

const styles = StyleSheet.create({
  submitBtn: {
    width: '80%',
    padding: 10,
    backgroundColor: '#212121',
    color: 'white',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
