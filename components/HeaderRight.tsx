import { useAppTheme } from '@/app/_layout';
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

interface HeaderRightProps {}

const HeaderRight = (props: HeaderRightProps) => {
  const theme = useAppTheme()
  const router = useRouter()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ borderRadius: theme.roundness, padding: 3 }} onPress={() => router.push("/notifications")}>
        <Feather name="bell" size={24} color={theme.colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
    container: {
      marginRight: 12
    }
});
