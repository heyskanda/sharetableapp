import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { PaperProvider, MD3DarkTheme, MD3LightTheme, useTheme } from 'react-native-paper';
import HeaderRight from '@/components/HeaderRight';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '@/components/Drawer';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RNPDarkTheme, RNPLightTheme } from '@/utils/themeUtils';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemibold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsItalic: require('../assets/fonts/Poppins-Italic.ttf'),
    MerriweatherLight: require('../assets/fonts/Merriweather-Light.ttf'),
    MerriweatherRegular: require('../assets/fonts/Merriweather-Regular.ttf'),
    MerriweatherBold: require('../assets/fonts/Merriweather-Bold.ttf'),
    MerriweatherItalic: require('../assets/fonts/Merriweather-Italic.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={colorScheme === 'dark' ? RNPDarkTheme : RNPLightTheme}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Drawer drawerContent={DrawerContent}>
            <Drawer.Screen 
              name="(tabs)"
              options={{
                drawerLabel: 'Discover',
                title: 'Discover',
                drawerIcon: ({ color, size, focused }) => <Ionicons name={focused ? "compass" : "compass-outline"} size={26} color={color} />,
                headerShown: false,
              }}
            />
            <Drawer.Screen 
              name="referral"
              options={{
                drawerLabel: 'Referral',
                title: 'Referral',
                drawerIcon: ({ color, size, focused }) => <MaterialCommunityIcons name={focused ? "share-variant" : "share-variant-outline"} size={24} color={color} />,
              }}
            />
            <Drawer.Screen 
              name="subscription"
              options={{
                drawerLabel: 'Subscription',
                title: 'Subscription',
                drawerIcon: ({ color, size, focused }) => <MaterialCommunityIcons name={focused ? "label-percent" : "label-percent-outline"} size={26} color={color} />,
              }}
            />
            <Drawer.Screen 
              name="(auth)/login"
              options={{
                drawerLabel: 'Login',
                title: 'Login',
                headerRight: () => <HeaderRight />
              }}
            />
            <Drawer.Screen 
              name="notifications"
              options={{
                drawerLabel: 'Notifications',
                title: 'Notifications',
                headerShown: true
              }}
            />
          </Drawer>
        </ThemeProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}
