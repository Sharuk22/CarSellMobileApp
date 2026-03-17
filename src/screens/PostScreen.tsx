// // // // import React, { useState } from "react";
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   ScrollView,
// // // //   TextInput,
// // // //   TouchableOpacity,
// // // //   Image,
// // // //   SafeAreaView,
// // // // } from "react-native";
// // // // import { Ionicons } from "@expo/vector-icons";

// // // // const steps = ["Vehicle", "Contact", "Photos", "Review"];
// // // // const vehicleCategories = ["Car", "SUV", "Jeep", "Van", "Lorry", "Motorcycle", "Other"];

// // // // const PostScreen = () => {
// // // //   const [currentStep, setCurrentStep] = useState(0);
// // // //   const [formData, setFormData] = useState({
// // // //     category: "",
// // // //     make: "",
// // // //     model: "",
// // // //     year: "",
// // // //     price: "",
// // // //     location: "",
// // // //     phone: "",
// // // //   });

// // // //   const handleNext = () => {
// // // //     if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
// // // //   };

// // // //   const handlePrev = () => {
// // // //     if (currentStep > 0) setCurrentStep(currentStep - 1);
// // // //   };

// // // //   return (
// // // //     <SafeAreaView className="flex-1 bg-black">
// // // //       {/* --- Progress Bar --- */}
// // // //       <View className="flex-row justify-between px-6 py-4 bg-black border-b border-white/10">
// // // //         {steps.map((step, i) => (
// // // //           <View key={i} className="items-center flex-1">
// // // //             <View
// // // //               className={`w-8 h-8 rounded-full items-center justify-center ${
// // // //                 i <= currentStep ? "bg-teal-500" : "bg-gray-800"
// // // //               }`}
// // // //             >
// // // //               <Text className="text-black font-bold text-xs">{i + 1}</Text>
// // // //             </View>
// // // //             <Text
// // // //               className={`text-[10px] mt-1 ${
// // // //                 i <= currentStep ? "text-teal-500" : "text-gray-500"
// // // //               }`}
// // // //             >
// // // //               {step}
// // // //             </Text>
// // // //           </View>
// // // //         ))}
// // // //       </View>

// // // //       <ScrollView className="flex-1 px-6 pt-6">
// // // //         {/* Step 0: Vehicle Details */}
// // // //         {currentStep === 0 && (
// // // //           <View className="space-y-4">
// // // //             <Text className="text-2xl font-bold text-teal-400 mb-4">Vehicle Details</Text>

// // // //             <View className="space-y-4">
// // // //               <Text className="text-white mb-2 ml-1">Category</Text>
// // // //               <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-4">
// // // //                 {vehicleCategories.map((cat) => (
// // // //                   <TouchableOpacity
// // // //                     key={cat}
// // // //                     onPress={() => setFormData({ ...formData, category: cat })}
// // // //                     className={`mr-3 px-4 py-2 rounded-full border ${
// // // //                       formData.category === cat ? "bg-teal-500 border-teal-500" : "border-gray-700"
// // // //                     }`}
// // // //                   >
// // // //                     <Text className={formData.category === cat ? "text-black font-bold" : "text-white"}>{cat}</Text>
// // // //                   </TouchableOpacity>
// // // //                 ))}
// // // //               </ScrollView>

// // // //               <CustomInput label="Make" placeholder="e.g. Toyota" value={formData.make}
// // // //                 onChangeText={(t) => setFormData({...formData, make: t})} />

// // // //               <CustomInput label="Model" placeholder="e.g. Prius" value={formData.model}
// // // //                 onChangeText={(t) => setFormData({...formData, model: t})} />

// // // //               <View className="flex-row space-x-4">
// // // //                 <View className="flex-1">
// // // //                    <CustomInput label="Year" placeholder="2022" keyboardType="numeric" value={formData.year}
// // // //                     onChangeText={(t) => setFormData({...formData, year: t})} />
// // // //                 </View>
// // // //                 <View className="flex-1">
// // // //                    <CustomInput label="Price (LKR)" placeholder="8,500,000" keyboardType="numeric" value={formData.price}
// // // //                     onChangeText={(t) => setFormData({...formData, price: t})} />
// // // //                 </View>
// // // //               </View>

// // // //               <CustomInput label="Location" placeholder="e.g. Colombo" value={formData.location}
// // // //                 onChangeText={(t) => setFormData({...formData, location: t})} />
// // // //             </View>
// // // //           </View>
// // // //         )}

// // // //         {/* Step 1: Contact Details */}
// // // //         {currentStep === 1 && (
// // // //           <View className="space-y-4">
// // // //             <Text className="text-2xl font-bold text-teal-400 mb-4">Contact Information</Text>
// // // //             <CustomInput label="Phone Number" placeholder="077 123 4567" keyboardType="phone-pad"
// // // //               value={formData.phone} onChangeText={(t) => setFormData({...formData, phone: t})} />
// // // //             <Text className="text-gray-500 text-sm mt-2 italic">
// // // //               * Your registered name and email will be used from your profile.
// // // //             </Text>
// // // //           </View>
// // // //         )}

// // // //         {/* Step 2: Photos UI Placeholder */}
// // // //         {currentStep === 2 && (
// // // //           <View className="items-center justify-center py-20 border-2 border-dashed border-gray-800 rounded-3xl">
// // // //             <Ionicons name="camera" size={60} color="#009688" />
// // // //             <Text className="text-white mt-4 text-lg">Add up to 8 Photos</Text>
// // // //             <TouchableOpacity className="mt-6 bg-teal-500 px-8 py-3 rounded-xl">
// // // //               <Text className="text-black font-bold">Select Images</Text>
// // // //             </TouchableOpacity>
// // // //           </View>
// // // //         )}

// // // //         {/* Step 3: Review */}
// // // //         {currentStep === 3 && (
// // // //           <View className="bg-gray-900/50 p-6 rounded-3xl border border-white/10">
// // // //             <Text className="text-xl font-bold text-teal-400 mb-4">Review Listing</Text>
// // // //             <ReviewRow label="Vehicle" value={`${formData.make} ${formData.model}`} />
// // // //             <ReviewRow label="Year" value={formData.year} />
// // // //             <ReviewRow label="Price" value={`LKR ${formData.price}`} />
// // // //             <ReviewRow label="Location" value={formData.location} />
// // // //             <ReviewRow label="Contact" value={formData.phone} />
// // // //           </View>
// // // //         )}

// // // //         <View className="h-20" />
// // // //       </ScrollView>

// // // //       {/* --- Footer Navigation --- */}
// // // //       <View className="flex-row justify-between px-6 py-6 bg-black border-t border-white/10">
// // // //         <TouchableOpacity
// // // //           onPress={handlePrev}
// // // //           disabled={currentStep === 0}
// // // //           className={`px-8 py-4 rounded-2xl ${currentStep === 0 ? "opacity-20" : "bg-gray-800"}`}
// // // //         >
// // // //           <Text className="text-white font-bold">Back</Text>
// // // //         </TouchableOpacity>

// // // //         <TouchableOpacity
// // // //           onPress={currentStep === 3 ? () => alert("Published!") : handleNext}
// // // //           className="px-10 py-4 bg-teal-500 rounded-2xl"
// // // //         >
// // // //           <Text className="text-black font-bold text-lg">
// // // //             {currentStep === 3 ? "Publish" : "Next"}
// // // //           </Text>
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //     </SafeAreaView>
// // // //   );
// // // // };

// // // // // Helper Components
// // // // const CustomInput = ({ label, ...props }: any) => (
// // // //   <View className="mb-4">
// // // //     <Text className="text-gray-400 mb-2 ml-1 text-sm font-medium">{label}</Text>
// // // //     <TextInput
// // // //       placeholderTextColor="#444"
// // // //       className="bg-gray-900 text-white px-5 py-4 rounded-2xl border border-white/5 focus:border-teal-500"
// // // //       {...props}
// // // //     />
// // // //   </View>
// // // // );

// // // // const ReviewRow = ({ label, value }: any) => (
// // // //   <View className="flex-row justify-between py-3 border-b border-white/5">
// // // //     <Text className="text-gray-500">{label}</Text>
// // // //     <Text className="text-white font-bold">{value || "N/A"}</Text>
// // // //   </View>
// // // // );

// // // // export default PostScreen;

// // // import AsyncStorage from "@react-native-async-storage/async-storage";
// // // import axios from "axios";
// // // import * as ImagePicker from "expo-image-picker";
// // // import {
// // //   AlertCircle,
// // //   Car,
// // //   CheckCircle,
// // //   ChevronLeft,
// // //   ChevronRight,
// // //   Upload,
// // //   User,
// // //   X,
// // // } from "lucide-react-native";
// // // import React, { useEffect, useState } from "react";
// // // import {
// // //   ActivityIndicator,
// // //   Image,
// // //   Platform,
// // //   SafeAreaView,
// // //   ScrollView,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   View,
// // // } from "react-native";

// // // // ඔබේ Backend URL එක (IP Address එක නිවැරදිව පරීක්ෂා කරන්න)
// // // const API_URL = "http://192.168.43.254:5000/api/listings";

// // // const steps = [
// // //   "Vehicle Details",
// // //   "Your Contact",
// // //   "Upload Photos",
// // //   "Review & Submit",
// // // ];

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

// // // const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric", "Gas"];

// // // const PostScreen = ({ navigation }: any) => {
// // //   const [currentStep, setCurrentStep] = useState(0);
// // //   const [loading, setLoading] = useState(false);
// // //   const [success, setSuccess] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const [currentUser, setCurrentUser] = useState<any>(null);

// // //   const [formData, setFormData] = useState({
// // //     category: "",
// // //     make: "",
// // //     model: "",
// // //     year: "",
// // //     fuel: "Petrol",
// // //     mileage: "",
// // //     price: "",
// // //     location: "",
// // //     description: "",
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //   });

// // //   const [images, setImages] = useState<string[]>([]);

// // //   // 1. පරිශීලක තොරතුරු ලබා ගැනීම
// // //   useEffect(() => {
// // //     const loadUser = async () => {
// // //       const savedUser = await AsyncStorage.getItem("user");
// // //       if (savedUser) {
// // //         const user = JSON.parse(savedUser);
// // //         setCurrentUser(user);
// // //         setFormData((prev) => ({
// // //           ...prev,
// // //           name: user.name || "",
// // //           email: user.email || "",
// // //         }));
// // //       }
// // //     };
// // //     loadUser();
// // //   }, []);

// // //   // 2. පින්තූර තේරීම
// // //   const pickImages = async () => {
// // //     let result = await ImagePicker.launchImageLibraryAsync({
// // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // //       allowsMultipleSelection: true,
// // //       selectionLimit: 8 - images.length,
// // //       quality: 0.6, // පින්තූර වල size එක අඩු කර වේගයෙන් upload වීමට
// // //     });

// // //     if (!result.canceled) {
// // //       const selected = result.assets.map((asset) => asset.uri);
// // //       setImages([...images, ...selected]);
// // //     }
// // //   };

// // //   // 3. පියවර වල වලංගුභාවය පරීක්ෂාව
// // //   const isStepValid = () => {
// // //     if (currentStep === 0) {
// // //       return (
// // //         formData.category &&
// // //         formData.make &&
// // //         formData.model &&
// // //         formData.year &&
// // //         formData.mileage &&
// // //         formData.price &&
// // //         formData.location
// // //       );
// // //     }
// // //     if (currentStep === 1)
// // //       return formData.name && formData.email && formData.phone;
// // //     if (currentStep === 2) return images.length > 0;
// // //     return true;
// // //   };

// // //   // 4. දත්ත Backend එකට යැවීම (මෙහිදී තමයි වැරැද්ද නිවැරදි කර ඇත්තේ)
// // //   const handleSubmit = async () => {
// // //     if (!currentUser) return setError("කරුණාකර ලොග් වන්න.");

// // //     setLoading(true);
// // //     setError("");

// // //     const data = new FormData();

// // //     // String දත්ත ඇතුළත් කිරීම
// // //     data.append("user_id", String(currentUser.id));
// // //     data.append("category", formData.category);
// // //     data.append("make", formData.make);
// // //     data.append("model", formData.model);
// // //     data.append("year", formData.year);
// // //     data.append("fuel", formData.fuel);
// // //     data.append("mileage", formData.mileage);
// // //     data.append("price", formData.price);
// // //     data.append("location", formData.location);
// // //     data.append("description", formData.description || "");
// // //     data.append("name", formData.name);
// // //     data.append("email", formData.email);
// // //     data.append("phone", formData.phone);

// // //     // පින්තූර Upload කිරීමට අවශ්‍ය නිවැරදි Object එක සැකසීම
// // //     images.forEach((uri, index) => {
// // //       const filename = uri.split("/").pop() || `img_${index}.jpg`;
// // //       const match = /\.(\w+)$/.exec(filename);
// // //       const type = match ? `image/${match[1]}` : `image/jpeg`;

// // //       // @ts-ignore (React Native FormData issues fix)
// // //       data.append("images", {
// // //         uri: Platform.OS === "android" ? uri : uri.replace("file://", ""),
// // //         name: filename,
// // //         type: type, // image/jpeg හෝ image/png ලෙස නිවැරදිව යයි
// // //       });
// // //     });

// // //     try {
// // //       const res = await axios.post(API_URL, data, {
// // //         headers: {
// // //           "Content-Type": "multipart/form-data",
// // //         },
// // //       });

// // //       if (res.status === 201 || res.status === 200) {
// // //         setSuccess(true);
// // //         setTimeout(() => navigation.navigate("Profile"), 2000);
// // //       }
// // //     } catch (err: any) {
// // //       console.log("Backend Response Error:", err.response?.data);
// // //       setError(err.response?.data?.message || "දැන්වීම පල කිරීමට නොහැකි විය.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   if (success) {
// // //     return (
// // //       <View className="flex-1 bg-black justify-center items-center p-6">
// // //         <CheckCircle size={80} color="#10b981" />
// // //         <Text className="text-emerald-400 text-3xl font-bold mt-4 text-center">
// // //           සාර්ථකයි!
// // //         </Text>
// // //         <Text className="text-zinc-400 text-center mt-2">
// // //           දැන්වීම පල කෙරිණි. ඔබව Profile වෙත යොමු කරයි...
// // //         </Text>
// // //       </View>
// // //     );
// // //   }

// // //   return (
// // //     <SafeAreaView className="flex-1 bg-black">
// // //       {/* Stepper Header */}
// // //       <View className="flex-row px-6 py-6 border-b border-white/5">
// // //         {steps.map((_, i) => (
// // //           <View key={i} className="flex-1 flex-row items-center">
// // //             <View
// // //               className={`w-8 h-8 rounded-full items-center justify-center ${i <= currentStep ? "bg-emerald-500" : "bg-zinc-800"}`}
// // //             >
// // //               <Text className="text-black font-bold">{i + 1}</Text>
// // //             </View>
// // //             {i < steps.length - 1 && (
// // //               <View
// // //                 className={`flex-1 h-[2px] mx-2 ${i < currentStep ? "bg-emerald-500" : "bg-zinc-800"}`}
// // //               />
// // //             )}
// // //           </View>
// // //         ))}
// // //       </View>

// // //       <ScrollView className="flex-1 px-6 pt-4">
// // //         {error ? (
// // //           <View className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex-row items-center mb-4">
// // //             <AlertCircle size={20} color="#ef4444" />
// // //             <Text className="text-red-500 ml-2 flex-1">{error}</Text>
// // //           </View>
// // //         ) : null}

// // //         {currentStep === 0 && (
// // //           <View className="space-y-4">
// // //             <HeaderTitle
// // //               icon={<Car size={24} color="#10b981" />}
// // //               title="Vehicle Details"
// // //             />

// // //             <Text className="text-zinc-500 ml-1">Type</Text>
// // //             <ScrollView
// // //               horizontal
// // //               showsHorizontalScrollIndicator={false}
// // //               className="flex-row mb-2"
// // //             >
// // //               {vehicleCategories.map((cat) => (
// // //                 <TouchableOpacity
// // //                   key={cat}
// // //                   onPress={() => setFormData({ ...formData, category: cat })}
// // //                   className={`mr-2 px-5 py-3 rounded-xl border ${formData.category === cat ? "bg-emerald-500 border-emerald-500" : "bg-zinc-900 border-zinc-800"}`}
// // //                 >
// // //                   <Text
// // //                     className={
// // //                       formData.category === cat
// // //                         ? "text-black font-bold"
// // //                         : "text-zinc-400"
// // //                     }
// // //                   >
// // //                     {cat}
// // //                   </Text>
// // //                 </TouchableOpacity>
// // //               ))}
// // //             </ScrollView>

// // //             <CustomInput
// // //               label="Make"
// // //               placeholder="Toyota"
// // //               value={formData.make}
// // //               onChangeText={(t) => setFormData({ ...formData, make: t })}
// // //             />
// // //             <CustomInput
// // //               label="Model"
// // //               placeholder="Vitz"
// // //               value={formData.model}
// // //               onChangeText={(t) => setFormData({ ...formData, model: t })}
// // //             />

// // //             <View className="flex-row space-x-4">
// // //               <View className="flex-1">
// // //                 <CustomInput
// // //                   label="Year"
// // //                   keyboardType="numeric"
// // //                   value={formData.year}
// // //                   onChangeText={(t) => setFormData({ ...formData, year: t })}
// // //                 />
// // //               </View>
// // //               <View className="flex-1">
// // //                 <CustomInput
// // //                   label="Mileage (km)"
// // //                   keyboardType="numeric"
// // //                   value={formData.mileage}
// // //                   onChangeText={(t) => setFormData({ ...formData, mileage: t })}
// // //                 />
// // //               </View>
// // //             </View>

// // //             <Text className="text-zinc-500 ml-1">Fuel</Text>
// // //             <View className="flex-row flex-wrap gap-2 mb-2">
// // //               {fuelTypes.map((f) => (
// // //                 <TouchableOpacity
// // //                   key={f}
// // //                   onPress={() => setFormData({ ...formData, fuel: f })}
// // //                   className={`px-4 py-2 rounded-lg border ${formData.fuel === f ? "bg-emerald-500/20 border-emerald-500" : "bg-zinc-900 border-zinc-800"}`}
// // //                 >
// // //                   <Text
// // //                     className={
// // //                       formData.fuel === f
// // //                         ? "text-emerald-400 font-bold"
// // //                         : "text-zinc-500"
// // //                     }
// // //                   >
// // //                     {f}
// // //                   </Text>
// // //                 </TouchableOpacity>
// // //               ))}
// // //             </View>

// // //             <CustomInput
// // //               label="Price (LKR)"
// // //               keyboardType="numeric"
// // //               value={formData.price}
// // //               onChangeText={(t) => setFormData({ ...formData, price: t })}
// // //             />
// // //             <CustomInput
// // //               label="Location"
// // //               value={formData.location}
// // //               onChangeText={(t) => setFormData({ ...formData, location: t })}
// // //             />
// // //             <CustomInput
// // //               label="Description"
// // //               multiline
// // //               numberOfLines={4}
// // //               value={formData.description}
// // //               onChangeText={(t) => setFormData({ ...formData, description: t })}
// // //             />
// // //           </View>
// // //         )}

// // //         {currentStep === 1 && (
// // //           <View className="space-y-4">
// // //             <HeaderTitle
// // //               icon={<User size={24} color="#10b981" />}
// // //               title="Contact Info"
// // //             />
// // //             <CustomInput
// // //               label="Full Name"
// // //               value={formData.name}
// // //               onChangeText={(t) => setFormData({ ...formData, name: t })}
// // //             />
// // //             <CustomInput
// // //               label="Email"
// // //               value={formData.email}
// // //               onChangeText={(t) => setFormData({ ...formData, email: t })}
// // //             />
// // //             <CustomInput
// // //               label="Phone"
// // //               keyboardType="phone-pad"
// // //               placeholder="07XXXXXXXX"
// // //               value={formData.phone}
// // //               onChangeText={(t) => setFormData({ ...formData, phone: t })}
// // //             />
// // //           </View>
// // //         )}

// // //         {currentStep === 2 && (
// // //           <View>
// // //             <HeaderTitle
// // //               icon={<Upload size={24} color="#10b981" />}
// // //               title="Upload Photos"
// // //             />
// // //             <View className="flex-row flex-wrap mt-4">
// // //               {images.map((uri, i) => (
// // //                 <View key={i} className="w-1/2 p-1 relative">
// // //                   <Image source={{ uri }} className="w-full h-36 rounded-xl" />
// // //                   <TouchableOpacity
// // //                     onPress={() =>
// // //                       setImages(images.filter((_, idx) => idx !== i))
// // //                     }
// // //                     className="absolute top-3 right-3 bg-red-500 rounded-full p-1.5"
// // //                   >
// // //                     <X size={14} color="white" />
// // //                   </TouchableOpacity>
// // //                 </View>
// // //               ))}
// // //               {images.length < 8 && (
// // //                 <TouchableOpacity onPress={pickImages} className="w-1/2 p-1">
// // //                   <View className="w-full h-36 border-2 border-dashed border-zinc-800 rounded-xl items-center justify-center bg-zinc-900/50">
// // //                     <Upload size={24} color="#10b981" />
// // //                     <Text className="text-emerald-500 mt-1 font-bold">
// // //                       Add Photo
// // //                     </Text>
// // //                   </View>
// // //                 </TouchableOpacity>
// // //               )}
// // //             </View>
// // //           </View>
// // //         )}

// // //         {currentStep === 3 && (
// // //           <View className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
// // //             <Text className="text-xl font-bold text-emerald-400 mb-4">
// // //               Summary
// // //             </Text>
// // //             <ReviewRow
// // //               label="Vehicle"
// // //               value={`${formData.make} ${formData.model}`}
// // //             />
// // //             <ReviewRow label="Price" value={`LKR ${formData.price}`} />
// // //             <ReviewRow label="Phone" value={formData.phone} />
// // //             <Text className="text-zinc-500 mt-4 text-xs">
// // //               By publishing, you agree to our terms.
// // //             </Text>
// // //           </View>
// // //         )}
// // //         <View className="h-20" />
// // //       </ScrollView>

// // //       {/* Navigation Buttons */}
// // //       <View className="flex-row justify-between px-6 py-6 border-t border-white/5 bg-black">
// // //         <TouchableOpacity
// // //           onPress={() => setCurrentStep(currentStep - 1)}
// // //           disabled={currentStep === 0 || loading}
// // //           className={`p-4 rounded-xl ${currentStep === 0 ? "opacity-0" : "bg-zinc-900"}`}
// // //         >
// // //           <ChevronLeft size={24} color="white" />
// // //         </TouchableOpacity>

// // //         <TouchableOpacity
// // //           onPress={
// // //             currentStep === 3
// // //               ? handleSubmit
// // //               : () => setCurrentStep(currentStep + 1)
// // //           }
// // //           disabled={!isStepValid() || loading}
// // //           className={`px-10 py-4 rounded-xl flex-row items-center ${isStepValid() ? "bg-emerald-500" : "bg-zinc-800 opacity-50"}`}
// // //         >
// // //           {loading ? (
// // //             <ActivityIndicator color="black" />
// // //           ) : (
// // //             <>
// // //               <Text className="text-black font-bold text-lg mr-2">
// // //                 {currentStep === 3 ? "Publish" : "Next"}
// // //               </Text>
// // //               {currentStep < 3 && <ChevronRight size={20} color="black" />}
// // //             </>
// // //           )}
// // //         </TouchableOpacity>
// // //       </View>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // --- Sub Components ---
// // // const HeaderTitle = ({ icon, title }: any) => (
// // //   <View className="flex-row items-center mb-4">
// // //     {icon}
// // //     <Text className="text-2xl font-bold text-emerald-300 ml-2">{title}</Text>
// // //   </View>
// // // );

// // // const CustomInput = ({ label, ...props }: any) => (
// // //   <View className="mb-4">
// // //     <Text className="text-zinc-500 mb-2 text-xs font-bold uppercase ml-1">
// // //       {label}
// // //     </Text>
// // //     <TextInput
// // //       placeholderTextColor="#333"
// // //       className="bg-zinc-900 text-white px-5 py-4 rounded-2xl border border-white/5 focus:border-emerald-500 text-lg"
// // //       {...props}
// // //     />
// // //   </View>
// // // );

// // // const ReviewRow = ({ label, value }: any) => (
// // //   <View className="flex-row justify-between py-3 border-b border-white/5">
// // //     <Text className="text-zinc-500">{label}</Text>
// // //     <Text className="text-white font-bold">{value}</Text>
// // //   </View>
// // // );

// // // export default PostScreen;

// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import axios from "axios";
// // import * as ImagePicker from "expo-image-picker";
// // import {
// //   AlertCircle,
// //   Car,
// //   CheckCircle,
// //   ChevronLeft,
// //   ChevronRight,
// //   Info,
// //   Upload,
// //   User,
// //   X,
// // } from "lucide-react-native";
// // import React, { useEffect, useState } from "react";
// // import {
// //   ActivityIndicator,
// //   Image,
// //   Platform,
// //   SafeAreaView,
// //   ScrollView,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   View,
// // } from "react-native";

// // // ඔබේ IP ලිපිනය සහ Port එක නිවැරදිදැයි බලන්න
// // const API_URL = "http://192.168.43.254:5000/api/listings";

// // const steps = ["Details", "Contact", "Photos", "Review"];

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

// // const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric", "Gas"];

// // const PostScreen = ({ navigation }: any) => {
// //   const [currentStep, setCurrentStep] = useState(0);
// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState(false);
// //   const [error, setError] = useState("");
// //   const [currentUser, setCurrentUser] = useState<any>(null);

// //   const [formData, setFormData] = useState({
// //     category: "",
// //     make: "",
// //     model: "",
// //     year: "",
// //     fuel: "Petrol",
// //     mileage: "",
// //     price: "",
// //     location: "",
// //     description: "",
// //     name: "",
// //     phone: "",
// //   });

// //   const [images, setImages] = useState<string[]>([]);

// //   useEffect(() => {
// //     const loadUser = async () => {
// //       const savedUser = await AsyncStorage.getItem("user");
// //       if (savedUser) {
// //         const user = JSON.parse(savedUser);
// //         setCurrentUser(user);
// //         setFormData((prev) => ({
// //           ...prev,
// //           name: user.name || "",
// //           phone: user.phone || "",
// //         }));
// //       }
// //     };
// //     loadUser();
// //   }, []);

// //   const pickImages = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //       allowsMultipleSelection: true,
// //       selectionLimit: 8 - images.length,
// //       quality: 0.6,
// //     });

// //     if (!result.canceled) {
// //       const selected = result.assets.map((asset) => asset.uri);
// //       setImages([...images, ...selected]);
// //     }
// //   };

// //   const isStepValid = () => {
// //     if (currentStep === 0) {
// //       return (
// //         formData.category &&
// //         formData.make &&
// //         formData.model &&
// //         formData.year &&
// //         formData.mileage &&
// //         formData.price &&
// //         formData.location
// //       );
// //     }
// //     if (currentStep === 1) return formData.name && formData.phone;
// //     if (currentStep === 2) return images.length > 0;
// //     return true;
// //   };

// //   const handleSubmit = async () => {
// //     if (!currentUser) return setError("කරුණාකර පළමුව ලොග් වන්න.");
// //     if (images.length === 0)
// //       return setError("අවම වශයෙන් එක් පින්තූරයක්වත් තෝරන්න.");

// //     setLoading(true);
// //     setError("");

// //     try {
// //       const data = new FormData();

// //       // 1. මූලික දත්ත එකතු කිරීම
// //       data.append("user_id", String(currentUser.id));
// //       data.append("category", formData.category);
// //       data.append("make", formData.make);
// //       data.append("model", formData.model);
// //       data.append("year", formData.year);
// //       data.append("fuel", formData.fuel);
// //       data.append("mileage", formData.mileage);
// //       data.append("price", formData.price);
// //       data.append("location", formData.location);
// //       data.append("description", formData.description || "");
// //       data.append("name", formData.name);
// //       data.append("phone", formData.phone);

// //       // 2. පින්තූර FormData එකට එකතු කිරීම (වැදගත්ම කොටස)
// //       images.forEach((imageUri, index) => {
// //         const filename = imageUri.split("/").pop() || `img_${index}.jpg`;
// //         const match = /\.(\w+)$/.exec(filename);
// //         const type = match ? `image/${match[1]}` : `image/jpeg`;

// //         // @ts-ignore
// //         data.append("images", {
// //           uri:
// //             Platform.OS === "android"
// //               ? imageUri
// //               : imageUri.replace("file://", ""),
// //           name: filename,
// //           type: type,
// //         });
// //       });

// //       // 3. Request එක යැවීම
// //       const res = await axios.post(API_URL, data, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //           Accept: "application/json",
// //         },
// //       });

// //       if (res.status === 201 || res.status === 200) {
// //         setSuccess(true);
// //         setTimeout(() => navigation.navigate("Profile"), 2000);
// //       }
// //     } catch (err: any) {
// //       console.log("Submit Error Debug:", err.response?.data);
// //       setError(err.response?.data?.message || "දැන්වීම පළ කිරීම අසාර්ථක විය.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (success) {
// //     return (
// //       <View className="flex-1 bg-black justify-center items-center p-6">
// //         <CheckCircle size={80} color="#10b981" />
// //         <Text className="text-emerald-400 text-3xl font-bold mt-4 text-center">
// //           සාර්ථකයි!
// //         </Text>
// //         <Text className="text-zinc-400 text-center mt-2">
// //           දැන්වීම පළ කරන ලදී...
// //         </Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <SafeAreaView className="flex-1 bg-black">
// //       {/* Stepper Header */}
// //       <View className="flex-row px-6 py-6 border-b border-white/5">
// //         {steps.map((_, i) => (
// //           <View key={i} className="flex-1 flex-row items-center">
// //             <View
// //               className={`w-8 h-8 rounded-full items-center justify-center ${i <= currentStep ? "bg-emerald-500" : "bg-zinc-800"}`}
// //             >
// //               <Text className="text-black font-bold">{i + 1}</Text>
// //             </View>
// //             {i < steps.length - 1 && (
// //               <View
// //                 className={`flex-1 h-[2px] mx-2 ${i < currentStep ? "bg-emerald-500" : "bg-zinc-800"}`}
// //               />
// //             )}
// //           </View>
// //         ))}
// //       </View>

// //       <ScrollView className="flex-1 px-6 pt-4">
// //         {error ? (
// //           <View className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex-row items-center mb-4">
// //             <AlertCircle size={20} color="#ef4444" />
// //             <Text className="text-red-500 ml-2 flex-1">{error}</Text>
// //           </View>
// //         ) : null}

// //         {currentStep === 0 && (
// //           <View className="pb-10">
// //             <HeaderTitle
// //               icon={<Car size={24} color="#10b981" />}
// //               title="Vehicle Details"
// //             />
// //             <Text className="text-zinc-500 ml-1 mb-2">Category</Text>
// //             <ScrollView
// //               horizontal
// //               showsHorizontalScrollIndicator={false}
// //               className="flex-row mb-4"
// //             >
// //               {vehicleCategories.map((cat) => (
// //                 <TouchableOpacity
// //                   key={cat}
// //                   onPress={() => setFormData({ ...formData, category: cat })}
// //                   className={`mr-2 px-5 py-3 rounded-xl border ${formData.category === cat ? "bg-emerald-500 border-emerald-500" : "bg-zinc-900 border-zinc-800"}`}
// //                 >
// //                   <Text
// //                     className={
// //                       formData.category === cat
// //                         ? "text-black font-bold"
// //                         : "text-zinc-400"
// //                     }
// //                   >
// //                     {cat}
// //                   </Text>
// //                 </TouchableOpacity>
// //               ))}
// //             </ScrollView>
// //             <CustomInput
// //               label="Make"
// //               placeholder="Toyota"
// //               value={formData.make}
// //               onChangeText={(t: string) =>
// //                 setFormData({ ...formData, make: t })
// //               }
// //             />
// //             <CustomInput
// //               label="Model"
// //               placeholder="Vitz"
// //               value={formData.model}
// //               onChangeText={(t: string) =>
// //                 setFormData({ ...formData, model: t })
// //               }
// //             />
// //             <View className="flex-row space-x-4">
// //               <View className="flex-1">
// //                 <CustomInput
// //                   label="Year"
// //                   keyboardType="numeric"
// //                   value={formData.year}
// //                   onChangeText={(t: string) =>
// //                     setFormData({ ...formData, year: t })
// //                   }
// //                 />
// //               </View>
// //               <View className="flex-1">
// //                 <CustomInput
// //                   label="Mileage (km)"
// //                   keyboardType="numeric"
// //                   value={formData.mileage}
// //                   onChangeText={(t: string) =>
// //                     setFormData({ ...formData, mileage: t })
// //                   }
// //                 />
// //               </View>
// //             </View>
// //             <Text className="text-zinc-500 ml-1 mb-2">Fuel Type</Text>
// //             <View className="flex-row flex-wrap gap-2 mb-4">
// //               {fuelTypes.map((f) => (
// //                 <TouchableOpacity
// //                   key={f}
// //                   onPress={() => setFormData({ ...formData, fuel: f })}
// //                   className={`px-4 py-2 rounded-lg border ${formData.fuel === f ? "bg-emerald-500/20 border-emerald-500" : "bg-zinc-900 border-zinc-800"}`}
// //                 >
// //                   <Text
// //                     className={
// //                       formData.fuel === f
// //                         ? "text-emerald-400 font-bold"
// //                         : "text-zinc-500"
// //                     }
// //                   >
// //                     {f}
// //                   </Text>
// //                 </TouchableOpacity>
// //               ))}
// //             </View>
// //             <CustomInput
// //               label="Price (LKR)"
// //               keyboardType="numeric"
// //               value={formData.price}
// //               onChangeText={(t: string) =>
// //                 setFormData({ ...formData, price: t })
// //               }
// //             />
// //             <CustomInput
// //               label="Location"
// //               value={formData.location}
// //               onChangeText={(t: string) =>
// //                 setFormData({ ...formData, location: t })
// //               }
// //             />
// //             <CustomInput
// //               label="Description"
// //               multiline
// //               numberOfLines={4}
// //               value={formData.description}
// //               onChangeText={(t: string) =>
// //                 setFormData({ ...formData, description: t })
// //               }
// //             />
// //           </View>
// //         )}

// //         {currentStep === 1 && (
// //           <View>
// //             <HeaderTitle
// //               icon={<User size={24} color="#10b981" />}
// //               title="Contact Info"
// //             />
// //             <CustomInput
// //               label="Full Name"
// //               value={formData.name}
// //               onChangeText={(t: string) =>
// //                 setFormData({ ...formData, name: t })
// //               }
// //             />
// //             <CustomInput
// //               label="Phone Number"
// //               keyboardType="phone-pad"
// //               placeholder="07XXXXXXXX"
// //               value={formData.phone}
// //               onChangeText={(t: string) =>
// //                 setFormData({ ...formData, phone: t })
// //               }
// //             />
// //           </View>
// //         )}

// //         {currentStep === 2 && (
// //           <View>
// //             <HeaderTitle
// //               icon={<Upload size={24} color="#10b981" />}
// //               title="Upload Photos"
// //             />
// //             <View className="flex-row flex-wrap mt-4">
// //               {images.map((uri, i) => (
// //                 <View key={i} className="w-1/2 p-1 relative">
// //                   <Image source={{ uri }} className="w-full h-36 rounded-xl" />
// //                   <TouchableOpacity
// //                     onPress={() =>
// //                       setImages(images.filter((_, idx) => idx !== i))
// //                     }
// //                     className="absolute top-3 right-3 bg-red-500 rounded-full p-1.5"
// //                   >
// //                     <X size={14} color="white" />
// //                   </TouchableOpacity>
// //                 </View>
// //               ))}
// //               {images.length < 8 && (
// //                 <TouchableOpacity onPress={pickImages} className="w-1/2 p-1">
// //                   <View className="w-full h-36 border-2 border-dashed border-zinc-800 rounded-xl items-center justify-center bg-zinc-900/50">
// //                     <Upload size={24} color="#10b981" />
// //                     <Text className="text-emerald-500 mt-1 font-bold">
// //                       Add Photo
// //                     </Text>
// //                   </View>
// //                 </TouchableOpacity>
// //               )}
// //             </View>
// //           </View>
// //         )}

// //         {currentStep === 3 && (
// //           <View className="pb-10">
// //             <HeaderTitle
// //               icon={<Info size={24} color="#10b981" />}
// //               title="Review Listing"
// //             />
// //             <View className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
// //               <ReviewRow label="Category" value={formData.category} />
// //               <ReviewRow
// //                 label="Vehicle"
// //                 value={`${formData.make} ${formData.model}`}
// //               />
// //               <ReviewRow label="Year" value={formData.year} />
// //               <ReviewRow label="Fuel" value={formData.fuel} />
// //               <ReviewRow
// //                 label="Price"
// //                 value={`LKR ${formData.price}`}
// //                 highlight
// //               />
// //               <ReviewRow label="Seller" value={formData.name} />
// //               <ReviewRow label="Phone" value={formData.phone} />
// //             </View>
// //           </View>
// //         )}
// //         <View className="h-20" />
// //       </ScrollView>

// //       {/* Navigation Buttons */}
// //       <View className="flex-row justify-between px-6 py-6 border-t border-white/5 bg-black">
// //         <TouchableOpacity
// //           onPress={() => setCurrentStep(currentStep - 1)}
// //           disabled={currentStep === 0 || loading}
// //           className={`p-4 rounded-xl ${currentStep === 0 ? "opacity-0" : "bg-zinc-900"}`}
// //         >
// //           <ChevronLeft size={24} color="white" />
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           onPress={
// //             currentStep === 3
// //               ? handleSubmit
// //               : () => setCurrentStep(currentStep + 1)
// //           }
// //           disabled={!isStepValid() || loading}
// //           className={`px-10 py-4 rounded-xl flex-row items-center ${isStepValid() ? "bg-emerald-500" : "bg-zinc-800 opacity-50"}`}
// //         >
// //           {loading ? (
// //             <ActivityIndicator color="black" />
// //           ) : (
// //             <>
// //               <Text className="text-black font-bold text-lg mr-2">
// //                 {currentStep === 3 ? "Publish Now" : "Continue"}
// //               </Text>
// //               {currentStep < 3 && <ChevronRight size={20} color="black" />}
// //             </>
// //           )}
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // // Sub Components
// // const HeaderTitle = ({ icon, title }: any) => (
// //   <View className="flex-row items-center mb-6">
// //     <View className="bg-emerald-500/10 p-2 rounded-lg">{icon}</View>
// //     <Text className="text-2xl font-bold text-white ml-3">{title}</Text>
// //   </View>
// // );

// // const CustomInput = ({ label, ...props }: any) => (
// //   <View className="mb-5">
// //     <Text className="text-zinc-500 mb-2 text-xs font-bold uppercase ml-1 tracking-tighter">
// //       {label}
// //     </Text>
// //     <TextInput
// //       placeholderTextColor="#444"
// //       className="bg-zinc-900/80 text-white px-5 py-4 rounded-2xl border border-white/5 focus:border-emerald-500 text-lg"
// //       {...props}
// //     />
// //   </View>
// // );

// // const ReviewRow = ({ label, value, highlight }: any) => (
// //   <View className="flex-row justify-between py-3 border-b border-white/5">
// //     <Text className="text-zinc-500">{label}</Text>
// //     <Text
// //       className={`font-bold ${highlight ? "text-emerald-400 text-lg" : "text-white text-base"}`}
// //     >
// //       {value}
// //     </Text>
// //   </View>
// // );

// // export default PostScreen;

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import * as ImagePicker from "expo-image-picker";
// import {
//   AlertCircle,
//   Car,
//   CheckCircle,
//   ChevronLeft,
//   ChevronRight,
//   Info,
//   Upload,
//   User,
//   X,
// } from "lucide-react-native";
// import React, { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   Image,
//   Platform,
//   SafeAreaView,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// // ඔබගේ Backend API URL එක (IP ලිපිනය නිවැරදි දැයි බලන්න)
// const API_URL = "http://192.168.43.254:5000/api/listings";

// const steps = ["Details", "Contact", "Photos", "Review"];

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

// const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric", "Gas"];

// const PostScreen = ({ navigation }: any) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");
//   const [currentUser, setCurrentUser] = useState<any>(null);

//   const [formData, setFormData] = useState({
//     category: "",
//     make: "",
//     model: "",
//     year: "",
//     fuel: "Petrol",
//     mileage: "",
//     price: "",
//     location: "",
//     description: "",
//     name: "",
//     phone: "",
//   });

//   const [images, setImages] = useState<string[]>([]);

//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const savedUser = await AsyncStorage.getItem("user");
//         if (savedUser) {
//           const user = JSON.parse(savedUser);
//           setCurrentUser(user);
//           setFormData((prev) => ({
//             ...prev,
//             name: user.name || "",
//             phone: user.phone || "",
//           }));
//         }
//       } catch (err) {
//         console.log("User load error:", err);
//       }
//     };
//     loadUser();
//   }, []);

//   const pickImages = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true,
//       selectionLimit: 8 - images.length,
//       quality: 0.6,
//     });

//     if (!result.canceled) {
//       const selected = result.assets.map((asset) => asset.uri);
//       setImages([...images, ...selected]);
//     }
//   };

//   const isStepValid = () => {
//     if (currentStep === 0) {
//       return (
//         formData.category &&
//         formData.make &&
//         formData.model &&
//         formData.year &&
//         formData.mileage &&
//         formData.price &&
//         formData.location
//       );
//     }
//     if (currentStep === 1) return formData.name && formData.phone;
//     if (currentStep === 2) return images.length > 0;
//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!currentUser) return setError("කරුණාකර පළමුව ලොග් වන්න.");
//     if (images.length === 0)
//       return setError("අවම වශයෙන් එක් පින්තූරයක්වත් තෝරන්න.");

//     setLoading(true);
//     setError("");

//     try {
//       const data = new FormData();

//       // 1. මූලික දත්ත එකතු කිරීම
//       data.append("user_id", String(currentUser.id));
//       data.append("category", formData.category);
//       data.append("make", formData.make);
//       data.append("model", formData.model);
//       data.append("year", formData.year);
//       data.append("fuel", formData.fuel);
//       data.append("mileage", formData.mileage);
//       data.append("price", formData.price);
//       data.append("location", formData.location);
//       data.append("description", formData.description || "");
//       data.append("name", formData.name);
//       data.append("phone", formData.phone);

//       // 2. පින්තූර එකතු කිරීම (Backend හි upload.array('images') සමඟ ගැලපිය යුතුය)
//       images.forEach((imageUri, index) => {
//         const filename = imageUri.split("/").pop() || `img_${index}.jpg`;
//         const match = /\.(\w+)$/.exec(filename);
//         const type = match ? `image/${match[1]}` : `image/jpeg`;

//         // @ts-ignore
//         data.append("images", {
//           uri:
//             Platform.OS === "android"
//               ? imageUri
//               : imageUri.replace("file://", ""),
//           name: filename,
//           type: type,
//         });
//       });

//       // 3. Axios Request එක යැවීම
//       const res = await axios.post(API_URL, data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Accept: "application/json",
//         },
//         // ලොකු photos upload වීමට කාලය ලබා දීම
//         timeout: 60000,
//       });

//       if (res.status === 201 || res.status === 200) {
//         setSuccess(true);
//         setTimeout(() => navigation.navigate("Profile"), 2000);
//       }
//     } catch (err: any) {
//       console.log("Submit Error Debug:", err.response?.data || err.message);
//       setError(
//         err.response?.data?.message ||
//           "දැන්වීම පළ කිරීම අසාර්ථක විය. නැවත උත්සාහ කරන්න.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (success) {
//     return (
//       <View className="flex-1 bg-black justify-center items-center p-6">
//         <CheckCircle size={80} color="#10b981" />
//         <Text className="text-emerald-400 text-3xl font-bold mt-4 text-center">
//           සාර්ථකයි!
//         </Text>
//         <Text className="text-zinc-400 text-center mt-2">
//           ඔබේ දැන්වීම සාර්ථකව පළ කරන ලදී.
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView className="flex-1 bg-black">
//       {/* Stepper Header */}
//       <View className="flex-row px-6 py-6 border-b border-white/5">
//         {steps.map((_, i) => (
//           <View key={i} className="flex-1 flex-row items-center">
//             <View
//               className={`w-8 h-8 rounded-full items-center justify-center ${i <= currentStep ? "bg-emerald-500" : "bg-zinc-800"}`}
//             >
//               <Text className="text-black font-bold">{i + 1}</Text>
//             </View>
//             {i < steps.length - 1 && (
//               <View
//                 className={`flex-1 h-[2px] mx-2 ${i < currentStep ? "bg-emerald-500" : "bg-zinc-800"}`}
//               />
//             )}
//           </View>
//         ))}
//       </View>

//       <ScrollView className="flex-1 px-6 pt-4">
//         {error ? (
//           <View className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex-row items-center mb-4">
//             <AlertCircle size={20} color="#ef4444" />
//             <Text className="text-red-500 ml-2 flex-1">{error}</Text>
//           </View>
//         ) : null}

//         {currentStep === 0 && (
//           <View className="pb-10">
//             <HeaderTitle
//               icon={<Car size={24} color="#10b981" />}
//               title="Vehicle Details"
//             />

//             <Text className="text-zinc-500 ml-1 mb-2">Category</Text>
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               className="flex-row mb-4"
//             >
//               {vehicleCategories.map((cat) => (
//                 <TouchableOpacity
//                   key={cat}
//                   onPress={() => setFormData({ ...formData, category: cat })}
//                   className={`mr-2 px-5 py-3 rounded-xl border ${formData.category === cat ? "bg-emerald-500 border-emerald-500" : "bg-zinc-900 border-zinc-800"}`}
//                 >
//                   <Text
//                     className={
//                       formData.category === cat
//                         ? "text-black font-bold"
//                         : "text-zinc-400"
//                     }
//                   >
//                     {cat}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>

//             <CustomInput
//               label="Make"
//               placeholder="Toyota"
//               value={formData.make}
//               onChangeText={(t: string) =>
//                 setFormData({ ...formData, make: t })
//               }
//             />
//             <CustomInput
//               label="Model"
//               placeholder="Vitz"
//               value={formData.model}
//               onChangeText={(t: string) =>
//                 setFormData({ ...formData, model: t })
//               }
//             />

//             <View className="flex-row space-x-4">
//               <View className="flex-1">
//                 <CustomInput
//                   label="Year"
//                   keyboardType="numeric"
//                   value={formData.year}
//                   onChangeText={(t: string) =>
//                     setFormData({ ...formData, year: t })
//                   }
//                 />
//               </View>
//               <View className="flex-1">
//                 <CustomInput
//                   label="Mileage (km)"
//                   keyboardType="numeric"
//                   value={formData.mileage}
//                   onChangeText={(t: string) =>
//                     setFormData({ ...formData, mileage: t })
//                   }
//                 />
//               </View>
//             </View>

//             <Text className="text-zinc-500 ml-1 mb-2">Fuel Type</Text>
//             <View className="flex-row flex-wrap gap-2 mb-4">
//               {fuelTypes.map((f) => (
//                 <TouchableOpacity
//                   key={f}
//                   onPress={() => setFormData({ ...formData, fuel: f })}
//                   className={`px-4 py-2 rounded-lg border ${formData.fuel === f ? "bg-emerald-500/20 border-emerald-500" : "bg-zinc-900 border-zinc-800"}`}
//                 >
//                   <Text
//                     className={
//                       formData.fuel === f
//                         ? "text-emerald-400 font-bold"
//                         : "text-zinc-500"
//                     }
//                   >
//                     {f}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>

//             <CustomInput
//               label="Price (LKR)"
//               keyboardType="numeric"
//               value={formData.price}
//               onChangeText={(t: string) =>
//                 setFormData({ ...formData, price: t })
//               }
//             />
//             <CustomInput
//               label="Location"
//               placeholder="Colombo"
//               value={formData.location}
//               onChangeText={(t: string) =>
//                 setFormData({ ...formData, location: t })
//               }
//             />
//             <CustomInput
//               label="Description"
//               multiline
//               numberOfLines={4}
//               value={formData.description}
//               onChangeText={(t: string) =>
//                 setFormData({ ...formData, description: t })
//               }
//             />
//           </View>
//         )}

//         {currentStep === 1 && (
//           <View>
//             <HeaderTitle
//               icon={<User size={24} color="#10b981" />}
//               title="Contact Info"
//             />
//             <CustomInput
//               label="Full Name"
//               value={formData.name}
//               onChangeText={(t: string) =>
//                 setFormData({ ...formData, name: t })
//               }
//             />
//             <CustomInput
//               label="Phone Number"
//               keyboardType="phone-pad"
//               placeholder="07XXXXXXXX"
//               value={formData.phone}
//               onChangeText={(t: string) =>
//                 setFormData({ ...formData, phone: t })
//               }
//             />
//           </View>
//         )}

//         {currentStep === 2 && (
//           <View>
//             <HeaderTitle
//               icon={<Upload size={24} color="#10b981" />}
//               title="Upload Photos"
//             />
//             <View className="flex-row flex-wrap mt-4">
//               {images.map((uri, i) => (
//                 <View key={i} className="w-1/2 p-1 relative">
//                   <Image source={{ uri }} className="w-full h-36 rounded-xl" />
//                   <TouchableOpacity
//                     onPress={() =>
//                       setImages(images.filter((_, idx) => idx !== i))
//                     }
//                     className="absolute top-3 right-3 bg-red-500 rounded-full p-1.5"
//                   >
//                     <X size={14} color="white" />
//                   </TouchableOpacity>
//                 </View>
//               ))}
//               {images.length < 8 && (
//                 <TouchableOpacity onPress={pickImages} className="w-1/2 p-1">
//                   <View className="w-full h-36 border-2 border-dashed border-zinc-800 rounded-xl items-center justify-center bg-zinc-900/50">
//                     <Upload size={24} color="#10b981" />
//                     <Text className="text-emerald-500 mt-1 font-bold">
//                       Add Photo
//                     </Text>
//                   </View>
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>
//         )}

//         {currentStep === 3 && (
//           <View className="pb-10">
//             <HeaderTitle
//               icon={<Info size={24} color="#10b981" />}
//               title="Review Listing"
//             />
//             <View className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
//               <ReviewRow label="Category" value={formData.category} />
//               <ReviewRow
//                 label="Vehicle"
//                 value={`${formData.make} ${formData.model}`}
//               />
//               <ReviewRow label="Year" value={formData.year} />
//               <ReviewRow label="Fuel" value={formData.fuel} />
//               <ReviewRow
//                 label="Price"
//                 value={`LKR ${formData.price}`}
//                 highlight
//               />
//               <ReviewRow label="Seller" value={formData.name} />
//               <ReviewRow label="Phone" value={formData.phone} />
//             </View>
//           </View>
//         )}
//         <View className="h-20" />
//       </ScrollView>

//       {/* Navigation Buttons */}
//       <View className="flex-row justify-between px-6 py-6 border-t border-white/5 bg-black">
//         <TouchableOpacity
//           onPress={() => setCurrentStep(currentStep - 1)}
//           disabled={currentStep === 0 || loading}
//           className={`p-4 rounded-xl ${currentStep === 0 ? "opacity-0" : "bg-zinc-900"}`}
//         >
//           <ChevronLeft size={24} color="white" />
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={
//             currentStep === 3
//               ? handleSubmit
//               : () => setCurrentStep(currentStep + 1)
//           }
//           disabled={!isStepValid() || loading}
//           className={`px-10 py-4 rounded-xl flex-row items-center ${isStepValid() ? "bg-emerald-500" : "bg-zinc-800 opacity-50"}`}
//         >
//           {loading ? (
//             <ActivityIndicator color="black" />
//           ) : (
//             <>
//               <Text className="text-black font-bold text-lg mr-2">
//                 {currentStep === 3 ? "Publish Now" : "Continue"}
//               </Text>
//               {currentStep < 3 && <ChevronRight size={20} color="black" />}
//             </>
//           )}
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// // Sub Components
// const HeaderTitle = ({ icon, title }: any) => (
//   <View className="flex-row items-center mb-6">
//     <View className="bg-emerald-500/10 p-2 rounded-lg">{icon}</View>
//     <Text className="text-2xl font-bold text-white ml-3">{title}</Text>
//   </View>
// );

// const CustomInput = ({ label, ...props }: any) => (
//   <View className="mb-5">
//     <Text className="text-zinc-500 mb-2 text-xs font-bold uppercase ml-1 tracking-tighter">
//       {label}
//     </Text>
//     <TextInput
//       placeholderTextColor="#444"
//       className="bg-zinc-900/80 text-white px-5 py-4 rounded-2xl border border-white/5 focus:border-emerald-500 text-lg"
//       {...props}
//     />
//   </View>
// );

// const ReviewRow = ({ label, value, highlight }: any) => (
//   <View className="flex-row justify-between py-3 border-b border-white/5">
//     <Text className="text-zinc-500">{label}</Text>
//     <Text
//       className={`font-bold ${highlight ? "text-emerald-400 text-lg" : "text-white text-base"}`}
//     >
//       {value}
//     </Text>
//   </View>
// );

// export default PostScreen;
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import {
  AlertCircle,
  Car,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Info,
  Upload,
  User,
  X,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// ඔබගේ Backend API URL එක
const API_URL = "http://192.168.43.254:5000/api/listings";

const steps = ["Details", "Contact", "Photos", "Review"];

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

const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric", "Gas"];

const PostScreen = ({ navigation }: any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);

  const [formData, setFormData] = useState({
    category: "",
    make: "",
    model: "",
    year: "",
    fuel: "Petrol",
    mileage: "",
    price: "",
    location: "",
    description: "",
    name: "",
    phone: "",
  });

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("user");
        if (savedUser) {
          const user = JSON.parse(savedUser);
          setCurrentUser(user);
          setFormData((prev) => ({
            ...prev,
            name: user.name || "",
            phone: user.phone || "",
          }));
        }
      } catch (err) {
        console.log("User load error:", err);
      }
    };
    loadUser();
  }, []);

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: 8 - images.length,
      quality: 0.6,
    });

    if (!result.canceled) {
      const selected = result.assets.map((asset) => asset.uri);
      setImages([...images, ...selected]);
    }
  };

  const isStepValid = () => {
    if (currentStep === 0) {
      return (
        formData.category &&
        formData.make &&
        formData.model &&
        formData.year &&
        formData.mileage &&
        formData.price &&
        formData.location
      );
    }
    if (currentStep === 1) return formData.name && formData.phone;
    if (currentStep === 2) return images.length > 0;
    return true;
  };

  const handleSubmit = async () => {
    if (!currentUser) return setError("කරුණාකර පළමුව ලොග් වන්න.");
    if (images.length === 0)
      return setError("අවම වශයෙන් එක් පින්තූරයක්වත් තෝරන්න.");

    setLoading(true);
    setError("");

    try {
      const data = new FormData();

      // පෙළ දත්ත එකතු කිරීම
      data.append("user_id", String(currentUser.id));
      data.append("category", formData.category);
      data.append("make", formData.make);
      data.append("model", formData.model);
      data.append("year", formData.year);
      data.append("fuel", formData.fuel);
      data.append("mileage", formData.mileage);
      data.append("price", formData.price);
      data.append("location", formData.location);
      data.append("description", formData.description || "");
      data.append("name", formData.name);
      data.append("phone", formData.phone);

      // පින්තූර දත්ත එකතු කිරීම (මෙහිදී URI එක නිවැරදිව සකසා ඇත)
      images.forEach((imageUri, index) => {
        const filename = imageUri.split("/").pop() || `img_${index}.jpg`;
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image/jpeg`;

        // වැදගත්: මෙහි images නම Backend එකේ upload.array('images') නමට සමාන විය යුතුයි
        data.append("images", {
          uri:
            Platform.OS === "android"
              ? imageUri
              : imageUri.replace("file://", ""),
          name: filename,
          type: type,
        } as any);
      });

      const res = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201 || res.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          navigation.navigate("Account", { screen: "AccountMain" });
        }, 2000);
      }
    } catch (err: any) {
      console.log("Submit Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "දැන්වීම පළ කිරීම අසාර්ථක විය.");
    } finally {
      setLoading(false);
    }
  };

  // ... (ඉතිරි UI එක එලෙසම පවතී)
  if (success) {
    return (
      <View className="flex-1 bg-black justify-center items-center p-6">
        <CheckCircle size={80} color="#10b981" />
        <Text className="text-emerald-400 text-3xl font-bold mt-4 text-center">
          සාර්ථකයි!
        </Text>
        <Text className="text-zinc-400 text-center mt-2">
          ඔබේ දැන්වීම සාර්ථකව පළ කරන ලදී.
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-row px-6 py-6 border-b border-white/5">
        {steps.map((_, i) => (
          <View key={i} className="flex-1 flex-row items-center">
            <View
              className={`w-8 h-8 rounded-full items-center justify-center ${i <= currentStep ? "bg-emerald-500" : "bg-zinc-800"}`}
            >
              <Text className="text-black font-bold">{i + 1}</Text>
            </View>
            {i < steps.length - 1 && (
              <View
                className={`flex-1 h-[2px] mx-2 ${i < currentStep ? "bg-emerald-500" : "bg-zinc-800"}`}
              />
            )}
          </View>
        ))}
      </View>

      <ScrollView className="flex-1 px-6 pt-4">
        {error ? (
          <View className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex-row items-center mb-4">
            <AlertCircle size={20} color="#ef4444" />
            <Text className="text-red-500 ml-2 flex-1">{error}</Text>
          </View>
        ) : null}

        {currentStep === 0 && (
          <View className="pb-10">
            <HeaderTitle
              icon={<Car size={24} color="#10b981" />}
              title="Vehicle Details"
            />
            <Text className="text-zinc-500 ml-1 mb-2">Category</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row mb-4"
            >
              {vehicleCategories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  onPress={() => setFormData({ ...formData, category: cat })}
                  className={`mr-2 px-5 py-3 rounded-xl border ${formData.category === cat ? "bg-emerald-500 border-emerald-500" : "bg-zinc-900 border-zinc-800"}`}
                >
                  <Text
                    className={
                      formData.category === cat
                        ? "text-black font-bold"
                        : "text-zinc-400"
                    }
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <CustomInput
              label="Make"
              placeholder="Toyota"
              value={formData.make}
              onChangeText={(t: string) =>
                setFormData({ ...formData, make: t })
              }
            />
            <CustomInput
              label="Model"
              placeholder="Vitz"
              value={formData.model}
              onChangeText={(t: string) =>
                setFormData({ ...formData, model: t })
              }
            />
            <View className="flex-row space-x-4">
              <View className="flex-1">
                <CustomInput
                  label="Year"
                  keyboardType="numeric"
                  value={formData.year}
                  onChangeText={(t: string) =>
                    setFormData({ ...formData, year: t })
                  }
                />
              </View>
              <View className="flex-1">
                <CustomInput
                  label="Mileage (km)"
                  keyboardType="numeric"
                  value={formData.mileage}
                  onChangeText={(t: string) =>
                    setFormData({ ...formData, mileage: t })
                  }
                />
              </View>
            </View>
            <Text className="text-zinc-500 ml-1 mb-2">Fuel Type</Text>
            <View className="flex-row flex-wrap gap-2 mb-4">
              {fuelTypes.map((f) => (
                <TouchableOpacity
                  key={f}
                  onPress={() => setFormData({ ...formData, fuel: f })}
                  className={`px-4 py-2 rounded-lg border ${formData.fuel === f ? "bg-emerald-500/20 border-emerald-500" : "bg-zinc-900 border-zinc-800"}`}
                >
                  <Text
                    className={
                      formData.fuel === f
                        ? "text-emerald-400 font-bold"
                        : "text-zinc-500"
                    }
                  >
                    {f}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <CustomInput
              label="Price (LKR)"
              keyboardType="numeric"
              value={formData.price}
              onChangeText={(t: string) =>
                setFormData({ ...formData, price: t })
              }
            />
            <CustomInput
              label="Location"
              placeholder="Colombo"
              value={formData.location}
              onChangeText={(t: string) =>
                setFormData({ ...formData, location: t })
              }
            />
            <CustomInput
              label="Description"
              multiline
              numberOfLines={4}
              value={formData.description}
              onChangeText={(t: string) =>
                setFormData({ ...formData, description: t })
              }
            />
          </View>
        )}

        {currentStep === 1 && (
          <View>
            <HeaderTitle
              icon={<User size={24} color="#10b981" />}
              title="Contact Info"
            />
            <CustomInput
              label="Full Name"
              value={formData.name}
              onChangeText={(t: string) =>
                setFormData({ ...formData, name: t })
              }
            />
            <CustomInput
              label="Phone Number"
              keyboardType="phone-pad"
              placeholder="07XXXXXXXX"
              value={formData.phone}
              onChangeText={(t: string) =>
                setFormData({ ...formData, phone: t })
              }
            />
          </View>
        )}

        {currentStep === 2 && (
          <View>
            <HeaderTitle
              icon={<Upload size={24} color="#10b981" />}
              title="Upload Photos"
            />
            <View className="flex-row flex-wrap mt-4">
              {images.map((uri, i) => (
                <View key={i} className="w-1/2 p-1 relative">
                  <Image source={{ uri }} className="w-full h-36 rounded-xl" />
                  <TouchableOpacity
                    onPress={() =>
                      setImages(images.filter((_, idx) => idx !== i))
                    }
                    className="absolute top-3 right-3 bg-red-500 rounded-full p-1.5"
                  >
                    <X size={14} color="white" />
                  </TouchableOpacity>
                </View>
              ))}
              {images.length < 8 && (
                <TouchableOpacity onPress={pickImages} className="w-1/2 p-1">
                  <View className="w-full h-36 border-2 border-dashed border-zinc-800 rounded-xl items-center justify-center bg-zinc-900/50">
                    <Upload size={24} color="#10b981" />
                    <Text className="text-emerald-500 mt-1 font-bold">
                      Add Photo
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}

        {currentStep === 3 && (
          <View className="pb-10">
            <HeaderTitle
              icon={<Info size={24} color="#10b981" />}
              title="Review Listing"
            />
            <View className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
              <ReviewRow label="Category" value={formData.category} />
              <ReviewRow
                label="Vehicle"
                value={`${formData.make} ${formData.model}`}
              />
              <ReviewRow label="Year" value={formData.year} />
              <ReviewRow label="Fuel" value={formData.fuel} />
              <ReviewRow
                label="Price"
                value={`LKR ${formData.price}`}
                highlight
              />
              <ReviewRow label="Seller" value={formData.name} />
              <ReviewRow label="Phone" value={formData.phone} />
            </View>
          </View>
        )}
        <View className="h-20" />
      </ScrollView>

      <View className="flex-row justify-between px-6 py-6 border-t border-white/5 bg-black">
        <TouchableOpacity
          onPress={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 0 || loading}
          className={`p-4 rounded-xl ${currentStep === 0 ? "opacity-0" : "bg-zinc-900"}`}
        >
          <ChevronLeft size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={
            currentStep === 3
              ? handleSubmit
              : () => setCurrentStep(currentStep + 1)
          }
          disabled={!isStepValid() || loading}
          className={`px-10 py-4 rounded-xl flex-row items-center ${isStepValid() ? "bg-emerald-500" : "bg-zinc-800 opacity-50"}`}
        >
          {loading ? (
            <ActivityIndicator color="black" />
          ) : (
            <>
              <Text className="text-black font-bold text-lg mr-2">
                {currentStep === 3 ? "Publish Now" : "Continue"}
              </Text>
              {currentStep < 3 && <ChevronRight size={20} color="black" />}
            </>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// ... (Sub components remain same)
const HeaderTitle = ({ icon, title }: any) => (
  <View className="flex-row items-center mb-6">
    <View className="bg-emerald-500/10 p-2 rounded-lg">{icon}</View>
    <Text className="text-2xl font-bold text-white ml-3">{title}</Text>
  </View>
);

const CustomInput = ({ label, ...props }: any) => (
  <View className="mb-5">
    <Text className="text-zinc-500 mb-2 text-xs font-bold uppercase ml-1 tracking-tighter">
      {label}
    </Text>
    <TextInput
      placeholderTextColor="#444"
      className="bg-zinc-900/80 text-white px-5 py-4 rounded-2xl border border-white/5 focus:border-emerald-500 text-lg"
      {...props}
    />
  </View>
);

const ReviewRow = ({ label, value, highlight }: any) => (
  <View className="flex-row justify-between py-3 border-b border-white/5">
    <Text className="text-zinc-500">{label}</Text>
    <Text
      className={`font-bold ${highlight ? "text-emerald-400 text-lg" : "text-white text-base"}`}
    >
      {value}
    </Text>
  </View>
);

export default PostScreen;
