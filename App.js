import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import Images from "./Images";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImg}
          resizeMode="contain"
          source={Images.hinh} /*backgroundImg*/
        />
        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={Images.company}
          />
        </View>
        <View style={styles.childContainer}>
          <View style={styles.childBlock}>
            <Image
              source={Images.username}
              style={{ height: 30, width: 30, right: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Email or username"
              placeholderTextColor="rgba(225,225,225,0.7)"
            />
          </View>
          <View style={styles.childBlock}>
            <Image
              source={Images.password2}
              style={{ height: 30, width: 30, right: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="rgba(225,225,225,0.7)"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              color: "white"
            }}
          >
            {" "}
            Term_Conditions
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff"
  },
  loginContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    position: "absolute",
    width: 400,
    height: 600
  },
  childContainer: {
    padding: 20
  },
  childBlock: {
    flexDirection: "row"
  },
  input: {
    flex: 3,
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 20,
    padding: 10,
    color: "white"
  },
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15,
    borderRadius: 25
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  backgroundImg: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
