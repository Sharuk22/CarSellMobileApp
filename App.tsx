// import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import "./global.css";
// import TabNavigator from "./src/navigation/TabNavigator";

// export default function App() {
//   return (

//     <SafeAreaProvider>

//       <StatusBar style="light" />

//       <NavigationContainer>
//         <TabNavigator />
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";

// Import your Navigators and Screens
import TabNavigator from "./src/navigation/TabNavigator";
import DetailsScreen from "./src/screens/Account/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* ප්‍රධාන Tab Navigation එක (Home, Profile ආදිය මෙහි ඇත) */}
          <Stack.Screen name="MainTabs" component={TabNavigator} />

          {/* Details Screen එක (මෙය Tab Bar එකේ පෙනෙන්නේ නැත, නමුත් navigate විය හැක) */}
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
