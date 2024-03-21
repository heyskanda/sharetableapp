import { useAppTheme } from '@/utils/theme-provider';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

interface LoadingIndicatorProps {}

export const LoadingIndicator = (props: LoadingIndicatorProps) => {
  const theme = useAppTheme()

  return (
    <View style={{ ...styles.container, backgroundColor: theme.colors.surface }}>
      <ActivityIndicator size={'large'} />
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
