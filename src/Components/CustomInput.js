import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { w, h } from "react-native-responsiveness";
import {
  allCenter,
  mainColor,
  screenBg,
  disabeBtnTxt,
  cardBg,
} from "../AppInfo.js";
import { MaterialIcons } from "@expo/vector-icons";

const CustomInput = ({ icon, placeholder, onChange, value, ...otherprops }) => {
  const [isFocus, setisFocus] = useState(null);
  return (
    <View
      style={{
        ...styles.inputContainerView,
        borderColor: isFocus || value ? mainColor : disabeBtnTxt,
      }}
    >
      {/* <View style={styles.iconCont}>
        <MaterialIcons
          name={`${icon}`}
          size={h("5%")}
          color={isFocus || value ? mainColor : disabeBtnTxt}
        />
      </View> */}
      <View style={styles.inpCont}>
        <TextInput
          {...otherprops}
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
          autoComplete="off"
        />
      </View>
    </View>
  );
};

export default CustomInput;

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
    width: "16%",
    height: "100%",
    ...allCenter,
  },
  inpCont: {
    width: "100%",
    height: "100%",
  },
});
