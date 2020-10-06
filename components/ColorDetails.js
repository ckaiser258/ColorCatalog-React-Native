import React from "react";
import { View, Text } from "react-native";

export default function ColorDetails() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const { colors, addColor } = useColors();

  return (
      <View style={styles.container}>
          <Text>Color Details</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
});
