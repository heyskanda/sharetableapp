import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Button, Text, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const HeroSection = () => {
    const theme:any = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text variant='titleLarge' style={{ fontFamily: 'PoppinsSemibold' }}>
                    Latest ideas <MaterialCommunityIcons name="lightbulb-on-outline" size={24} />
                </Text>
                <Button mode='text'>
                    Show all
                </Button>
            </View>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => (
                    <View style={{ ...styles.card, backgroundColor: theme.colors.tertiary }}>
                        <Text style={{ color: theme.colors.plain }}>Idea No. {item}</Text>
                    </View>
                )}
                contentContainerStyle={{ columnGap: 12 }}
                horizontal
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 24,
        padding: 24
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    card: {
        flex: 1,
        height: 100,
        width: 150,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})