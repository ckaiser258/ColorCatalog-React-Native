import React, {useState, useRef} from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function ColorForm() {
    const [inputValue, setValue] = useState("")
    const input = useRef() 
    //Set up a variable 'input' to be used when wanting to reference a component
  return (
    <View style={styles.container}>
      <TextInput style={styles.txtInput} 
      ref={input} //Allow this component to be referenced so we can access its properties
      value={inputValue}
      onChangeText={setValue}
      autoCapitalize="none"
      placeholder="enter a color..."
      />
      <Button title="add" 
      onPress={() => {
          //Grab the TextInput property method "blur()"
          input.current.blur()
          //blur() deselects the text input and causes keyboard to disappear
          console.log(`add value ${inputValue}`)
          setValue("")

      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5
  },
});
