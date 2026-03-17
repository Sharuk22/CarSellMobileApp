// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import { createStackNavigator } from "@react-navigation/native-stack";
// // import React, { useEffect, useState } from "react";
// // import { ActivityIndicator, View } from "react-native";

// // // Screens Import
// // import AccountScreen from "../screens/Account/AccountScreen";
// // import ChangePasswordScreen from "../screens/Account/ChangePasswordScreen";
// // import EditProfileScreen from "../screens/Account/EditProfileScreen";
// // import NotificationSettings from "../screens/Account/NotificationSettings";
// // import LoginScreen from "../screens/Account/loginscreen";
// // import RegisterScreen from "../screens/Account/registerscreen";

// // const Stack = createStackNavigator();

// // export default function AccountNavigator() {
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   useEffect(() => {
// //     const checkLoginStatus = async () => {
// //       try {
// //         const user = await AsyncStorage.getItem("user");
// //         // User දත්ත තිබේ නම් පමණක් කෙලින්ම Account එකට යවන්න
// //         if (user) {
// //           setIsLoggedIn(true);
// //         } else {
// //           setIsLoggedIn(false);
// //         }
// //       } catch (e) {
// //         console.error("Auth check error:", e);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
// //     checkLoginStatus();
// //   }, []);

// //   // දත්ත පරීක්ෂා කරන තුරු Spinner එකක් පෙන්වන්න
// //   if (isLoading) {
// //     return (
// //       <View
// //         style={{
// //           flex: 1,
// //           justifyContent: "center",
// //           alignItems: "center",
// //           backgroundColor: "#f8fafc",
// //         }}
// //       >
// //         <ActivityIndicator size="large" color="#2563eb" />
// //       </View>
// //     );
// //   }

// //   return (
// //     <Stack.Navigator
// //       // AsyncStorage පරීක්ෂාව අනුව මුලින්ම පෙන්වන පිටුව තීරණය වේ
// //       initialRouteName={isLoggedIn ? "AccountMain" : "Login"}
// //       screenOptions={{
// //         headerStyle: { backgroundColor: "#f8fafc" },
// //         headerShadowVisible: false,
// //         headerTitleStyle: { fontWeight: "bold", color: "#1e293b" },
// //       }}
// //     >
// //       <Stack.Screen
// //         name="Login"
// //         component={LoginScreen}
// //         options={{ headerShown: false }}
// //       />
// //       <Stack.Screen
// //         name="Register"
// //         component={RegisterScreen}
// //         options={{ title: "Create Account" }}
// //       />
// //       <Stack.Screen
// //         name="AccountMain"
// //         component={AccountScreen}
// //         options={{ headerShown: false }}
// //       />
// //       <Stack.Screen
// //         name="EditProfile"
// //         component={EditProfileScreen}
// //         options={{ title: "Edit Profile" }}
// //       />
// //       <Stack.Screen
// //         name="ChangePassword"
// //         component={ChangePasswordScreen}
// //         options={{ title: "Security" }}
// //       />
// //       <Stack.Screen
// //         name="Notifications"
// //         component={NotificationSettings}
// //         options={{ title: "Notifications" }}
// //       />
// //     </Stack.Navigator>
// //   );
// // }

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React, { useEffect, useState } from "react";
// import { ActivityIndicator, View } from "react-native";
// // වැදගත්: මෙතැන createNativeStackNavigator ලෙස වෙනස් කර ඇත
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // Screens Import
// import AccountScreen from "../screens/Account/AccountScreen";
// import ChangePasswordScreen from "../screens/Account/ChangePasswordScreen";
// import EditAdPage from "../screens/Account/EditAdPage";
// import EditProfileScreen from "../screens/Account/EditProfileScreen";
// import NotificationSettings from "../screens/Account/NotificationSettings";
// import MyListingsScreen from "../screens/Account/ProfileInventoryScreen";
// import LoginScreen from "../screens/Account/loginscreen";
// import RegisterScreen from "../screens/Account/registerscreen";
// import DetailsScreen from "../screens/Account/DetailsScreen";
// // මෙතැනත් createNativeStackNavigator භාවිතා කරන්න
// const Stack = createNativeStackNavigator();

// export default function AccountNavigator() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const user = await AsyncStorage.getItem("user");
//         setIsLoggedIn(!!user);
//       } catch (e) {
//         console.error("Auth check error:", e);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     checkLoginStatus();
//   }, []);

//   if (isLoading) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#f8fafc",
//         }}
//       >
//         <ActivityIndicator size="large" color="#2563eb" />
//       </View>
//     );
//   }

//   return (
//     <Stack.Navigator
//       initialRouteName={isLoggedIn ? "AccountMain" : "Login"}
//       screenOptions={{
//         headerStyle: { backgroundColor: "#f8fafc" },
//         headerShadowVisible: false,
//         headerTitleStyle: { fontWeight: "bold", color: "#1e293b" },
//       }}
//     >
//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Register"
//         component={RegisterScreen}
//         options={{ title: "Create Account" }}
//       />
//       <Stack.Screen
//         name="AccountMain"
//         component={AccountScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="EditProfile"
//         component={EditProfileScreen}
//         options={{ title: "Edit Profile" }}
//       />
//       <Stack.Screen
//         name="ChangePassword"
//         component={ChangePasswordScreen}
//         options={{ title: "Security" }}
//       />
//       <Stack.Screen
//         name="Notifications"
//         component={NotificationSettings}
//         options={{ title: "Notifications" }}
//       />
//       <Stack.Screen name="MyListings" component={MyListingsScreen} />
//       <Stack.Screen name="EditAdPage" component={EditAdPage} />
//     </Stack.Navigator>
//   );
// }

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

// Screens Import
import AccountScreen from "../screens/Account/AccountScreen";
import ChangePasswordScreen from "../screens/Account/ChangePasswordScreen";
import EditAdPage from "../screens/Account/EditAdPage";
import EditProfileScreen from "../screens/Account/EditProfileScreen";
import ForgotPasswordScreen from "../screens/Account/ForgotPasswordScreen"; // ✅ Import ForgotPassword
import NotificationSettings from "../screens/Account/NotificationSettings";
import MyListingsScreen from "../screens/Account/ProfileInventoryScreen";
import LoginScreen from "../screens/Account/loginscreen";
import RegisterScreen from "../screens/Account/registerscreen";

const Stack = createNativeStackNavigator();

export default function AccountNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        setIsLoggedIn(!!user);
      } catch (e) {
        console.error("Auth check error:", e);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  // ✅ App එක Load වන විට පෙනෙන Spinner එක (Dark Theme එකට ගැලපෙන ලෙස)
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000", // Black background
        }}
      >
        <StatusBar style="light" />
        <ActivityIndicator size="large" color="#10b981" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? "AccountMain" : "Login"}
      screenOptions={{
        headerStyle: { backgroundColor: "#000" }, // Black header
        headerShadowVisible: false,
        headerTintColor: "#fff", // White back button and text
        headerTitleStyle: { fontWeight: "900", color: "#fff" },
        contentStyle: { backgroundColor: "#000" }, // App background
      }}
    >
      {/* --- Auth Screens --- */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: "Join Us",
          headerShown: false, // Register එකෙත් අපි custom header එකක් දාලා තියෙන නිසා
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          title: "Reset Password",
          headerShown: false, // අපි custom back button එකක් දැම්මා නේද?
        }}
      />

      {/* --- Account Screens --- */}
      <Stack.Screen
        name="AccountMain"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: "Edit Profile" }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{ title: "Security" }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationSettings}
        options={{ title: "Notifications" }}
      />
      <Stack.Screen
        name="MyListings"
        component={MyListingsScreen}
        options={{ title: "My Ads" }}
      />
      <Stack.Screen
        name="EditAdPage"
        component={EditAdPage}
        options={{ title: "Update Ad" }}
      />
    </Stack.Navigator>
  );
}
