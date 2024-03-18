import { useAppTheme } from '@/utils/themeUtils';
import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';

interface PastPerformanceProps {}

export const PastPerformance = (props: PastPerformanceProps) => {
    const theme = useAppTheme()

    return (
        <View style={{ ...styles.container, backgroundColor: theme.colors.surfaceContainer }}>
            <View style={styles.title}>
                <Text variant='titleMedium' style={{ fontFamily: 'MerriweatherBold', color: theme.colors.primary }}>
                    Our Stats &nbsp; <AntDesign name="dashboard" size={18} color={theme.colors.primary} />
                </Text>
                <Text variant='bodySmall' style={{ fontFamily: 'PoppinsRegular', color: theme.colors.secondary }}>
                    Performance of our calls
                </Text>
            </View>

            <View style={{ backgroundColor: theme.colors.surfaceBright, borderRadius: 8 }}>
                <View style={{ ...styles.card }}>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsRegular' }}>Total No. of Ideas</Text>
                    <Text variant='labelLarge' style={{ color: theme.colors.primary, fontFamily: 'PoppinsSemibold' }}>140</Text>
                </View>
                <View style={{ ...styles.card }}>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsRegular' }}>Successful Ideas</Text>
                    <Text variant='labelLarge' style={{ color: theme.colors.primary, fontFamily: 'PoppinsSemibold' }}>120</Text>
                </View>
                <View style={{ ...styles.card }}>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsRegular' }}>Success Ratio</Text>
                    <Text variant='labelLarge' style={{ color: theme.colors.primary, fontFamily: 'PoppinsSemibold' }}>85 %</Text>
                </View>
                <View style={{ ...styles.card }}>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsRegular' }}>Average Return</Text>
                    <Text variant='labelLarge' style={{ color: theme.colors.primary, fontFamily: 'PoppinsSemibold' }}>56 %</Text>
                </View>
                <View style={{ ...styles.card }}>
                    <Text variant='labelMedium' style={{ color: theme.colors.primary, fontFamily: 'PoppinsRegular' }}>Average Time Taken</Text>
                    <Text variant='labelLarge' style={{ color: theme.colors.primary, fontFamily: 'PoppinsSemibold' }}>42 Days</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
    padding: 12,
    borderRadius: 8,
  },
  title: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 6,
  },
  card: {
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'PoppinsRegular',
  }
});
