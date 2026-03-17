// // // import { useNavigation, useRoute } from "@react-navigation/native";
// // // import axios from "axios";
// // // import * as ImagePicker from "expo-image-picker"; // Expo පාවිච්චි කරනවා නම්
// // // import {
// // //     ArrowLeft,
// // //     Car,
// // //     Phone,
// // //     Upload,
// // //     X
// // // } from "lucide-react-native";
// // // import React, { useEffect, useState } from "react";
// // // import {
// // //     ActivityIndicator,
// // //     Alert,
// // //     Image,
// // //     SafeAreaView,
// // //     ScrollView,
// // //     Text,
// // //     TextInput,
// // //     TouchableOpacity,
// // //     View,
// // // } from "react-native";

// // // const vehicleCategories = [
// // //   "Car",
// // //   "SUV",
// // //   "Jeep",
// // //   "Van",
// // //   "Lorry",
// // //   "Bus",
// // //   "Motorcycle",
// // //   "Three Wheeler",
// // //   "Tractor",
// // //   "Harvester",
// // //   "Electric Car",
// // //   "Electric Bike",
// // //   "Other",
// // // ];
// // // const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric", "Other"];

// // // const EditAdPage = () => {
// // //   const navigation = useNavigation();
// // //   const route = useRoute();
// // //   const { ad } = route.params as any; // Navigation එකෙන් එන දත්ත

// // //   const [loading, setLoading] = useState(false);
// // //   const [formData, setFormData] = useState({
// // //     category: ad?.category || "",
// // //     model: ad?.name || "",
// // //     year: ad?.year?.toString() || "",
// // //     fuel: ad?.fuel || "Petrol",
// // //     mileage: ad?.mileage?.toString() || "",
// // //     price: ad?.price?.toString() || "",
// // //     location: ad?.location || "",
// // //     description: ad?.description || "",
// // //     phone: ad?.phone || "",
// // //   });

// // //   const [existingImages, setExistingImages] = useState<string[]>([]);
// // //   const [newImages, setNewImages] = useState<any[]>([]);

// // //   useEffect(() => {
// // //     if (ad?.images) {
// // //       const imgs =
// // //         typeof ad.images === "string" ? JSON.parse(ad.images) : ad.images;
// // //       setExistingImages(imgs || []);
// // //     }
// // //   }, [ad]);

// // //   // Image Picker Function
// // //   const pickImage = async () => {
// // //     let result = await ImagePicker.launchImageLibraryAsync({
// // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // //       allowsMultipleSelection: true,
// // //       quality: 0.7,
// // //     });

// // //     if (!result.canceled) {
// // //       const selectedImages = result.assets.map((asset) => ({
// // //         uri: asset.uri,
// // //         name: asset.fileName || `image_${Date.now()}.jpg`,
// // //         type: "image/jpeg",
// // //       }));
// // //       setNewImages(
// // //         [...newImages, ...selectedImages].slice(0, 8 - existingImages.length),
// // //       );
// // //     }
// // //   };

// // //   const removeExistingImage = (index: number) => {
// // //     setExistingImages((prev) => prev.filter((_, i) => i !== index));
// // //   };

// // //   const removeNewImage = (index: number) => {
// // //     setNewImages((prev) => prev.filter((_, i) => i !== index));
// // //   };

// // //   const handleUpdate = async () => {
// // //     setLoading(true);
// // //     const data = new FormData();

// // //     // Append fields
// // //     data.append("category", formData.category);
// // //     data.append("name", formData.model);
// // //     data.append("price", formData.price);
// // //     data.append("year", formData.year);
// // //     data.append("mileage", formData.mileage);
// // //     data.append("fuel", formData.fuel);
// // //     data.append("location", formData.location);
// // //     data.append("description", formData.description);
// // //     data.append("phone", formData.phone);
// // //     data.append("userId", ad.user_id);
// // //     data.append("existingImages", JSON.stringify(existingImages));

// // //     // Append new images
// // //     newImages.forEach((image) => {
// // //       // @ts-ignore
// // //       data.append("images", {
// // //         uri: image.uri,
// // //         name: image.name,
// // //         type: image.type,
// // //       });
// // //     });

// // //     try {
// // //       const response = await axios.put(
// // //         `http://192.168.1.100:5000/api/users/update-ad/${ad.id}`,
// // //         data,
// // //         {
// // //           headers: { "Content-Type": "multipart/form-data" },
// // //         },
// // //       );

// // //       if (response.data.success) {
// // //         Alert.alert("Updated!", "Your listing has been updated.");
// // //         navigation.goBack();
// // //       }
// // //     } catch (error) {
// // //       Alert.alert("Error", "Update failed. Check your connection.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <SafeAreaView className="flex-1 bg-black">
// // //       <ScrollView className="px-5">
// // //         {/* Header */}
// // //         <View className="flex-row items-center justify-between mt-5 mb-8">
// // //           <TouchableOpacity
// // //             onPress={() => navigation.goBack()}
// // //             className="p-3 bg-zinc-900 rounded-full"
// // //           >
// // //             <ArrowLeft color="white" size={20} />
// // //           </TouchableOpacity>
// // //           <Text className="text-2xl font-black italic tracking-tighter text-emerald-500 uppercase">
// // //             Edit Listing
// // //           </Text>
// // //           <View className="w-10" />
// // //         </View>

// // //         {/* Section 1: Vehicle Details */}
// // //         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 mb-6">
// // //           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
// // //             <Car color="#10b981" size={18} />
// // //             <Text className="text-white text-xs font-bold uppercase tracking-widest ml-2">
// // //               Vehicle Details
// // //             </Text>
// // //           </View>

// // //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// // //             Model Name
// // //           </Text>
// // //           <TextInput
// // //             className="bg-zinc-900 text-white p-4 rounded-xl mb-4 border border-white/5"
// // //             value={formData.model}
// // //             onChangeText={(txt) => setFormData({ ...formData, model: txt })}
// // //           />

// // //           <View className="flex-row gap-4 mb-4">
// // //             <View className="flex-1">
// // //               <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// // //                 Price (LKR)
// // //               </Text>
// // //               <TextInput
// // //                 className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
// // //                 keyboardType="numeric"
// // //                 value={formData.price}
// // //                 onChangeText={(txt) => setFormData({ ...formData, price: txt })}
// // //               />
// // //             </View>
// // //             <View className="flex-1">
// // //               <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// // //                 Location
// // //               </Text>
// // //               <TextInput
// // //                 className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
// // //                 value={formData.location}
// // //                 onChangeText={(txt) =>
// // //                   setFormData({ ...formData, location: txt })
// // //                 }
// // //               />
// // //             </View>
// // //           </View>
// // //         </View>

// // //         {/* Section 2: Photos */}
// // //         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 mb-6">
// // //           <View className="flex-row items-center justify-between mb-5">
// // //             <View className="flex-row items-center">
// // //               <Upload color="#10b981" size={18} />
// // //               <Text className="text-white text-xs font-bold uppercase tracking-widest ml-2">
// // //                 Photos
// // //               </Text>
// // //             </View>
// // //             <Text className="text-zinc-600 text-[10px]">
// // //               {8 - (existingImages.length + newImages.length)} left
// // //             </Text>
// // //           </View>

// // //           <View className="flex-row flex-wrap gap-2">
// // //             {existingImages.map((img, i) => (
// // //               <View key={i} className="relative w-[22%] h-20">
// // //                 <Image
// // //                   source={{ uri: `http://192.168.1.100:5000${img}` }}
// // //                   className="w-full h-full rounded-xl"
// // //                 />
// // //                 <TouchableOpacity
// // //                   onPress={() => removeExistingImage(i)}
// // //                   className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1"
// // //                 >
// // //                   <X color="white" size={10} />
// // //                 </TouchableOpacity>
// // //               </View>
// // //             ))}
// // //             {newImages.map((img, i) => (
// // //               <View key={i} className="relative w-[22%] h-20">
// // //                 <Image
// // //                   source={{ uri: img.uri }}
// // //                   className="w-full h-full rounded-xl border border-emerald-500"
// // //                 />
// // //                 <TouchableOpacity
// // //                   onPress={() => removeNewImage(i)}
// // //                   className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1"
// // //                 >
// // //                   <X color="white" size={10} />
// // //                 </TouchableOpacity>
// // //               </View>
// // //             ))}
// // //             {existingImages.length + newImages.length < 8 && (
// // //               <TouchableOpacity
// // //                 onPress={pickImage}
// // //                 className="w-[22%] h-20 bg-zinc-900 border border-dashed border-white/20 rounded-xl items-center justify-center"
// // //               >
// // //                 <Upload color="#52525b" size={20} />
// // //               </TouchableOpacity>
// // //             )}
// // //           </View>
// // //         </View>

// // //         {/* Section 3: Contact */}
// // //         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 mb-8">
// // //           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
// // //             <Phone color="#10b981" size={18} />
// // //             <Text className="text-white text-xs font-bold uppercase tracking-widest ml-2">
// // //               Contact Info
// // //             </Text>
// // //           </View>

// // //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// // //             Phone Number
// // //           </Text>
// // //           <TextInput
// // //             className="bg-zinc-900 text-white p-4 rounded-xl mb-4"
// // //             keyboardType="phone-pad"
// // //             value={formData.phone}
// // //             onChangeText={(txt) => setFormData({ ...formData, phone: txt })}
// // //           />

// // //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// // //             Description
// // //           </Text>
// // //           <TextInput
// // //             className="bg-zinc-900 text-white p-4 rounded-xl h-32 text-start"
// // //             multiline
// // //             textAlignVertical="top"
// // //             value={formData.description}
// // //             onChangeText={(txt) =>
// // //               setFormData({ ...formData, description: txt })
// // //             }
// // //           />
// // //         </View>

// // //         {/* Update Button */}
// // //         <TouchableOpacity
// // //           onPress={handleUpdate}
// // //           disabled={loading}
// // //           className={`w-full py-5 rounded-2xl mb-10 items-center ${loading ? "bg-zinc-800" : "bg-emerald-500"}`}
// // //         >
// // //           {loading ? (
// // //             <ActivityIndicator color="black" />
// // //           ) : (
// // //             <Text className="text-black font-black uppercase tracking-widest">
// // //               Save All Changes
// // //             </Text>
// // //           )}
// // //         </TouchableOpacity>
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // export default EditAdPage;

// // import { Picker } from "@react-native-picker/picker";
// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import axios from "axios";
// // import * as ImagePicker from "expo-image-picker";
// // import {
// //   AlignLeft,
// //   ArrowLeft,
// //   Car,
// //   Gauge,
// //   MapPin,
// //   Upload,
// //   X,
// // } from "lucide-react-native";
// // import React, { useEffect, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   Alert,
// //   Image,
// //   SafeAreaView,
// //   ScrollView,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   View,
// // } from "react-native";

// // const vehicleCategories = [
// //   "Car",
// //   "SUV",
// //   "Jeep",
// //   "Van",
// //   "Lorry",
// //   "Bus",
// //   "Motorcycle",
// //   "Three Wheeler",
// //   "Tractor",
// //   "Harvester",
// //   "Electric Car",
// //   "Electric Bike",
// //   "Other",
// // ];
// // const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric", "Other"];

// // const EditAdPage = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { ad } = route.params as any;

// //   const [loading, setLoading] = useState(false);
// //   const [formData, setFormData] = useState({
// //     category: ad?.category || "Car",
// //     model: ad?.name || "",
// //     year: ad?.year?.toString() || "",
// //     fuel: ad?.fuel || "Petrol",
// //     mileage: ad?.mileage?.toString() || "",
// //     price: ad?.price?.toString() || "",
// //     location: ad?.location || "",
// //     description: ad?.description || "",
// //     phone: ad?.phone || "",
// //   });

// //   const [existingImages, setExistingImages] = useState<string[]>([]);
// //   const [newImages, setNewImages] = useState<any[]>([]);

// //   useEffect(() => {
// //     if (ad?.images) {
// //       const imgs =
// //         typeof ad.images === "string" ? JSON.parse(ad.images) : ad.images;
// //       setExistingImages(imgs || []);
// //     }
// //   }, [ad]);

// //   const pickImage = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //       allowsMultipleSelection: true,
// //       quality: 0.7,
// //     });

// //     if (!result.canceled) {
// //       const selectedImages = result.assets.map((asset) => ({
// //         uri: asset.uri,
// //         name: asset.fileName || `image_${Date.now()}.jpg`,
// //         type: "image/jpeg",
// //       }));
// //       setNewImages(
// //         [...newImages, ...selectedImages].slice(0, 8 - existingImages.length),
// //       );
// //     }
// //   };

// //   const handleUpdate = async () => {
// //     setLoading(true);
// //     const data = new FormData();

// //     Object.keys(formData).forEach((key) => {
// //       data.append(key === "model" ? "name" : key, (formData as any)[key]);
// //     });

// //     data.append("userId", ad.user_id);
// //     data.append("existingImages", JSON.stringify(existingImages));

// //     newImages.forEach((image) => {
// //       // @ts-ignore
// //       data.append("images", {
// //         uri: image.uri,
// //         name: image.name,
// //         type: image.type,
// //       });
// //     });

// //     try {
// //       const response = await axios.put(
// //         `http://192.168.43.254:5000/api/users/update-ad/${ad.id}`,
// //         data,
// //         {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         },
// //       );

// //       if (response.data.success) {
// //         Alert.alert("Success!", "Ad updated successfully.");
// //         navigation.goBack();
// //       }
// //     } catch (error) {
// //       Alert.alert("Error", "Update failed.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <SafeAreaView className="flex-1 bg-black">
// //       <ScrollView className="px-5">
// //         {/* Header */}
// //         <View className="flex-row items-center justify-between mt-5 mb-8">
// //           <TouchableOpacity
// //             onPress={() => navigation.goBack()}
// //             className="p-3 bg-zinc-900 rounded-full"
// //           >
// //             <ArrowLeft color="white" size={20} />
// //           </TouchableOpacity>
// //           <Text className="text-2xl font-black italic text-emerald-500 uppercase">
// //             Edit Listing
// //           </Text>
// //           <View className="w-10" />
// //         </View>

// //         {/* Section 1: Basic Details */}
// //         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
// //           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
// //             <Car color="#10b981" size={18} />
// //             <Text className="text-white text-xs font-bold uppercase ml-2">
// //               Vehicle Identity
// //             </Text>
// //           </View>

// //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// //             Category
// //           </Text>
// //           <View className="bg-zinc-900 rounded-xl mb-4 border border-white/5 overflow-hidden">
// //             <Picker
// //               selectedValue={formData.category}
// //               style={{ color: "white" }}
// //               dropdownIconColor="#10b981"
// //               onValueChange={(val) =>
// //                 setFormData({ ...formData, category: val })
// //               }
// //             >
// //               {vehicleCategories.map((c) => (
// //                 <Picker.Item key={c} label={c} value={c} />
// //               ))}
// //             </Picker>
// //           </View>

// //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// //             Model Name
// //           </Text>
// //           <TextInput
// //             className="bg-zinc-900 text-white p-4 rounded-xl mb-4 border border-white/5"
// //             value={formData.model}
// //             onChangeText={(txt) => setFormData({ ...formData, model: txt })}
// //           />
// //         </View>

// //         {/* Section 2: Technical Specs */}
// //         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
// //           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
// //             <Gauge color="#10b981" size={18} />
// //             <Text className="text-white text-xs font-bold uppercase ml-2">
// //               Technical Specs
// //             </Text>
// //           </View>

// //           <View className="flex-row gap-4 mb-4">
// //             <View className="flex-1">
// //               <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// //                 Year
// //               </Text>
// //               <TextInput
// //                 className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
// //                 keyboardType="numeric"
// //                 value={formData.year}
// //                 onChangeText={(txt) => setFormData({ ...formData, year: txt })}
// //               />
// //             </View>
// //             <View className="flex-1">
// //               <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// //                 Mileage (KM)
// //               </Text>
// //               <TextInput
// //                 className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
// //                 keyboardType="numeric"
// //                 value={formData.mileage}
// //                 onChangeText={(txt) =>
// //                   setFormData({ ...formData, mileage: txt })
// //                 }
// //               />
// //             </View>
// //           </View>

// //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// //             Fuel Type
// //           </Text>
// //           <View className="bg-zinc-900 rounded-xl mb-4 border border-white/5 overflow-hidden">
// //             <Picker
// //               selectedValue={formData.fuel}
// //               style={{ color: "white" }}
// //               dropdownIconColor="#10b981"
// //               onValueChange={(val) => setFormData({ ...formData, fuel: val })}
// //             >
// //               {fuelTypes.map((f) => (
// //                 <Picker.Item key={f} label={f} value={f} />
// //               ))}
// //             </Picker>
// //           </View>
// //         </View>

// //         {/* Section 3: Pricing & Location */}
// //         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
// //           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
// //             <MapPin color="#10b981" size={18} />
// //             <Text className="text-white text-xs font-bold uppercase ml-2">
// //               Price & Location
// //             </Text>
// //           </View>

// //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// //             Price (LKR)
// //           </Text>
// //           <TextInput
// //             className="bg-zinc-900 text-white p-4 rounded-xl mb-4 border border-white/5 font-bold"
// //             keyboardType="numeric"
// //             value={formData.price}
// //             onChangeText={(txt) => setFormData({ ...formData, price: txt })}
// //           />

// //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// //             Location
// //           </Text>
// //           <TextInput
// //             className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
// //             value={formData.location}
// //             onChangeText={(txt) => setFormData({ ...formData, location: txt })}
// //           />
// //         </View>

// //         {/* Section 4: Photos */}
// //         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
// //           <View className="flex-row items-center justify-between mb-5 border-b border-white/10 pb-3">
// //             <View className="flex-row items-center">
// //               <Upload color="#10b981" size={18} />
// //               <Text className="text-white text-xs font-bold uppercase ml-2">
// //                 Photos
// //               </Text>
// //             </View>
// //             <Text className="text-zinc-600 text-[10px]">
// //               {8 - (existingImages.length + newImages.length)} left
// //             </Text>
// //           </View>

// //           <View className="flex-row flex-wrap gap-2">
// //             {existingImages.map((img, i) => (
// //               <View key={i} className="relative w-[23%] h-20">
// //                 <Image
// //                   source={{ uri: `http://192.168.43.254:5000${img}` }}
// //                   className="w-full h-full rounded-xl"
// //                 />
// //                 <TouchableOpacity
// //                   onPress={() =>
// //                     setExistingImages(
// //                       existingImages.filter((_, idx) => idx !== i),
// //                     )
// //                   }
// //                   className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1"
// //                 >
// //                   <X color="white" size={10} />
// //                 </TouchableOpacity>
// //               </View>
// //             ))}
// //             {newImages.map((img, i) => (
// //               <View key={i} className="relative w-[23%] h-20">
// //                 <Image
// //                   source={{ uri: img.uri }}
// //                   className="w-full h-full rounded-xl border border-emerald-500"
// //                 />
// //                 <TouchableOpacity
// //                   onPress={() =>
// //                     setNewImages(newImages.filter((_, idx) => idx !== i))
// //                   }
// //                   className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1"
// //                 >
// //                   <X color="white" size={10} />
// //                 </TouchableOpacity>
// //               </View>
// //             ))}
// //             {existingImages.length + newImages.length < 8 && (
// //               <TouchableOpacity
// //                 onPress={pickImage}
// //                 className="w-[23%] h-20 bg-zinc-900 border border-dashed border-white/20 rounded-xl items-center justify-center"
// //               >
// //                 <Upload color="#52525b" size={20} />
// //               </TouchableOpacity>
// //             )}
// //           </View>
// //         </View>

// //         {/* Section 5: Extra Info */}
// //         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-8">
// //           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
// //             <AlignLeft color="#10b981" size={18} />
// //             <Text className="text-white text-xs font-bold uppercase ml-2">
// //               Description & Contact
// //             </Text>
// //           </View>

// //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// //             Phone Number
// //           </Text>
// //           <TextInput
// //             className="bg-zinc-900 text-white p-4 rounded-xl mb-4"
// //             keyboardType="phone-pad"
// //             value={formData.phone}
// //             onChangeText={(txt) => setFormData({ ...formData, phone: txt })}
// //           />

// //           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
// //             Description
// //           </Text>
// //           <TextInput
// //             className="bg-zinc-900 text-white p-4 rounded-xl h-32"
// //             multiline
// //             textAlignVertical="top"
// //             value={formData.description}
// //             onChangeText={(txt) =>
// //               setFormData({ ...formData, description: txt })
// //             }
// //           />
// //         </View>

// //         <TouchableOpacity
// //           onPress={handleUpdate}
// //           disabled={loading}
// //           className={`w-full py-5 rounded-2xl mb-10 items-center ${loading ? "bg-zinc-800" : "bg-emerald-500"}`}
// //         >
// //           {loading ? (
// //             <ActivityIndicator color="black" />
// //           ) : (
// //             <Text className="text-black font-black uppercase tracking-widest">
// //               Update Listing
// //             </Text>
// //           )}
// //         </TouchableOpacity>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // export default EditAdPage;

// import { Picker } from "@react-native-picker/picker";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import axios from "axios";
// import * as ImagePicker from "expo-image-picker";
// import {
//   AlignLeft,
//   ArrowLeft,
//   Car,
//   Gauge,
//   MapPin,
//   Upload,
//   User,
//   X
// } from "lucide-react-native"; // මෙතන නිවැරදි කරා
// import React, { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const vehicleCategories = [
//   "Car",
//   "SUV",
//   "Jeep",
//   "Van",
//   "Lorry",
//   "Bus",
//   "Motorcycle",
//   "Three Wheeler",
//   "Tractor",
//   "Harvester",
//   "Electric Car",
//   "Electric Bike",
//   "Other",
// ];
// const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric", "Other"];

// const EditAdPage = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { ad } = route.params as any;

//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: ad?.seller_name || "",
//     phone: ad?.phone || "",
//     category: ad?.category || "Car",
//     model: ad?.name || "",
//     year: ad?.year?.toString() || "",
//     fuel: ad?.fuel || "Petrol",
//     mileage: ad?.mileage?.toString() || "",
//     price: ad?.price?.toString() || "",
//     location: ad?.location || "",
//     description: ad?.description || "",
//   });

//   const [existingImages, setExistingImages] = useState<string[]>([]);
//   const [newImages, setNewImages] = useState<any[]>([]);

//   useEffect(() => {
//     if (ad?.images) {
//       const imgs =
//         typeof ad.images === "string" ? JSON.parse(ad.images) : ad.images;
//       setExistingImages(imgs || []);
//     }
//   }, [ad]);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true,
//       quality: 0.7,
//     });

//     if (!result.canceled) {
//       const selectedImages = result.assets.map((asset) => ({
//         uri: asset.uri,
//         name: asset.fileName || `image_${Date.now()}.jpg`,
//         type: "image/jpeg",
//       }));
//       setNewImages(
//         [...newImages, ...selectedImages].slice(0, 8 - existingImages.length),
//       );
//     }
//   };

//   const handleUpdate = async () => {
//     setLoading(true);
//     const data = new FormData();

//     Object.keys(formData).forEach((key) => {
//       data.append(key === "model" ? "name" : key, (formData as any)[key]);
//     });

//     data.append("userId", ad.user_id);
//     data.append("existingImages", JSON.stringify(existingImages));

//     newImages.forEach((image) => {
//       // @ts-ignore
//       data.append("images", {
//         uri: image.uri,
//         name: image.name,
//         type: image.type,
//       });
//     });

//     try {
//       const response = await axios.put(
//         `http://192.168.43.254:5000/api/users/update-ad/${ad.id}`,
//         data,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         },
//       );

//       if (response.data.success) {
//         Alert.alert("Success!", "Ad updated successfully.");
//         navigation.goBack();
//       }
//     } catch (error) {
//       Alert.alert("Error", "Update failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView className="flex-1 bg-black">
//       <ScrollView className="px-5">
//         {/* Header */}
//         <View className="flex-row items-center justify-between mt-5 mb-8">
//           <TouchableOpacity
//             onPress={() => navigation.goBack()}
//             className="p-3 bg-zinc-900 rounded-full"
//           >
//             <ArrowLeft color="white" size={20} />
//           </TouchableOpacity>
//           <Text className="text-2xl font-black italic text-emerald-500 uppercase">
//             Edit Listing
//           </Text>
//           <View className="w-10" />
//         </View>

//         {/* Section 1: Contact Details - Name & Phone only */}
//         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
//           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
//             <User color="#10b981" size={18} />
//             <Text className="text-white text-xs font-bold uppercase ml-2">
//               Contact Details
//             </Text>
//           </View>

//           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
//             Seller Name
//           </Text>
//           <TextInput
//             className="bg-zinc-900 text-white p-4 rounded-xl mb-4 border border-white/5"
//             value={formData.name}
//             onChangeText={(txt) => setFormData({ ...formData, name: txt })}
//           />

//           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
//             Phone Number
//           </Text>
//           <TextInput
//             className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
//             keyboardType="phone-pad"
//             value={formData.phone}
//             onChangeText={(txt) => setFormData({ ...formData, phone: txt })}
//           />
//         </View>

//         {/* Section 2: Vehicle Identity */}
//         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
//           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
//             <Car color="#10b981" size={18} />
//             <Text className="text-white text-xs font-bold uppercase ml-2">
//               Vehicle Identity
//             </Text>
//           </View>

//           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
//             Category
//           </Text>
//           <View className="bg-zinc-900 rounded-xl mb-4 border border-white/5 overflow-hidden">
//             <Picker
//               selectedValue={formData.category}
//               style={{ color: "white" }}
//               dropdownIconColor="#10b981"
//               onValueChange={(val) =>
//                 setFormData({ ...formData, category: val })
//               }
//             >
//               {vehicleCategories.map((c) => (
//                 <Picker.Item key={c} label={c} value={c} />
//               ))}
//             </Picker>
//           </View>

//           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
//             Model Name
//           </Text>
//           <TextInput
//             className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
//             value={formData.model}
//             onChangeText={(txt) => setFormData({ ...formData, model: txt })}
//           />
//         </View>

//         {/* Section 3: Technical Specs */}
//         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
//           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
//             <Gauge color="#10b981" size={18} />
//             <Text className="text-white text-xs font-bold uppercase ml-2">
//               Technical Specs
//             </Text>
//           </View>

//           <View className="flex-row gap-4 mb-4">
//             <View className="flex-1">
//               <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
//                 Year
//               </Text>
//               <TextInput
//                 className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
//                 keyboardType="numeric"
//                 value={formData.year}
//                 onChangeText={(txt) => setFormData({ ...formData, year: txt })}
//               />
//             </View>
//             <View className="flex-1">
//               <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
//                 Mileage (KM)
//               </Text>
//               <TextInput
//                 className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
//                 keyboardType="numeric"
//                 value={formData.mileage}
//                 onChangeText={(txt) =>
//                   setFormData({ ...formData, mileage: txt })
//                 }
//               />
//             </View>
//           </View>

//           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
//             Fuel Type
//           </Text>
//           <View className="bg-zinc-900 rounded-xl mb-4 border border-white/5 overflow-hidden">
//             <Picker
//               selectedValue={formData.fuel}
//               style={{ color: "white" }}
//               dropdownIconColor="#10b981"
//               onValueChange={(val) => setFormData({ ...formData, fuel: val })}
//             >
//               {fuelTypes.map((f) => (
//                 <Picker.Item key={f} label={f} value={f} />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         {/* Section 4: Price & Location */}
//         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
//           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
//             <MapPin color="#10b981" size={18} />
//             <Text className="text-white text-xs font-bold uppercase ml-2">
//               Price & Location
//             </Text>
//           </View>

//           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
//             Price (LKR)
//           </Text>
//           <TextInput
//             className="bg-zinc-900 text-white p-4 rounded-xl mb-4 border border-white/5 font-bold"
//             keyboardType="numeric"
//             value={formData.price}
//             onChangeText={(txt) => setFormData({ ...formData, price: txt })}
//           />

//           <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
//             Location
//           </Text>
//           <TextInput
//             className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
//             value={formData.location}
//             onChangeText={(txt) => setFormData({ ...formData, location: txt })}
//           />
//         </View>

//         {/* Section 5: Photos */}
//         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
//           <View className="flex-row items-center justify-between mb-5 border-b border-white/10 pb-3">
//             <View className="flex-row items-center">
//               <Upload color="#10b981" size={18} />
//               <Text className="text-white text-xs font-bold uppercase ml-2">
//                 Photos
//               </Text>
//             </View>
//             <Text className="text-zinc-600 text-[10px]">
//               {8 - (existingImages.length + newImages.length)} left
//             </Text>
//           </View>

//           <View className="flex-row flex-wrap gap-2">
//             {existingImages.map((img, i) => (
//               <View key={i} className="relative w-[23%] h-20">
//                 <Image
//                   source={{ uri: `http://192.168.43.254:5000${img}` }}
//                   className="w-full h-full rounded-xl"
//                 />
//                 <TouchableOpacity
//                   onPress={() =>
//                     setExistingImages(
//                       existingImages.filter((_, idx) => idx !== i),
//                     )
//                   }
//                   className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1"
//                 >
//                   <X color="white" size={10} />
//                 </TouchableOpacity>
//               </View>
//             ))}
//             {newImages.map((img, i) => (
//               <View key={i} className="relative w-[23%] h-20">
//                 <Image
//                   source={{ uri: img.uri }}
//                   className="w-full h-full rounded-xl border border-emerald-500"
//                 />
//                 <TouchableOpacity
//                   onPress={() =>
//                     setNewImages(newImages.filter((_, idx) => idx !== i))
//                   }
//                   className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1"
//                 >
//                   <X color="white" size={10} />
//                 </TouchableOpacity>
//               </View>
//             ))}
//             {existingImages.length + newImages.length < 8 && (
//               <TouchableOpacity
//                 onPress={pickImage}
//                 className="w-[23%] h-20 bg-zinc-900 border border-dashed border-white/20 rounded-xl items-center justify-center"
//               >
//                 <Upload color="#52525b" size={20} />
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>

//         {/* Section 6: Description */}
//         <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-8">
//           <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
//             <AlignLeft color="#10b981" size={18} />
//             <Text className="text-white text-xs font-bold uppercase ml-2">
//               Description
//             </Text>
//           </View>
//           <TextInput
//             className="bg-zinc-900 text-white p-4 rounded-xl h-32"
//             multiline
//             textAlignVertical="top"
//             value={formData.description}
//             onChangeText={(txt) =>
//               setFormData({ ...formData, description: txt })
//             }
//           />
//         </View>

//         {/* Update Button */}
//         <TouchableOpacity
//           onPress={handleUpdate}
//           disabled={loading}
//           className={`w-full py-5 rounded-2xl mb-10 items-center ${loading ? "bg-zinc-800" : "bg-emerald-500"}`}
//         >
//           {loading ? (
//             <ActivityIndicator color="black" />
//           ) : (
//             <Text className="text-black font-black uppercase tracking-widest">
//               Update Listing
//             </Text>
//           )}
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default EditAdPage;

import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import {
  AlignLeft,
  ArrowLeft,
  Car,
  Gauge,
  MapPin,
  Upload,
  User,
  X
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const vehicleCategories = [
  "Car",
  "SUV",
  "Jeep",
  "Van",
  "Lorry",
  "Bus",
  "Motorcycle",
  "Three Wheeler",
  "Tractor",
  "Harvester",
  "Electric Car",
  "Electric Bike",
  "Other",
];
const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric", "Other"];

const EditAdPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { ad } = route.params as any;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: ad?.seller_name || "", // මෙය Users table එකේ update වන නම
    phone: ad?.phone || "", // මෙය Users table එකේ update වන දුරකථනය
    category: ad?.category || "Car",
    model: ad?.name || "", // මෙය Listings table එකේ update වන වාහනයේ නම
    year: ad?.year?.toString() || "",
    fuel: ad?.fuel || "Petrol",
    mileage: ad?.mileage?.toString() || "",
    price: ad?.price?.toString() || "",
    location: ad?.location || "",
    description: ad?.description || "",
  });

  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<any[]>([]);

  useEffect(() => {
    if (ad?.images) {
      const imgs =
        typeof ad.images === "string" ? JSON.parse(ad.images) : ad.images;
      setExistingImages(imgs || []);
    }
  }, [ad]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset) => ({
        uri: asset.uri,
        name: asset.fileName || `image_${Date.now()}.jpg`,
        type: "image/jpeg",
      }));
      setNewImages(
        [...newImages, ...selectedImages].slice(0, 8 - existingImages.length),
      );
    }
  };

  const handleUpdate = async () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.model ||
      !formData.price
    ) {
      Alert.alert("Error", "Please fill required fields.");
      return;
    }

    setLoading(true);
    const data = new FormData();

    // Backend එකට දත්ත යවන Keys නිවැරදිව සකසා ඇත
    data.append("category", formData.category);
    data.append("name", formData.model); // වාහනයේ නම (listings.name)
    data.append("seller_name", formData.name); // විකුණුම්කරුගේ නම (users.name)
    data.append("price", formData.price);
    data.append("year", formData.year);
    data.append("mileage", formData.mileage);
    data.append("fuel", formData.fuel);
    data.append("location", formData.location);
    data.append("description", formData.description);
    data.append("phone", formData.phone);
    data.append("userId", ad.user_id);
    data.append("existingImages", JSON.stringify(existingImages));

    newImages.forEach((image) => {
      // @ts-ignore
      data.append("images", {
        uri: image.uri,
        name: image.name,
        type: image.type,
      });
    });

    try {
      const response = await axios.put(
        `http://192.168.43.254:5000/api/users/update-ad/${ad.id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      if (response.data.success) {
        Alert.alert("Success!", "Listing and Profile updated successfully.");
        navigation.goBack();
      }
    } catch (error: any) {
      console.error("Update Error:", error.response?.data);
      Alert.alert(
        "Update Failed",
        error.response?.data?.error || "Check backend connection.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="px-5">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-5 mb-8">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-3 bg-zinc-900 rounded-full"
          >
            <ArrowLeft color="white" size={20} />
          </TouchableOpacity>
          <Text className="text-2xl font-black italic text-emerald-500 uppercase">
            Edit Listing
          </Text>
          <View className="w-10" />
        </View>

        {/* Section 1: Contact Details */}
        <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
          <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
            <User color="#10b981" size={18} />
            <Text className="text-white text-xs font-bold uppercase ml-2">
              Contact Details
            </Text>
          </View>
          <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
            Seller Name
          </Text>
          <TextInput
            className="bg-zinc-900 text-white p-4 rounded-xl mb-4 border border-white/5"
            value={formData.name}
            onChangeText={(txt) => setFormData({ ...formData, name: txt })}
          />
          <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
            Phone Number
          </Text>
          <TextInput
            className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(txt) => setFormData({ ...formData, phone: txt })}
          />
        </View>

        {/* Section 2: Vehicle Identity */}
        <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
          <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
            <Car color="#10b981" size={18} />
            <Text className="text-white text-xs font-bold uppercase ml-2">
              Vehicle Identity
            </Text>
          </View>
          <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
            Category
          </Text>
          <View className="bg-zinc-900 rounded-xl mb-4 border border-white/5 overflow-hidden">
            <Picker
              selectedValue={formData.category}
              style={{ color: "white" }}
              dropdownIconColor="#10b981"
              onValueChange={(val) =>
                setFormData({ ...formData, category: val })
              }
            >
              {vehicleCategories.map((c) => (
                <Picker.Item key={c} label={c} value={c} />
              ))}
            </Picker>
          </View>
          <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
            Model Name
          </Text>
          <TextInput
            className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
            value={formData.model}
            onChangeText={(txt) => setFormData({ ...formData, model: txt })}
          />
        </View>

        {/* Section 3: Technical Specs */}
        <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
          <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
            <Gauge color="#10b981" size={18} />
            <Text className="text-white text-xs font-bold uppercase ml-2">
              Technical Specs
            </Text>
          </View>
          <View className="flex-row gap-4 mb-4">
            <View className="flex-1">
              <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
                Year
              </Text>
              <TextInput
                className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
                keyboardType="numeric"
                value={formData.year}
                onChangeText={(txt) => setFormData({ ...formData, year: txt })}
              />
            </View>
            <View className="flex-1">
              <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
                Mileage (KM)
              </Text>
              <TextInput
                className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
                keyboardType="numeric"
                value={formData.mileage}
                onChangeText={(txt) =>
                  setFormData({ ...formData, mileage: txt })
                }
              />
            </View>
          </View>
          <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
            Fuel Type
          </Text>
          <View className="bg-zinc-900 rounded-xl border border-white/5 overflow-hidden">
            <Picker
              selectedValue={formData.fuel}
              style={{ color: "white" }}
              dropdownIconColor="#10b981"
              onValueChange={(val) => setFormData({ ...formData, fuel: val })}
            >
              {fuelTypes.map((f) => (
                <Picker.Item key={f} label={f} value={f} />
              ))}
            </Picker>
          </View>
        </View>

        {/* Section 4: Price & Location */}
        <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
          <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
            <MapPin color="#10b981" size={18} />
            <Text className="text-white text-xs font-bold uppercase ml-2">
              Price & Location
            </Text>
          </View>
          <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
            Price (LKR)
          </Text>
          <TextInput
            className="bg-zinc-900 text-white p-4 rounded-xl mb-4 border border-white/5 font-bold"
            keyboardType="numeric"
            value={formData.price}
            onChangeText={(txt) => setFormData({ ...formData, price: txt })}
          />
          <Text className="text-zinc-500 text-[10px] uppercase font-bold mb-2 ml-1">
            Location
          </Text>
          <TextInput
            className="bg-zinc-900 text-white p-4 rounded-xl border border-white/5"
            value={formData.location}
            onChangeText={(txt) => setFormData({ ...formData, location: txt })}
          />
        </View>

        {/* Section 5: Photos */}
        <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-6">
          <View className="flex-row items-center justify-between mb-5 border-b border-white/10 pb-3">
            <View className="flex-row items-center">
              <Upload color="#10b981" size={18} />
              <Text className="text-white text-xs font-bold uppercase ml-2">
                Photos
              </Text>
            </View>
            <Text className="text-zinc-600 text-[10px]">
              {8 - (existingImages.length + newImages.length)} left
            </Text>
          </View>
          <View className="flex-row flex-wrap gap-2">
            {existingImages.map((img, i) => (
              <View key={i} className="relative w-[23%] h-20">
                <Image
                  source={{ uri: `http://192.168.43.254:5000${img}` }}
                  className="w-full h-full rounded-xl"
                />
                <TouchableOpacity
                  onPress={() =>
                    setExistingImages(
                      existingImages.filter((_, idx) => idx !== i),
                    )
                  }
                  className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1"
                >
                  <X color="white" size={10} />
                </TouchableOpacity>
              </View>
            ))}
            {newImages.map((img, i) => (
              <View key={i} className="relative w-[23%] h-20">
                <Image
                  source={{ uri: img.uri }}
                  className="w-full h-full rounded-xl border border-emerald-500"
                />
                <TouchableOpacity
                  onPress={() =>
                    setNewImages(newImages.filter((_, idx) => idx !== i))
                  }
                  className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1"
                >
                  <X color="white" size={10} />
                </TouchableOpacity>
              </View>
            ))}
            {existingImages.length + newImages.length < 8 && (
              <TouchableOpacity
                onPress={pickImage}
                className="w-[23%] h-20 bg-zinc-900 border border-dashed border-white/20 rounded-xl items-center justify-center"
              >
                <Upload color="#52525b" size={20} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Section 6: Description */}
        <View className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-8">
          <View className="flex-row items-center mb-5 border-b border-white/10 pb-3">
            <AlignLeft color="#10b981" size={18} />
            <Text className="text-white text-xs font-bold uppercase ml-2">
              Description
            </Text>
          </View>
          <TextInput
            className="bg-zinc-900 text-white p-4 rounded-xl h-32"
            multiline
            textAlignVertical="top"
            value={formData.description}
            onChangeText={(txt) =>
              setFormData({ ...formData, description: txt })
            }
          />
        </View>

        {/* Update Button */}
        <TouchableOpacity
          onPress={handleUpdate}
          disabled={loading}
          className={`w-full py-5 rounded-2xl mb-10 items-center ${loading ? "bg-zinc-800" : "bg-emerald-500"}`}
        >
          {loading ? (
            <ActivityIndicator color="black" />
          ) : (
            <Text className="text-black font-black uppercase tracking-widest">
              Update Listing
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAdPage;
