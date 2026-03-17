// // // // // import React, { useState, useEffect } from "react";
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   ScrollView,
// // // // //   Image,
// // // // //   TouchableOpacity,
// // // // //   FlatList,
// // // // //   Dimensions,
// // // // // } from "react-native";
// // // // // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // // // // import { LinearGradient } from "expo-linear-gradient";

// // // // // const { width } = Dimensions.get("window");

// // // // // // වාහන වර්ග (Categories)
// // // // // const CATEGORIES = [
// // // // //   { name: "Car", icon: "car-sedan", label: "Luxury" },
// // // // //   { name: "SUV", icon: "car-suv", label: "Premium" },
// // // // //   { name: "Jeep", icon: "car-offroad", label: "Off-Road" },
// // // // //   { name: "Electric", icon: "ev-station", label: "Eco" },
// // // // // ];

// // // // // export default function HomeScreen({ navigation }: any) {
// // // // //   // Sample Data (ඔයාගේ Backend එකෙන් එන විදියට පසුව වෙනස් කරන්න)
// // // // //   const featuredCars = [
// // // // //     {
// // // // //       id: "1",
// // // // //       name: "Toyota Camry 2022",
// // // // //       price: "24,500,000",
// // // // //       image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=500",
// // // // //       likes: 12,
// // // // //     },
// // // // //     {
// // // // //       id: "2",
// // // // //       name: "BMW i8 Electric",
// // // // //       price: "65,000,000",
// // // // //       image: "https://images.unsplash.com/photo-1554223090-7e482851df45?q=80&w=500",
// // // // //       likes: 45,
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <ScrollView className="flex-1 bg-black" showsVerticalScrollIndicator={false}>

// // // // //       {/* --- Hero Section --- */}
// // // // //       <View className="relative h-[400px] w-full justify-center items-center">
// // // // //         <Image
// // // // //           source={{ uri: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800" }}
// // // // //           className="absolute inset-0 w-full h-full opacity-60"
// // // // //           resizeMode="cover"
// // // // //         />
// // // // //         <LinearGradient
// // // // //           colors={["transparent", "rgba(0,0,0,0.8)", "black"]}
// // // // //           className="absolute inset-0"
// // // // //         />
// // // // //         <View className="z-10 items-center px-6">
// // // // //           <Text className="text-white text-5xl font-black text-center uppercase tracking-tighter leading-none">
// // // // //             LUXURY{"\n"}<Text className="text-teal-500">REDEFINED</Text>
// // // // //           </Text>
// // // // //           <Text className="text-gray-400 text-[10px] uppercase tracking-[4px] mt-4 font-bold text-center">
// // // // //             Sri Lanka's Premium Marketplace
// // // // //           </Text>
// // // // //           <TouchableOpacity
// // // // //             className="bg-teal-500 px-8 py-4 rounded-2xl mt-8 shadow-lg shadow-teal-500/50"
// // // // //             onPress={() => navigation.navigate("Search")}
// // // // //           >
// // // // //             <Text className="text-black font-black uppercase text-xs">Explore Inventory</Text>
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       </View>

// // // // //       {/* --- Collections (Categories) --- */}
// // // // //       <View className="px-4 mt-[-20px]">
// // // // //         <Text className="text-white font-black uppercase text-sm tracking-widest mb-4 italic">Collections</Text>
// // // // //         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
// // // // //           {CATEGORIES.map((cat, i) => (
// // // // //             <TouchableOpacity
// // // // //               key={i}
// // // // //               className="bg-zinc-900 w-24 h-28 rounded-[24px] items-center justify-center mr-3 border border-white/5"
// // // // //             >
// // // // //               <MaterialCommunityIcons name={cat.icon as any} size={32} color="#009688" />
// // // // //               <Text className="text-white text-[10px] font-black uppercase mt-2">{cat.name}</Text>
// // // // //             </TouchableOpacity>
// // // // //           ))}
// // // // //         </ScrollView>
// // // // //       </View>

// // // // //       {/* --- Featured Assets --- */}
// // // // //       <View className="px-4 mt-10 pb-10">
// // // // //         <View className="flex-row justify-between items-end mb-6">
// // // // //           <View>
// // // // //             <Text className="text-teal-500 text-[10px] font-black uppercase tracking-widest">Editor's Choice</Text>
// // // // //             <Text className="text-white text-2xl font-black uppercase italic">Featured Assets</Text>
// // // // //           </View>
// // // // //           <TouchableOpacity onPress={() => navigation.navigate("Search")}>
// // // // //             <Text className="text-teal-500 text-xs font-bold border-b border-teal-500/30 pb-1">View All</Text>
// // // // //           </TouchableOpacity>
// // // // //         </View>

// // // // //         {/* Car Cards */}
// // // // //         {featuredCars.map((car) => (
// // // // //           <TouchableOpacity
// // // // //             key={car.id}
// // // // //             activeOpacity={0.9}
// // // // //             className="bg-zinc-900 rounded-[32px] overflow-hidden mb-6 border border-white/5"
// // // // //           >
// // // // //             <View className="relative">
// // // // //               <Image source={{ uri: car.image }} className="w-full h-52" />
// // // // //               <View className="absolute top-4 right-4 bg-black/60 px-3 py-1.5 rounded-full flex-row items-center border border-white/10">
// // // // //                 <Ionicons name="heart" size={12} color="#009688" />
// // // // //                 <Text className="text-white text-[10px] font-black ml-1">{car.likes}</Text>
// // // // //               </View>
// // // // //             </View>
// // // // //             <View className="p-5">
// // // // //               <Text className="text-white text-lg font-black uppercase truncate">{car.name}</Text>
// // // // //               <View className="flex-row justify-between items-center mt-2">
// // // // //                 <Text className="text-teal-500 text-xl font-black">Rs. {car.price}</Text>
// // // // //                 <TouchableOpacity className="bg-white/5 px-4 py-2 rounded-xl border border-white/5">
// // // // //                   <Text className="text-white text-[10px] font-black uppercase tracking-widest">Details</Text>
// // // // //                 </TouchableOpacity>
// // // // //               </View>
// // // // //             </View>
// // // // //           </TouchableOpacity>
// // // // //         ))}
// // // // //       </View>

// // // // //     </ScrollView>
// // // // //   );
// // // // // }

// // // // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // // // import AsyncStorage from "@react-native-async-storage/async-storage";
// // // // import axios from "axios"; // Axios භාවිතා කිරීම පහසුයි
// // // // import { LinearGradient } from "expo-linear-gradient";
// // // // import React, { useEffect, useState } from "react";
// // // // import {
// // // //   ActivityIndicator,
// // // //   Alert,
// // // //   Dimensions,
// // // //   Image,
// // // //   ScrollView,
// // // //   Text,
// // // //   TouchableOpacity,
// // // //   View,
// // // // } from "react-native";

// // // // const { width } = Dimensions.get("window");

// // // // // ඔබේ Backend URL එක මෙතනට දාන්න (Emulator නම් 10.0.2.2 භාවිතා කරන්න)
// // // // const API_URL = "http://192.168.43.254:5000/api";

// // // // // const CATEGORIES = [
// // // // //   { name: "Car", icon: "car-sedan", label: "Luxury" },
// // // // //   { name: "SUV", icon: "car-suv", label: "Premium" },
// // // // //   { name: "Jeep", icon: "car-offroad", label: "Off-Road" },
// // // // //   { name: "Electric", icon: "ev-station", label: "Eco" },
// // // // // ];

// // // // const CATEGORIES = [
// // // //   { name: "Car", icon: "car", label: "Luxury" },
// // // //   { name: "SUV", icon: "car-estate", label: "Premium" }, // "car-estate" හෝ "car-side"
// // // //   { name: "Jeep", icon: "jeepney", label: "Off-Road" }, // "jeepney" හෝ "car-offroad" (සමහර version වල)
// // // //   { name: "Electric", icon: "ev-station", label: "Eco" },
// // // // ];

// // // // export default function HomeScreen({ navigation }: any) {
// // // //   const [listings, setListings] = useState<any[]>([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   // 1. Backend එකෙන් Listings Fetch කිරීම
// // // //   const fetchListings = async () => {
// // // //     try {
// // // //       const token = await AsyncStorage.getItem("userToken"); // Login වෙනකොට save කරගත් token එක
// // // //       const response = await axios.get(`${API_URL}/listings`, {
// // // //         headers: { Authorization: `Bearer ${token}` },
// // // //       });
// // // //       setListings(response.data);
// // // //     } catch (error) {
// // // //       console.error("Fetch Error:", error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchListings();
// // // //   }, []);

// // // //   // 2. Like/Unlike Toggle කිරීමේ Function එක
// // // //   const handleLike = async (id: number) => {
// // // //     try {
// // // //       const token = await AsyncStorage.getItem("userToken");
// // // //       if (!token) {
// // // //         Alert.alert("Please Login", "You need to login to like listings.");
// // // //         return;
// // // //       }

// // // //       const response = await axios.post(
// // // //         `${API_URL}/listings/like/${id}`,
// // // //         {},
// // // //         {
// // // //           headers: { Authorization: `Bearer ${token}` },
// // // //         },
// // // //       );

// // // //       if (response.data.success) {
// // // //         // UI එකේ පමණක් අදාළ item එක update කරන්න (Optimistic UI update)
// // // //         setListings((prev) =>
// // // //           prev.map((item) => {
// // // //             if (item.id === id) {
// // // //               return {
// // // //                 ...item,
// // // //                 is_liked_by_user: !item.is_liked_by_user,
// // // //                 likes_count: response.data.likes_count,
// // // //               };
// // // //             }
// // // //             return item;
// // // //           }),
// // // //         );
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Like Error:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <ScrollView
// // // //       className="flex-1 bg-black"
// // // //       showsVerticalScrollIndicator={false}
// // // //     >
// // // //       {/* --- Hero Section (පැරණි විදියටමයි) --- */}
// // // //       <View className="relative h-[400px] w-full justify-center items-center">
// // // //         <Image
// // // //           source={{
// // // //             uri: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
// // // //           }}
// // // //           className="absolute inset-0 w-full h-full opacity-60"
// // // //           resizeMode="cover"
// // // //         />
// // // //         <LinearGradient
// // // //           colors={["transparent", "rgba(0,0,0,0.8)", "black"]}
// // // //           className="absolute inset-0"
// // // //         />
// // // //         <View className="z-10 items-center px-6">
// // // //           <Text className="text-white text-5xl font-black text-center uppercase tracking-tighter leading-none">
// // // //             LUXURY{"\n"}
// // // //             <Text className="text-teal-500">REDEFINED</Text>
// // // //           </Text>
// // // //           <TouchableOpacity className="bg-teal-500 px-8 py-4 rounded-2xl mt-8 shadow-lg shadow-teal-500/50">
// // // //             <Text className="text-black font-black uppercase text-xs">
// // // //               Explore Inventory
// // // //             </Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </View>

// // // //       {/* --- Collections --- */}
// // // //       <View className="px-4 mt-[-20px]">
// // // //         <ScrollView
// // // //           horizontal
// // // //           showsHorizontalScrollIndicator={false}
// // // //           className="flex-row"
// // // //         >
// // // //           {CATEGORIES.map((cat, i) => (
// // // //             <TouchableOpacity
// // // //               key={i}
// // // //               className="bg-zinc-900 w-24 h-28 rounded-[24px] items-center justify-center mr-3 border border-white/5"
// // // //             >
// // // //               <MaterialCommunityIcons
// // // //                 name={cat.icon as any}
// // // //                 size={32}
// // // //                 color="#009688"
// // // //               />
// // // //               <Text className="text-white text-[10px] font-black uppercase mt-2">
// // // //                 {cat.name}
// // // //               </Text>
// // // //             </TouchableOpacity>
// // // //           ))}
// // // //         </ScrollView>
// // // //       </View>

// // // //       {/* --- Dynamic Listings --- */}
// // // //       <View className="px-4 mt-10 pb-10">
// // // //         <Text className="text-white text-2xl font-black uppercase italic mb-6">
// // // //           Featured Assets
// // // //         </Text>

// // // //         {loading ? (
// // // //           <ActivityIndicator color="#009688" size="large" />
// // // //         ) : (
// // // //           listings.map((car) => (
// // // //             <TouchableOpacity
// // // //               key={car.id}
// // // //               activeOpacity={0.9}
// // // //               onPress={() => navigation.navigate("Details", { id: car.id })}
// // // //               className="bg-zinc-900 rounded-[32px] overflow-hidden mb-6 border border-white/5"
// // // //             >
// // // //               <View className="relative">
// // // //                 {/* මුල්ම පින්තූරය පෙන්වීමට */}
// // // //                 <Image
// // // //                   source={{
// // // //                     uri:
// // // //                       car.images && car.images.length > 0
// // // //                         ? car.images[0]
// // // //                         : "https://via.placeholder.com/400",
// // // //                   }}
// // // //                   className="w-full h-52"
// // // //                 />

// // // //                 {/* Like Button */}
// // // //                 <TouchableOpacity
// // // //                   onPress={() => handleLike(car.id)}
// // // //                   className="absolute top-4 right-4 bg-black/60 px-3 py-1.5 rounded-full flex-row items-center border border-white/10"
// // // //                 >
// // // //                   <Ionicons
// // // //                     name={car.is_liked_by_user ? "heart" : "heart-outline"}
// // // //                     size={16}
// // // //                     color={car.is_liked_by_user ? "#009688" : "white"}
// // // //                   />
// // // //                   <Text className="text-white text-[10px] font-black ml-1">
// // // //                     {car.likes_count}
// // // //                   </Text>
// // // //                 </TouchableOpacity>
// // // //               </View>

// // // //               <View className="p-5">
// // // //                 <Text className="text-white text-lg font-black uppercase">
// // // //                   {car.title || car.name}
// // // //                 </Text>
// // // //                 <View className="flex-row justify-between items-center mt-2">
// // // //                   <Text className="text-teal-500 text-xl font-black">
// // // //                     Rs. {Number(car.price).toLocaleString()}
// // // //                   </Text>
// // // //                   <View className="bg-white/5 px-4 py-2 rounded-xl border border-white/5">
// // // //                     <Text className="text-white text-[10px] font-black uppercase">
// // // //                       Details
// // // //                     </Text>
// // // //                   </View>
// // // //                 </View>
// // // //               </View>
// // // //             </TouchableOpacity>
// // // //           ))
// // // //         )}
// // // //       </View>
// // // //     </ScrollView>
// // // //   );
// // // // }

// // // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // // import AsyncStorage from "@react-native-async-storage/async-storage";
// // // import axios from "axios";
// // // import { LinearGradient } from "expo-linear-gradient";
// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   ActivityIndicator,
// // //   Alert,
// // //   Dimensions,
// // //   Image,
// // //   ScrollView,
// // //   Text,
// // //   TouchableOpacity,
// // //   View,
// // //   RefreshControl
// // // } from "react-native";

// // // const BASE_URL = "http://192.168.43.254:5000";
// // // const API_URL = `${BASE_URL}/api`;

// // // const CATEGORIES = [
// // //   { name: "Car", icon: "car" },
// // //   { name: "SUV", icon: "car-estate" },
// // //   { name: "Jeep", icon: "jeepney" },
// // //   { name: "Electric", icon: "ev-station" },
// // // ];

// // // export default function HomeScreen({ navigation }: any) {
// // //   const [listings, setListings] = useState<any[]>([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [refreshing, setRefreshing] = useState(false);

// // //   const fetchListings = async () => {
// // //     try {
// // //       const token = await AsyncStorage.getItem("userToken");
// // //       const response = await axios.get(`${API_URL}/listings`, {
// // //         headers: { Authorization: token ? `Bearer ${token}` : "" },
// // //       });
// // //       setListings(response.data);
// // //     } catch (error) {
// // //       console.error("Fetch Error:", error);
// // //     } finally {
// // //       setLoading(false);
// // //       setRefreshing(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchListings();
// // //   }, []);

// // //   const handleLike = async (id: number) => {
// // //     const token = await AsyncStorage.getItem("userToken");

// // //     if (!token) {
// // //       Alert.alert("Login Required", "Please login to like this ad.");
// // //       return;
// // //     }

// // //     // --- Optimistic UI Update (වහාම UI එක වෙනස් කිරීම) ---
// // //     const previousListings = [...listings];
// // //     setListings(prev => prev.map(item => {
// // //       if (item.id === id) {
// // //         const isLiked = item.is_liked_by_user;
// // //         return {
// // //           ...item,
// // //           is_liked_by_user: !isLiked,
// // //           likes_count: isLiked ? (item.likes_count || 1) - 1 : (item.likes_count || 0) + 1
// // //         };
// // //       }
// // //       return item;
// // //     }));

// // //     try {
// // //       const response = await axios.post(
// // //         `${API_URL}/listings/like/${id}`,
// // //         {},
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       );

// // //       if (!response.data.success) {
// // //         // සාර්ථක නැත්නම් පරණ දත්ත නැවත ලබා ගනී
// // //         setListings(previousListings);
// // //       }
// // //     } catch (error: any) {
// // //       // 403 Error එකක් ආවොත් (Token Issue)
// // //       if (error.response?.status === 403 || error.response?.status === 401) {
// // //         Alert.alert("Session Expired", "ඔබේ සෙෂන් එක අවලංගුයි. කරුණාකර නැවත ලොග් වන්න.");
// // //       }
// // //       setListings(previousListings);
// // //       console.error("Like Error Details:", error.response?.data);
// // //     }
// // //   };

// // //   const getImageUrl = (imagePath: any) => {
// // //     if (!imagePath) return "https://via.placeholder.com/400";
// // //     if (typeof imagePath === "string" && imagePath.startsWith("http")) return imagePath;
// // //     return `${BASE_URL}${imagePath}`;
// // //   };

// // //   return (
// // //     <ScrollView
// // //       className="flex-1 bg-black"
// // //       showsVerticalScrollIndicator={false}
// // //       refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchListings} tintColor="#009688" />}
// // //     >
// // //       {/* Hero Section */}
// // //       <View className="relative h-[400px] w-full justify-center items-center">
// // //         <Image
// // //           source={{ uri: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800" }}
// // //           className="absolute inset-0 w-full h-full opacity-60"
// // //           resizeMode="cover"
// // //         />
// // //         <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)", "black"]} className="absolute inset-0" />
// // //         <View className="z-10 items-center px-6">
// // //           <Text className="text-white text-5xl font-black text-center uppercase tracking-tighter leading-none">
// // //             LUXURY{"\n"}<Text className="text-teal-500">REDEFINED</Text>
// // //           </Text>
// // //         </View>
// // //       </View>

// // //       {/* Categories */}
// // //       <View className="px-4 mt-[-20px]">
// // //         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
// // //           {CATEGORIES.map((cat, i) => (
// // //             <TouchableOpacity key={i} className="bg-zinc-900 w-24 h-28 rounded-[24px] items-center justify-center mr-3 border border-white/5">
// // //               <MaterialCommunityIcons name={cat.icon as any} size={32} color="#009688" />
// // //               <Text className="text-white text-[10px] font-black uppercase mt-2">{cat.name}</Text>
// // //             </TouchableOpacity>
// // //           ))}
// // //         </ScrollView>
// // //       </View>

// // //       {/* Listings */}
// // //       <View className="px-4 mt-10 pb-10">
// // //         <Text className="text-white text-2xl font-black uppercase italic mb-6">Featured Assets</Text>

// // //         {loading ? (
// // //           <ActivityIndicator color="#009688" size="large" />
// // //         ) : (
// // //           listings.map((car) => (
// // //             <TouchableOpacity
// // //               key={car.id}
// // //               activeOpacity={0.9}
// // //               onPress={() => navigation.navigate("Details", { id: car.id })}
// // //               className="bg-zinc-900 rounded-[32px] overflow-hidden mb-6 border border-white/5"
// // //             >
// // //               <View className="relative">
// // //                 <Image
// // //                   source={{
// // //                     uri: car.images && car.images.length > 0
// // //                       ? getImageUrl(Array.isArray(car.images) ? car.images[0] : JSON.parse(car.images)[0])
// // //                       : "https://via.placeholder.com/400"
// // //                   }}
// // //                   className="w-full h-52"
// // //                   resizeMode="cover"
// // //                 />

// // //                 <TouchableOpacity
// // //                   onPress={() => handleLike(car.id)}
// // //                   className="absolute top-4 right-4 bg-black/60 px-3 py-1.5 rounded-full flex-row items-center border border-white/10"
// // //                 >
// // //                   <Ionicons
// // //                     name={car.is_liked_by_user ? "heart" : "heart-outline"}
// // //                     size={16}
// // //                     color={car.is_liked_by_user ? "#009688" : "white"}
// // //                   />
// // //                   <Text className="text-white text-[10px] font-black ml-1">
// // //                     {car.likes_count || 0}
// // //                   </Text>
// // //                 </TouchableOpacity>
// // //               </View>

// // //               <View className="p-5">
// // //                 <Text className="text-white text-lg font-black uppercase">{car.name}</Text>
// // //                 <View className="flex-row justify-between items-center mt-2">
// // //                   <Text className="text-teal-500 text-xl font-black">
// // //                     Rs. {Number(car.price).toLocaleString()}
// // //                   </Text>
// // //                   <View className="bg-white/5 px-4 py-2 rounded-xl border border-white/5 shadow-inner">
// // //                     <Text className="text-white text-[10px] font-black uppercase">Details</Text>
// // //                   </View>
// // //                 </View>
// // //               </View>
// // //             </TouchableOpacity>
// // //           ))
// // //         )}
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }

// // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import axios from "axios";
// // import { LinearGradient } from "expo-linear-gradient";
// // import React, { useEffect, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   Alert,
// //   Image,
// //   RefreshControl,
// //   SafeAreaView,
// //   ScrollView,
// //   Text,
// //   TouchableOpacity,
// //   View
// // } from "react-native";

// // const BASE_URL = "http://192.168.43.254:5000";
// // const API_URL = `${BASE_URL}/api`;

// // const CATEGORIES = [
// //   { name: "Car", icon: "car" },
// //   { name: "SUV", icon: "car-estate" },
// //   { name: "Jeep", icon: "jeepney" },
// //   { name: "Electric", icon: "ev-station" },
// // ];

// // export default function HomeScreen({ navigation }: any) {
// //   const [listings, setListings] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [refreshing, setRefreshing] = useState(false);

// //   // 1. Fetch Listings from Backend
// //   const fetchListings = async () => {
// //     try {
// //       const token = await AsyncStorage.getItem("userToken");
// //       const response = await axios.get(`${API_URL}/listings`, {
// //         headers: { Authorization: token ? `Bearer ${token}` : "" },
// //       });
// //       setListings(response.data);
// //     } catch (error) {
// //       console.error("Fetch Error:", error);
// //     } finally {
// //       setLoading(false);
// //       setRefreshing(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchListings();
// //   }, []);

// //   // 2. Handle Like Logic (Optimistic UI)
// //   const handleLike = async (id: number) => {
// //     const token = await AsyncStorage.getItem("userToken");

// //     if (!token) {
// //       Alert.alert(
// //         "Login Required",
// //         "කරුණාකර මෙම දැන්වීම Like කිරීමට ලොග් වන්න.",
// //       );
// //       return;
// //     }

// //     const previousListings = [...listings];
// //     setListings((prev) =>
// //       prev.map((item) => {
// //         if (item.id === id) {
// //           const isLiked = item.is_liked_by_user;
// //           return {
// //             ...item,
// //             is_liked_by_user: !isLiked,
// //             likes_count: isLiked
// //               ? (item.likes_count || 1) - 1
// //               : (item.likes_count || 0) + 1,
// //           };
// //         }
// //         return item;
// //       }),
// //     );

// //     try {
// //       await axios.post(
// //         `${API_URL}/listings/like/${id}`,
// //         {},
// //         { headers: { Authorization: `Bearer ${token}` } },
// //       );
// //     } catch (error: any) {
// //       setListings(previousListings); // Fail වුනොත් ආපහු තිබුන විදිහටම හදනවා
// //       if (error.response?.status === 403 || error.response?.status === 401) {
// //         Alert.alert("Session Expired", "කරුණාකර නැවත ලොග් වන්න.");
// //       }
// //     }
// //   };

// //   // 3. Image URL Helper
// //   const getImageUrl = (imagePath: any) => {
// //     if (!imagePath) return "https://via.placeholder.com/400";
// //     if (typeof imagePath === "string" && imagePath.startsWith("http"))
// //       return imagePath;
// //     return `${BASE_URL}${imagePath}`;
// //   };

// //   return (
// //     <SafeAreaView className="flex-1 bg-black">
// //       <ScrollView
// //         className="flex-1"
// //         showsVerticalScrollIndicator={false}
// //         refreshControl={
// //           <RefreshControl
// //             refreshing={refreshing}
// //             onRefresh={fetchListings}
// //             tintColor="#009688"
// //           />
// //         }
// //       >
// //         {/* Hero Section */}
// //         <View className="relative h-[450px] w-full justify-center items-center">
// //           <Image
// //             source={{
// //               uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
// //             }}
// //             className="absolute inset-0 w-full h-full opacity-70"
// //             resizeMode="cover"
// //           />
// //           <LinearGradient
// //             colors={["transparent", "rgba(0,0,0,0.5)", "black"]}
// //             className="absolute inset-0"
// //           />
// //           <View className="z-10 items-center px-6">
// //             <Text className="text-white text-6xl font-black text-center uppercase tracking-tighter leading-[50px]">
// //               DRIVE{"\n"}
// //               <Text className="text-teal-500">LEGENDARY</Text>
// //             </Text>
// //             <Text className="text-zinc-400 text-xs font-bold uppercase tracking-[0.3em] mt-4">
// //               Premium Vehicle Inventory
// //             </Text>
// //           </View>
// //         </View>

// //         {/* Categories Section */}
// //         <View className="px-4 mt-[-40px]">
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             className="flex-row"
// //           >
// //             {CATEGORIES.map((cat, i) => (
// //               <TouchableOpacity
// //                 key={i}
// //                 className="bg-zinc-900 w-24 h-32 rounded-[30px] items-center justify-center mr-3 border border-white/5 shadow-2xl"
// //               >
// //                 <View className="bg-teal-500/10 p-3 rounded-2xl mb-2">
// //                   <MaterialCommunityIcons
// //                     name={cat.icon as any}
// //                     size={28}
// //                     color="#009688"
// //                   />
// //                 </View>
// //                 <Text className="text-white text-[10px] font-black uppercase tracking-widest">
// //                   {cat.name}
// //                 </Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
// //         </View>

// //         {/* Listings Section */}
// //         <View className="px-5 mt-12 pb-20">
// //           <View className="flex-row justify-between items-end mb-8">
// //             <View>
// //               <Text className="text-teal-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">
// //                 New Arrivals
// //               </Text>
// //               <Text className="text-white text-3xl font-black uppercase italic tracking-tighter">
// //                 Featured Assets
// //               </Text>
// //             </View>
// //             <TouchableOpacity>
// //               <Text className="text-zinc-500 text-[10px] font-black uppercase">
// //                 View All
// //               </Text>
// //             </TouchableOpacity>
// //           </View>

// //           {loading ? (
// //             <ActivityIndicator color="#009688" size="large" className="mt-10" />
// //           ) : (
// //             listings.map((car) => {
// //               // Parse images if they are stored as a JSON string
// //               let displayImage = "https://via.placeholder.com/400";
// //               try {
// //                 const imagesArray =
// //                   typeof car.images === "string"
// //                     ? JSON.parse(car.images)
// //                     : car.images;
// //                 if (imagesArray && imagesArray.length > 0) {
// //                   displayImage = getImageUrl(imagesArray[0]);
// //                 }
// //               } catch (e) {
// //                 console.log("Image Parse Error");
// //               }

// //               return (
// //                 <TouchableOpacity
// //                   key={car.id}
// //                   activeOpacity={0.95}
// //                   onPress={() => navigation.navigate("Details", { id: car.id })}
// //                   className="bg-zinc-900 rounded-[40px] overflow-hidden mb-8 border border-white/5"
// //                 >
// //                   <View className="relative">
// //                     <Image
// //                       source={{ uri: displayImage }}
// //                       className="w-full h-64"
// //                       resizeMode="cover"
// //                     />

// //                     {/* Floating Like Button */}
// //                     <TouchableOpacity
// //                       onPress={() => handleLike(car.id)}
// //                       className="absolute top-5 right-5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full flex-row items-center border border-white/10"
// //                     >
// //                       <Ionicons
// //                         name={car.is_liked_by_user ? "heart" : "heart-outline"}
// //                         size={18}
// //                         color={car.is_liked_by_user ? "#009688" : "white"}
// //                       />
// //                       <Text className="text-white text-[11px] font-black ml-2">
// //                         {car.likes_count || 0}
// //                       </Text>
// //                     </TouchableOpacity>

// //                     {/* Price Tag */}
// //                     <View className="absolute bottom-5 left-5 bg-teal-500 px-5 py-2 rounded-2xl shadow-xl">
// //                       <Text className="text-black font-black text-sm italic">
// //                         LKR {Number(car.price).toLocaleString()}
// //                       </Text>
// //                     </View>
// //                   </View>

// //                   <View className="p-6">
// //                     <View className="flex-row justify-between items-start">
// //                       <View className="flex-1">
// //                         <Text className="text-white text-2xl font-black uppercase italic tracking-tight leading-tight">
// //                           {car.make} {car.model}
// //                         </Text>
// //                         <View className="flex-row items-center mt-2">
// //                           <Ionicons
// //                             name="location-outline"
// //                             size={12}
// //                             color="#555"
// //                           />
// //                           <Text className="text-zinc-500 text-[10px] font-black uppercase ml-1 tracking-widest">
// //                             {car.location} • {car.year}
// //                           </Text>
// //                         </View>
// //                       </View>
// //                       <View className="bg-white/5 p-3 rounded-2xl border border-white/5">
// //                         <MaterialCommunityIcons
// //                           name="chevron-right"
// //                           size={20}
// //                           color="#009688"
// //                         />
// //                       </View>
// //                     </View>
// //                   </View>
// //                 </TouchableOpacity>
// //               );
// //             })
// //           )}
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { LinearGradient } from "expo-linear-gradient";
// import React, { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Dimensions,
//   Image,
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const { width } = Dimensions.get("window");
// const BASE_URL = "http://192.168.43.254:5000";
// const API_URL = `${BASE_URL}/api`;

// const CATEGORIES = [
//   { name: "Car", icon: "car" },
//   { name: "SUV", icon: "car-estate" },
//   { name: "Jeep", icon: "jeepney" },
//   { name: "Electric", icon: "ev-station" },
// ];

// export default function HomeScreen({ navigation }: any) {
//   const [listings, setListings] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   // රූප මාරු වීම පාලනය කිරීමට State එකක්
//   const [imageIndex, setImageIndex] = useState<{ [key: number]: number }>({});

//   const fetchListings = async () => {
//     try {
//       const token = await AsyncStorage.getItem("userToken");
//       const response = await axios.get(`${API_URL}/listings`, {
//         headers: { Authorization: token ? `Bearer ${token}` : "" },
//       });
//       setListings(response.data);

//       // මුලින්ම හැම වාහනයකටම image index එක 0 ලෙස set කිරීම
//       const initialIndices: any = {};
//       response.data.forEach((item: any) => {
//         initialIndices[item.id] = 0;
//       });
//       setImageIndex(initialIndices);
//     } catch (error) {
//       console.error("Fetch Error:", error);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchListings();
//   }, []);

//   // පින්තූර ඉබේ මාරු වීමේ Logic එක (Auto Slider)
//   useEffect(() => {
//     if (listings.length === 0) return;

//     const interval = setInterval(() => {
//       setImageIndex((prev) => {
//         const nextIndices = { ...prev };
//         listings.forEach((car) => {
//           try {
//             const imgs =
//               typeof car.images === "string"
//                 ? JSON.parse(car.images)
//                 : car.images;
//             if (imgs && imgs.length > 1) {
//               nextIndices[car.id] = (prev[car.id] + 1) % imgs.length;
//             }
//           } catch (e) {
//             /* skip */
//           }
//         });
//         return nextIndices;
//       });
//     }, 3000); // තත්පර 3කට වරක් මාරු වේ

//     return () => clearInterval(interval);
//   }, [listings]);

//   const handleLike = async (id: number) => {
//     const token = await AsyncStorage.getItem("userToken");
//     if (!token) {
//       Alert.alert("Login Required", "මෙම දැන්වීම Like කිරීමට ලොග් වන්න.");
//       return;
//     }
//     const previousListings = [...listings];
//     setListings((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               is_liked_by_user: !item.is_liked_by_user,
//               likes_count: item.is_liked_by_user
//                 ? (item.likes_count || 1) - 1
//                 : (item.likes_count || 0) + 1,
//             }
//           : item,
//       ),
//     );
//     try {
//       await axios.post(
//         `${API_URL}/listings/like/${id}`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } },
//       );
//     } catch (error) {
//       setListings(previousListings);
//     }
//   };

//   const getImageUrl = (imagePath: string) => {
//     if (!imagePath) return "https://via.placeholder.com/400";
//     return imagePath.startsWith("http") ? imagePath : `${BASE_URL}${imagePath}`;
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-black">
//       <ScrollView
//         className="flex-1"
//         showsVerticalScrollIndicator={false}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={fetchListings}
//             tintColor="#009688"
//           />
//         }
//       >
//         {/* Hero Section */}
//         <View className="relative h-[400px] w-full justify-center items-center">
//           <Image
//             source={{
//               uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
//             }}
//             className="absolute inset-0 w-full h-full opacity-60"
//             resizeMode="cover"
//           />
//           <LinearGradient
//             colors={["transparent", "rgba(0,0,0,0.6)", "black"]}
//             className="absolute inset-0"
//           />
//           <View className="z-10 items-center px-6">
//             <Text className="text-white text-5xl font-black text-center uppercase tracking-tighter">
//               DRIVE <Text className="text-teal-500">LEGEND</Text>
//             </Text>
//           </View>
//         </View>

//         {/* Categories */}
//         <View className="px-4 mt-[-30px]">
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             className="flex-row"
//           >
//             {CATEGORIES.map((cat, i) => (
//               <TouchableOpacity
//                 key={i}
//                 className="bg-zinc-900 w-24 h-28 rounded-3xl items-center justify-center mr-3 border border-white/5"
//               >
//                 <MaterialCommunityIcons
//                   name={cat.icon as any}
//                   size={28}
//                   color="#009688"
//                 />
//                 <Text className="text-white text-[10px] font-bold uppercase mt-2">
//                   {cat.name}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Listings */}
//         <View className="px-5 mt-10 pb-20">
//           <Text className="text-white text-2xl font-black uppercase italic mb-6">
//             Featured Assets
//           </Text>

//           {loading ? (
//             <ActivityIndicator color="#009688" size="large" />
//           ) : (
//             listings.map((car) => {
//               const isSold = car.status === "sold";
//               let images: string[] = [];
//               try {
//                 images =
//                   typeof car.images === "string"
//                     ? JSON.parse(car.images)
//                     : car.images;
//               } catch (e) {
//                 images = [];
//               }

//               const currentIdx = imageIndex[car.id] || 0;
//               const displayImage =
//                 images.length > 0
//                   ? getImageUrl(images[currentIdx])
//                   : "https://via.placeholder.com/400";

//               return (
//                 <TouchableOpacity
//                   key={car.id}
//                   activeOpacity={isSold ? 1 : 0.9}
//                   onPress={() =>
//                     !isSold && navigation.navigate("Details", { id: car.id })
//                   }
//                   className="bg-zinc-900 rounded-[35px] overflow-hidden mb-8 border border-white/5 shadow-lg"
//                 >
//                   <View className="relative">
//                     {/* Sliding Image */}
//                     <Image
//                       source={{ uri: displayImage }}
//                       className={`w-full h-64 ${isSold ? "grayscale opacity-50" : ""}`}
//                       resizeMode="cover"
//                     />

//                     {/* SOLD Overlay */}
//                     {isSold && (
//                       <View className="absolute inset-0 bg-black/30 items-center justify-center">
//                         <View className="bg-red-600 px-6 py-2 rounded-xl rotate-[-10deg] border border-white shadow-xl">
//                           <Text className="text-white font-black text-xl uppercase">
//                             SOLD
//                           </Text>
//                         </View>
//                       </View>
//                     )}

//                     {/* Like Button */}
//                     {!isSold && (
//                       <TouchableOpacity
//                         onPress={() => handleLike(car.id)}
//                         className="absolute top-4 right-4 bg-black/40 p-2 rounded-full border border-white/10"
//                       >
//                         <Ionicons
//                           name={
//                             car.is_liked_by_user ? "heart" : "heart-outline"
//                           }
//                           size={20}
//                           color={car.is_liked_by_user ? "#009688" : "white"}
//                         />
//                       </TouchableOpacity>
//                     )}

//                     {/* Price Badge */}
//                     <View
//                       className={`absolute bottom-4 left-4 px-4 py-2 rounded-xl ${isSold ? "bg-zinc-800" : "bg-teal-500"}`}
//                     >
//                       <Text className="text-black font-black text-xs uppercase italic">
//                         {isSold
//                           ? "Sold Out"
//                           : `Rs. ${Number(car.price).toLocaleString()}`}
//                       </Text>
//                     </View>

//                     {/* Image Indicators (dots) */}
//                     {images.length > 1 && !isSold && (
//                       <View className="absolute bottom-4 right-4 flex-row">
//                         {images.map((_, i) => (
//                           <View
//                             key={i}
//                             className={`w-1.5 h-1.5 rounded-full ml-1 ${i === currentIdx ? "bg-teal-500" : "bg-white/30"}`}
//                           />
//                         ))}
//                       </View>
//                     )}
//                   </View>

//                   <View className="p-6">
//                     <Text
//                       className={`text-xl font-black uppercase italic ${isSold ? "text-zinc-600" : "text-white"}`}
//                     >
//                       {car.name}
//                     </Text>
//                     <View className="flex-row items-center mt-2">
//                       <Ionicons
//                         name="location-outline"
//                         size={12}
//                         color="#555"
//                       />
//                       <Text className="text-zinc-500 text-[10px] font-bold uppercase ml-1 tracking-widest">
//                         {car.location} • {car.year}
//                       </Text>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               );
//             })
//           )}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { LinearGradient } from "expo-linear-gradient";
// import React, { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Dimensions,
//   Image,
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const { width } = Dimensions.get("window");
// const BASE_URL = "http://192.168.43.254:5000";
// const API_URL = `${BASE_URL}/api`;

// const CATEGORIES = [
//   { name: "Car", icon: "car" },
//   { name: "SUV", icon: "car-estate" },
//   { name: "Jeep", icon: "jeepney" },
//   { name: "Electric", icon: "ev-station" },
// ];

// // --- 1. කාලය ගණනය කරන Function එක ---
// const getTimeAgo = (dateString: string) => {
//   if (!dateString) return "";
//   const now = new Date();
//   const postDate = new Date(dateString);
//   const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

//   if (diffInSeconds < 60) return "Just now";
//   const diffInMinutes = Math.floor(diffInSeconds / 60);
//   if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
//   const diffInHours = Math.floor(diffInMinutes / 60);
//   if (diffInHours < 24) return `${diffInHours}h ago`;
//   const diffInDays = Math.floor(diffInHours / 24);
//   if (diffInDays < 30) return `${diffInDays}d ago`;

//   return postDate.toLocaleDateString();
// };

// export default function HomeScreen({ navigation }: any) {
//   const [listings, setListings] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [imageIndex, setImageIndex] = useState<{ [key: number]: number }>({});

//   const fetchListings = async () => {
//     try {
//       const token = await AsyncStorage.getItem("userToken");
//       const response = await axios.get(`${API_URL}/listings`, {
//         headers: { Authorization: token ? `Bearer ${token}` : "" },
//       });
//       setListings(response.data);

//       const initialIndices: any = {};
//       response.data.forEach((item: any) => {
//         initialIndices[item.id] = 0;
//       });
//       setImageIndex(initialIndices);
//     } catch (error) {
//       console.error("Fetch Error:", error);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchListings();
//   }, []);

//   // --- 2. Auto Image Slider Logic ---
//   useEffect(() => {
//     if (listings.length === 0) return;

//     const interval = setInterval(() => {
//       setImageIndex((prev) => {
//         const nextIndices = { ...prev };
//         listings.forEach((car) => {
//           try {
//             const imgs = typeof car.images === "string" ? JSON.parse(car.images) : car.images;
//             if (imgs && imgs.length > 1) {
//               nextIndices[car.id] = (prev[car.id] + 1) % imgs.length;
//             }
//           } catch (e) { /* skip */ }
//         });
//         return nextIndices;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [listings]);

//   const handleLike = async (id: number) => {
//     const token = await AsyncStorage.getItem("userToken");
//     if (!token) {
//       Alert.alert("Login Required", "මෙම දැන්වීම Like කිරීමට ලොග් වන්න.");
//       return;
//     }
//     const previousListings = [...listings];
//     setListings((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, is_liked_by_user: !item.is_liked_by_user, likes_count: item.is_liked_by_user ? (item.likes_count || 1) - 1 : (item.likes_count || 0) + 1 } : item
//       )
//     );
//     try {
//       await axios.post(`${API_URL}/listings/like/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } });
//     } catch (error) {
//       setListings(previousListings);
//     }
//   };

//   const getImageUrl = (imagePath: string) => {
//     if (!imagePath) return "https://via.placeholder.com/400";
//     return imagePath.startsWith("http") ? imagePath : `${BASE_URL}${imagePath}`;
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-black">
//       <ScrollView
//         className="flex-1"
//         showsVerticalScrollIndicator={false}
//         refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchListings} tintColor="#009688" />}
//       >
//         {/* Hero Section */}
//         <View className="relative h-[400px] w-full justify-center items-center">
//           <Image
//             source={{ uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800" }}
//             className="absolute inset-0 w-full h-full opacity-60"
//             resizeMode="cover"
//           />
//           <LinearGradient colors={["transparent", "rgba(0,0,0,0.6)", "black"]} className="absolute inset-0" />
//           <View className="z-10 items-center px-6">
//             <Text className="text-white text-5xl font-black text-center uppercase tracking-tighter">
//               DRIVE <Text className="text-teal-500">LEGEND</Text>
//             </Text>
//           </View>
//         </View>

//         {/* Categories */}
//         <View className="px-4 mt-[-30px]">
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
//             {CATEGORIES.map((cat, i) => (
//               <TouchableOpacity key={i} className="bg-zinc-900 w-24 h-28 rounded-3xl items-center justify-center mr-3 border border-white/5">
//                 <MaterialCommunityIcons name={cat.icon as any} size={28} color="#009688" />
//                 <Text className="text-white text-[10px] font-bold uppercase mt-2">{cat.name}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Listings Section */}
//         <View className="px-5 mt-10 pb-20">
//           <Text className="text-white text-2xl font-black uppercase italic mb-6">Featured Assets</Text>

//           {loading ? (
//             <ActivityIndicator color="#009688" size="large" />
//           ) : (
//             listings.map((car) => {
//               const isSold = car.status === 'sold';
//               let images: string[] = [];
//               try {
//                 images = typeof car.images === "string" ? JSON.parse(car.images) : car.images;
//               } catch (e) { images = []; }

//               const currentIdx = imageIndex[car.id] || 0;
//               const displayImage = images.length > 0 ? getImageUrl(images[currentIdx]) : "https://via.placeholder.com/400";

//               return (
//                 <TouchableOpacity
//                   key={car.id}
//                   activeOpacity={isSold ? 1 : 0.9}
//                   onPress={() => !isSold && navigation.navigate("Details", { id: car.id })}
//                   className="bg-zinc-900 rounded-[35px] overflow-hidden mb-8 border border-white/5"
//                 >
//                   <View className="relative">
//                     <Image source={{ uri: displayImage }} className={`w-full h-64 ${isSold ? 'grayscale opacity-50' : ''}`} resizeMode="cover" />

//                     {isSold && (
//                       <View className="absolute inset-0 bg-black/30 items-center justify-center">
//                         <View className="bg-red-600 px-6 py-2 rounded-xl rotate-[-10deg] border border-white">
//                           <Text className="text-white font-black text-xl uppercase">SOLD</Text>
//                         </View>
//                       </View>
//                     )}

//                     {!isSold && (
//                       <TouchableOpacity onPress={() => handleLike(car.id)} className="absolute top-4 right-4 bg-black/40 p-2 rounded-full border border-white/10">
//                         <Ionicons name={car.is_liked_by_user ? "heart" : "heart-outline"} size={20} color={car.is_liked_by_user ? "#009688" : "white"} />
//                       </TouchableOpacity>
//                     )}

//                     <View className={`absolute bottom-4 left-4 px-4 py-2 rounded-xl ${isSold ? 'bg-zinc-800' : 'bg-teal-500'}`}>
//                       <Text className="text-black font-black text-xs uppercase italic">
//                         {isSold ? "Sold Out" : `Rs. ${Number(car.price).toLocaleString()}`}
//                       </Text>
//                     </View>
//                   </View>

//                   <View className="p-6">
//                     <View className="flex-row justify-between items-start">
//                       <View className="flex-1">
//                         <Text className={`text-xl font-black uppercase italic ${isSold ? 'text-zinc-600' : 'text-white'}`}>{car.name}</Text>
//                         <View className="flex-row items-center mt-2">
//                           <Ionicons name="location-outline" size={12} color="#555" />
//                           <Text className="text-zinc-500 text-[10px] font-bold uppercase ml-1 tracking-widest">
//                             {car.location} • {car.year}
//                           </Text>
//                         </View>
//                       </View>

//                       {/* --- Uploaded Date Display --- */}
//                       <View className="bg-white/5 px-2 py-1 rounded-lg flex-row items-center">
//                         <Ionicons name="time-outline" size={10} color="#009688" />
//                         <Text className="text-zinc-600 text-[9px] font-black uppercase ml-1">
//                           {getTimeAgo(car.created_at)}
//                         </Text>
//                       </View>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               );
//             })
//           )}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Application from "expo-application";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const BASE_URL = "http://192.168.43.254:5000";
const API_URL = `${BASE_URL}/api`;

// --- Device ID එක ලබාගැනීමේ ක්‍රමය ---
const getUniqueId = async () => {
  try {
    let id = null;
    if (Platform.OS === "android") {
      id = Application.androidId;
    } else if (Platform.OS === "ios") {
      id = await Application.getIosIdForVendorAsync();
    }
    if (!id) {
      id = await AsyncStorage.getItem("device_id_fallback");
      if (!id) {
        id = "gen-" + Math.random().toString(36).substring(2, 15) + Date.now();
        await AsyncStorage.setItem("device_id_fallback", id);
      }
    }
    return id;
  } catch (e) {
    return "default-device-id";
  }
};

const CATEGORIES = [
  { name: "Car", icon: "car" },
  { name: "SUV", icon: "car-estate" },
  { name: "Jeep", icon: "jeepney" },
  { name: "Electric", icon: "ev-station" },
];

const getTimeAgo = (dateString: string) => {
  if (!dateString) return "";
  const now = new Date();
  const postDate = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);
  if (diffInSeconds < 60) return "Just now";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}d ago`;
  return postDate.toLocaleDateString();
};

export default function HomeScreen({ navigation }: any) {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [imageIndex, setImageIndex] = useState<{ [key: number]: number }>({});

  const fetchListings = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const deviceId = await getUniqueId();

      const response = await axios.get(
        `${API_URL}/listings?deviceId=${deviceId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "x-device-id": deviceId,
          },
        },
      );
      setListings(response.data);

      const initialIndices: any = {};
      response.data.forEach((item: any) => {
        initialIndices[item.id] = 0;
      });
      setImageIndex(initialIndices);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  // Image Slider Logic
  useEffect(() => {
    if (listings.length === 0) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => {
        const nextIndices = { ...prev };
        listings.forEach((car) => {
          try {
            const imgs =
              typeof car.images === "string"
                ? JSON.parse(car.images)
                : car.images;
            if (imgs && imgs.length > 1) {
              nextIndices[car.id] = (prev[car.id] + 1) % imgs.length;
            }
          } catch (e) {}
        });
        return nextIndices;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [listings]);

  const handleLike = async (id: number) => {
    const token = await AsyncStorage.getItem("userToken");
    const deviceId = await getUniqueId();

    setListings((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              is_liked_by_user: !item.is_liked_by_user,
              likes_count: item.is_liked_by_user
                ? Math.max(0, (item.likes_count || 1) - 1)
                : (item.likes_count || 0) + 1,
            }
          : item,
      ),
    );

    try {
      await axios.post(
        `${API_URL}/listings/like/${id}`,
        { deviceId },
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "x-device-id": deviceId,
          },
        },
      );
    } catch (error: any) {
      fetchListings();
    }
  };

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return "https://via.placeholder.com/400";
    return imagePath.startsWith("http") ? imagePath : `${BASE_URL}${imagePath}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchListings}
            tintColor="#009688"
          />
        }
      >
        <View className="relative h-[400px] w-full justify-center items-center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
            }}
            className="absolute inset-0 w-full h-full opacity-60"
            resizeMode="cover"
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.6)", "black"]}
            className="absolute inset-0"
          />
          <View className="z-10 items-center px-6">
            <Text className="text-white text-5xl font-black text-center uppercase tracking-tighter">
              DRIVE <Text className="text-teal-500">LEGEND</Text>
            </Text>
          </View>
        </View>

        <View className="px-4 mt-[-30px]">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row"
          >
            {CATEGORIES.map((cat, i) => (
              <TouchableOpacity
                key={i}
                className="bg-zinc-900 w-24 h-28 rounded-3xl items-center justify-center mr-3 border border-white/5"
              >
                <MaterialCommunityIcons
                  name={cat.icon as any}
                  size={28}
                  color="#009688"
                />
                <Text className="text-white text-[10px] font-bold uppercase mt-2">
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className="px-5 mt-10 pb-20">
          <Text className="text-white text-2xl font-black uppercase italic mb-6">
            Featured Assets
          </Text>

          {loading ? (
            <ActivityIndicator color="#009688" size="large" />
          ) : (
            listings.map((car) => {
              const isSold = car.status === "sold";
              let images: string[] = [];
              try {
                images =
                  typeof car.images === "string"
                    ? JSON.parse(car.images)
                    : car.images;
              } catch (e) {
                images = [];
              }

              const currentIdx = imageIndex[car.id] || 0;
              const displayImage =
                images.length > 0
                  ? getImageUrl(images[currentIdx])
                  : "https://via.placeholder.com/400";

              return (
                <TouchableOpacity
                  key={car.id}
                  activeOpacity={isSold ? 1 : 0.9}
                  onPress={() =>
                    !isSold && navigation.navigate("Details", { id: car.id })
                  }
                  className="bg-zinc-900 rounded-[35px] overflow-hidden mb-8 border border-white/5"
                >
                  <View className="relative">
                    <Image
                      source={{ uri: displayImage }}
                      className={`w-full h-64 ${isSold ? "grayscale opacity-40" : ""}`}
                      resizeMode="cover"
                    />

                    {/* Sold Out Badge */}
                    {isSold && (
                      <View className="absolute inset-0 items-center justify-center">
                        <View className="bg-red-600/90 px-6 py-2 rounded-full border border-red-400">
                          <Text className="text-white font-black text-lg uppercase italic tracking-tighter">
                            SOLD OUT
                          </Text>
                        </View>
                      </View>
                    )}

                    {/* Like & Count Section */}
                    {!isSold && (
                      <View className="absolute top-4 right-4 flex-row items-center bg-black/50 px-3 py-1.5 rounded-full border border-white/10 z-50">
                        <TouchableOpacity onPress={() => handleLike(car.id)}>
                          <Ionicons
                            name={
                              car.is_liked_by_user ? "heart" : "heart-outline"
                            }
                            size={20}
                            color={car.is_liked_by_user ? "#009688" : "white"}
                          />
                        </TouchableOpacity>
                        <Text className="text-white text-xs font-bold ml-1.5">
                          {car.likes_count || 0}
                        </Text>
                      </View>
                    )}

                    <View
                      className={`absolute bottom-4 left-4 px-4 py-2 rounded-xl ${isSold ? "bg-zinc-800" : "bg-teal-500"}`}
                    >
                      <Text
                        className={`${isSold ? "text-zinc-500" : "text-black"} font-black text-xs uppercase italic`}
                      >
                        {isSold
                          ? "NOT AVAILABLE"
                          : `Rs. ${Number(car.price).toLocaleString()}`}
                      </Text>
                    </View>
                  </View>

                  <View className="p-6">
                    <View className="flex-row justify-between items-start">
                      <View className="flex-1">
                        <Text
                          className={`text-xl font-black uppercase italic ${isSold ? "text-zinc-700" : "text-white"}`}
                        >
                          {car.name}
                        </Text>
                        <View className="flex-row items-center mt-2">
                          <Ionicons
                            name="location-outline"
                            size={12}
                            color={isSold ? "#333" : "#555"}
                          />
                          <Text className="text-zinc-600 text-[10px] font-bold uppercase ml-1 tracking-widest">
                            {car.location} • {car.year}
                          </Text>
                        </View>
                      </View>
                      <View className="bg-white/5 px-2 py-1 rounded-lg flex-row items-center">
                        <Ionicons
                          name="time-outline"
                          size={10}
                          color={isSold ? "#333" : "#009688"}
                        />
                        <Text className="text-zinc-600 text-[9px] font-black uppercase ml-1">
                          {getTimeAgo(car.created_at)}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
