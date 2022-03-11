import { StyleSheet, Text, View, Image, Modal } from "react-native";
import React, { useState } from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import { allCenter, cardBg, justifyEvenly, mainColor } from "../AppInfo";
import ScreenHeader from "../Components/ScreenHeader";
import { w, h } from "react-native-responsiveness";
import CustomButton from "../Components/CustomButton";
import LoanStep from "../Components/LoanStep";
const DashboardScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const reapplyFun = () => {
    toggleModal();
    navigation.navigate("LoanSelectScreen");
  };
  const ingo = "Get Instant Loans at lowest intreset\nfor all your Emergencies";
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.dashbordCont}>
        <ScreenHeader title="App Name" />
        <View style={styles.dashBordContent}>
          <View style={styles.loanInfoCont}>
            <Text style={styles.text1}>Apply Loan Up To</Text>
            <Text style={styles.bigText}>KSH 80,000</Text>
            <Text style={styles.text2}>{ingo}</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.butnCont}>
                <CustomButton
                  brdrColor={mainColor}
                  bgColor={"transparent"}
                  title="Loan Status"
                  onPressFun={toggleModal}
                />
              </View>
              <View style={styles.butnCont}>
                <CustomButton
                  brdrColor={cardBg}
                  bgColor={mainColor}
                  title="Apply Now"
                  onPressFun={() => navigation.navigate("LoanSelectScreen")}
                />
              </View>
            </View>
            <Text style={styles.text2}>GET YOUR LOAN IN ONLY 3 STEPS</Text>
          </View>
          <View style={styles.loanSteps}>
            <LoanStep title={"ID VERFICATION"}>
              <Image
                source={require("../../assets/stepO.png")}
                style={styles.stepImg}
              />
            </LoanStep>
            <LoanStep title={"Small Tax Fee"}>
              <Image
                source={require("../../assets/StepB.png")}
                style={styles.stepImg}
              />
            </LoanStep>
            <LoanStep title={"Loan Token "}>
              <Image
                source={require("../../assets/stepc.png")}
                style={styles.stepImg}
              />
            </LoanStep>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalbg}>
          <View style={styles.modalCont}>
            <Text style={styles.bigText}>Loan Status</Text>
            <Text style={styles.loanStatTxt}>
              Your loan Status is :
              <Text style={styles.loanStatTxtColor}> Pending</Text>
            </Text>
            <CustomButton
              brdrColor={cardBg}
              bgColor={mainColor}
              title="Re-Apply Now"
              onPressFun={reapplyFun}
            />
          </View>
        </View>
      </Modal>
    </SafeScreenTemp>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  dashbordCont: {
    width: "100%",
    height: "100%",
  },
  modalbg: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    ...allCenter,
    position: "relative",
  },
  loanStatTxt: {
    fontSize: h("2.8%"),
    fontWeight: "600",
  },
  loanStatTxtColor: {
    color: mainColor,
    fontWeight: "bold",
  },
  modalCont: {
    width: "90%",
    height: "40%",
    borderRadius: 20,
    backgroundColor: cardBg,
    ...justifyEvenly,
    flexDirection: "column",
  },
  dashBordContent: {
    width: "100%",
    flex: 1,
    ...allCenter,
    flexDirection: "column",
  },
  loanInfoCont: {
    width: "100%",
    height: "60%",
    ...justifyEvenly,
    flexDirection: "column",
  },
  loanSteps: {
    width: "100%",
    height: "30%",
    ...justifyEvenly,
    flexDirection: "column",
    // backgroundColor: "gold",
    marginBottom: h("13%"),
  },
  text1: {
    fontSize: h("2.2%"),
  },
  text2: {
    fontSize: h("2.5%"),
  },
  bigText: {
    fontSize: h("4%"),
    color: mainColor,
    fontWeight: "700",
  },
  buttonContainer: {
    width: "100%",
    height: h("10%"),
    ...justifyEvenly,
    flexDirection: "row",
  },
  butnCont: {
    width: "50%",
    height: "100%",
    ...allCenter,
  },
  stepImg: {
    width: "90%",
    height: "90%",
    resizeMode: "cover",
  },
});
