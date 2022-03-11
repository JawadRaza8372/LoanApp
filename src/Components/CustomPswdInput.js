import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { w, h } from "react-native-responsiveness";
import {
  allCenter,
  mainColor,
  screenBg,
  disabeBtnTxt,
  cardBg,
} from "../AppInfo.js";
import { Octicons } from "@expo/vector-icons";

const CustomPswdInput = ({ placeholder, onChange, value, ...otherprops }) => {
  const [isFocus, setisFocus] = useState(null);
  const [isSequreEntry, setisSequreEntry] = useState(true);
  return (
    <View
      style={{
        ...styles.inputContainerView,
        borderColor: isFocus || value ? mainColor : disabeBtnTxt,
      }}
    >
      <View style={styles.inpCont}>
        <TextInput
          {...otherprops}
          secureTextEntry={isSequreEntry}
          onFocus={() => setisFocus(true)}
          onBlur={() => setisFocus(null)}
          defaultValue={`${value}`}
          onEndEditing={({ nativeEvent }) => {
            onChange(nativeEvent.text);
          }}
          placeholder={`${placeholder}`}
          placeholderTextColor={disabeBtnTxt}
          onChangeText={onChange}
          style={{
            ...styles.inputfieldStyle,
            color: isFocus || value ? mainColor : disabeBtnTxt,
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.iconCont}
        onPress={() => setisSequreEntry(!isSequreEntry)}
      >
        <Octicons
          name={isSequreEntry ? "eye" : "eye-closed"}
          size={h("3%")}
          color={disabeBtnTxt}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomPswdInput;

const styles = StyleSheet.create({
  inputfieldStyle: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 2,
    fontSize: h("2.2%"),
  },
  inputContainerView: {
    width: "90%",
    height: h("7%"),
    marginBottom: h("3%"),
    alignSelf: "center",
    ...allCenter,
    flexDirection: "row",
    borderColor: mainColor,
    backgroundColor: cardBg,
    borderWidth: 0,
    borderBottomWidth: 3,
    // borderRadius: 15,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  iconCont: {
    width: "10%",
    height: "100%",
    ...allCenter,
  },
  inpCont: {
    width: "90%",
    height: "100%",
  },
});
