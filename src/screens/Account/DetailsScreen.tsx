// // // // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // // // import {
// // // // //     Calendar,
// // // // //     ChevronLeft,
// // // // //     ChevronRight,
// // // // //     Clock,
// // // // //     Fuel,
// // // // //     Gauge,
// // // // //     Info,
// // // // //     Mail,
// // // // //     MapPin,
// // // // //     Phone,
// // // // //     ShieldCheck,
// // // // //     UserCheck,
// // // // // } from "lucide-react-native";
// // // // // import React, { useEffect, useState } from "react";
// // // // // import {
// // // // //     ActivityIndicator,
// // // // //     Dimensions,
// // // // //     Image,
// // // // //     Linking,
// // // // //     SafeAreaView,
// // // // //     ScrollView,
// // // // //     Text,
// // // // //     TouchableOpacity,
// // // // //     View,
// // // // // } from "react-native";

// // // // // const { width } = Dimensions.get("window");
// // // // // const BASE_URL = "http://192.168.43.254:5000"; // ඔබේ IP එක මෙහි යොදන්න

// // // // // const DetailsScreen = () => {
// // // // //   const route = useRoute();
// // // // //   const navigation = useNavigation();
// // // // //   const { id } = route.params as { id: string };

// // // // //   const [car, setCar] = useState<any>(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState<string | null>(null);
// // // // //   const [selectedImage, setSelectedImage] = useState(0);

// // // // //   useEffect(() => {
// // // // //     fetchCarDetails();
// // // // //   }, [id]);

// // // // //   const fetchCarDetails = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const res = await fetch(`${BASE_URL}/api/listings`);
// // // // //       const data = await res.json();

// // // // //       // ID එකට අදාළ දත්ත සෙවීම
// // // // //       const found = data.find((item: any) => item.id === parseInt(id, 10));

// // // // //       if (!found) throw new Error("Vehicle not found");

// // // // //       setCar(found);
// // // // //     } catch (err: any) {
// // // // //       setError(err.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <View className="flex-1 bg-black items-center justify-center">
// // // // //         <ActivityIndicator color="#10b981" size="large" />
// // // // //         <Text className="text-emerald-500 font-bold mt-4 tracking-widest">
// // // // //           LOADING DETAILS...
// // // // //         </Text>
// // // // //       </View>
// // // // //     );
// // // // //   }

// // // // //   if (error || !car) {
// // // // //     return (
// // // // //       <View className="flex-1 bg-black items-center justify-center p-6">
// // // // //         <Text className="text-red-500 text-center">
// // // // //           {error || "Something went wrong"}
// // // // //         </Text>
// // // // //         <TouchableOpacity
// // // // //           onPress={() => navigation.goBack()}
// // // // //           className="mt-4 bg-emerald-500 px-6 py-2 rounded-full"
// // // // //         >
// // // // //           <Text className="font-bold">Go Back</Text>
// // // // //         </TouchableOpacity>
// // // // //       </View>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <SafeAreaView className="flex-1 bg-[#050505]">
// // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // //         {/* Header Navigation */}
// // // // //         <View className="px-6 py-4 flex-row items-center justify-between">
// // // // //           <TouchableOpacity
// // // // //             onPress={() => navigation.goBack()}
// // // // //             className="bg-white/5 p-2 rounded-full border border-white/10"
// // // // //           >
// // // // //             <ChevronLeft size={24} color="#10b981" />
// // // // //           </TouchableOpacity>
// // // // //           <Text className="text-white font-black text-[10px] uppercase tracking-widest">
// // // // //             Vehicle Details
// // // // //           </Text>
// // // // //           <View className="w-10" />
// // // // //         </View>

// // // // //         {/* Image Gallery */}
// // // // //         <View className="px-4">
// // // // //           <View className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5">
// // // // //             <Image
// // // // //               source={{ uri: `${BASE_URL}${car.images[selectedImage]}` }}
// // // // //               className="w-full h-full object-cover"
// // // // //             />
// // // // //           </View>

// // // // //           <ScrollView
// // // // //             horizontal
// // // // //             showsHorizontalScrollIndicator={false}
// // // // //             className="flex-row mt-4 px-2"
// // // // //           >
// // // // //             {car.images.map((img: string, idx: number) => (
// // // // //               <TouchableOpacity
// // // // //                 key={idx}
// // // // //                 onPress={() => setSelectedImage(idx)}
// // // // //                 className={`mr-3 rounded-2xl overflow-hidden border-2 ${selectedImage === idx ? "border-emerald-500" : "border-transparent opacity-50"}`}
// // // // //               >
// // // // //                 <Image
// // // // //                   source={{ uri: `${BASE_URL}${img}` }}
// // // // //                   className="w-20 h-14"
// // // // //                 />
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </ScrollView>
// // // // //         </View>

// // // // //         {/* Title & Price */}
// // // // //         <View className="px-6 mt-8 space-y-4">
// // // // //           <View className="flex-row items-center bg-emerald-500/10 self-start px-3 py-1 rounded-md border border-emerald-500/20">
// // // // //             <Clock size={12} color="#10b981" />
// // // // //             <Text className="text-emerald-500 text-[10px] font-black uppercase ml-2">
// // // // //               Posted {new Date(car.created_at).toLocaleDateString("en-GB")}
// // // // //             </Text>
// // // // //           </View>

// // // // //           <Text className="text-white text-4xl font-black italic uppercase tracking-tighter leading-tight">
// // // // //             {car.make} {car.model}
// // // // //           </Text>
// // // // //           <Text className="text-emerald-400 text-3xl font-bold">
// // // // //             Rs. {Number(car.price).toLocaleString()}
// // // // //           </Text>
// // // // //         </View>

// // // // //         {/* Quick Specs Grid */}
// // // // //         <View className="px-6 mt-8 flex-row flex-wrap justify-between">
// // // // //           <SpecCard
// // // // //             icon={<Calendar size={18} color="#6b7280" />}
// // // // //             label="Year"
// // // // //             value={car.year}
// // // // //           />
// // // // //           <SpecCard
// // // // //             icon={<Gauge size={18} color="#6b7280" />}
// // // // //             label="Mileage"
// // // // //             value={`${Number(car.mileage).toLocaleString()} km`}
// // // // //           />
// // // // //           <SpecCard
// // // // //             icon={<Fuel size={18} color="#6b7280" />}
// // // // //             label="Fuel"
// // // // //             value={car.fuel}
// // // // //           />
// // // // //           <SpecCard
// // // // //             icon={<MapPin size={18} color="#6b7280" />}
// // // // //             label="Location"
// // // // //             value={car.location}
// // // // //           />
// // // // //         </View>

// // // // //         {/* Seller Info */}
// // // // //         <View className="px-6 mt-10">
// // // // //           <Text className="text-emerald-500 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
// // // // //             Contact Information
// // // // //           </Text>

// // // // //           <View className="flex-row items-center p-5 bg-white/5 rounded-[2.5rem] border border-white/10">
// // // // //             <View className="relative">
// // // // //               <View className="w-16 h-16 bg-emerald-500 rounded-full items-center justify-center shadow-lg">
// // // // //                 <Text className="text-black text-2xl font-black">
// // // // //                   {car.name[0]}
// // // // //                 </Text>
// // // // //               </View>
// // // // //               <View className="absolute -bottom-1 -right-1 bg-black rounded-full p-1 border border-white/10">
// // // // //                 <UserCheck size={14} color="#10b981" />
// // // // //               </View>
// // // // //             </View>
// // // // //             <View className="ml-5">
// // // // //               <Text className="text-white text-xl font-bold">{car.name}</Text>
// // // // //               <View className="flex-row items-center mt-1">
// // // // //                 <ShieldCheck size={12} color="#10b981" />
// // // // //                 <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-widest ml-1">
// // // // //                   Verified Merchant
// // // // //                 </Text>
// // // // //               </View>
// // // // //             </View>
// // // // //           </View>

// // // // //           {/* Contact Buttons */}
// // // // //           <View className="mt-4 space-y-3">
// // // // //             <TouchableOpacity
// // // // //               onPress={() => Linking.openURL(`tel:${car.phone}`)}
// // // // //               className="bg-emerald-500 flex-row items-center justify-between p-5 rounded-3xl shadow-xl"
// // // // //             >
// // // // //               <View className="flex-row items-center">
// // // // //                 <View className="bg-black/10 p-2 rounded-xl mr-4">
// // // // //                   <Phone size={20} color="black" />
// // // // //                 </View>
// // // // //                 <View>
// // // // //                   <Text className="text-black text-[9px] font-black uppercase opacity-60">
// // // // //                     Primary Contact
// // // // //                   </Text>
// // // // //                   <Text className="text-black text-lg font-black tracking-widest">
// // // // //                     {car.phone}
// // // // //                   </Text>
// // // // //                 </View>
// // // // //               </View>
// // // // //               <ChevronRight size={20} color="black" />
// // // // //             </TouchableOpacity>

// // // // //             <TouchableOpacity
// // // // //               onPress={() => Linking.openURL(`mailto:${car.email}`)}
// // // // //               className="bg-white/5 border border-white/10 flex-row items-center justify-between p-5 rounded-3xl"
// // // // //             >
// // // // //               <View className="flex-row items-center">
// // // // //                 <View className="bg-emerald-500/10 p-2 rounded-xl mr-4">
// // // // //                   <Mail size={20} color="#10b981" />
// // // // //                 </View>
// // // // //                 <View>
// // // // //                   <Text className="text-gray-500 text-[9px] font-black uppercase tracking-widest">
// // // // //                     Official Email
// // // // //                   </Text>
// // // // //                   <Text className="text-white text-sm font-bold">
// // // // //                     {car.email || "Not provided"}
// // // // //                   </Text>
// // // // //                 </View>
// // // // //               </View>
// // // // //               <ChevronRight size={20} color="#4b5563" />
// // // // //             </TouchableOpacity>
// // // // //           </View>
// // // // //         </View>

// // // // //         {/* Description */}
// // // // //         <View className="px-6 mt-10 mb-20">
// // // // //           <View className="flex-row items-center mb-3">
// // // // //             <Info size={14} color="#10b981" />
// // // // //             <Text className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2">
// // // // //               Vehicle Description
// // // // //             </Text>
// // // // //           </View>
// // // // //           <View className="p-6 bg-white/5 rounded-[2rem] border border-white/5">
// // // // //             <Text className="text-gray-400 italic leading-6 text-sm">
// // // // //               "{car.description || "No description provided for this vehicle."}"
// // // // //             </Text>
// // // // //           </View>
// // // // //         </View>
// // // // //       </ScrollView>
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // };

// // // // // // Component for Quick Specs Cards
// // // // // const SpecCard = ({ icon, label, value }: any) => (
// // // // //   <View
// // // // //     style={{ width: width * 0.42 }}
// // // // //     className="p-4 bg-white/5 border border-white/10 rounded-2xl mb-3"
// // // // //   >
// // // // //     <View className="flex-row items-center mb-1">
// // // // //       {icon}
// // // // //       <Text className="text-[10px] text-gray-500 font-bold uppercase ml-2">
// // // // //         {label}
// // // // //       </Text>
// // // // //     </View>
// // // // //     <Text className="text-white font-bold text-sm">{value}</Text>
// // // // //   </View>
// // // // // );

// // // // // export default DetailsScreen;

// // // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // // import {
// // // //     Calendar,
// // // //     ChevronLeft,
// // // //     ChevronRight,
// // // //     Clock,
// // // //     Fuel,
// // // //     Gauge,
// // // //     Info,
// // // //     Mail,
// // // //     MapPin,
// // // //     Phone,
// // // //     ShieldCheck,
// // // //     UserCheck,
// // // // } from "lucide-react-native";
// // // // import React, { useEffect, useState } from "react";
// // // // import {
// // // //     ActivityIndicator,
// // // //     Dimensions,
// // // //     Image,
// // // //     Linking,
// // // //     SafeAreaView,
// // // //     ScrollView,
// // // //     Text,
// // // //     TouchableOpacity,
// // // //     View,
// // // // } from "react-native";

// // // // const { width } = Dimensions.get("window");
// // // // const BASE_URL = "http://192.168.43.254:5000";

// // // // const DetailsScreen = () => {
// // // //   const route = useRoute();
// // // //   const navigation = useNavigation();
// // // //   const { id } = route.params as { id: number };

// // // //   const [car, setCar] = useState<any>(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState<string | null>(null);
// // // //   const [selectedImage, setSelectedImage] = useState(0);

// // // //   useEffect(() => {
// // // //     fetchCarDetails();
// // // //   }, [id]);

// // // //   const fetchCarDetails = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       const res = await fetch(`${BASE_URL}/api/listings`);
// // // //       const data = await res.json();

// // // //       // ID එකට අදාළ දත්ත සෙවීම
// // // //       const found = data.find((item: any) => item.id === id);

// // // //       if (!found) throw new Error("Vehicle not found");

// // // //       setCar(found);
// // // //     } catch (err: any) {
// // // //       setError(err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <View className="flex-1 bg-black items-center justify-center">
// // // //         <ActivityIndicator color="#10b981" size="large" />
// // // //         <Text className="text-emerald-500 font-bold mt-4 tracking-widest">
// // // //           LOADING DETAILS...
// // // //         </Text>
// // // //       </View>
// // // //     );
// // // //   }

// // // //   if (error || !car) {
// // // //     return (
// // // //       <View className="flex-1 bg-black items-center justify-center p-6">
// // // //         <Text className="text-red-500 text-center">{error}</Text>
// // // //         <TouchableOpacity
// // // //           onPress={() => navigation.goBack()}
// // // //           className="mt-4 bg-emerald-500 px-6 py-2 rounded-full"
// // // //         >
// // // //           <Text className="font-bold">Go Back</Text>
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <SafeAreaView className="flex-1 bg-[#050505]">
// // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // //         {/* Header Navigation */}
// // // //         <View className="px-6 py-4 flex-row items-center justify-between">
// // // //           <TouchableOpacity
// // // //             onPress={() => navigation.goBack()}
// // // //             className="bg-white/5 p-2 rounded-full border border-white/10"
// // // //           >
// // // //             <ChevronLeft size={24} color="#10b981" />
// // // //           </TouchableOpacity>
// // // //           <Text className="text-white font-black text-[10px] uppercase tracking-widest">
// // // //             Vehicle Profile
// // // //           </Text>
// // // //           <View className="w-10" />
// // // //         </View>

// // // //         {/* Image Gallery */}
// // // //         <View className="px-4">
// // // //           <View className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5">
// // // //             <Image
// // // //               source={{
// // // //                 uri:
// // // //                   car.images && car.images.length > 0
// // // //                     ? car.images[selectedImage].startsWith("http")
// // // //                       ? car.images[selectedImage]
// // // //                       : `${BASE_URL}${car.images[selectedImage]}`
// // // //                     : "https://via.placeholder.com/400",
// // // //               }}
// // // //               className="w-full h-full"
// // // //               resizeMode="cover"
// // // //             />
// // // //           </View>

// // // //           <ScrollView
// // // //             horizontal
// // // //             showsHorizontalScrollIndicator={false}
// // // //             className="flex-row mt-4 px-2"
// // // //           >
// // // //             {car.images?.map((img: string, idx: number) => (
// // // //               <TouchableOpacity
// // // //                 key={idx}
// // // //                 onPress={() => setSelectedImage(idx)}
// // // //                 className={`mr-3 rounded-2xl overflow-hidden border-2 ${selectedImage === idx ? "border-emerald-500" : "border-transparent opacity-50"}`}
// // // //               >
// // // //                 <Image
// // // //                   source={{
// // // //                     uri: img.startsWith("http") ? img : `${BASE_URL}${img}`,
// // // //                   }}
// // // //                   className="w-20 h-14"
// // // //                 />
// // // //               </TouchableOpacity>
// // // //             ))}
// // // //           </ScrollView>
// // // //         </View>

// // // //         {/* Title & Price */}
// // // //         <View className="px-6 mt-8 space-y-4">
// // // //           <View className="flex-row items-center bg-emerald-500/10 self-start px-3 py-1 rounded-md border border-emerald-500/20">
// // // //             <Clock size={12} color="#10b981" />
// // // //             <Text className="text-emerald-500 text-[10px] font-black uppercase ml-2">
// // // //               Verified Listing
// // // //             </Text>
// // // //           </View>

// // // //           <Text className="text-white text-4xl font-black italic uppercase tracking-tighter leading-tight">
// // // //             {car.name}
// // // //           </Text>
// // // //           <Text className="text-emerald-400 text-3xl font-bold">
// // // //             Rs. {Number(car.price).toLocaleString()}
// // // //           </Text>
// // // //         </View>

// // // //         {/* Quick Specs Grid */}
// // // //         <View className="px-6 mt-8 flex-row flex-wrap justify-between">
// // // //           <SpecCard
// // // //             icon={<Calendar size={18} color="#6b7280" />}
// // // //             label="Year"
// // // //             value={car.year}
// // // //           />
// // // //           <SpecCard
// // // //             icon={<Gauge size={18} color="#6b7280" />}
// // // //             label="Mileage"
// // // //             value={`${Number(car.mileage).toLocaleString()} km`}
// // // //           />
// // // //           <SpecCard
// // // //             icon={<Fuel size={18} color="#6b7280" />}
// // // //             label="Fuel"
// // // //             value={car.fuel}
// // // //           />
// // // //           <SpecCard
// // // //             icon={<MapPin size={18} color="#6b7280" />}
// // // //             label="Location"
// // // //             value={car.location}
// // // //           />
// // // //         </View>

// // // //         {/* Seller Info (REGISTERED USER DATA) */}
// // // //         <View className="px-6 mt-10">
// // // //           <Text className="text-emerald-500 text-[11px] font-black uppercase tracking-[0.3em] mb-4">
// // // //             Contact Merchant
// // // //           </Text>

// // // //           <View className="flex-row items-center p-5 bg-white/5 rounded-[2.5rem] border border-white/10">
// // // //             <View className="relative">
// // // //               {car.seller_image ? (
// // // //                 <Image
// // // //                   source={{
// // // //                     uri: car.seller_image.startsWith("http")
// // // //                       ? car.seller_image
// // // //                       : `${BASE_URL}${car.seller_image}`,
// // // //                   }}
// // // //                   className="w-16 h-16 rounded-full border-2 border-emerald-500"
// // // //                 />
// // // //               ) : (
// // // //                 <View className="w-16 h-16 bg-emerald-500 rounded-full items-center justify-center shadow-lg">
// // // //                   <Text className="text-black text-2xl font-black">
// // // //                     {car.seller_name ? car.seller_name[0] : "S"}
// // // //                   </Text>
// // // //                 </View>
// // // //               )}
// // // //               <View className="absolute -bottom-1 -right-1 bg-black rounded-full p-1 border border-white/10">
// // // //                 <UserCheck size={14} color="#10b981" />
// // // //               </View>
// // // //             </View>

// // // //             <View className="ml-5">
// // // //               <Text className="text-white text-xl font-bold">
// // // //                 {car.seller_name}
// // // //               </Text>
// // // //               <View className="flex-row items-center mt-1">
// // // //                 <ShieldCheck size={12} color="#10b981" />
// // // //                 <Text className="text-gray-400 text-[10px] font-bold uppercase tracking-widest ml-1">
// // // //                   Identity Verified
// // // //                 </Text>
// // // //               </View>
// // // //             </View>
// // // //           </View>

// // // //           {/* Contact Buttons */}
// // // //           <View className="mt-4 space-y-3">
// // // //             <TouchableOpacity
// // // //               onPress={() => Linking.openURL(`tel:${car.seller_phone}`)}
// // // //               className="bg-emerald-500 flex-row items-center justify-between p-5 rounded-3xl"
// // // //             >
// // // //               <View className="flex-row items-center">
// // // //                 <View className="bg-black/10 p-2 rounded-xl mr-4">
// // // //                   <Phone size={20} color="black" />
// // // //                 </View>
// // // //                 <View>
// // // //                   <Text className="text-black text-[9px] font-black uppercase opacity-60">
// // // //                     Verified Phone
// // // //                   </Text>
// // // //                   <Text className="text-black text-lg font-black tracking-widest">
// // // //                     {car.seller_phone}
// // // //                   </Text>
// // // //                 </View>
// // // //               </View>
// // // //               <ChevronRight size={20} color="black" />
// // // //             </TouchableOpacity>

// // // //             <TouchableOpacity
// // // //               onPress={() => Linking.openURL(`mailto:${car.seller_email}`)}
// // // //               className="bg-white/5 border border-white/10 flex-row items-center justify-between p-5 rounded-3xl"
// // // //             >
// // // //               <View className="flex-row items-center">
// // // //                 <View className="bg-emerald-500/10 p-2 rounded-xl mr-4">
// // // //                   <Mail size={20} color="#10b981" />
// // // //                 </View>
// // // //                 <View>
// // // //                   <Text className="text-gray-500 text-[9px] font-black uppercase tracking-widest">
// // // //                     Inquiry Email
// // // //                   </Text>
// // // //                   <Text className="text-white text-sm font-bold">
// // // //                     {car.seller_email}
// // // //                   </Text>
// // // //                 </View>
// // // //               </View>
// // // //               <ChevronRight size={20} color="#4b5563" />
// // // //             </TouchableOpacity>
// // // //           </View>
// // // //         </View>

// // // //         {/* Description */}
// // // //         <View className="px-6 mt-10 mb-20">
// // // //           <View className="flex-row items-center mb-3">
// // // //             <Info size={14} color="#10b981" />
// // // //             <Text className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2">
// // // //               Vehicle Description
// // // //             </Text>
// // // //           </View>
// // // //           <View className="p-6 bg-white/5 rounded-[2rem] border border-white/5">
// // // //             <Text className="text-gray-400 italic leading-6 text-sm">
// // // //               "{car.description || "No additional description provided."}"
// // // //             </Text>
// // // //           </View>
// // // //         </View>
// // // //       </ScrollView>
// // // //     </SafeAreaView>
// // // //   );
// // // // };

// // // // const SpecCard = ({ icon, label, value }: any) => (
// // // //   <View
// // // //     style={{ width: width * 0.42 }}
// // // //     className="p-4 bg-white/5 border border-white/10 rounded-2xl mb-3"
// // // //   >
// // // //     <View className="flex-row items-center mb-1">
// // // //       {icon}
// // // //       <Text className="text-[10px] text-gray-500 font-bold uppercase ml-2">
// // // //         {label}
// // // //       </Text>
// // // //     </View>
// // // //     <Text className="text-white font-bold text-sm">{value}</Text>
// // // //   </View>
// // // // );

// // // // export default DetailsScreen;

// // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // import {
// // //     Calendar,
// // //     ChevronLeft,
// // //     ChevronRight,
// // //     Clock,
// // //     Fuel,
// // //     Gauge,
// // //     Info,
// // //     Mail,
// // //     MapPin,
// // //     Phone,
// // //     ShieldCheck,
// // //     UserCheck,
// // // } from "lucide-react-native";
// // // import React, { useEffect, useState } from "react";
// // // import {
// // //     ActivityIndicator,
// // //     Dimensions,
// // //     Image,
// // //     Linking,
// // //     SafeAreaView,
// // //     ScrollView,
// // //     Text,
// // //     TouchableOpacity,
// // //     View,
// // // } from "react-native";

// // // const { width } = Dimensions.get("window");
// // // // ඔබේ Backend URL එක මෙහි නිවැරදිව පරීක්ෂා කරන්න
// // // const BASE_URL = "http://192.168.43.254:5000";

// // // const DetailsScreen = () => {
// // //   const route = useRoute();
// // //   const navigation = useNavigation();
// // //   const { id } = route.params as { id: number };

// // //   const [car, setCar] = useState<any>(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState<string | null>(null);
// // //   const [selectedImage, setSelectedImage] = useState(0);

// // //   useEffect(() => {
// // //     fetchCarDetails();
// // //   }, [id]);

// // //   const fetchCarDetails = async () => {
// // //     try {
// // //       setLoading(true);
// // //       // Backend එකේ GET /listings route එකෙන් සියලුම දත්ත ලබා ගනී
// // //       const res = await fetch(`${BASE_URL}/api/listings`);
// // //       const data = await res.json();

// // //       // පරාමිතියක් ලෙස ලැබුණු ID එකට අදාළ වාහනය සොයා ගනී
// // //       const found = data.find((item: any) => item.id === id);

// // //       if (!found) throw new Error("Vehicle listing not found");

// // //       setCar(found);
// // //     } catch (err: any) {
// // //       setError(err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <View className="flex-1 bg-black items-center justify-center">
// // //         <ActivityIndicator color="#10b981" size="large" />
// // //         <Text className="text-emerald-500 font-bold mt-4 tracking-widest italic">
// // //           SYNCING ENGINE...
// // //         </Text>
// // //       </View>
// // //     );
// // //   }

// // //   if (error || !car) {
// // //     return (
// // //       <View className="flex-1 bg-black items-center justify-center p-6">
// // //         <Text className="text-red-500 text-center font-bold">{error}</Text>
// // //         <TouchableOpacity
// // //           onPress={() => navigation.goBack()}
// // //           className="mt-6 bg-emerald-500 px-8 py-3 rounded-2xl"
// // //         >
// // //           <Text className="font-black uppercase">Go Back</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     );
// // //   }

// // //   return (
// // //     <SafeAreaView className="flex-1 bg-[#050505]">
// // //       <ScrollView showsVerticalScrollIndicator={false}>
// // //         {/* Header Navigation */}
// // //         <View className="px-6 py-4 flex-row items-center justify-between">
// // //           <TouchableOpacity
// // //             onPress={() => navigation.goBack()}
// // //             className="bg-white/5 p-2 rounded-full border border-white/10"
// // //           >
// // //             <ChevronLeft size={24} color="#10b981" />
// // //           </TouchableOpacity>
// // //           <Text className="text-white font-black text-[10px] uppercase tracking-[0.3em]">
// // //             Asset Details
// // //           </Text>
// // //           <View className="w-10" />
// // //         </View>

// // //         {/* Hero Image Gallery */}
// // //         <View className="px-4">
// // //           <View className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-emerald-500/20">
// // //             <Image
// // //               source={{
// // //                 uri:
// // //                   car.images && car.images.length > 0
// // //                     ? car.images[selectedImage].startsWith("http")
// // //                       ? car.images[selectedImage]
// // //                       : `${BASE_URL}${car.images[selectedImage]}`
// // //                     : "https://via.placeholder.com/400",
// // //               }}
// // //               className="w-full h-full"
// // //               resizeMode="cover"
// // //             />
// // //           </View>

// // //           {/* Thumbnail Strip */}
// // //           <ScrollView
// // //             horizontal
// // //             showsHorizontalScrollIndicator={false}
// // //             className="flex-row mt-5 px-2"
// // //           >
// // //             {car.images?.map((img: string, idx: number) => (
// // //               <TouchableOpacity
// // //                 key={idx}
// // //                 onPress={() => setSelectedImage(idx)}
// // //                 className={`mr-3 rounded-2xl overflow-hidden border-2 ${
// // //                   selectedImage === idx
// // //                     ? "border-emerald-500"
// // //                     : "border-transparent opacity-40"
// // //                 }`}
// // //               >
// // //                 <Image
// // //                   source={{
// // //                     uri: img.startsWith("http") ? img : `${BASE_URL}${img}`,
// // //                   }}
// // //                   className="w-20 h-14"
// // //                 />
// // //               </TouchableOpacity>
// // //             ))}
// // //           </ScrollView>
// // //         </View>

// // //         {/* Primary Stats */}
// // //         <View className="px-6 mt-8">
// // //           <View className="flex-row items-center bg-emerald-500/10 self-start px-3 py-1 rounded-md border border-emerald-500/20 mb-4">
// // //             <Clock size={12} color="#10b981" />
// // //             <Text className="text-emerald-500 text-[10px] font-black uppercase ml-2 tracking-widest">
// // //               Available Now
// // //             </Text>
// // //           </View>

// // //           <Text className="text-white text-4xl font-black italic uppercase tracking-tighter leading-tight">
// // //             {car.name}
// // //           </Text>
// // //           <Text className="text-emerald-400 text-3xl font-bold mt-2">
// // //             Rs. {Number(car.price).toLocaleString()}
// // //           </Text>
// // //         </View>

// // //         {/* Technical Specs Grid */}
// // //         <View className="px-6 mt-8 flex-row flex-wrap justify-between">
// // //           <SpecCard
// // //             icon={<Calendar size={18} color="#6b7280" />}
// // //             label="Year"
// // //             value={car.year}
// // //           />
// // //           <SpecCard
// // //             icon={<Gauge size={18} color="#6b7280" />}
// // //             label="Mileage"
// // //             value={`${Number(car.mileage).toLocaleString()} km`}
// // //           />
// // //           <SpecCard
// // //             icon={<Fuel size={18} color="#6b7280" />}
// // //             label="Fuel Type"
// // //             value={car.fuel}
// // //           />
// // //           <SpecCard
// // //             icon={<MapPin size={18} color="#6b7280" />}
// // //             label="City"
// // //             value={car.location}
// // //           />
// // //         </View>

// // //         {/* Merchant Card (Actual User from DB) */}
// // //         <View className="px-6 mt-10">
// // //           <Text className="text-emerald-500 text-[11px] font-black uppercase tracking-[0.4em] mb-5">
// // //             Verified Merchant
// // //           </Text>

// // //           <View className="flex-row items-center p-6 bg-white/5 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
// // //             <View className="relative">
// // //               {car.seller_image ? (
// // //                 <Image
// // //                   source={{
// // //                     uri: car.seller_image.startsWith("http")
// // //                       ? car.seller_image
// // //                       : `${BASE_URL}${car.seller_image}`,
// // //                   }}
// // //                   className="w-16 h-16 rounded-full border-2 border-emerald-500/50"
// // //                 />
// // //               ) : (
// // //                 <View className="w-16 h-16 bg-emerald-500 rounded-full items-center justify-center">
// // //                   <Text className="text-black text-2xl font-black">
// // //                     {car.seller_name ? car.seller_name[0].toUpperCase() : "S"}
// // //                   </Text>
// // //                 </View>
// // //               )}
// // //               <View className="absolute -bottom-1 -right-1 bg-[#050505] rounded-full p-1 border border-white/10">
// // //                 <UserCheck size={14} color="#10b981" />
// // //               </View>
// // //             </View>

// // //             <View className="ml-5 flex-1">
// // //               <Text className="text-white text-xl font-bold tracking-tight">
// // //                 {car.seller_name || "Private Seller"}
// // //               </Text>
// // //               <View className="flex-row items-center mt-1">
// // //                 <ShieldCheck size={12} color="#10b981" />
// // //                 <Text className="text-emerald-500/60 text-[9px] font-bold uppercase tracking-widest ml-1">
// // //                   Trusted Member
// // //                 </Text>
// // //               </View>
// // //             </View>
// // //           </View>

// // //           {/* Interactive Contact Actions */}
// // //           <View className="mt-4 space-y-3">
// // //             <TouchableOpacity
// // //               onPress={() => Linking.openURL(`tel:${car.seller_phone}`)}
// // //               activeOpacity={0.8}
// // //               className="bg-emerald-500 flex-row items-center justify-between p-5 rounded-3xl"
// // //             >
// // //               <View className="flex-row items-center">
// // //                 <View className="bg-black/10 p-2 rounded-xl mr-4">
// // //                   <Phone size={20} color="black" />
// // //                 </View>
// // //                 <View>
// // //                   <Text className="text-black text-[9px] font-black uppercase opacity-60">
// // //                     Mobile Line
// // //                   </Text>
// // //                   <Text className="text-black text-lg font-black tracking-widest">
// // //                     {car.seller_phone}
// // //                   </Text>
// // //                 </View>
// // //               </View>
// // //               <ChevronRight size={20} color="black" />
// // //             </TouchableOpacity>

// // //             <TouchableOpacity
// // //               onPress={() => Linking.openURL(`mailto:${car.seller_email}`)}
// // //               activeOpacity={0.8}
// // //               className="bg-white/5 border border-white/10 flex-row items-center justify-between p-5 rounded-3xl"
// // //             >
// // //               <View className="flex-row items-center">
// // //                 <View className="bg-emerald-500/10 p-2 rounded-xl mr-4">
// // //                   <Mail size={20} color="#10b981" />
// // //                 </View>
// // //                 <View>
// // //                   <Text className="text-gray-500 text-[9px] font-black uppercase tracking-widest">
// // //                     Inquiry Email
// // //                   </Text>
// // //                   <Text className="text-white text-sm font-bold">
// // //                     {car.seller_email}
// // //                   </Text>
// // //                 </View>
// // //               </View>
// // //               <ChevronRight size={20} color="#4b5563" />
// // //             </TouchableOpacity>
// // //           </View>
// // //         </View>

// // //         {/* Detailed Description */}
// // //         <View className="px-6 mt-10 mb-24">
// // //           <View className="flex-row items-center mb-4">
// // //             <Info size={14} color="#10b981" />
// // //             <Text className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2">
// // //               Merchant's Note
// // //             </Text>
// // //           </View>
// // //           <View className="p-6 bg-white/5 rounded-[2rem] border border-white/5 shadow-inner">
// // //             <Text className="text-gray-400 italic leading-6 text-sm">
// // //               "
// // //               {car.description ||
// // //                 "The merchant has not provided a specific description for this vehicle."}
// // //               "
// // //             </Text>
// // //           </View>
// // //         </View>
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // Generic Specification Component
// // // const SpecCard = ({ icon, label, value }: any) => (
// // //   <View
// // //     style={{ width: width * 0.42 }}
// // //     className="p-5 bg-white/5 border border-white/10 rounded-[1.5rem] mb-4"
// // //   >
// // //     <View className="flex-row items-center mb-2">
// // //       <View className="bg-emerald-500/5 p-1.5 rounded-lg">{icon}</View>
// // //       <Text className="text-[9px] text-gray-500 font-bold uppercase ml-2 tracking-tighter">
// // //         {label}
// // //       </Text>
// // //     </View>
// // //     <Text className="text-white font-black text-sm tracking-tight">
// // //       {value}
// // //     </Text>
// // //   </View>
// // // );

// // // export default DetailsScreen;

// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import {
// //   Calendar,
// //   ChevronLeft,
// //   ChevronRight,
// //   Clock,
// //   Fuel,
// //   Gauge,
// //   Info,
// //   MapPin,
// //   Phone,
// //   ShieldCheck,
// //   UserCheck,
// // } from "lucide-react-native";
// // import React, { useEffect, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   Dimensions,
// //   Image,
// //   Linking,
// //   SafeAreaView,
// //   ScrollView,
// //   Text,
// //   TouchableOpacity,
// //   View,
// // } from "react-native";

// // const { width } = Dimensions.get("window");
// // const BASE_URL = "http://192.168.43.254:5000";

// // const DetailsScreen = () => {
// //   const route = useRoute();
// //   const navigation = useNavigation();
// //   const { id } = route.params as { id: number };

// //   const [car, setCar] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);
// //   const [selectedImage, setSelectedImage] = useState(0);

// //   useEffect(() => {
// //     fetchCarDetails();
// //   }, [id]);

// //   const fetchCarDetails = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await fetch(`${BASE_URL}/api/listings`);
// //       const data = await res.json();
// //       const found = data.find((item: any) => item.id === id);

// //       if (!found) throw new Error("Vehicle listing not found");
// //       setCar(found);
// //     } catch (err: any) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <View className="flex-1 bg-black items-center justify-center">
// //         <ActivityIndicator color="#10b981" size="large" />
// //         <Text className="text-emerald-500 font-bold mt-4 tracking-widest italic">
// //           SYNCING ENGINE...
// //         </Text>
// //       </View>
// //     );
// //   }

// //   if (error || !car) {
// //     return (
// //       <View className="flex-1 bg-black items-center justify-center p-6">
// //         <Text className="text-red-500 text-center font-bold">{error}</Text>
// //         <TouchableOpacity
// //           onPress={() => navigation.goBack()}
// //           className="mt-6 bg-emerald-500 px-8 py-3 rounded-2xl"
// //         >
// //           <Text className="font-black uppercase">Go Back</Text>
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   }

// //   return (
// //     <SafeAreaView className="flex-1 bg-[#050505]">
// //       <ScrollView showsVerticalScrollIndicator={false}>
// //         {/* Header Navigation */}
// //         <View className="px-6 py-4 flex-row items-center justify-between">
// //           <TouchableOpacity
// //             onPress={() => navigation.goBack()}
// //             className="bg-white/5 p-2 rounded-full border border-white/10"
// //           >
// //             <ChevronLeft size={24} color="#10b981" />
// //           </TouchableOpacity>
// //           <Text className="text-white font-black text-[10px] uppercase tracking-[0.3em]">
// //             Asset Details
// //           </Text>
// //           <View className="w-10" />
// //         </View>

// //         {/* Hero Image Gallery */}
// //         <View className="px-4">
// //           <View className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-emerald-500/20">
// //             <Image
// //               source={{
// //                 uri:
// //                   car.images && car.images.length > 0
// //                     ? car.images[selectedImage].startsWith("http")
// //                       ? car.images[selectedImage]
// //                       : `${BASE_URL}${car.images[selectedImage]}`
// //                     : "https://via.placeholder.com/400",
// //               }}
// //               className="w-full h-full"
// //               resizeMode="cover"
// //             />
// //           </View>

// //           {/* Thumbnail Strip */}
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             className="flex-row mt-5 px-2"
// //           >
// //             {car.images?.map((img: string, idx: number) => (
// //               <TouchableOpacity
// //                 key={idx}
// //                 onPress={() => setSelectedImage(idx)}
// //                 className={`mr-3 rounded-2xl overflow-hidden border-2 ${
// //                   selectedImage === idx
// //                     ? "border-emerald-500"
// //                     : "border-transparent opacity-40"
// //                 }`}
// //               >
// //                 <Image
// //                   source={{
// //                     uri: img.startsWith("http") ? img : `${BASE_URL}${img}`,
// //                   }}
// //                   className="w-20 h-14"
// //                 />
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
// //         </View>

// //         {/* Primary Stats */}
// //         <View className="px-6 mt-8">
// //           <View className="flex-row items-center bg-emerald-500/10 self-start px-3 py-1 rounded-md border border-emerald-500/20 mb-4">
// //             <Clock size={12} color="#10b981" />
// //             <Text className="text-emerald-500 text-[10px] font-black uppercase ml-2 tracking-widest">
// //               Available Now
// //             </Text>
// //           </View>

// //           <Text className="text-white text-4xl font-black italic uppercase tracking-tighter leading-tight">
// //             {car.name}
// //           </Text>
// //           <Text className="text-emerald-400 text-3xl font-bold mt-2">
// //             Rs. {Number(car.price).toLocaleString()}
// //           </Text>
// //         </View>

// //         {/* Technical Specs Grid */}
// //         <View className="px-6 mt-8 flex-row flex-wrap justify-between">
// //           <SpecCard
// //             icon={<Calendar size={18} color="#6b7280" />}
// //             label="Year"
// //             value={car.year}
// //           />
// //           <SpecCard
// //             icon={<Gauge size={18} color="#6b7280" />}
// //             label="Mileage"
// //             value={`${Number(car.mileage).toLocaleString()} km`}
// //           />
// //           <SpecCard
// //             icon={<Fuel size={18} color="#6b7280" />}
// //             label="Fuel Type"
// //             value={car.fuel}
// //           />
// //           <SpecCard
// //             icon={<MapPin size={18} color="#6b7280" />}
// //             label="City"
// //             value={car.location}
// //           />
// //         </View>

// //         {/* Merchant Card */}
// //         <View className="px-6 mt-10">
// //           <Text className="text-emerald-500 text-[11px] font-black uppercase tracking-[0.4em] mb-5">
// //             Verified Merchant
// //           </Text>

// //           <View className="flex-row items-center p-6 bg-white/5 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
// //             <View className="relative">
// //               {car.seller_image ? (
// //                 <Image
// //                   source={{
// //                     uri: car.seller_image.startsWith("http")
// //                       ? car.seller_image
// //                       : `${BASE_URL}${car.seller_image}`,
// //                   }}
// //                   className="w-16 h-16 rounded-full border-2 border-emerald-500/50"
// //                 />
// //               ) : (
// //                 <View className="w-16 h-16 bg-emerald-500 rounded-full items-center justify-center">
// //                   <Text className="text-black text-2xl font-black">
// //                     {car.seller_name ? car.seller_name[0].toUpperCase() : "S"}
// //                   </Text>
// //                 </View>
// //               )}
// //               <View className="absolute -bottom-1 -right-1 bg-[#050505] rounded-full p-1 border border-white/10">
// //                 <UserCheck size={14} color="#10b981" />
// //               </View>
// //             </View>

// //             <View className="ml-5 flex-1">
// //               <Text className="text-white text-xl font-bold tracking-tight">
// //                 {car.seller_name || "Private Seller"}
// //               </Text>
// //               <View className="flex-row items-center mt-1">
// //                 <ShieldCheck size={12} color="#10b981" />
// //                 <Text className="text-emerald-500/60 text-[9px] font-bold uppercase tracking-widest ml-1">
// //                   Trusted Member
// //                 </Text>
// //               </View>
// //             </View>
// //           </View>

// //           {/* Call Action Only */}
// //           <View className="mt-4">
// //             <TouchableOpacity
// //               onPress={() => Linking.openURL(`tel:${car.seller_phone}`)}
// //               activeOpacity={0.8}
// //               className="bg-emerald-500 flex-row items-center justify-between p-5 rounded-3xl shadow-lg shadow-emerald-500/20"
// //             >
// //               <View className="flex-row items-center">
// //                 <View className="bg-black/10 p-2 rounded-xl mr-4">
// //                   <Phone size={20} color="black" />
// //                 </View>
// //                 <View>
// //                   <Text className="text-black text-[9px] font-black uppercase opacity-60">
// //                     Mobile Line
// //                   </Text>
// //                   <Text className="text-black text-lg font-black tracking-widest">
// //                     {car.seller_phone}
// //                   </Text>
// //                 </View>
// //               </View>
// //               <ChevronRight size={24} color="black" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         {/* Detailed Description */}
// //         <View className="px-6 mt-10 mb-24">
// //           <View className="flex-row items-center mb-4">
// //             <Info size={14} color="#10b981" />
// //             <Text className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2">
// //               Merchant's Note
// //             </Text>
// //           </View>
// //           <View className="p-6 bg-white/5 rounded-[2rem] border border-white/5 shadow-inner">
// //             <Text className="text-gray-400 italic leading-6 text-sm">
// //               "
// //               {car.description ||
// //                 "The merchant has not provided a specific description for this vehicle."}
// //               "
// //             </Text>
// //           </View>
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // const SpecCard = ({ icon, label, value }: any) => (
// //   <View
// //     style={{ width: width * 0.42 }}
// //     className="p-5 bg-white/5 border border-white/10 rounded-[1.5rem] mb-4"
// //   >
// //     <View className="flex-row items-center mb-2">
// //       <View className="bg-emerald-500/5 p-1.5 rounded-lg">{icon}</View>
// //       <Text className="text-[9px] text-gray-500 font-bold uppercase ml-2 tracking-tighter">
// //         {label}
// //       </Text>
// //     </View>
// //     <Text className="text-white font-black text-sm tracking-tight">
// //       {value}
// //     </Text>
// //   </View>
// // );

// // export default DetailsScreen;

// import { useNavigation, useRoute } from "@react-navigation/native";
// import {
//   Calendar,
//   ChevronLeft,
//   ChevronRight,
//   Clock,
//   Fuel,
//   Gauge,
//   Info,
//   MapPin,
//   Phone,
//   ShieldCheck,
//   UserCheck,
// } from "lucide-react-native";
// import React, { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   Dimensions,
//   Image,
//   Linking,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const { width } = Dimensions.get("window");
// const BASE_URL = "http://192.168.43.254:5000";

// const DetailsScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { id } = route.params as { id: number };

//   const [car, setCar] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [images, setImages] = useState<string[]>([]);

//   useEffect(() => {
//     fetchCarDetails();
//   }, [id]);

//   // --- පින්තූර Auto Slide වීමේ Logic එක ---
//   useEffect(() => {
//     if (images.length > 1) {
//       const interval = setInterval(() => {
//         setSelectedImage((prev) => (prev + 1) % images.length);
//       }, 3500); // තත්පර 3.5 කට වරක් මාරු වේ

//       return () => clearInterval(interval);
//     }
//   }, [images]);

//   const fetchCarDetails = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${BASE_URL}/api/listings`);
//       const data = await res.json();
//       const found = data.find((item: any) => item.id === id);

//       if (!found) throw new Error("Vehicle listing not found");

//       setCar(found);

//       // Database එකේ String එකක් ලෙස ඇති images array එකක් බවට පත් කිරීම
//       let parsedImages = [];
//       try {
//         parsedImages =
//           typeof found.images === "string"
//             ? JSON.parse(found.images)
//             : found.images;
//       } catch (e) {
//         parsedImages = [];
//       }
//       setImages(parsedImages);
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getFullImageUrl = (path: string) => {
//     if (!path) return "https://via.placeholder.com/400";
//     return path.startsWith("http") ? path : `${BASE_URL}${path}`;
//   };

//   if (loading) {
//     return (
//       <View className="flex-1 bg-black items-center justify-center">
//         <ActivityIndicator color="#10b981" size="large" />
//         <Text className="text-emerald-500 font-bold mt-4 tracking-widest italic text-xs">
//           IGNITING ENGINE...
//         </Text>
//       </View>
//     );
//   }

//   if (error || !car) {
//     return (
//       <View className="flex-1 bg-black items-center justify-center p-6">
//         <Text className="text-red-500 text-center font-bold">{error}</Text>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           className="mt-6 bg-emerald-500 px-8 py-3 rounded-2xl"
//         >
//           <Text className="font-black uppercase">Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView className="flex-1 bg-[#050505]">
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header Navigation */}
//         <View className="px-6 py-4 flex-row items-center justify-between">
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             className="bg-white/5 p-2 rounded-full border border-white/10"
//           >
//             <ChevronLeft size={24} color="#10b981" />
//           </TouchableOpacity>
//           <Text className="text-white font-black text-[10px] uppercase tracking-[0.3em]">
//             Asset Details
//           </Text>
//           <View className="w-10" />
//         </View>

//         {/* Hero Image Gallery (Auto Sliding) */}
//         <View className="px-4">
//           <View className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
//             <Image
//               source={{ uri: getFullImageUrl(images[selectedImage]) }}
//               className="w-full h-full"
//               resizeMode="cover"
//             />

//             {/* Status Badge over Image */}
//             <View className="absolute top-5 left-5 bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
//               <Text className="text-white font-black text-[9px] uppercase tracking-widest">
//                 {car.status === "sold" ? "🔴 SOLD" : "🟢 AVAILABLE"}
//               </Text>
//             </View>
//           </View>

//           {/* Thumbnail Strip */}
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             className="flex-row mt-5 px-2"
//           >
//             {images.map((img: string, idx: number) => (
//               <TouchableOpacity
//                 key={idx}
//                 onPress={() => setSelectedImage(idx)}
//                 className={`mr-3 rounded-2xl overflow-hidden border-2 ${
//                   selectedImage === idx
//                     ? "border-emerald-500"
//                     : "border-transparent opacity-40"
//                 }`}
//               >
//                 <Image
//                   source={{ uri: getFullImageUrl(img) }}
//                   className="w-20 h-14"
//                 />
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Primary Stats */}
//         <View className="px-6 mt-8">
//           <View className="flex-row items-center bg-emerald-500/10 self-start px-3 py-1 rounded-md border border-emerald-500/20 mb-4">
//             <Clock size={12} color="#10b981" />
//             <Text className="text-emerald-500 text-[10px] font-black uppercase ml-2 tracking-widest">
//               {car.status === "sold" ? "Not Available" : "Available Now"}
//             </Text>
//           </View>

//           <Text className="text-white text-4xl font-black italic uppercase tracking-tighter leading-tight">
//             {car.name}
//           </Text>
//           <Text className="text-emerald-400 text-3xl font-bold mt-2">
//             Rs. {Number(car.price).toLocaleString()}
//           </Text>
//         </View>

//         {/* Technical Specs Grid */}
//         <View className="px-6 mt-8 flex-row flex-wrap justify-between">
//           <SpecCard
//             icon={<Calendar size={18} color="#6b7280" />}
//             label="Year"
//             value={car.year}
//           />
//           <SpecCard
//             icon={<Gauge size={18} color="#6b7280" />}
//             label="Mileage"
//             value={`${Number(car.mileage).toLocaleString()} km`}
//           />
//           <SpecCard
//             icon={<Fuel size={18} color="#6b7280" />}
//             label="Fuel Type"
//             value={car.fuel}
//           />
//           <SpecCard
//             icon={<MapPin size={18} color="#6b7280" />}
//             label="City"
//             value={car.location}
//           />
//         </View>

//         {/* Merchant Card */}
//         <View className="px-6 mt-10">
//           <Text className="text-emerald-500 text-[11px] font-black uppercase tracking-[0.4em] mb-5">
//             Verified Merchant
//           </Text>

//           <View className="flex-row items-center p-6 bg-white/5 rounded-[2.5rem] border border-white/10">
//             <View className="relative">
//               {car.seller_image ? (
//                 <Image
//                   source={{ uri: getFullImageUrl(car.seller_image) }}
//                   className="w-16 h-16 rounded-full border-2 border-emerald-500/50"
//                 />
//               ) : (
//                 <View className="w-16 h-16 bg-emerald-500 rounded-full items-center justify-center">
//                   <Text className="text-black text-2xl font-black">
//                     {car.seller_name ? car.seller_name[0].toUpperCase() : "S"}
//                   </Text>
//                 </View>
//               )}
//               <View className="absolute -bottom-1 -right-1 bg-[#050505] rounded-full p-1 border border-white/10">
//                 <UserCheck size={14} color="#10b981" />
//               </View>
//             </View>

//             <View className="ml-5 flex-1">
//               <Text className="text-white text-xl font-bold tracking-tight">
//                 {car.seller_name || "Private Seller"}
//               </Text>
//               <View className="flex-row items-center mt-1">
//                 <ShieldCheck size={12} color="#10b981" />
//                 <Text className="text-emerald-500/60 text-[9px] font-bold uppercase tracking-widest ml-1">
//                   Trusted Member
//                 </Text>
//               </View>
//             </View>
//           </View>

//           {/* Call Action */}
//           <View className="mt-4">
//             <TouchableOpacity
//               onPress={() => Linking.openURL(`tel:${car.seller_phone}`)}
//               activeOpacity={0.8}
//               className="bg-emerald-500 flex-row items-center justify-between p-5 rounded-3xl shadow-lg"
//             >
//               <View className="flex-row items-center">
//                 <View className="bg-black/10 p-2 rounded-xl mr-4">
//                   <Phone size={20} color="black" />
//                 </View>
//                 <View>
//                   <Text className="text-black text-[9px] font-black uppercase opacity-60">
//                     Mobile Line
//                   </Text>
//                   <Text className="text-black text-lg font-black tracking-widest">
//                     {car.seller_phone || "Contact Seller"}
//                   </Text>
//                 </View>
//               </View>
//               <ChevronRight size={24} color="black" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Detailed Description */}
//         <View className="px-6 mt-10 mb-24">
//           <View className="flex-row items-center mb-4">
//             <Info size={14} color="#10b981" />
//             <Text className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2">
//               Merchant's Note
//             </Text>
//           </View>
//           <View className="p-6 bg-white/5 rounded-[2rem] border border-white/5">
//             <Text className="text-gray-400 italic leading-6 text-sm">
//               " {car.description || "No description provided."} "
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const SpecCard = ({ icon, label, value }: any) => (
//   <View
//     style={{ width: width * 0.42 }}
//     className="p-5 bg-white/5 border border-white/10 rounded-[1.5rem] mb-4"
//   >
//     <View className="flex-row items-center mb-2">
//       <View className="bg-emerald-500/5 p-1.5 rounded-lg">{icon}</View>
//       <Text className="text-[9px] text-gray-500 font-bold uppercase ml-2 tracking-tighter">
//         {label}
//       </Text>
//     </View>
//     <Text className="text-white font-black text-sm tracking-tight">
//       {value || "N/A"}
//     </Text>
//   </View>
// );

// export default DetailsScreen;


import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Fuel,
  Gauge,
  Info,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const BASE_URL = "http://192.168.43.254:5000";

// --- කාලය ගණනය කරන Function එක ---
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

const DetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: number };

  const [car, setCar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetchCarDetails();
  }, [id]);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setSelectedImage((prev) => (prev + 1) % images.length);
      }, 3500); 
      return () => clearInterval(interval);
    }
  }, [images]);

  const fetchCarDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/api/listings`);
      const data = await res.json();
      const found = data.find((item: any) => item.id === id);

      if (!found) throw new Error("Vehicle listing not found");

      setCar(found);

      let parsedImages = [];
      try {
        parsedImages = typeof found.images === "string"
            ? JSON.parse(found.images)
            : found.images;
      } catch (e) {
        parsedImages = [];
      }
      setImages(parsedImages);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getFullImageUrl = (path: string) => {
    if (!path) return "https://via.placeholder.com/400";
    return path.startsWith("http") ? path : `${BASE_URL}${path}`;
  };

  if (loading) {
    return (
      <View className="flex-1 bg-black items-center justify-center">
        <ActivityIndicator color="#10b981" size="large" />
        <Text className="text-emerald-500 font-bold mt-4 tracking-widest italic text-xs">
          IGNITING ENGINE...
        </Text>
      </View>
    );
  }

  if (error || !car) {
    return (
      <View className="flex-1 bg-black items-center justify-center p-6">
        <Text className="text-red-500 text-center font-bold">{error}</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="mt-6 bg-emerald-500 px-8 py-3 rounded-2xl"
        >
          <Text className="font-black uppercase">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#050505]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Navigation */}
        <View className="px-6 py-4 flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white/5 p-2 rounded-full border border-white/10"
          >
            <ChevronLeft size={24} color="#10b981" />
          </TouchableOpacity>
          <Text className="text-white font-black text-[10px] uppercase tracking-[0.3em]">
            Asset Details
          </Text>
          <View className="w-10" />
        </View>

        {/* Hero Image Gallery */}
        <View className="px-4">
          <View className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            <Image
              source={{ uri: getFullImageUrl(images[selectedImage]) }}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute top-5 left-5 bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
              <Text className="text-white font-black text-[9px] uppercase tracking-widest">
                {car.status === "sold" ? "🔴 SOLD" : "🟢 AVAILABLE"}
              </Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-5 px-2">
            {images.map((img: string, idx: number) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setSelectedImage(idx)}
                className={`mr-3 rounded-2xl overflow-hidden border-2 ${
                  selectedImage === idx ? "border-emerald-500" : "border-transparent opacity-40"
                }`}
              >
                <Image source={{ uri: getFullImageUrl(img) }} className="w-20 h-14" />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Primary Stats & Date */}
        <View className="px-6 mt-8">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
              <Clock size={12} color="#10b981" />
              <Text className="text-emerald-500 text-[10px] font-black uppercase ml-2 tracking-widest">
                {car.status === "sold" ? "Not Available" : "Available Now"}
              </Text>
            </View>
            
            {/* මෙන්න මෙතනට Date එක දාලා තියෙන්නේ */}
            <Text className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">
              Posted {getTimeAgo(car.created_at)}
            </Text>
          </View>

          <Text className="text-white text-4xl font-black italic uppercase tracking-tighter leading-tight">
            {car.name}
          </Text>
          <Text className="text-emerald-400 text-3xl font-bold mt-2">
            Rs. {Number(car.price).toLocaleString()}
          </Text>
        </View>

        {/* Technical Specs Grid */}
        <View className="px-6 mt-8 flex-row flex-wrap justify-between">
          <SpecCard icon={<Calendar size={18} color="#6b7280" />} label="Year" value={car.year} />
          <SpecCard icon={<Gauge size={18} color="#6b7280" />} label="Mileage" value={`${Number(car.mileage).toLocaleString()} km`} />
          <SpecCard icon={<Fuel size={18} color="#6b7280" />} label="Fuel Type" value={car.fuel} />
          <SpecCard icon={<MapPin size={18} color="#6b7280" />} label="City" value={car.location} />
        </View>

        {/* Merchant Card */}
        <View className="px-6 mt-10">
          <Text className="text-emerald-500 text-[11px] font-black uppercase tracking-[0.4em] mb-5">
            Verified Merchant
          </Text>
          <View className="flex-row items-center p-6 bg-white/5 rounded-[2.5rem] border border-white/10">
            <View className="relative">
              {car.seller_image ? (
                <Image source={{ uri: getFullImageUrl(car.seller_image) }} className="w-16 h-16 rounded-full border-2 border-emerald-500/50" />
              ) : (
                <View className="w-16 h-16 bg-emerald-500 rounded-full items-center justify-center">
                  <Text className="text-black text-2xl font-black">{car.seller_name ? car.seller_name[0].toUpperCase() : "S"}</Text>
                </View>
              )}
              <View className="absolute -bottom-1 -right-1 bg-[#050505] rounded-full p-1 border border-white/10">
                <UserCheck size={14} color="#10b981" />
              </View>
            </View>
            <View className="ml-5 flex-1">
              <Text className="text-white text-xl font-bold tracking-tight">{car.seller_name || "Private Seller"}</Text>
              <View className="flex-row items-center mt-1">
                <ShieldCheck size={12} color="#10b981" />
                <Text className="text-emerald-500/60 text-[9px] font-bold uppercase tracking-widest ml-1">Trusted Member</Text>
              </View>
            </View>
          </View>

          <View className="mt-4">
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${car.seller_phone}`)}
              activeOpacity={0.8}
              className="bg-emerald-500 flex-row items-center justify-between p-5 rounded-3xl shadow-lg"
            >
              <View className="flex-row items-center">
                <View className="bg-black/10 p-2 rounded-xl mr-4">
                  <Phone size={20} color="black" />
                </View>
                <View>
                  <Text className="text-black text-[9px] font-black uppercase opacity-60">Mobile Line</Text>
                  <Text className="text-black text-lg font-black tracking-widest">{car.seller_phone || "Contact Seller"}</Text>
                </View>
              </View>
              <ChevronRight size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Detailed Description */}
        <View className="px-6 mt-10 mb-24">
          <View className="flex-row items-center mb-4">
            <Info size={14} color="#10b981" />
            <Text className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] ml-2">Merchant's Note</Text>
          </View>
          <View className="p-6 bg-white/5 rounded-[2rem] border border-white/5">
            <Text className="text-gray-400 italic leading-6 text-sm">" {car.description || "No description provided."} "</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SpecCard = ({ icon, label, value }: any) => (
  <View style={{ width: width * 0.42 }} className="p-5 bg-white/5 border border-white/10 rounded-[1.5rem] mb-4">
    <View className="flex-row items-center mb-2">
      <View className="bg-emerald-500/5 p-1.5 rounded-lg">{icon}</View>
      <Text className="text-[9px] text-gray-500 font-bold uppercase ml-2 tracking-tighter">{label}</Text>
    </View>
    <Text className="text-white font-black text-sm tracking-tight">{value || "N/A"}</Text>
  </View>
);

export default DetailsScreen;