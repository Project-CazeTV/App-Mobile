import AsyncStorage from '@react-native-async-storage/async-storage';

export const returnProducts = async () => {
    const data = await AsyncStorage.getItem("cart");
    const cart = data ? JSON.parse(data) : [];
    return cart;
};

export async function setCart(object) {
    await AsyncStorage.setItem("cart", JSON.stringify(object));
}

export async function removerCart() {
    await AsyncStorage.removeItem("cart");
}