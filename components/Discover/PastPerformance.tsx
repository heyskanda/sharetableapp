import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';

interface PastPerformanceProps {}

export const PastPerformance = (props: PastPerformanceProps) => {
    const theme: any = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text variant='titleMedium' style={{ fontFamily: 'MerriweatherBold' }}>
                    Our Stats &nbsp; <AntDesign name="dashboard" size={18} color={theme.colors.primaryLight} />
                </Text>
                <Text variant='bodySmall' style={{ fontFamily: 'PoppinsRegular' }}>
                    Performance of our calls
                </Text>
            </View>

            <View style={{ backgroundColor: theme.colors.surfaceVariant, borderRadius: 8 }}>
                <View style={{ ...styles.card }}>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsRegular' }}>Indicator</Text>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsSemibold' }}>Result</Text>
                </View>
                <View style={{ ...styles.card }}>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsRegular' }}>Indicator</Text>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsSemibold' }}>Result</Text>
                </View>
                <View style={{ ...styles.card }}>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsRegular' }}>Indicator</Text>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsSemibold' }}>Result</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12
  },
  title: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 6,
  },
  card: {
    padding: 18,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'PoppinsRegular',
  }
});
