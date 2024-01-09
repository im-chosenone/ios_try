import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Sidebar = () => {
  // Define your top icons without the logout icon
  // const topIcons = [
  //   { name: "ios-home", label: "Home" },
  //   { name: "ios-search", label: "Search" },
  //   { name: "ios-notifications", label: "Notifications" },
  //   { name: "ios-settings", label: "Settings" },
  // ];

  const navigation = useNavigation();

  const handleIconPress = (targetScreen) => {
    navigation.navigate(targetScreen);
  };

  const topIcons = [
    { name: "ios-home", label: "", targetScreen: "Home" },
    { name: "disc-outline", label: "", targetScreen: "Test" },
    {
      name: "clipboard-outline",
      label: "",
      targetScreen: "Reports",
    },
    { name: "ios-settings", label: "", targetScreen: "Settings" },
  ];

  const renderTopIcons = () => {
    return topIcons.map((icon, index) => (
      <TouchableOpacity
        key={index}
        style={styles.iconButton}
        onPress={() => handleIconPress(icon.targetScreen)}
      >
        <Icon name={icon.name} size={25} color="#FFF" />
        <Text style={styles.iconLabel}>{icon.label}</Text>
      </TouchableOpacity>
    ));
  };

  const renderLogoutIcon = () => {
    return (
      isWeb() && (
        <View style={styles.logoutSection}>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => handleIconPress("WelcomeScreen")}
          >
            <Icon name="ios-log-out" size={25} color="#FFF" />
            {/* <Text style={styles.iconLabel}>Logout</Text> */}
          </TouchableOpacity>
        </View>
      )
    );
  };

  // // Render the top icons
  // const renderTopIcons = () => {
  //   return topIcons.map((icon, index) => (
  //     <TouchableOpacity key={index} style={styles.iconButton}>
  //       <Icon name={icon.name} size={25} color="#FFF" />
  //       {/* Text label could be added here if needed */}
  //     </TouchableOpacity>
  //   ));
  // };

  // // Render the logout icon separately for the web
  // const renderLogoutIcon = () => {
  //   return (
  //     isWeb() && (
  //       <View style={styles.logoutSection}>
  //         <View style={styles.separator} />
  //         <TouchableOpacity style={styles.iconButton}>
  //           <Icon name="ios-log-out" size={25} color="#FFF" />
  //           {/* Text label for logout could be added here if needed */}
  //         </TouchableOpacity>
  //       </View>
  //     )
  //   );
  //};

  return (
    <View
      style={[
        styles.container,
        isWeb() ? styles.sidebarWeb : styles.sidebarMobile,
      ]}
    >
      {renderTopIcons()}
      {renderLogoutIcon()}
    </View>
  );
};

const isWeb = () => {
  return Platform.OS === "web";
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007aff", // This should be the background color of your sidebar
    ...(isWeb() ? { borderRadius: 35 } : {}), // Apply rounded corners for web only
  },
  sidebarWeb: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: 100, // Adjust the width to match your design
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    paddingTop: 50, // This adds space at the top of the sidebar
  },
  sidebarMobile: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80, // Adjust the height to match your design
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconButton: {
    alignItems: "center", // Center the icon horizontally
    justifyContent: "center", // Center the icon vertically
    paddingVertical: 20, // Space above and below the icon
  },
  logoutSection: {
    width: "100%", // Ensure the logout section spans the width of the sidebar
    paddingBottom: 50, // Space at the bottom of the sidebar
    alignItems: "center", // Center the logout button
  },
  separator: {
    width: "80%", // Width of the separator line, relative to the sidebar width
    height: 1, // Height of the separator line
    backgroundColor: "#FFF", // Color of the separator line
    marginBottom: 20, // Space below the separator line
  },
  // Additional styles for text labels can be added here
});

export default Sidebar;
