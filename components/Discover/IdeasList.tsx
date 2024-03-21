import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Button, Divider, Surface, Text, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import IdeaCard from '../Global/IdeaCard'
import { useRouter } from 'expo-router'
import { useAppTheme } from '@/utils/theme-provider'

export const IdeasList = ({ ideasData }: any) => {
    const theme = useAppTheme()
    const router = useRouter()

    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.surfaceContainer }}>
            <View style={styles.heading}>
                <View style={styles.title}>
                    <Text variant='titleMedium' style={{ fontFamily: 'MerriweatherBold', color: theme.colors.primary }}>
                        Latest ideas &nbsp; <MaterialCommunityIcons name="lightbulb-on-outline" style={{ color: theme.colors.primary }} size={21} />
                    </Text>
                    <Text variant='bodySmall' style={{ fontFamily: 'PoppinsRegular', color: theme.colors.secondary }}>
                        Check out the latest calls
                    </Text>
                </View>
                <TouchableOpacity>
                    <Button mode='text' labelStyle={{ fontFamily: 'MerriweatherBold', fontSize: 12, textDecorationLine: 'underline' }} onPress={() => router.push('/ideas')}>
                        Show all
                    </Button>
                </TouchableOpacity>
            </View>

            <ScrollView 
                contentContainerStyle={styles.cardContainer} 
                showsHorizontalScrollIndicator={false} 
                horizontal
            >
            {
                ideasData 
                    ? ideasData?.map((idea: any, i: number) => (
                        <IdeaCard width={280} height={200} key={i} ideaData={idea} />
                    ))
                    : <Text variant='bodySmall' style={{ fontFamily: 'PoppinsRegular', color: theme.colors.tertiary }}>
                        No latest recommendations.
                    </Text>
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 18,
        padding: 12,
        borderRadius: 8
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