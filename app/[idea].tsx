import BackButton from '@/components/Global/BackButton';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useAppTheme } from './_layout';
import { Divider, Text } from 'react-native-paper';

interface IdeaPageProps {}

export default function IdeaPage(props: IdeaPageProps) {
    const theme = useAppTheme()
    const router = useRouter()
    const { idea } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <Stack.Screen 
                options={{
                presentation: 'modal',
                headerBackVisible: false,
                headerStyle: {
                    backgroundColor: theme.colors.surface,
                },
                title: idea.toString(),
                headerLeft: () => 
                <BackButton 
                    onPress={() => router.back()}
                />,
                }}
            />

            <ScrollView contentContainerStyle={{ ...styles.container, backgroundColor: theme.colors.surface }}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', padding: 12, paddingBottom: 0 }}>
                    <View>
                        <Text variant='titleSmall' style={{ color: theme.colors.onSecondaryContainer, fontFamily: 'MerriweatherBold' }}>
                            Sym: COMPSYM
                        </Text>
                        <Text variant='titleLarge' style={{ color: theme.colors.onSecondaryContainer, fontFamily: 'MerriweatherBold' }}>
                            Company name
                        </Text>
                    </View>
                    <Text style={{ color: theme.colors.onSecondaryContainer, fontFamily: 'MerriweatherBold', fontSize: 11 }}>
                        10/03/2024
                    </Text>
                </View>

                <View style={styles.badgesContainer}>
                    <View style={{ ...styles.badge, backgroundColor: theme.colors.primary }}>
                        <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 9, color: theme.colors.onPrimary }}>
                            Short term
                        </Text>
                    </View>
                    <View style={{ ...styles.badge, backgroundColor: theme.colors.primary }}>
                        <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 9, color: theme.colors.onPrimary }}>
                            Swing trading
                        </Text>
                    </View>
                    <View style={{ ...styles.badge, backgroundColor: theme.colors.primary }}>
                        <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 9, color: theme.colors.onPrimary }}>
                            Technically strong
                        </Text>
                    </View>
                </View>

                <View style={{ ...styles.body, backgroundColor: theme.colors.surfaceContainer }}>
                    <View style={styles.callInfo}>
                        <View style={styles.callInfoItem}>
                            <Text style={{ ...styles.callInfoItemHeading, color: theme.colors.onSecondaryContainer }}>
                                Buy range
                            </Text>
                            <Text style={{ ...styles.callInfoItemBody, color: theme.colors.onSecondaryContainer }}>
                                ₹ 124 - 130
                            </Text>
                        </View>

                        <Divider style={{ backgroundColor: theme.colors.outlineVariant, width: 0.5, height: '100%' }} />

                        <View style={styles.callInfoItem}>
                            <Text style={{ ...styles.callInfoItemHeading, color: theme.colors.onSecondaryContainer }}>
                                Gains left
                            </Text>
                            <Text style={{ ...styles.callInfoItemBody, color: theme.colors.onSecondaryContainer }}>
                                21 %
                            </Text>
                        </View>

                        <Divider style={{ backgroundColor: theme.colors.outlineVariant, width: 0.5, height: '100%' }} />

                        <View style={styles.callInfoItem}>
                            <Text style={{ ...styles.callInfoItemHeading, color: theme.colors.onSecondaryContainer }}>
                                Current price
                            </Text>
                            <Text style={{ ...styles.callInfoItemBody, color: theme.colors.onSecondaryContainer }}>
                                ₹ 151.50
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 12,
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        height: '100%'
    },
    badgesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
        paddingLeft: 12,
        paddingRight: 12,
    },
    badge: {
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 8,
    },
    body: {
        padding: 24,
        borderTopStartRadius: 32,
        borderTopEndRadius: 32,
        height: '100%'
    },
    callInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 8
    },
    callInfoItem: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
    },
    callInfoItemHeading: {
        fontSize: 12,
        fontFamily: 'PoppinsMedium'
    },
    callInfoItemBody: {
        fontSize: 14,
        fontFamily: 'PoppinsSemibold'
    },
});
