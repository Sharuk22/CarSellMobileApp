// import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import React, { useEffect, useState } from "react";
// import {
//     ActivityIndicator,
//     Dimensions,
//     FlatList,
//     Image,
//     ScrollView,
//     Text,
//     TouchableOpacity,
//     View,
// } from "react-native";

// const { width } = Dimensions.get("window");

// // --- Image Slider for Mobile ---
// const VehicleImageSlider = ({ images }: { images: string[] }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   if (!images || images.length === 0) {
//     return (
//       <View className="w-full h-48 bg-zinc-900 rounded-3xl items-center justify-center border border-white/5">
//         <Text className="text-zinc-600 font-bold text-[10px] uppercase tracking-widest">
//           No Images Available
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <View className="relative w-full h-48 mb-4 overflow-hidden rounded-3xl shadow-lg">
//       <ScrollView
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={(e) => {
//           const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
//           setActiveIndex(newIndex);
//         }}
//       >
//         {images.map((img, i) => (
//           <Image
//             key={i}
//             source={{ uri: `http://192.168.43.254:5000${img}` }} // Replace with your IP
//             className="h-full object-cover"
//             style={{ width: width - 48 }} // Adjusting for padding
//           />
//         ))}
//       </ScrollView>

//       {/* Dots Indicator */}
//       <View className="absolute bottom-3 w-full flex-row justify-center space-x-1">
//         {images.map((_, i) => (
//           <View
//             key={i}
//             className={`h-1 rounded-full ${i === activeIndex ? "w-4 bg-emerald-500" : "w-1 bg-white/30"}`}
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// const ProfileInventoryScreen = () => {
//   const [ads, setAds] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Sample data sync logic (Update with your API)
//   useEffect(() => {
//     // fetchMyAds();
//     setLoading(false);
//   }, []);

//   const renderAdCard = ({ item }: { item: any }) => (
//     <View
//       className={`bg-zinc-900/50 border border-white/5 rounded-[30px] p-4 mb-6 relative overflow-hidden ${item.status === "sold" ? "opacity-70" : ""}`}
//     >
//       {/* Sold Ribbon */}
//       {item.status === "sold" && (
//         <View className="absolute top-6 -left-8 bg-red-600 px-10 py-1 -rotate-45 z-10 shadow-lg">
//           <Text className="text-white text-[9px] font-black uppercase tracking-tighter">
//             SOLD
//           </Text>
//         </View>
//       )}

//       {/* Image Slider */}
//       <VehicleImageSlider images={item.images} />

//       {/* Details Area */}
//       <View className="flex-row justify-between items-start mb-4">
//         <View className="flex-1 pr-2">
//           <Text
//             className="text-white text-lg font-black uppercase tracking-tighter"
//             numberOfLines={1}
//           >
//             {item.name || "Vehicle Name"}
//           </Text>
//           <Text
//             className={`text-xl font-black tracking-tighter mt-1 ${item.status === "sold" ? "text-zinc-600 line-through" : "text-emerald-500"}`}
//           >
//             LKR {item.price?.toLocaleString()}
//           </Text>
//         </View>

//         {/* Action Buttons */}
//         <View className="flex-row space-x-2">
//           <TouchableOpacity className="p-3 bg-zinc-800 rounded-2xl border border-white/5">
//             <Feather name="edit-3" size={16} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity className="p-3 bg-zinc-800 rounded-2xl border border-white/5">
//             <Feather name="trash-2" size={16} color="#ef4444" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Specs Grid */}
//       <View className="flex-row justify-between border-t border-white/5 pt-4">
//         <View className="items-center flex-1">
//           <Feather name="calendar" size={14} color="#10b981" />
//           <Text className="text-white text-[10px] font-black mt-1">
//             {item.year || "2023"}
//           </Text>
//         </View>
//         <View className="items-center flex-1 border-x border-white/5">
//           <MaterialCommunityIcons name="gauge" size={14} color="#10b981" />
//           <Text className="text-white text-[10px] font-black mt-1">
//             {item.mileage || "0"} KM
//           </Text>
//         </View>
//         <View className="items-center flex-1">
//           <MaterialCommunityIcons name="fuel" size={14} color="#10b981" />
//           <Text className="text-white text-[10px] font-black mt-1">
//             {item.fuel || "Petrol"}
//           </Text>
//         </View>
//       </View>

//       {/* Location */}
//       <View className="mt-4 flex-row items-center bg-white/5 self-start px-3 py-1.5 rounded-lg border border-white/5">
//         <Ionicons name="location-sharp" size={10} color="#10b981" />
//         <Text className="text-zinc-500 text-[9px] font-black uppercase ml-1">
//           {item.location || "Location"}
//         </Text>
//       </View>
//     </View>
//   );

//   return (
//     <View className="flex-1 bg-black pt-12">
//       {/* Header */}
//       <View className="px-6 flex-row justify-between items-center mb-6">
//         <View>
//           <Text className="text-white text-3xl font-black uppercase tracking-tighter">
//             My Inventory
//           </Text>
//           <View className="bg-emerald-500/10 self-start px-3 py-1 rounded-full mt-1 border border-emerald-500/20">
//             <Text className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">
//               {ads.length} Items Listed
//             </Text>
//           </View>
//         </View>
//         <TouchableOpacity className="p-3 bg-zinc-900 rounded-2xl border border-white/10">
//           <Feather name="plus" size={24} color="#10b981" />
//         </TouchableOpacity>
//       </View>

//       {/* Listings List */}
//       {loading ? (
//         <View className="flex-1 justify-center items-center">
//           <ActivityIndicator size="large" color="#10b981" />
//         </View>
//       ) : (
//         <FlatList
//           data={ads}
//           renderItem={renderAdCard}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={
//             <View className="mt-20 items-center">
//               <Text className="text-zinc-600 font-bold uppercase tracking-widest text-xs">
//                 No Listings Found
//               </Text>
//             </View>
//           }
//         />
//       )}
//     </View>
//   );
// };

// export default ProfileInventoryScreen;

import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    FlatList,
    Image,
    RefreshControl,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");
const API_BASE = "http://192.168.43.254:5000";

// --- Image Slider for Mobile ---
const VehicleImageSlider = ({ images }: { images: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Backend එකෙන් එන images string එකක් නම් array එකක් බවට පත් කිරීම
  const parsedImages = typeof images === "string" ? JSON.parse(images) : images;

  if (!parsedImages || parsedImages.length === 0) {
    return (
      <View className="w-full h-48 bg-zinc-900 rounded-3xl items-center justify-center border border-white/5">
        <Feather name="image" size={30} color="#333" />
        <Text className="text-zinc-600 font-bold text-[10px] uppercase tracking-widest mt-2">
          No Images Available
        </Text>
      </View>
    );
  }

  return (
    <View className="relative w-full h-48 mb-4 overflow-hidden rounded-3xl shadow-lg">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.round(
            e.nativeEvent.contentOffset.x / (width - 48),
          );
          setActiveIndex(newIndex);
        }}
      >
        {parsedImages.map((img: string, i: number) => (
          <Image
            key={i}
            source={{ uri: `${API_BASE}${img}` }}
            className="h-full object-cover"
            style={{ width: width - 48 }}
          />
        ))}
      </ScrollView>

      {/* Dots Indicator */}
      {parsedImages.length > 1 && (
        <View className="absolute bottom-3 w-full flex-row justify-center space-x-1">
          {parsedImages.map((_: any, i: number) => (
            <View
              key={i}
              className={`h-1 rounded-full ${i === activeIndex ? "w-4 bg-emerald-500" : "w-1 bg-white/30"}`}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const ProfileInventoryScreen = ({ navigation }: any) => {
  const [ads, setAds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchMyAds = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      if (!savedUser) return;
      const userId = JSON.parse(savedUser).id;

      const res = await axios.get(`${API_BASE}/api/cars/my-ads/${userId}`);
      setAds(res.data);
    } catch (err) {
      console.error("Fetch Ads Error:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchMyAds();
  }, []);

  const handleDeleteAd = (adId: number) => {
    Alert.alert("Delete Listing", "Are you sure you want to delete this ad?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await axios.delete(`${API_BASE}/api/cars/${adId}`);
            setAds(ads.filter((ad) => ad.id !== adId));
          } catch (err) {
            Alert.alert("Error", "Failed to delete ad.");
          }
        },
      },
    ]);
  };

  const handleMarkAsSold = async (adId: number) => {
    Alert.alert("Sold Status", "Mark this vehicle as sold?", [
      { text: "No" },
      {
        text: "Yes, Sold",
        onPress: async () => {
          try {
            await axios.put(`${API_BASE}/api/users/mark-sold/${adId}`);
            fetchMyAds(); // Refresh data
          } catch (err) {
            Alert.alert("Error", "Update failed.");
          }
        },
      },
    ]);
  };

  const renderAdCard = ({ item }: { item: any }) => (
    <View
      className={`bg-zinc-900 border border-white/5 rounded-[30px] p-4 mb-6 relative overflow-hidden ${item.status === "sold" ? "opacity-70" : ""}`}
    >
      {/* Sold Ribbon */}
      {item.status === "sold" && (
        <View className="absolute top-6 -left-8 bg-red-600 px-10 py-1 -rotate-45 z-10 shadow-lg">
          <Text className="text-white text-[9px] font-black uppercase tracking-tighter">
            SOLD
          </Text>
        </View>
      )}

      {/* Image Slider */}
      <VehicleImageSlider images={item.images} />

      {/* Details Area */}
      <View className="flex-row justify-between items-start mb-4">
        <View className="flex-1 pr-2">
          <Text
            className="text-white text-lg font-black uppercase tracking-tighter"
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <Text
            className={`text-xl font-black tracking-tighter mt-1 ${item.status === "sold" ? "text-zinc-600 line-through" : "text-emerald-500"}`}
          >
            LKR {item.price?.toLocaleString()}
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row space-x-2">
          {item.status !== "sold" && (
            <TouchableOpacity
              onPress={() => handleMarkAsSold(item.id)}
              className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20"
            >
              <Feather name="check-circle" size={16} color="#10b981" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            className="p-3 bg-zinc-800 rounded-2xl border border-white/5"
            onPress={() => navigation.navigate("EditAdPage", { ad: item })}
          >
            <Feather name="edit-3" size={16} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="p-3 bg-zinc-800 rounded-2xl border border-white/5"
            onPress={() => handleDeleteAd(item.id)}
          >
            <Feather name="trash-2" size={16} color="#ef4444" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Specs Grid */}
      <View className="flex-row justify-between border-t border-white/5 pt-4">
        <View className="items-center flex-1">
          <Feather name="calendar" size={14} color="#10b981" />
          <Text className="text-white text-[10px] font-black mt-1">
            {item.year}
          </Text>
        </View>
        <View className="items-center flex-1 border-x border-white/5">
          <MaterialCommunityIcons name="gauge" size={14} color="#10b981" />
          <Text className="text-white text-[10px] font-black mt-1">
            {item.mileage?.toLocaleString()} KM
          </Text>
        </View>
        <View className="items-center flex-1">
          <MaterialCommunityIcons name="fuel" size={14} color="#10b981" />
          <Text className="text-white text-[10px] font-black mt-1">
            {item.fuel}
          </Text>
        </View>
      </View>

      {/* Location */}
      <View className="mt-4 flex-row items-center bg-white/5 self-start px-3 py-1.5 rounded-lg border border-white/5">
        <Ionicons name="location-sharp" size={10} color="#10b981" />
        <Text className="text-zinc-500 text-[9px] font-black uppercase ml-1">
          {item.location}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-black pt-12">
      {/* Header */}
      <View className="px-6 flex-row justify-between items-center mb-6">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="mr-4"
          >
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <View>
            <Text className="text-white text-3xl font-black uppercase tracking-tighter">
              Inventory
            </Text>
            <View className="bg-emerald-500/10 self-start px-3 py-1 rounded-full mt-1 border border-emerald-500/20">
              <Text className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                {ads.length} Items
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          className="p-3 bg-zinc-900 rounded-2xl border border-white/10"
          onPress={() => navigation.navigate("PostAd")}
        >
          <Feather name="plus" size={24} color="#10b981" />
        </TouchableOpacity>
      </View>

      {/* Listings List */}
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#10b981" />
        </View>
      ) : (
        <FlatList
          data={ads}
          renderItem={renderAdCard}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                fetchMyAds();
              }}
              tintColor="#10b981"
            />
          }
          ListEmptyComponent={
            <View className="mt-20 items-center">
              <Text className="text-zinc-600 font-bold uppercase tracking-widest text-xs">
                No Listings Found
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
};

export default ProfileInventoryScreen;
