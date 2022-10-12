import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function Loader() {
  return (
    <View style={styles.loader}>
      <View style={styles.backdrop} />
      <ActivityIndicator color={"rgba(0, 131, 179, 1)"} />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    zIndex: 1,
    width: "120%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  backdrop: {
    opacity: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#fff",
  },
});
