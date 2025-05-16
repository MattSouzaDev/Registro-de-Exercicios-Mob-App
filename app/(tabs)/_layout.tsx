import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function TabsLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
                tabBarInactiveTintColor: Colors[colorScheme ?? 'dark'].tint,
                headerStyle: {
                    backgroundColor: "#2b2a33"
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                tabBarStyle: {
                    backgroundColor: "#2b2a33"
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color }) =>
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            size={30}
                            color={color}
                        />

                }}
            />
            <Tabs.Screen
                name="historico"
                options={{
                    title: "Histórico",
                    tabBarIcon: ({ focused, color }) =>
                        <Ionicons
                            name={focused ? "time-sharp" : "time-outline"}
                            size={30}
                            color={color}
                        />

                }}
            />

        </Tabs>
    )
}
