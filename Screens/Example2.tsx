import React from "react";
import { View, Text } from "react-native";
import SignatureScreen from "react-native-signature-canvas";

export function Example2(): React.ReactElement {
  return (
    <View style={{ height: "100%", flex: 1, backgroundColor: "paleturquoise" }}>
      <Text style={{ padding: 4 }}>
        There are several issues when rotated=true: (1) the confirm and clear
        buttons are not visible, (2) the signature canvas only takes up part of
        the webview, and (3) scrolling horizontally moves the signature canvas
        vertically.
      </Text>
      <SignatureScreen
        rotated
        descriptionText="Please sign above"
        confirmText="Confirm"
        clearText="Clear"
      />
    </View>
  );
}
