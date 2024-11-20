import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="splace-screen" options={{ headerShown: false }} />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="authentication" options={{ headerShown: false }} />
      <Stack.Screen
        name="order-list"
        options={{
          headerShown: false,

          title: "orderList",
        }}
      />
      <Stack.Screen name="add-to-cart" options={{ headerShown: false }} />
      <Stack.Screen name="complete-detail" options={{ headerShown: false }} />
      <Stack.Screen name="complete-order" options={{ headerShown: false }} />
      <Stack.Screen name="home-screen" options={{ headerShown: false }} />
      <Stack.Screen name="input-detail" options={{ headerShown: false }} />
      <Stack.Screen name="track-orde" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />{" "}
    </Stack>
  );
}
