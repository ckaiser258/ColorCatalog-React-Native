import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.button}> green </Text>
      <Text style={styles.button}> red </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center"
  }
})