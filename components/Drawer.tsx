import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Drawer, useTheme } from 'react-native-paper';

const DrawerContent = (props: any) => {
  const router = useRouter()
  const theme = useTheme()

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Ionicons name="logo-codepen" size={52} color="black" />
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => router.push('/account')}
          />
          <DrawerItem
            icon={({ color, size, focused }) => (
              <MaterialCommunityIcons name="share-variant-outline" size={size} color={color} />
            )}
            label="Referral"
            onPress={() => router.push('/referral')}
          />
          <DrawerItem
            icon={({ color, size, focused }) => (
              <MaterialCommunityIcons name="label-percent-outline" size={size} color={color} />
            )}
            label="Subscription"
            onPress={() => router.push('/subscription')}
          />
          <DrawerItem
            icon={({ color, size, focused }) => (
              <MaterialCommunityIcons name="logout" size={size} color={color} />
            )}
            label="Logout"
            onPress={() => router.push('/subscription')}
          />
        </Drawer.Section>
      </View>

      <View>
        
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    padding: 12
  },
  profile: {
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerSection: {
    marginTop: 15,
  },
});
