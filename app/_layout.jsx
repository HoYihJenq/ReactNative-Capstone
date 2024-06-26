import { Image, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#2f5236",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 30,
        },
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <Image
              source={require("../assets/black-cat.png")}
              style={{
                width: 60,
                height: 60,
                margin: 6,
                backgroundColor: "aquamarine",
                borderRadius: 50,
              }}
            />
          );
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="Onboarding" />
      <Stack.Screen name="Home" options={{ headerTitle: "Menu" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
