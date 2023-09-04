import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const LoginScreen = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  console.log(userDetails)
  return (
    <SafeAreaView style={styles.loginContainer}>
      <View>
        <Image
          style={styles.logoImage}
          source={require("../assets/appLogo.jpg")}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.loginText}>Login to your Account</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputInnerContainer}>
            <MaterialIcons
              style={styles.icon}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              value={userDetails.email}
              style={styles.textInput}
              placeholder="enter your E-mail"
              onChangeText={(e)=>setUserDetails({...userDetails,email:e})}
            />
          </View>
          <View style={styles.inputInnerContainer}>
            <Entypo style={styles.icon} name="lock" size={24} color="black" />
            <TextInput
              value={userDetails.password}
              style={styles.textInput}
              placeholder="enter your password"
              secureTextEntry={true}
              onChangeText={(e)=>setUserDetails({...userDetails,password:e})}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  logoImage: {
    width: 150,
    height: 100,
  },
  loginText: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 30,
    color: "#041e42",
    letterSpacing: 1,
  },
  inputContainer: {
    marginTop: 70,
  },
  inputInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#d0d0d0",
    borderRadius: 5,
    marginTop: 30,
  },
  textInput: {
    color: "grey",
    marginVertical: 10,
    width: 300,
    fontSize:16,
  },
  icon: {
    marginLeft: 10,
    color: "grey",
  },
});
