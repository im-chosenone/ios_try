import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Sidebar from "./Sidebar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import cookieImage from "./media/cookie.png";
// import Recording from "./Recording.js";

const isWeb = () => {
  return Platform.OS === "web";
};

const Test = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.appContainer}>
        {isWeb() && <Sidebar />}
        <GestureHandlerRootView style={styles.mainContent}>
          <View>
            <InstructionsContent navigation={navigation} />
          </View>
        </GestureHandlerRootView>
        {!isWeb() && <Sidebar />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const InstructionsContent = ({ navigation }) => {
  const handleTakeTestPress = () => {
    navigation.navigate("Daignostic");
  };

  return (
    <View>
      <View style={styles.profileContainer}>
        {isWeb() ? (
          <View>
            <View style={styles.webimage}>
              {/* Use standard HTML img tag for web */}
              <img
                src={cookieImage} // Assuming cookieImage is a local import
                style={{ width: "60%", height: "80%" }}
                alt="Cookie Image"
              />
            </View>
          </View>
        ) : (
          <View style={styles.androidimage}>
            {/* Keep using React Native Image for mobile */}
            {/* <Image source={cookieImage} resizeMode="cover" /> */}
            <Image
              source={cookieImage}
              style={{ width: 350, height: 300 }} // Adjust these values as needed
            />
          </View>
        )}
      </View>

      <View style={styles.descriptionContainer}></View>
      {/* <Recording /> */}
      <TouchableOpacity style={styles.testButton} onPress={handleTakeTestPress}>
        <Text style={styles.testButtonText}>Take Test</Text>
      </TouchableOpacity>
    </View>
  );
};

Test.navigationOptions = ({ navigation }) => {
  return {
    headerShown: isWeb() ? false : true,
  };
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: isWeb() ? "row" : "column",
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    borderColor: "#ffff",
    borderWidth: 1,
    borderRadius: 20,
    margin: isWeb() ? 20 : 0,
    marginTop: isWeb() ? 0 : 20,
    ...(isWeb() ? { marginLeft: 120, marginTop: 20 } : {}),
  },
  profileContainer: {
    //  backgroundColor: "red",
    alignItems: "center",
  },
  androidimage: {
    // width: "60%",
    // height: "80%",
    // overflow: "hidden",
    // borderRadius: 20,
  },

  testButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 8,
    maxWidth: 250,
    alignSelf: "center",
  },
  testButtonText: {
    color: "white", // Change this color to ensure visibility
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
  },

  descriptionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    //backgroundColor: "yellow", // Changed from "Red" to "red"
    //alignItems: "center",
  },

  webimage: {
    //backgroundColor: "green",
    //justifyContent: "center",
    alignItems: "center",
  },
});

export default Test;
