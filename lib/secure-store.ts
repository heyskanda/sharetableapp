import * as SecureStore from "expo-secure-store"

export async function storeItem(key: string, value: any) {
    try {
        return await SecureStore.setItemAsync(key, JSON.stringify(value, null, 2))
    } catch (error) {
        console.log("secure store set item error", error);
    }
}

export async function removeItem(key: string) {
    try {
        return await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("secure store delete item error", error);
    }
}

export async function userAuthSession() {
    const user = await SecureStore.getItemAsync("authSession")
    const userData = user ? JSON.parse(user) : null
    console.log("session data", userData);
    
    return userData
}