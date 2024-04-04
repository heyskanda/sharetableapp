import { useAppTheme } from '@/utils/theme-provider';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface LoadingIndicatorProps {
  size?: 'large' | 'small'
  backgroundColor?: string
  indicatorColor?: string
}

export const LoadingIndicator = ({
  size = 'large',
  backgroundColor,
  indicatorColor
}: LoadingIndicatorProps) => {
  const theme = useAppTheme()

  return (
    <View style={{ ...styles.container, backgroundColor: backgroundColor ?? theme.colors.surface }}>
      <ActivityIndicator size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 40
  }
});
