import AsyncStorage from '@react-native-async-storage/async-storage';

export const returnProducts = async () => {
    const data = await AsyncStorage.getItem("cart");
    const cart = data ? JSON.parse(data) : [];
    return cart;
};

export const returnProductsLength = async () => {
    const data = await AsyncStorage.getItem("cart");
    const cart = data ? JSON.parse(data) : [];
    return cart.reduce((total, item) => {
        return total + item.amount;
    }, 0);
};

export async function setCart(object) {
    await AsyncStorage.setItem("cart", JSON.stringify(object));
}

export async function removerCart() {
    await AsyncStorage.removeItem("cart");
}