import React from "react";
import { View, Text } from "react-native";
import SignatureScreen from "react-native-signature-canvas";

export function Example3(): React.ReactElement {
  return (
    <View style={{ height: "100%", flex: 1, backgroundColor: "paleturquoise" }}>
      <Text style={{ padding: 4 }}>
        Please view this example in landscape mode. There are a number of
        issues: (1) the signature canvas only takes up the bottom half of the
        screen, (2) there are vertical and horizontal scrollbars but you can't
        actually scroll, and (3) the confirm and clear buttons are not visible.
      </Text>
      <SignatureScreen
        descriptionText="Please sign above"
        confirmText="Confirm"
        clearText="Clear"
      />
    </View>
  );
}
