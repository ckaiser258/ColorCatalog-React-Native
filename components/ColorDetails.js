import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ColorDetails({ route }) {
  const { color } = route.params;
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text>Color Details: {color}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
