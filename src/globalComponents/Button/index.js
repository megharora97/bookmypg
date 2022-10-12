import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { normalize } from "../../utils/Helper";

export default function Button(props) {
  const {
    text,
    style,
    textStyle,
    onPress,
    loading,
    disabled,
    Icon,
    holo,
    RightIcon,
    lines = 1,
  } = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: holo ? "white" : "#0083B3",
        borderColor: holo ? "#0083B3" : "#fff",
        borderWidth: holo ? 1 : 0,
        ...style,
      }}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      {Icon && <Icon />}
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          allowFontScaling={false}
          style={{
            ...styles.text,
            color: holo ? "#0083B3" : "#fff",
            width: Icon || RightIcon ? "60%" : "100%",
            ...textStyle,
          }}
          numberOfLines={lines}
        >
          {text}
        </Text>
      )}
      {RightIcon && <RightIcon />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: normalize(40),
    backgroundColor: "#0083B3",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: normalize(12),
    textAlign: "center",
    paddingHorizontal: normalize(4),
  },
});
