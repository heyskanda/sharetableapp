import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Button, Divider, Surface, Text, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import IdeaCard from '../Global/IdeaCard'
import { useRouter } from 'expo-router'

export const IdeasList = () => {
    const theme:any = useTheme()
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <View style={styles.title}>
                    <Text variant='titleMedium' style={{ fontFamily: 'MerriweatherBold' }}>
                        Latest ideas &nbsp; <MaterialCommunityIcons name="lightbulb-on-outline" style={{ color: theme.colors.primaryLight }} size={21} />
                    </Text>
                    <Text variant='bodySmall' style={{ fontFamily: 'PoppinsRegular' }}>
                        Check out the latest calls
                    </Text>
                </View>
                <TouchableOpacity>
                    <Button mode='text' labelStyle={{ fontFamily: 'MerriweatherBold', fontSize: 12 }} onPress={() => router.push('/ideas')}>
                        Show all
                    </Button>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.cardContainer} showsHorizontalScrollIndicator={false} horizontal>
                <IdeaCard width={280} height={200} />
                <IdeaCard width={280} height={200} />
            </ScrollView>
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
        alignItems: "flex-end",
        gap: 10,
    },
    title: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 6,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        overflow: 'scroll',
        gap: 12,
    },
    gradientCard: {
        height: 200,
        width: 280,
        padding: 14,
        borderRadius: 8,
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        gap: 12,
    },
    cardHeading: {
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center',
    },
    badgesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4
    },
    badge: {
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 8,
    },
    callInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 8
    },
    callInfoItem: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4
    },
    callInfoItemHeading: {
        fontSize: 10,
        fontFamily: 'PoppinsMedium'
    },
    callInfoItemBody: {
        fontSize: 12,
        fontFamily: 'PoppinsSemibold'
    },
})