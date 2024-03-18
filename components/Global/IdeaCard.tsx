import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, DimensionValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Button, Divider, Surface, Text, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useAppTheme } from '@/utils/themeUtils';

interface IdeaCardProps {
    width: DimensionValue
    height: DimensionValue
    ideaData: any
}

const IdeaCard = ({
    width,
    height,
    ideaData
}: IdeaCardProps) => {
    const theme = useAppTheme()
    const router = useRouter()
    
    return (
        <LinearGradient
            colors={[theme.colors.secondaryContainer, theme.colors.surfaceContainer]}
            style={{ ...styles.card, width: width, height: height }}
            start={{ x: 0.5, y: -0.1 }}
            locations={[ 0.2, 0.8 ]}
        >
            <View style={styles.cardHeading}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text variant='labelSmall' style={{ color: theme.colors.onSecondaryContainer, fontFamily: 'MerriweatherBold', flex: 1 }}>
                            {ideaData?.exchange}: {ideaData?.trading_symbol}
                        </Text>
                        <Text style={{ color: theme.colors.onSecondaryContainer, fontFamily: 'MerriweatherBold', fontSize: 10, textAlign: 'right' }}>
                            10/03/2024
                        </Text>
                    </View>
                    <Text variant='titleSmall' style={{ color: theme.colors.onSecondaryContainer, fontFamily: 'MerriweatherBold', textTransform: 'capitalize' }}>
                        {ideaData?.name}
                    </Text>
                </View>

                <View style={styles.badgesContainer}>
                {
                    ideaData?.badges?.map((badge: string[], index: number) => (
                        <View style={{ ...styles.badge, backgroundColor: theme.colors.surface }} key={index}>
                            <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 10, color: theme.colors.onSurface }}>
                                {badge}
                            </Text>
                        </View>
                    ))
                }
                </View>
            </View>


            <View style={{ flex: 1, gap: 12, justifyContent: 'flex-end' }}>
                {/* <Divider style={{ backgroundColor: theme.colors.outlineVariant, height: 1 }} /> */}
                
                <View style={styles.callInfo}>
                    <View style={styles.callInfoItem}>
                        <Text style={{ ...styles.callInfoItemHeading, color: theme.colors.onSecondaryContainer }}>
                            Buy range
                        </Text>
                        <Text style={{ ...styles.callInfoItemBody, color: theme.colors.onSecondaryContainer }}>
                            ₹ {ideaData?.buy_price_from} - {ideaData?.buy_price_to}
                        </Text>
                    </View>

                    <Divider style={{ backgroundColor: theme.colors.outlineVariant, width: 0.5, height: '100%' }} />

                    <View style={styles.callInfoItem}>
                        <Text style={{ ...styles.callInfoItemHeading, color: theme.colors.onSecondaryContainer }}>
                            Gains left
                        </Text>
                        <Text style={{ ...styles.callInfoItemBody, color: theme.colors.onSecondaryContainer }}>
                            {((ideaData?.target - ideaData?.last_price) / ideaData?.last_price).toFixed(2)} %
                        </Text>
                    </View>

                    <Divider style={{ backgroundColor: theme.colors.outlineVariant, width: 0.5, height: '100%' }} />

                    <View style={styles.callInfoItem}>
                        <Text style={{ ...styles.callInfoItemHeading, color: theme.colors.onSecondaryContainer }}>
                            Current price
                        </Text>
                        <Text style={{ ...styles.callInfoItemBody, color: theme.colors.onSecondaryContainer }}>
                            ₹ {ideaData?.last_price}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity>
                    <Button 
                        mode='outlined' 
                        elevation={1}
                        contentStyle={{ height: 28 }}
                        labelStyle={{ fontSize: 12, fontFamily: 'PoppinsMedium', height: 18 }}
                        onPress={() => router.push(`/${ideaData?._id}`)}
                        icon={() => <MaterialIcons name="keyboard-arrow-right" size={24} color={theme.colors.primary} />}
                    >
                        Explore
                    </Button>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default IdeaCard;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        overflow: 'scroll',
        gap: 12,
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        gap: 12,
        padding: 12,
        borderRadius: 8,
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
        gap: 6
    },
    callInfoItem: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
    },
    callInfoItemHeading: {
        fontSize: 11,
        fontFamily: 'PoppinsMedium'
    },
    callInfoItemBody: {
        fontSize: 12,
        fontFamily: 'PoppinsSemibold'
    },
});
