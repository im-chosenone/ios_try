import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./WelcomeScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import InformationScreen from "./InformationScreen";
import Settings from "./Settings";
import Home from "./Home";
import Instructions from "./Instructions";
import Test from "./Test";
import Daignostic from "./Daignostic.js";
import Reports from "./Reports.js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Sidebar from "./Sidebar.js";

//const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <GestureHandlerRootView>
//       <SafeAreaProvider>
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Home">
//             <Test />
//             {/* ... your other Stack.Screen components ... */}
//           </Stack.Navigator>
//         </NavigationContainer>
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   );
// };

// <Home />
// <SafeAreaProvider>
//   <Test />
// </SafeAreaProvider>

//totally working
const Stack = createNativeStackNavigator();

const shouldShowHeader = (route) => {
  return Platform.OS === "web" &&
    (route.name === "SignIn" ||
      route.name === "SignUp" ||
      route.name === "InformationScreen" ||
      route.name === "Instructions" ||
      route.name === "Test" ||
      route.name === "Reports" ||
      route.name === "Settings" ||
      route.name === "Daignostic")
    ? false
    : true;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />

        <Stack.Screen
          name="InformationScreen"
          component={InformationScreen}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide the header for the Home screen
        />
        <Stack.Screen
          name="Reports"
          component={Reports}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })} // Hide the header for the Home screen
        />
        <Stack.Screen
          name="Instructions"
          component={Instructions}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="Daignostic"
          component={Daignostic}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// const shouldShowHeader = (route) => {
//   return Platform.OS === "web" &&
//     (route.name === "Instructions" ||
//       route.name === "Test" ||
//       route.name === "Daignostic")
//     ? false
//     : true;
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="WelcomeScreen">
//         <Stack.Screen
//           name="WelcomeScreen"
//           component={WelcomeScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="SignIn" component={SignInScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="InformationScreen" component={InformationScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const shouldShowHeader = (route) => {
//   return Platform.OS === "web" &&
//     (route.name === "Instructions" ||
//       route.name === "Test" ||
//       route.name === "Daignostic")
//     ? false
//     : true;
// };

// const App = () => {
//   return <Sidebar />;
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="WelcomeScreen">
//         <Stack.Screen
//           name="WelcomeScreen"
//           component={WelcomeScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SignIn"
//           component={SignInScreen}
//           options={({ route }) => ({
//             headerShown: shouldShowHeader(route),
//           })}
//         />
//         <Stack.Screen
//           name="SignUp"
//           component={SignUpScreen}
//           options={({ route }) => ({
//             headerShown: shouldShowHeader(route),
//           })}
//         />

//         <Stack.Screen
//           name="InformationScreen"
//           component={InformationScreen}
//           options={({ route }) => ({
//             headerShown: shouldShowHeader(route),
//           })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default App;
