import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Surface, Text, TouchableRipple, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const MarketIndicator = () => {
    const theme: any = useTheme()
    
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text variant='titleMedium' style={{ fontFamily: 'MerriweatherBold' }}>
                    Market Indicators &nbsp; <MaterialCommunityIcons name="chart-line" size={18} color={theme.colors.primaryLight} />
                </Text>
                <Text variant='bodySmall' style={{ fontFamily: 'PoppinsRegular' }}>
                    Performance of market indices
                </Text>
            </View>

            <View style={styles.cardContainer}>
                <Surface style={{ ...styles.card, backgroundColor: theme.colors.surfaceVariant }} elevation={0}>
                    <Text variant='labelMedium' style={{ fontFamily: 'PoppinsSemibold', color: theme.colors.primary, opacity: 0.9 }}>
                        NIFTY50
                    </Text>

                    <Text variant='titleMedium' style={{ fontFamily: 'PoppinsSemibold', color: theme.colors.primary }}>
                        22,340.00
                    </Text>
                </Surface>

                <Surface style={{ ...styles.card, backgroundColor: theme.colors.surfaceVariant }} elevation={0}>
                    <Text variant='labelMedium' style={{ fontFamily: 'PoppinsSemibold', color: theme.colors.primary, opacity: 0.9 }}>
                        BANKNIFTY
                    </Text>
                    
                    <Text variant='titleMedium' style={{ fontFamily: 'PoppinsSemibold', color: theme.colors.primary }}>
                        47,844.80
                    </Text>
                </Surface>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 12
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    title: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        width: '100%',
    },
    card: {
        height: 80,
        width: 140,
        padding: 12,
        borderRadius: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 4
    }
})