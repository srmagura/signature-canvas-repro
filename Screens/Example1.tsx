import React from "react";
import { View, Text } from "react-native";
import SignatureScreen from "react-native-signature-canvas";

export function Example1(): React.ReactElement {
  return (
    <View style={{ height: "100%", flex: 1, backgroundColor: "paleturquoise" }}>
      <Text style={{ padding: 4 }}>
        While the webview takes up as much space as it is given, the signature
        canvas itself only takes up half the screen.
      </Text>
      <SignatureScreen
        descriptionText="Please sign above"
        confirmText="Confirm"
        clearText="Clear"
      />
    </View>
  );
}
