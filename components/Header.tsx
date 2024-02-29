import React from 'react'
import { Text, View } from './Themed'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import { useTheme } from 'react-native-paper'
import { DefaultTheme } from '@react-navigation/native'

export const Header = () => {
  const theme = useTheme()
  const router = useRouter()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderRadius: theme.roundness, padding: 3 }}>
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{ borderRadius: theme.roundness, padding: 3 }} onPress={() => router.push("/login")}>
        <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 18,
    }
})