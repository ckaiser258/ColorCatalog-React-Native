import React from "react";
import { StyleSheet, Image, View } from "react-native";

import picBiscuit from "./assets/biscuit.jpg"

export default function App() {
  return (
    <View style={styles.page}>
      <Image style={styles.image} source={picBiscuit}/>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {

  }
})