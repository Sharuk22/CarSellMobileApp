// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import {
//   Dimensions,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const { width } = Dimensions.get("window");

// // ඔයා ලබාදුන් සියලුම Categories මෙහි ඇත
// const VEHICLE_CATEGORIES = [
//   { name: "Car", icon: "car", color: "#10b981" },
//   { name: "SUV", icon: "car-estate", color: "#10b981" },
//   { name: "Jeep", icon: "jeepney", color: "#10b981" },
//   { name: "Van", icon: "van-passenger", color: "#10b981" },
//   { name: "Lorry", icon: "truck", color: "#10b981" },
//   { name: "Bus", icon: "bus", color: "#10b981" },
//   { name: "Motorcycle", icon: "motorbike", color: "#10b981" },
//   { name: "Three Wheeler", icon: "rickshaw", color: "#10b981" },
//   { name: "Tractor", icon: "tractor", color: "#10b981" },
//   { name: "Harvester", icon: "combine-harvester", color: "#10b981" },
//   { name: "Electric Car", icon: "ev-station", color: "#10b981" },
//   { name: "Electric Bike", icon: "moped-electric", color: "#10b981" },
//   { name: "Other", icon: "dots-horizontal-circle", color: "#10b981" },
// ];

// const SearchScreen = () => {
//   const navigation = useNavigation<any>();
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <SafeAreaView className="flex-1 bg-black">
//       {/* --- Custom Dark Header --- */}
//       <View className="px-6 pt-4 pb-6 bg-[#0a0a0a] border-b border-white/5">
//         <Text className="text-white text-2xl font-black italic uppercase tracking-tighter mb-5">
//           Search <Text className="text-emerald-500">Inventory</Text>
//         </Text>

//         <View className="flex-row items-center bg-zinc-900 border border-white/10 rounded-2xl px-4 h-14">
//           <Ionicons name="search" size={20} color="#10b981" />
//           <TextInput
//             placeholder="Search by brand or model..."
//             placeholderTextColor="#555"
//             className="flex-1 ml-3 text-white font-bold"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
//         {/* --- Location Bar (Dark Style) --- */}
//         <TouchableOpacity className="flex-row items-center justify-between px-6 py-4 bg-zinc-900/30 border-b border-white/5">
//           <View className="flex-row items-center">
//             <View className="bg-emerald-500/10 p-2 rounded-lg">
//               <Ionicons name="location" size={16} color="#10b981" />
//             </View>
//             <Text className="ml-3 text-zinc-400 font-bold text-xs uppercase tracking-widest">
//               All of Sri Lanka
//             </Text>
//           </View>
//           <Ionicons name="chevron-forward" size={16} color="#333" />
//         </TouchableOpacity>

//         {/* --- Category Grid Layout --- */}
//         <View className="flex-row flex-wrap mt-2">
//           {VEHICLE_CATEGORIES.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() =>
//                 navigation.navigate("Results", { category: item.name })
//               }
//               style={{ width: width / 3 }}
//               className="aspect-square items-center justify-center border-[0.5px] border-white/5"
//             >
//               <View className="bg-zinc-900/80 w-16 h-16 rounded-3xl items-center justify-center mb-3 border border-white/5 shadow-2xl">
//                 <MaterialCommunityIcons
//                   name={item.icon as any}
//                   size={28}
//                   color={item.color}
//                 />
//               </View>
//               <Text
//                 className="text-zinc-500 text-[10px] font-black uppercase text-center px-1 tracking-tighter"
//                 numberOfLines={1}
//               >
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           ))}

//           {/* Grid එක හරියටම පිරවීමට හිස් කොටු (Padding) */}
//           <View
//             style={{ width: width / 3 }}
//             className="aspect-square border-[0.5px] border-white/5"
//           />
//           <View
//             style={{ width: width / 3 }}
//             className="aspect-square border-[0.5px] border-white/5"
//           />
//         </View>

//         <View className="h-28" />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SearchScreen;

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const BASE_URL = "http://192.168.43.254:5000";

const VEHICLE_CATEGORIES = [
  { name: "Car", icon: "car" },
  { name: "SUV", icon: "car-estate" },
  { name: "Jeep", icon: "jeepney" },
  { name: "Van", icon: "van-passenger" },
  { name: "Lorry", icon: "truck" },
  { name: "Bus", icon: "bus" },
  { name: "Motorcycle", icon: "motorbike" },
  { name: "Three Wheeler", icon: "rickshaw" },
  { name: "Tractor", icon: "tractor" },
  { name: "Harvester", icon: "combine-harvester" },
  { name: "Electric Car", icon: "ev-station" },
  { name: "Electric Bike", icon: "moped-electric" },
  { name: "Other", icon: "dots-horizontal-circle" },
];

const SearchScreen = () => {
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState("");
  const [allListings, setAllListings] = useState<any[]>([]); // මුල් දත්ත
  const [filteredResults, setFilteredResults] = useState<any[]>([]); // පෙන්වන දත්ත
  const [loading, setLoading] = useState(true);
  const [selectedTitle, setSelectedTitle] = useState("Recent Listings");

  // --- 1. ඇප් එක ඕපන් වෙද්දී ඔක්කොම data එක පාරක් ගන්නවා ---
  useEffect(() => {
    const loadAllData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/listings`);
        setAllListings(res.data);
        setFilteredResults(res.data); // මුලින්ම ඔක්කොම පෙන්වන්න
      } catch (err) {
        console.log("Error loading data", err);
      } finally {
        setLoading(false);
      }
    };
    loadAllData();
  }, []);

  // --- 2. Local Filtering Logic (Backend යන්නේ නැත) ---
  const applyLocalFilter = (type: "category" | "search", value: string) => {
    let results = [...allListings];

    if (type === "category") {
      results = allListings.filter(
        (item) => item.category?.toLowerCase() === value.toLowerCase(),
      );
      setSelectedTitle(`${value}s`);
    } else if (type === "search") {
      results = allListings.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.location?.toLowerCase().includes(value.toLowerCase()),
      );
      setSelectedTitle(`Results for "${value}"`);
    }

    setFilteredResults(results);
  };

  const getImageUrl = (images: any) => {
    try {
      const imgList = typeof images === "string" ? JSON.parse(images) : images;
      return imgList[0].startsWith("http")
        ? imgList[0]
        : `${BASE_URL}${imgList[0]}`;
    } catch (e) {
      return "https://via.placeholder.com/400";
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header & Search Bar */}
        <View className="px-6 pt-4 pb-6 bg-[#0a0a0a]">
          <Text className="text-white text-2xl font-black italic uppercase tracking-tighter mb-5">
            Explore <Text className="text-emerald-500">Market</Text>
          </Text>
          <View className="flex-row items-center bg-zinc-900 border border-white/10 rounded-2xl px-4 h-14">
            <Ionicons name="search" size={20} color="#10b981" />
            <TextInput
              placeholder="Search by brand or model..."
              placeholderTextColor="#555"
              className="flex-1 ml-3 text-white font-bold"
              value={searchQuery}
              onChangeText={(text) => {
                setSearchQuery(text);
                applyLocalFilter("search", text); // ටයිප් කරන කොටම සර්ච් වේ
              }}
            />
          </View>
        </View>

        {/* Category Grid */}
        <View className="flex-row flex-wrap mt-2 bg-black">
          {VEHICLE_CATEGORIES.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => applyLocalFilter("category", item.name)}
              style={{ width: width / 3 }}
              className="aspect-square items-center justify-center border-[0.5px] border-white/5"
            >
              <View className="bg-zinc-900/80 w-14 h-14 rounded-2xl items-center justify-center mb-2 border border-white/5">
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={24}
                  color="#10b981"
                />
              </View>
              <Text className="text-zinc-500 text-[9px] font-black uppercase text-center">
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* --- Results Section --- */}
        <View className="px-6 mt-8 pb-20">
          <Text className="text-white text-lg font-black uppercase italic tracking-widest mb-6">
            {selectedTitle}
          </Text>

          {loading ? (
            <ActivityIndicator color="#10b981" />
          ) : filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("Details", { id: item.id })}
                className="bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-3 mb-4 flex-row items-center"
              >
                <Image
                  source={{ uri: getImageUrl(item.images) }}
                  className="w-20 h-20 rounded-[1.5rem]"
                />
                <View className="ml-4 flex-1">
                  <Text className="text-white font-black uppercase italic text-sm">
                    {item.name}
                  </Text>
                  <Text className="text-emerald-500 font-bold text-xs mt-1">
                    Rs. {Number(item.price).toLocaleString()}
                  </Text>
                </View>
                <Ionicons name="arrow-forward" size={16} color="#10b981" />
              </TouchableOpacity>
            ))
          ) : (
            <Text className="text-zinc-600 text-center mt-10 uppercase font-bold text-xs">
              No items found in this category
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
