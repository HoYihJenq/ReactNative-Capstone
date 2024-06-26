import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Meow = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 50,
          textDecorationLine: "underline",
          color: "white",
          marginBottom: 50,
          fontWeight: "bold",
        }}
      >
        Home Screen
      </Text>
      <Link href="/Onboarding" style={styles.link}>
        Go to Onboarding
      </Link>
      <Link href="/Profile" style={styles.link}>
        Go to Profile Screen
      </Link>
      <Link href="/Home" style={styles.link}>
        Go to Menu Screen
      </Link>
      <StatusBar style="dark" />
    </View>
  );
};

export default Meow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2f5236",
  },
  link: {
    color: "#2f5236",
    fontSize: 30,
    borderWidth: 1,
    padding: 12,
    margin: 12,
    backgroundColor: "#dedede",
    fontWeight: "bold",
    borderRadius: 15,
  },
});
