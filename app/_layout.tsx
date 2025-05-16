import { Stack } from "expo-router";
import { Appearance } from 'react-native';

import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme()

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: theme.backgroundHeader }
    }}>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false
      }}
      />
    </Stack>
  )
}
