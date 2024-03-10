import { useAppTheme } from '@/app/_layout';
import { Entypo } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

interface HeaderLeftProps {}

const HeaderLeft = (props: HeaderLeftProps) => {
  const theme = useAppTheme()
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderRadius: theme.roundness, padding: 3 }} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Entypo name="menu" size={24} color={theme.colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
    marginLeft: 12
  }
});
