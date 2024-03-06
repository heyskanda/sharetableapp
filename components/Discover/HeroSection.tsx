import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Divider, Surface, Text, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

export const HeroSection = () => {
    const theme:any = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <View style={styles.title}>
                    <Text variant='titleMedium' style={{ fontFamily: 'PoppinsSemibold' }}>
                        Latest ideas &nbsp; <MaterialCommunityIcons name="lightbulb-on-outline" style={{ color: theme.colors.tertiary }} size={24} />
                    </Text>
                    <Text variant='bodySmall' style={{ fontFamily: 'PoppinsRegular' }}>
                        Check out the latest calls
                    </Text>
                </View>
                <TouchableOpacity>
                    <Button mode='text'>
                        Show all
                    </Button>
                </TouchableOpacity>
            </View>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => (
                    <LinearGradient
                        colors={['#34D399', '#1B6D4F']}
                        start={{ x: 0.8, y: 0.1 }}
                        style={styles.gradientCard}
                    >
                        <View style={styles.card}>
                            <View style={styles.cardHeading}>
                                <Text variant='labelMedium' style={{ color: theme.colors.plain, fontFamily: 'PoppinsMedium', fontSize: 16 }}>
                                    Company name {item}
                                </Text>

                                <View style={styles.badgesContainer}>
                                    <View style={{ ...styles.badge, backgroundColor: theme.colors.surfaceVariant }}>
                                        <Text style={{ color: theme.colors.primary, fontFamily: 'PoppinsMedium', fontSize: 7 }}>
                                            Short term
                                        </Text>
                                    </View>
                                    <View style={{ ...styles.badge, backgroundColor: theme.colors.surfaceVariant }}>
                                        <Text style={{ color: theme.colors.primary, fontFamily: 'PoppinsMedium', fontSize: 7 }}>
                                            Swing trading
                                        </Text>
                                    </View>
                                    <View style={{ ...styles.badge, backgroundColor: theme.colors.surfaceVariant }}>
                                        <Text style={{ color: theme.colors.primary, fontFamily: 'PoppinsMedium', fontSize: 7 }}>
                                            Technically strong
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ backgroundColor: 'transparent' }}>
                                    <Text style={{ color: theme.colors.plain, fontFamily: 'MerriweatherRegular', fontSize: 7, lineHeight: 12 }}>
                                        {`\u2023  Lorem ipsum, dolor sit amet consectetur adipisicing elit!\n`}
                                        {`\u2023  Omnis magni aliquid fugiat nam porro asperiores veritatis.\n`}
                                    </Text>
                                </View>
                            </View>

                            <View style={{ flex: 1, gap: 6 }}>
                                <Divider style={{ backgroundColor: theme.colors.surfaceVariant }} />

                                <View style={styles.callInfo}>
                                    <View style={styles.callInfoItem}>
                                        <Text style={{ ...styles.callInfoItemHeading, color: theme.colors.plain }}>
                                            Current price
                                        </Text>
                                        <Text style={{ ...styles.callInfoItemBody, color: theme.colors.plain }}>
                                            ₹ 124.50
                                        </Text>
                                    </View>

                                    <Divider style={{ backgroundColor: theme.colors.surfaceVariant, width: 1, height: '100%' }} />

                                    <View style={styles.callInfoItem}>
                                        <Text style={{ ...styles.callInfoItemHeading, color: theme.colors.plain }}>
                                            Gains left
                                        </Text>
                                        <Text style={{ ...styles.callInfoItemBody, color: theme.colors.plain }}>
                                            21 %
                                        </Text>
                                    </View>

                                    <Divider style={{ backgroundColor: theme.colors.surfaceVariant, width: 1, height: '100%' }} />

                                    <View style={styles.callInfoItem}>
                                        <Text style={{ ...styles.callInfoItemHeading, color: theme.colors.plain }}>
                                            Target
                                        </Text>
                                        <Text style={{ ...styles.callInfoItemBody, color: theme.colors.plain }}>
                                            ₹ 151.50
                                        </Text>
                                    </View>
                                </View>

                                <Button mode='contained'>
                                    Explore
                                </Button>
                            </View>

                        </View>
                    </LinearGradient>
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
        gap: 18
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
    gradientCard: {
        flex: 1,
        height: 200,
        width: 300,
        padding: 14,
        borderRadius: 8,
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        gap: 8,
    },
    cardHeading: {
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center',
    },
    badgesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        marginBottom: 4
    },
    badge: {
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 8,
    },
    callInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    callInfoItem: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4
    },
    callInfoItemHeading: {
        fontSize: 8,
        fontFamily: 'MerriweatherRegular'
    },
    callInfoItemBody: {
        fontSize: 11,
        fontFamily: 'MerriweatherBold'
    },
})