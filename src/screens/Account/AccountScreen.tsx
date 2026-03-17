// // // import { Feather } from "@expo/vector-icons";
// // // import AsyncStorage from "@react-native-async-storage/async-storage";
// // // import { useFocusEffect } from "@react-navigation/native";
// // // import axios from "axios";
// // // import React, { useCallback, useState } from "react";
// // // import {
// // //   ActivityIndicator,
// // //   Alert,
// // //   Image,
// // //   RefreshControl,
// // //   ScrollView,
// // //   Text,
// // //   TouchableOpacity,
// // //   View,
// // // } from "react-native";
// // // import { SafeAreaView } from "react-native-safe-area-context";

// // // const API_BASE = "http://192.168.43.254:5000";

// // // export default function ProfileScreen({ navigation }: any) {
// // //   const [user, setUser] = useState<any>(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [refreshing, setRefreshing] = useState(false);

// // //   const loadProfile = async () => {
// // //     try {
// // //       const savedUser = await AsyncStorage.getItem("user");
// // //       if (!savedUser) return navigation.replace("Login");

// // //       const userId = JSON.parse(savedUser).id;
// // //       const res = await axios.get(`${API_BASE}/api/users/profile/${userId}`);

// // //       if (res.data.success) {
// // //         setUser(res.data.user);
// // //         await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //     } finally {
// // //       setLoading(false);
// // //       setRefreshing(false);
// // //     }
// // //   };

// // //   useFocusEffect(
// // //     useCallback(() => {
// // //       loadProfile();
// // //     }, []),
// // //   );

// // //   if (loading)
// // //     return (
// // //       <View className="flex-1 bg-black justify-center items-center">
// // //         <ActivityIndicator size="large" color="#10b981" />
// // //       </View>
// // //     );

// // //   return (
// // //     <SafeAreaView className="flex-1 bg-black">
// // //       <ScrollView
// // //         refreshControl={
// // //           <RefreshControl
// // //             refreshing={refreshing}
// // //             onRefresh={() => {
// // //               setRefreshing(true);
// // //               loadProfile();
// // //             }}
// // //             tintColor="#10b981"
// // //           />
// // //         }
// // //         className="px-6"
// // //       >
// // //         {/* Profile Section */}
// // //         <View className="items-center mt-10">
// // //           <View className="w-32 h-32 rounded-full border-4 border-emerald-500/20 bg-zinc-900 items-center justify-center overflow-hidden">
// // //             {user?.profile_image ? (
// // //               <Image
// // //                 source={{ uri: `${API_BASE}${user.profile_image}` }}
// // //                 className="w-full h-full"
// // //               />
// // //             ) : (
// // //               <Text className="text-white text-4xl font-black">
// // //                 {user?.name?.charAt(0)}
// // //               </Text>
// // //             )}
// // //           </View>
// // //           <Text className="text-white text-3xl font-black mt-4 uppercase tracking-tighter">
// // //             {user?.name}
// // //           </Text>
// // //           <Text className="text-emerald-500 font-bold text-[10px] tracking-[2px] uppercase">
// // //             {user?.email}
// // //           </Text>
// // //         </View>

// // //         {/* Info List */}
// // //         <View className="mt-12 space-y-4">
// // //           <ProfileItem
// // //             icon="phone"
// // //             label="Phone"
// // //             value={user?.phone || "Update contact"}
// // //           />
// // //           <ProfileItem
// // //             icon="shield"
// // //             label="Account Status"
// // //             value="Verified Seller"
// // //           />
// // //         </View>

// // //         {/* Dashboard & Activity */}
// // //         <View className="mt-8 space-y-3">
// // //           <MenuButton
// // //             icon="list"
// // //             label="My Listings"
// // //             onPress={() => navigation.navigate("MyListings")}
// // //           />
// // //           {/* <MenuButton
// // //             icon="heart"
// // //             label="Saved Vehicles"
// // //             onPress={() => navigation.navigate("SavedAds")}
// // //           /> */}
// // //         </View>

// // //         {/* Account Settings */}
// // //         <View className="mt-6 space-y-3">
// // //           <MenuButton
// // //             icon="lock"
// // //             label="Change Password"
// // //             onPress={() => navigation.navigate("ChangePassword")}
// // //           />
// // //           {/* <MenuButton
// // //             icon="bell"
// // //             label="Notifications"
// // //             onPress={() => navigation.navigate("NotificationSettings")}
// // //           /> */}
// // //         </View>

// // //         {/* Buttons */}
// // //         <View className="mt-10 space-y-3">
// // //           <MenuButton
// // //             icon="edit-2"
// // //             label="Edit My Profile"
// // //             onPress={() => navigation.navigate("EditProfile")}
// // //           />

// // //           <TouchableOpacity
// // //             onPress={() =>
// // //               Alert.alert("Logout", "Are you sure?", [
// // //                 { text: "Cancel" },
// // //                 { text: "Yes", onPress: () => navigation.replace("Login") },
// // //               ])
// // //             }
// // //             className="bg-red-500/10 p-5 rounded-[25px] flex-row items-center border border-red-500/20"
// // //           >
// // //             <Feather name="log-out" size={20} color="#ef4444" />
// // //             <Text className="text-red-500 font-bold ml-4">Sign Out</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // const MenuButton = ({ icon, label, onPress }: any) => (
// // //   <TouchableOpacity
// // //     onPress={onPress}
// // //     className="bg-zinc-900 p-5 rounded-[25px] flex-row items-center border border-white/5"
// // //   >
// // //     <Feather name={icon} size={20} color="#10b981" />
// // //     <Text className="text-white font-bold ml-4 flex-1">{label}</Text>
// // //     <Feather name="chevron-right" size={20} color="#333" />
// // //   </TouchableOpacity>
// // // );

// // // const ProfileItem = ({ icon, label, value }: any) => (
// // //   <View className="bg-zinc-900/50 p-5 rounded-[25px] flex-row items-center border border-white/5">
// // //     <Feather name={icon} size={20} color="#10b981" />
// // //     <View className="ml-4">
// // //       <Text className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
// // //         {label}
// // //       </Text>
// // //       <Text className="text-white text-md font-bold">{value}</Text>
// // //     </View>
// // //   </View>
// // // );

// // import { Feather } from "@expo/vector-icons";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import { useFocusEffect } from "@react-navigation/native";
// // import axios from "axios";
// // import React, { useCallback, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   Alert,
// //   Image,
// //   RefreshControl,
// //   ScrollView,
// //   Text,
// //   TouchableOpacity,
// //   View,
// // } from "react-native";
// // import { SafeAreaView } from "react-native-safe-area-context";

// // // ඔබේ Backend URL එක නිවැරදිව පරීක්ෂා කරන්න
// // const API_BASE = "http://192.168.43.254:5000";

// // export default function ProfileScreen({ navigation }: any) {
// //   const [user, setUser] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [refreshing, setRefreshing] = useState(false);

// //   /**
// //    * පරිශීලක දත්ත Backend එකෙන් ලබා ගැනීම
// //    */
// //   const loadProfile = async () => {
// //     try {
// //       const savedUserData = await AsyncStorage.getItem("user");
// //       if (!savedUserData) {
// //         return navigation.replace("Login");
// //       }

// //       const parsedUser = JSON.parse(savedUserData);
// //       const userId = parsedUser.id;

// //       // නවතම තොරතුරු Backend එකෙන් ලබා ගනී
// //       const res = await axios.get(`${API_BASE}/api/users/profile/${userId}`);

// //       if (res.data.success) {
// //         setUser(res.data.user);
// //         // අලුත් දත්ත නැවත AsyncStorage එකේ සේව් කරයි
// //         await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
// //       }
// //     } catch (err) {
// //       console.error("Profile Load Error:", err);
// //       // සර්වර් එක වැඩ නැතිනම් කලින් තිබූ දත්ත පෙන්වයි
// //     } finally {
// //       setLoading(false);
// //       setRefreshing(false);
// //     }
// //   };

// //   /**
// //    * පිටුවට පැමිණෙන සෑම අවස්ථාවකම දත්ත Update කරයි
// //    */
// //   useFocusEffect(
// //     useCallback(() => {
// //       loadProfile();
// //     }, []),
// //   );

// //   /**
// //    * Logout Function - මෙය අනිවාර්යයෙන්ම AsyncStorage clear කළ යුතුය
// //    */
// //   const handleLogout = () => {
// //     Alert.alert("Sign Out", "Are you sure you want to log out?", [
// //       { text: "Cancel", style: "cancel" },
// //       {
// //         text: "Yes, Logout",
// //         style: "destructive",
// //         onPress: async () => {
// //           await AsyncStorage.multiRemove(["user", "userToken"]); // දත්ත මකා දමයි
// //           navigation.replace("Login");
// //         },
// //       },
// //     ]);
// //   };

// //   if (loading) {
// //     return (
// //       <View className="flex-1 bg-black justify-center items-center">
// //         <ActivityIndicator size="large" color="#10b981" />
// //         <Text className="text-emerald-500 mt-4 font-bold tracking-widest">
// //           LOADING PROFILE...
// //         </Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <SafeAreaView className="flex-1 bg-black">
// //       <ScrollView
// //         refreshControl={
// //           <RefreshControl
// //             refreshing={refreshing}
// //             onRefresh={() => {
// //               setRefreshing(true);
// //               loadProfile();
// //             }}
// //             tintColor="#10b981"
// //           />
// //         }
// //         className="px-6"
// //       >
// //         {/* Profile Header */}
// //         <View className="items-center mt-10">
// //           <View className="w-32 h-32 rounded-full border-4 border-emerald-500/20 bg-zinc-900 items-center justify-center overflow-hidden shadow-2xl shadow-emerald-500/10">
// //             {user?.profile_image ? (
// //               <Image
// //                 source={{
// //                   uri: user.profile_image.startsWith("http")
// //                     ? user.profile_image
// //                     : `${API_BASE}${user.profile_image}`,
// //                 }}
// //                 className="w-full h-full"
// //               />
// //             ) : (
// //               <View className="bg-emerald-500 w-full h-full items-center justify-center">
// //                 <Text className="text-black text-5xl font-black">
// //                   {user?.name?.charAt(0).toUpperCase()}
// //                 </Text>
// //               </View>
// //             )}
// //           </View>

// //           <Text className="text-white text-3xl font-black mt-5 uppercase tracking-tighter">
// //             {user?.name || "User Name"}
// //           </Text>
// //           <View className="bg-emerald-500/10 px-4 py-1 rounded-full mt-2 border border-emerald-500/20">
// //             <Text className="text-emerald-500 font-bold text-[10px] tracking-[2px] uppercase">
// //               {user?.email}
// //             </Text>
// //           </View>
// //         </View>

// //         {/* Info Cards */}
// //         <View className="mt-12 space-y-4">
// //           <ProfileItem
// //             icon="phone"
// //             label="Verified Contact"
// //             value={user?.phone || "Update phone number"}
// //           />
// //           <ProfileItem
// //             icon="shield"
// //             label="Membership"
// //             value="Verified Merchant"
// //           />
// //         </View>

// //         {/* Dashboard Actions */}
// //         <View className="mt-10">
// //           <Text className="text-zinc-600 text-[10px] font-black uppercase tracking-[3px] mb-4 ml-2">
// //             Inventory Management
// //           </Text>
// //           <View className="space-y-3">
// //             <MenuButton
// //               icon="list"
// //               label="My Listings"
// //               onPress={() => navigation.navigate("MyListings")}
// //             />
// //             <MenuButton
// //               icon="edit-2"
// //               label="Edit Profile Details"
// //               onPress={() => navigation.navigate("EditProfile")}
// //             />
// //           </View>
// //         </View>

// //         {/* Security & Settings */}
// //         <View className="mt-8">
// //           <Text className="text-zinc-600 text-[10px] font-black uppercase tracking-[3px] mb-4 ml-2">
// //             Account Security
// //           </Text>
// //           <View className="space-y-3">
// //             <MenuButton
// //               icon="lock"
// //               label="Change Password"
// //               onPress={() => navigation.navigate("ChangePassword")}
// //             />
// //           </View>
// //         </View>

// //         {/* Logout Button */}
// //         <TouchableOpacity
// //           onPress={handleLogout}
// //           activeOpacity={0.7}
// //           className="mt-12 mb-10 bg-red-500/10 p-5 rounded-[25px] flex-row items-center border border-red-500/20"
// //         >
// //           <View className="bg-red-500 p-2 rounded-xl">
// //             <Feather name="log-out" size={18} color="white" />
// //           </View>
// //           <Text className="text-red-500 font-black ml-4 uppercase tracking-widest">
// //             Sign Out Account
// //           </Text>
// //         </TouchableOpacity>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // /**
// //  * Menu Button Component
// //  */
// // const MenuButton = ({ icon, label, onPress }: any) => (
// //   <TouchableOpacity
// //     onPress={onPress}
// //     activeOpacity={0.8}
// //     className="bg-zinc-900/80 p-5 rounded-[25px] flex-row items-center border border-white/5"
// //   >
// //     <View className="bg-emerald-500/10 p-2 rounded-xl">
// //       <Feather name={icon} size={18} color="#10b981" />
// //     </View>
// //     <Text className="text-white font-bold ml-4 flex-1">{label}</Text>
// //     <Feather name="chevron-right" size={20} color="#333" />
// //   </TouchableOpacity>
// // );

// // /**
// //  * Profile Info Item Component
// //  */
// // const ProfileItem = ({ icon, label, value }: any) => (
// //   <View className="bg-zinc-900/40 p-5 rounded-[25px] flex-row items-center border border-white/5">
// //     <View className="bg-zinc-800 p-3 rounded-2xl">
// //       <Feather name={icon} size={18} color="#10b981" />
// //     </View>
// //     <View className="ml-4">
// //       <Text className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">
// //         {label}
// //       </Text>
// //       <Text className="text-white text-md font-bold mt-0.5">{value}</Text>
// //     </View>
// //   </View>
// // );

// import { Feather } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useFocusEffect } from "@react-navigation/native";
// import axios from "axios";
// import React, { useCallback, useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Image,
//   RefreshControl,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// // ඔබේ Backend URL එක
// const API_BASE = "http://192.168.43.254:5000";

// export default function ProfileScreen({ navigation }: any) {
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   /**
//    * පරිශීලක දත්ත Backend එකෙන් ලබා ගැනීම
//    */
//   const loadProfile = async () => {
//     try {
//       // 1. AsyncStorage එකෙන් User Data සහ Token එක ලබාගන්න
//       const savedUserData = await AsyncStorage.getItem("user");
//       const token = await AsyncStorage.getItem("userToken");

//       // Token එක හෝ User දත්ත නැතිනම් කෙලින්ම Login එකට යවන්න
//       if (!savedUserData || !token) {
//         return navigation.replace("Login");
//       }

//       const parsedUser = JSON.parse(savedUserData);
//       const userId = parsedUser.id;

//       // 2. Axios Request එක Header එක සමඟ යවන්න (Unauthorized Error එක විසඳීමට)
//       const res = await axios.get(`${API_BASE}/api/users/profile/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // අනිවාර්යයෙන්ම තිබිය යුතුයි
//         },
//       });

//       if (res.data.success) {
//         setUser(res.data.user);
//         // අලුත් දත්ත නැවත AsyncStorage එකේ සේව් කරයි
//         await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
//       }
//     } catch (err: any) {
//       console.error("Profile Load Error:", err.response?.data || err.message);
//       // සර්වර් Error එකක් ආවොත් Login එකට යැවීම සුදුසුයි (Token expired වෙන්න පුළුවන් නිසා)
//       if (err.response?.status === 401) {
//         navigation.replace("Login");
//       }
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useFocusEffect(
//     useCallback(() => {
//       loadProfile();
//     }, []),
//   );

//   /**
//    * Logout Function
//    */
//   const handleLogout = () => {
//     Alert.alert("Sign Out", "Are you sure you want to log out?", [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "Yes, Logout",
//         style: "destructive",
//         onPress: async () => {
//           await AsyncStorage.multiRemove(["user", "userToken"]);
//           navigation.replace("Login");
//         },
//       },
//     ]);
//   };

//   if (loading) {
//     return (
//       <View className="flex-1 bg-black justify-center items-center">
//         <ActivityIndicator size="large" color="#10b981" />
//         <Text className="text-emerald-500 mt-4 font-bold tracking-widest">
//           LOADING PROFILE...
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView className="flex-1 bg-black">
//       <ScrollView
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={() => {
//               setRefreshing(true);
//               loadProfile();
//             }}
//             tintColor="#10b981"
//           />
//         }
//         className="px-6"
//       >
//         {/* Profile Header */}
//         <View className="items-center mt-10">
//           <View className="w-32 h-32 rounded-full border-4 border-emerald-500/20 bg-zinc-900 items-center justify-center overflow-hidden shadow-2xl shadow-emerald-500/10">
//             {user?.profile_image ? (
//               <Image
//                 source={{
//                   uri: user.profile_image.startsWith("http")
//                     ? user.profile_image
//                     : `${API_BASE}${user.profile_image}`,
//                 }}
//                 className="w-full h-full"
//               />
//             ) : (
//               <View className="bg-emerald-500 w-full h-full items-center justify-center">
//                 <Text className="text-black text-5xl font-black">
//                   {user?.name?.charAt(0).toUpperCase()}
//                 </Text>
//               </View>
//             )}
//           </View>

//           <Text className="text-white text-3xl font-black mt-5 uppercase tracking-tighter">
//             {user?.name || "User Name"}
//           </Text>
//           <View className="bg-emerald-500/10 px-4 py-1 rounded-full mt-2 border border-emerald-500/20">
//             <Text className="text-emerald-500 font-bold text-[10px] tracking-[2px] uppercase">
//               {user?.email}
//             </Text>
//           </View>
//         </View>

//         {/* Info Cards */}
//         <View className="mt-12 space-y-4">
//           <ProfileItem
//             icon="phone"
//             label="Verified Contact"
//             value={user?.phone || "Update phone number"}
//           />
//           <ProfileItem
//             icon="shield"
//             label="Membership"
//             value="Verified Merchant"
//           />
//         </View>

//         {/* Dashboard Actions */}
//         <View className="mt-10">
//           <Text className="text-zinc-600 text-[10px] font-black uppercase tracking-[3px] mb-4 ml-2">
//             Inventory Management
//           </Text>
//           <View className="space-y-3">
//             <MenuButton
//               icon="list"
//               label="My Listings"
//               onPress={() => navigation.navigate("MyListings")}
//             />
//             <MenuButton
//               icon="edit-2"
//               label="Edit Profile Details"
//               onPress={() => navigation.navigate("EditProfile")}
//             />
//           </View>
//         </View>

//         {/* Security & Settings */}
//         <View className="mt-8">
//           <Text className="text-zinc-600 text-[10px] font-black uppercase tracking-[3px] mb-4 ml-2">
//             Account Security
//           </Text>
//           <View className="space-y-3">
//             <MenuButton
//               icon="lock"
//               label="Change Password"
//               onPress={() => navigation.navigate("ChangePassword")}
//             />
//           </View>
//         </View>

//         {/* Logout Button */}
//         <TouchableOpacity
//           onPress={handleLogout}
//           activeOpacity={0.7}
//           className="mt-12 mb-10 bg-red-500/10 p-5 rounded-[25px] flex-row items-center border border-red-500/20"
//         >
//           <View className="bg-red-500 p-2 rounded-xl">
//             <Feather name="log-out" size={18} color="white" />
//           </View>
//           <Text className="text-red-500 font-black ml-4 uppercase tracking-widest">
//             Sign Out Account
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const MenuButton = ({ icon, label, onPress }: any) => (
//   <TouchableOpacity
//     onPress={onPress}
//     activeOpacity={0.8}
//     className="bg-zinc-900/80 p-5 rounded-[25px] flex-row items-center border border-white/5 mb-2"
//   >
//     <View className="bg-emerald-500/10 p-2 rounded-xl">
//       <Feather name={icon} size={18} color="#10b981" />
//     </View>
//     <Text className="text-white font-bold ml-4 flex-1">{label}</Text>
//     <Feather name="chevron-right" size={20} color="#333" />
//   </TouchableOpacity>
// );

// const ProfileItem = ({ icon, label, value }: any) => (
//   <View className="bg-zinc-900/40 p-5 rounded-[25px] flex-row items-center border border-white/5 mb-2">
//     <View className="bg-zinc-800 p-3 rounded-2xl">
//       <Feather name={icon} size={18} color="#10b981" />
//     </View>
//     <View className="ml-4">
//       <Text className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">
//         {label}
//       </Text>
//       <Text className="text-white text-md font-bold mt-0.5">{value}</Text>
//     </View>
//   </View>
// );

import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Backend URL
const API_BASE = "http://192.168.43.254:5000";

export default function ProfileScreen({ navigation }: any) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  /**
   * Profile Data Loading Logic
   */
  const loadProfile = async () => {
    try {
      const savedUserData = await AsyncStorage.getItem("user");
      // Login එකේදී ඔබ Save කරන්නේ "token" ලෙස නම් එය මෙහිදී නිවැරදිව ලබාගන්න
      const token =
        (await AsyncStorage.getItem("token")) ||
        (await AsyncStorage.getItem("userToken"));

      if (!savedUserData || !token) {
        handleNavigationToLogin();
        return;
      }

      const parsedUser = JSON.parse(savedUserData);
      const userId = parsedUser.id || parsedUser._id;

      const res = await axios.get(`${API_BASE}/api/users/profile/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setUser(res.data.user);
        await AsyncStorage.setItem("user", JSON.stringify(res.data.user));
      }
    } catch (err: any) {
      console.error("Profile Load Error:", err.response?.data || err.message);
      if (err.response?.status === 401) {
        handleNavigationToLogin();
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadProfile();
    }, []),
  );

  /**
   * Navigation Helper (Web සහ Mobile දෙකටම ගැලපෙන ලෙස)
   */
  const handleNavigationToLogin = () => {
    if (Platform.OS === "web") {
      window.location.href = "/login"; // Web එකේදී Hard Redirect එකක් කිරීම වඩාත් සුදුසුයි
    } else {
      navigation.replace("Login");
    }
  };

  /**
   * Logout Function
   */
  const handleLogout = () => {
    const logoutLogic = async () => {
      try {
        // 1. සියලුම Auth දත්ත ඉවත් කරන්න
        const keys = ["user", "token", "userToken"];
        await AsyncStorage.multiRemove(keys);

        // 2. Web සඳහා අමතරව LocalStorage clear කිරීම
        if (Platform.OS === "web") {
          localStorage.clear();
          window.location.href = "/login"; // Web Navigation එක Reset කිරීමට
        } else {
          // 3. Mobile Navigation එක මුලටම Reset කිරීම
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        }
      } catch (error) {
        console.error("Logout Error:", error);
      }
    };

    if (Platform.OS === "web") {
      // Web වලදී සාමාන්‍ය confirm box එක භාවිතා කිරීම වඩා හොඳයි
      if (window.confirm("Are you sure you want to log out?")) {
        logoutLogic();
      }
    } else {
      Alert.alert("Sign Out", "Are you sure you want to log out?", [
        { text: "Cancel", style: "cancel" },
        { text: "Yes, Logout", style: "destructive", onPress: logoutLogic },
      ]);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#10b981" />
        <Text
          style={{
            color: "#10b981",
            marginTop: 16,
            fontWeight: "bold",
            letterSpacing: 2,
          }}
        >
          LOADING PROFILE...
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              loadProfile();
            }}
            tintColor="#10b981"
          />
        }
        style={{ paddingHorizontal: 24 }}
      >
        {/* Profile Header */}
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <View
            style={{
              width: 128,
              height: 128,
              borderRadius: 64,
              borderWidth: 4,
              borderColor: "rgba(16, 185, 129, 0.2)",
              backgroundColor: "#18181b",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {user?.profile_image ? (
              <Image
                source={{
                  uri: user.profile_image.startsWith("http")
                    ? user.profile_image
                    : `${API_BASE}${user.profile_image}`,
                }}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <View
                style={{
                  backgroundColor: "#10b981",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "black", fontSize: 48, fontWeight: "900" }}
                >
                  {user?.name?.charAt(0).toUpperCase()}
                </Text>
              </View>
            )}
          </View>

          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "900",
              marginTop: 20,
              textTransform: "uppercase",
            }}
          >
            {user?.name || "User Name"}
          </Text>
          <View
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              px: 16,
              py: 4,
              borderRadius: 20,
              marginTop: 8,
              borderWidth: 1,
              borderColor: "rgba(16, 185, 129, 0.2)",
              paddingHorizontal: 12,
            }}
          >
            <Text
              style={{
                color: "#10b981",
                fontWeight: "bold",
                fontSize: 10,
                letterSpacing: 1,
              }}
            >
              {user?.email}
            </Text>
          </View>
        </View>

        {/* Info Cards */}
        <View style={{ marginTop: 48 }}>
          <ProfileItem
            icon="phone"
            label="Verified Contact"
            value={user?.phone || "Update phone number"}
          />
          <ProfileItem
            icon="shield"
            label="Membership"
            value="Verified Merchant"
          />
        </View>

        {/* Inventory Section */}
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              color: "#52525b",
              fontSize: 10,
              fontWeight: "900",
              letterSpacing: 2,
              marginBottom: 16,
              marginLeft: 8,
            }}
          >
            INVENTORY MANAGEMENT
          </Text>
          <MenuButton
            icon="list"
            label="My Listings"
            onPress={() => navigation.navigate("MyListings")}
          />
          <MenuButton
            icon="edit-2"
            label="Edit Profile Details"
            onPress={() => navigation.navigate("EditProfile")}
          />
        </View>

        {/* Security Section */}
        <View style={{ marginTop: 32 }}>
          <Text
            style={{
              color: "#52525b",
              fontSize: 10,
              fontWeight: "900",
              letterSpacing: 2,
              marginBottom: 16,
              marginLeft: 8,
            }}
          >
            ACCOUNT SECURITY
          </Text>
          <MenuButton
            icon="lock"
            label="Change Password"
            onPress={() => navigation.navigate("ChangePassword")}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={handleLogout}
          activeOpacity={0.7}
          style={{
            marginTop: 48,
            marginBottom: 40,
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            padding: 20,
            borderRadius: 25,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "rgba(239, 68, 68, 0.2)",
          }}
        >
          <View
            style={{ backgroundColor: "#ef4444", padding: 8, borderRadius: 12 }}
          >
            <Feather name="log-out" size={18} color="white" />
          </View>
          <Text
            style={{
              color: "#ef4444",
              fontWeight: "900",
              marginLeft: 16,
              letterSpacing: 1,
            }}
          >
            SIGN OUT ACCOUNT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Sub Components
const MenuButton = ({ icon, label, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={{
      backgroundColor: "rgba(24, 24, 27, 0.8)",
      padding: 20,
      borderRadius: 25,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.05)",
      marginBottom: 12,
    }}
  >
    <View
      style={{
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        padding: 8,
        borderRadius: 12,
      }}
    >
      <Feather name={icon} size={18} color="#10b981" />
    </View>
    <Text
      style={{ color: "white", fontWeight: "bold", marginLeft: 16, flex: 1 }}
    >
      {label}
    </Text>
    <Feather name="chevron-right" size={20} color="#3f3f46" />
  </TouchableOpacity>
);

const ProfileItem = ({ icon, label, value }: any) => (
  <View
    style={{
      backgroundColor: "rgba(24, 24, 27, 0.4)",
      padding: 20,
      borderRadius: 25,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.05)",
      marginBottom: 12,
    }}
  >
    <View style={{ backgroundColor: "#27272a", padding: 12, borderRadius: 16 }}>
      <Feather name={icon} size={18} color="#10b981" />
    </View>
    <View style={{ marginLeft: 16 }}>
      <Text
        style={{
          color: "#71717a",
          fontSize: 10,
          fontWeight: "900",
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 2,
        }}
      >
        {value}
      </Text>
    </View>
  </View>
);
