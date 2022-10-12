import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { normalize } from "../../utils/Helper";
import IconAntDesign from "react-native-vector-icons/AntDesign";

export default index = React.forwardRef((props, ref) => {
  const {
    style,
    placeholder,
    secure,
    keyboard,
    onChangeText,
    value,
    editable,
    onSubmitEditing,
    autoCapitalize = "none",
    multiline = false,
    errorMsg,
    RightIcon,
    maxLength,
    inputStyle,
    returnKeyType,
    autoCorrect = true,
    onFocus,
    onBlur,
    LeftIcon,
    errorStyle = {},
    placeholderTextColor = "rgba(56, 64, 87, 0.45)",
    toggleSecure = true,
    hideErrorMsg = false,
  } = props;

  const [show, setShow] = useState(false);

  return (
    <View
      style={{
        flexDirection: "column",
        alignSelf: "center",
        width: style?.width ? style.width : "92%",
      }}
    >
      <View
        style={{
          ...styles.container,
          borderWidth: 1,
          backgroundColor: "#fff",
          borderColor: errorMsg
            ? "rgba(235, 87, 87, 0.55)"
            : value
            ? "#0083B3"
            : "rgba(56, 64, 87, 0.14)",
          ...style,
          width: "100%",
        }}
      >
        {LeftIcon ? (
          <View style={{ ...styles.eye, right: 0, left: normalize(0) }}>
            {LeftIcon && <LeftIcon />}
            <TextInput
              allowFontScaling={false}
              ref={ref}
              style={{
                ...styles.inputContainer,
                width: secure ? "72%" : "85%",
                paddingTop: multiline ? normalize(8) : 0,
                paddingBottom: multiline ? normalize(4) : 0,
                ...inputStyle,
              }}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              secureTextEntry={secure ? !show : show}
              keyboardType={keyboard}
              onChangeText={onChangeText}
              value={value}
              editable={editable}
              onSubmitEditing={onSubmitEditing}
              autoCapitalize={autoCapitalize}
              multiline={multiline}
              maxLength={maxLength}
              autoCorrect={autoCorrect}
              onFocus={onFocus}
              returnKeyType={returnKeyType}
              onBlur={onBlur}
            />
          </View>
        ) : (
          <TextInput
            allowFontScaling={false}
            ref={ref}
            style={{
              ...styles.inputContainer,
              width: "100%",
              paddingTop: multiline ? normalize(8) : 0,
              paddingBottom: multiline ? normalize(4) : 0,
              ...inputStyle,
            }}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secure ? !show : show}
            keyboardType={keyboard}
            onChangeText={onChangeText}
            value={value}
            editable={editable}
            onSubmitEditing={onSubmitEditing}
            autoCapitalize={autoCapitalize}
            multiline={multiline}
            maxLength={maxLength}
            autoCorrect={autoCorrect}
            onFocus={onFocus}
            onBlur={onBlur}
            returnKeyType={returnKeyType}
          />
        )}

        <View style={{ ...styles.eye }}>
          {secure && toggleSecure ? (
            show ? (
              <Text allowFontScaling={false} onPress={() => setShow(!show)}>
                Hide
              </Text>
            ) : (
              <Text allowFontScaling={false} onPress={() => setShow(!show)}>
                Show
              </Text>
            )
          ) : null}
          {RightIcon && <RightIcon />}
        </View>
      </View>
      {errorMsg && !hideErrorMsg ? (
        <View style={{ ...styles.errorContainer, ...errorStyle }}>
          <IconAntDesign
            name="exclamationcircleo"
            color="rgba(235, 87, 87, 1)"
            size={normalize(11)}
          />
          <Text allowFontScaling={false} style={styles.errorText}>
            {errorMsg}
          </Text>
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "92%",
    height: normalize(42),
    borderRadius: normalize(8),
    alignSelf: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "85%",
    height: "100%",
    borderRadius: normalize(8),
    alignSelf: "center",
    color: "#384057",
    backgroundColor: "#fff",
    paddingHorizontal: normalize(10),
  },
  eye: {
    height: "70%",
    position: "absolute",
    right: normalize(14),
    flexDirection: "row",
    alignItems: "center",
  },
  errorText: {
    fontSize: normalize(10),
    width: "90%",
    marginStart: normalize(6),
    color: "rgba(235, 87, 87, 1)",
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: normalize(4),
    marginTop: normalize(2),
  },
});
