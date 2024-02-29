import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { Header } from '@/components/Header';

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
  
  const RNPLightTheme = {
    ...MD3LightTheme,
    myOwnProperty: true,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#059669',
      secondary: '#3F8871',
      tertiary: '#20AB98',
      primaryContainer: '#34d399',
      secondaryContainer: '#ACE4CE',
      tertiaryContainer: '#7EC0B7',
      plain: 'white',
    }
  }

  const RNPDarkTheme = {
    ...MD3DarkTheme,
    myOwnProperty: true,
    colors: {
      ...MD3DarkTheme.colors,
      primary: 'white',
      secondary: '#1EC677',
      primaryContainer: '#00B14F',
    }
  }

  return (
    <PaperProvider theme={colorScheme === 'dark' ? RNPDarkTheme : RNPLightTheme}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              header: () => <Header />
            }} 
          />
          {/* <Stack.Screen 
            name="(auth)" 
            options={{ 
              header: () => <Header />
            }} 
          /> */}
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
