import React from "react";
import { View, Text } from "react-native";

export default ({ children, corBack, corText }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: corBack }}>
    <Text style={{ fontSize: 50, color: corText }}>{children}</Text>
  </View>
)