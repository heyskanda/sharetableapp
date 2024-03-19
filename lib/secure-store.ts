import * as SecureStore from "expo-secure-store"

export async function storeItem(key: string, value: any) {
    try {
        return await SecureStore.setItemAsync(key, JSON.stringify(value))
    } catch (error) {
        console.log("secure store set item error", error);
    }
}

export async function getItem(key: string) {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log("secure store get item error", error);
    }
}

export async function removeItem(key: string) {
    try {
        return await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("secure store delete item error", error);
    }
}

export async function handleUserAuth() {
    try {
        const user = await getItem("authSession")
        const userData = user ? JSON.parse(user) : null
        console.log("session data", userData);
        
        return userData
    } catch (error) {
        console.log("session error", error)
    }
}