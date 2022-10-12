import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { normalize } from "../../utils/Helper";
import IconFeather from "react-native-vector-icons/Feather";
import DismissKeyboard from "../DismissKeyboard";

export default function Header(props) {
  const { righticon, text, hideIcon, style, onPress } = props;

  return (
    <DismissKeyboard>
      <View
        style={{
          ...styles.header,
          width: hideIcon ? "90%" : "92%",
          ...style,
        }}
      >
        {!hideIcon && (
          <IconFeather
            name="chevron-left"
            size={normalize(26)}
            style={{ marginStart: normalize(-6), color: 'black' }}
            onPress={onPress}
          />
        )}

        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={{
            ...styles.headerText,
            textAlign: hideIcon ? "left" : "center",
          }}
        >
          {text ? text : ""}
        </Text>
        <View style={{ width: "10%" }} />
        {righticon ? <>{righticon}</> : null}
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    height: normalize(40),
    justifyContent: "space-between",
  },
  headerText: {
    width: "80%",
    fontWeight: "600",
    fontSize: normalize(14.2),
    color: 'black'
  },
});
