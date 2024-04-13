import { View, ActivityIndicator } from "react-native";
import { Overlay, Text } from "react-native-elements";
import React from "react";
import { styles } from "./LoadingModal.style";
import { stringifyValueWithProperty } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

export function LoadingModal(props) {
  const { show, text } = props;

  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00A680" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

LoadingModal.defaultProps = {
  show: false,
};
