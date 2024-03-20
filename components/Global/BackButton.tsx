import { useAppTheme } from '@/utils/themeUtils';
import { MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface BackButtonProps {
  onPress: () => void
}

const BackButton = ({
  onPress,
}: BackButtonProps) => {
  const theme = useAppTheme()

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialIcons name="arrow-back-ios-new" size={21} color={theme.colors.secondary} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    marginLeft: 12,
    padding: 8,
  }
});
