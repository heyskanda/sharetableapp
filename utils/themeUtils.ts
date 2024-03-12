import { PaperProvider, MD3DarkTheme, MD3LightTheme, useTheme } from 'react-native-paper';

export const RNPLightTheme = {
    ...MD3LightTheme,
    myOwnProperty: true,
    colors: {
      primary: '#0042bc',
      onPrimary: '#ffffff',
      primaryContainer: '#3066f4',
      onPrimaryContainer: '#ffffff',
      secondary: '#4a5c96',
      onSecondary: '#ffffff',
      secondaryContainer: '#b6c5ff',
      onSecondaryContainer: '#20336b',
      tertiary: '#7e129f',
      onTertiary: '#ffffff',
      tertiaryContainer: '#a645c6',
      onTertiaryContainer: '#ffffff',
      surfaceDim: '#d9d9e5',
      surface: '#faf8ff',
      surfaceBright: '#faf8ff',
      surfaceContainerLowest: '#ffffff',
      surfaceContainerLow: '#f3f3ff',
      surfaceContainer: '#ededf9',
      surfaceContainerHigh: '#e7e7f3',
      surfaceContainerHighest: '#e1e1ed',
      onSurface: '#191b24',
      onSurfaceVariant: '#434655',
      outline: '#737686',
      outlineVariant: '#c3c5d7',
      error: '#ba1a1a',
      onError: '#ffffff',
      errorContainer: '#ffdad6',
      onErrorContainer: '#410002',
      inverseSurface: '#2e3039',
      inverseOnSurface: '#f0f0fc',
      inversePrimary: '#b5c4ff',
      scrim: '#000000',
      shadow: '#000000'
    }
}
  
export const RNPDarkTheme = {
    ...MD3DarkTheme,
    myOwnProperty: true,
    colors: {
        primary: '#b5c4ff',
        onPrimary: '#00297b',
        primaryContainer: '#004cd5',
        onPrimaryContainer: '#ffffff',
        secondary: '#b5c4ff',
        onSecondary: '#192d65',
        secondaryContainer: '#273a73',
        onSecondaryContainer: '#c3cfff',
        tertiary: '#f0b0ff',
        onTertiary: '#54006d',
        tertiaryContainer: '#8c29ac',
        onTertiaryContainer: '#ffffff',
        surfaceDim: '#11131b',
        surface: '#11131b',
        surfaceBright: '#373942',
        surfaceContainerLowest: '#0c0e16',
        surfaceContainerLow: '#191b24',
        surfaceContainer: '#1d1f28',
        surfaceContainerHigh: '#282a32',
        surfaceContainerHighest: '#33343d',
        onSurface: '#e1e1ed',
        onSurfaceVariant: '#c3c5d7',
        outline: '#8d90a1',
        outlineVariant: '#c3c5d7',
        error: '#ffb4ab',
        onError: '#690005',
        errorContainer: '#93000a',
        onErrorContainer: '#ffdad6',
        inverseSurface: '#e1e1ed',
        inverseOnSurface: '#2e3039',
        inversePrimary: '#0751df',
        scrim: '#000000',
        shadow: '#000000'
    }
}

export type AppTheme = typeof RNPDarkTheme | typeof RNPLightTheme;

export const useAppTheme = () => useTheme<AppTheme>();