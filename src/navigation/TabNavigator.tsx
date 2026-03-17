// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { TouchableOpacity, View, Text } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// // Screens import
// import HomeScreen from "../screens/HomeScreen";
// import SearchScreen from "../screens/SearchScreen";
// import PostScreen from "../screens/PostScreen";

// // අලුතින් සාදාගත් Account Stack Navigator එක import කරන්න
// import AccountNavigator from "./AccountNavigator";

// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         // --- Facebook Style Header Customization ---
//         headerShown: true,
//         headerStyle: {
//           backgroundColor: "#000000",
//           elevation: 0,
//           shadowOpacity: 0,
//           borderBottomWidth: 1,
//           borderBottomColor: "#1A1A1A",
//         },
//         headerTitleAlign: "left",
//         headerTitle: () => (
//           <Text
//             style={{
//               color: "#009688",
//               fontSize: 24,
//               fontWeight: "900",
//               letterSpacing: -1,
//             }}
//           >
//             LuxeDrive
//           </Text>
//         ),
//         headerRight: () => (
//           <View style={{ flexDirection: "row", marginRight: 15 }}>
//             <TouchableOpacity
//               style={{ backgroundColor: "#1A1A1A", padding: 8, borderRadius: 50, marginLeft: 10 }}
//             >
//               <Ionicons name="search" size={20} color="#009688" />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{ backgroundColor: "#1A1A1A", padding: 8, borderRadius: 50, marginLeft: 10 }}
//             >
//               <Ionicons name="notifications" size={20} color="#009688" />
//               <View style={{ position: 'absolute', top: 0, right: 0, width: 10, height: 10, backgroundColor: 'red', borderRadius: 5, borderWidth: 2, borderColor: 'black' }} />
//             </TouchableOpacity>
//           </View>
//         ),
//         headerLeft: () => null,

//         // --- Tab Bar Icons ---
//         tabBarIcon: ({ color, size, focused }) => {
//           let iconName: any = "";

//           if (route.name === "Home") iconName = focused ? "home" : "home-outline";
//           else if (route.name === "Post") iconName = focused ? "add-circle" : "add-circle-outline";
//           else if (route.name === "Search") iconName = focused ? "search" : "search-outline";
//           else if (route.name === "Account") iconName = focused ? "person" : "person-outline";

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#009688",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: {
//           height: 65,
//           paddingBottom: 10,
//           backgroundColor: "#000000",
//           borderTopWidth: 0,
//         },
//         tabBarLabelStyle: {
//             fontSize: 10,
//             fontWeight: 'bold',
//             textTransform: 'uppercase'
//         }
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: "HOME" }}
//       />
//       <Tab.Screen
//         name="Post"
//         component={PostScreen}
//         options={{ title: "POST" }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{ title: "SEARCH" }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={AccountNavigator} // මෙතැනට කෙලින්ම AccountScreen දානවා වෙනුවට AccountNavigator එක ලබා දෙන්න
//         options={{
//             title: "PROFILE",
//             headerShown: false // AccountNavigator ඇතුළේ වෙනම Header එකක් පාලනය වන බැවින් මෙතැනදී false කරන්න
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// Screens import
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";
import SearchScreen from "../screens/SearchScreen";

// Account Stack Navigator එක
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // --- Header Customization ---
        headerShown: true,
        headerStyle: {
          backgroundColor: "#000000",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#1A1A1A",
        },
        headerTitleAlign: "left",
        headerTitle: () => (
          <Text
            style={{
              color: "#009688",
              fontSize: 24,
              fontWeight: "900",
              letterSpacing: -1,
            }}
          >
            LuxeDrive
          </Text>
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row", marginRight: 15 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#1A1A1A",
                padding: 8,
                borderRadius: 50,
                marginLeft: 10,
              }}
            >
              <Ionicons name="search" size={20} color="#009688" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#1A1A1A",
                padding: 8,
                borderRadius: 50,
                marginLeft: 10,
              }}
            >
              <Ionicons name="notifications" size={20} color="#009688" />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 10,
                  height: 10,
                  backgroundColor: "red",
                  borderRadius: 5,
                  borderWidth: 2,
                  borderColor: "black",
                }}
              />
            </TouchableOpacity>
          </View>
        ),
        headerLeft: () => null,

        // --- Tab Bar Icons ---
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: any = "";

          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          else if (route.name === "Post")
            iconName = focused ? "add-circle" : "add-circle-outline";
          else if (route.name === "Search")
            iconName = focused ? "search" : "search-outline";
          else if (route.name === "Account")
            iconName = focused ? "person" : "person-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#009688",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          backgroundColor: "#000000",
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "bold",
          textTransform: "uppercase",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "HOME" }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{ title: "POST" }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "SEARCH" }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          title: "PROFILE",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
