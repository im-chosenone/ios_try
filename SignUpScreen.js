import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  Icon,
  Platform,
} from "react-native";
import Checkbox from "expo-checkbox";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const formWidth = width > 480 ? 480 : width * 0.9; // Max form width for web and larger screens
const formHeight = height * 0.6; // You can adjust the height as needed

const SignUpScreen = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  //console.log(name);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (name === "ali") {
    }
    // Implement your sign-up logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Image source={require("./media/logo.png")} style={styles.logo} />
          </View>
          {/* <MaterialIcons name="person" size={24} color="#8e8e93" /> */}
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#8e8e93"
            autoCapitalize="none"
            value={name}
            autoCorrect={false}
            onChangeText={(username) => setName(username)}
          />
          {/* <MaterialIcons name="email" size={24} color="#8e8e93" /> */}
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#8e8e93"
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(useremail) => setEmail(useremail)}
            keyboardType="email-address"
          />
          {/* <MaterialIcons name="lock" size={24} color="#8e8e93" /> */}
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#8e8e93"
            value={password}
            onChangeText={(userpassword) => setPassword(userpassword)}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={styles.wrapper}>
            <Checkbox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "#4630EB" : undefined}
            />
            <Text style={styles.text}>Agree to terms and conditions</Text>
          </View>

          {/* <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: agree ? "#4630EB" : "grey" },
            ]}
            disabled={!agree}
            onPress={handleSignUp}
            //onPress={() => navigation.navigate("InformationScreen")}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Text
              style={styles.signInButton}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      android: {
        paddingBottom: 40, // Adjust paddingBottom for Android
      },
    }),
  },
  wrapper: {
    marginLeft: 8,
    flexDirection: "row", // Set flexDirection to 'row' to make children align horizontally
    alignSelf: "flex-start", // Center children vertically within the container
  },
  text: {
    color: "#8e8e93",

    marginLeft: 8, // Adjust the margin to create space between checkbox and text
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  formContainer: {
    width: formWidth,
    height: formHeight,
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f7",
    fontSize: 17,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007aff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10, // Add marginTop for spacing
    marginBottom: 20, // Add marginTop for spacing
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
  },
  footerContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
    ...Platform.select({
      android: {
        paddingBottom: 20, // Adjust paddingBottom for Android
      },
    }),
  },
  footerText: {
    fontSize: 16,
    color: "#8e8e93",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#f2f2f7",
    fontSize: 17,
  },
  signInButton: {
    fontWeight: "bold",
    color: "#007aff",
  },
});

export default SignUpScreen;
