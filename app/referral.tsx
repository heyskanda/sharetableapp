import BackButton from '@/components/Global/BackButton';
import { Stack, useRouter } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

interface ReferralProps {}

export default function Referral (props: ReferralProps) {
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
        <Text>Referral</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {}
});
