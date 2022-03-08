import { Alert } from "react-native";
const mainColor = "#085E7D";
const cardBg = "#FFFFFF";
const greyText = "#6B7280";
const screenBg = "#E5E5E5";
const disableBtnBg = "#F4F4F4";
const disabeBtnTxt = "#9CA3AF";
const inputbg = "#C4C4C4";
const allCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const alignStart = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
};
const justifyEvenly = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};
const justifyBetween = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const justifyStart = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
};
const jusifyAround = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};
const jusifyEnd = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
};
const evenlyStart = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
};
const aroundStart = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-around",
};
const betwenStart = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
};
const alignEnd = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
};
const AlertFunction = (title, description) => {
  Alert.alert(`${title}`, `${description}`, [
    {
      text: "Ok",
      onPress: () => console.log("Ok Pressed"),
      style: "ok",
    },
  ]);
};
export {
  alignEnd,
  mainColor,
  betwenStart,
  aroundStart,
  disabeBtnTxt,
  disableBtnBg,
  screenBg,
  cardBg,
  greyText,
  allCenter,
  alignStart,
  jusifyAround,
  justifyEvenly,
  justifyBetween,
  jusifyEnd,
  evenlyStart,
  justifyStart,
  inputbg,
  AlertFunction,
};
