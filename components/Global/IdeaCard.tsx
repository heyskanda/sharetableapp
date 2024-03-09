import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, DimensionValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Button, Divider, Text, useTheme } from 'react-native-paper';

interface IdeaCardProps {
    width: DimensionValue
    height: DimensionValue
}

const IdeaCard = (props: IdeaCardProps) => {
    const theme:any = useTheme()
    
    return (
        <LinearGradient
            colors={[theme.colors.primary, "#020617"]}
            start={{ x: 0.2, y: 0 }}
            style={{ ...styles.gradientCard, width: props.width, height: props.height }}
        >
            <View style={styles.card}>
                <View style={styles.cardHeading}>
                    <Text variant='labelMedium' style={{ color: theme.colors.plain, fontFamily: 'MerriweatherBold', fontSize: 18, paddingTop: 8 }}>
                        Company name
                    </Text>

                    <View style={styles.badgesContainer}>
                        <View style={{ ...styles.badge, backgroundColor: theme.colors.surfaceVariant }}>
                            <Text style={{ color: theme.colors.primary, fontFamily: 'PoppinsMedium', fontSize: 9 }}>
                                Short term
                            </Text>
                        </View>
                        <View style={{ ...styles.badge, backgroundColor: theme.colors.surfaceVariant }}>
                            <Text style={{ color: theme.colors.primary, fontFamily: 'PoppinsMedium', fontSize: 9 }}>
                                Swing trading
                            </Text>
                        </View>
                        <View style={{ ...styles.badge, backgroundColor: theme.colors.surfaceVariant }}>
                            <Text style={{ color: theme.colors.primary, fontFamily: 'PoppinsMedium', fontSize: 9 }}>
                                Technically strong
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={{ flex: 1, gap: 12, justifyContent: 'flex-end' }}>
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

                    <TouchableOpacity>
                        <Button 
                            mode='outlined' 
                            contentStyle={{ height: 30 }}
                            labelStyle={{ color: theme.colors.plain, fontSize: 12, fontFamily: 'PoppinsMedium', height: 18 }}
                        >
                            Explore
                        </Button>
                    </TouchableOpacity>
                </View>
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
    gradientCard: {
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
});
