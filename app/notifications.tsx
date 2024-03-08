import BackButton from '@/components/Global/BackButton';
import { Stack, useRouter } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

interface NotificationsProps {}

export default function Notifications(props: NotificationsProps) {
  const router = useRouter()

  return (
    <SafeAreaView>
      <Stack.Screen 
        options={{
          presentation: 'modal',
          headerBackVisible: false,
          headerLeft: () => 
          <BackButton 
            onPress={() => router.back()}
          />,
        }}
      />

      <View style={styles.container}>
        <Text>Notifications</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {}
});
