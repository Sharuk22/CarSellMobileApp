// // import { Feather } from "@expo/vector-icons";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import axios from "axios";
// // import * as ImagePicker from "expo-image-picker";
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

// // // ඔබේ Backend එකේ අලුත් URL එක (user.ts සඳහා)
// // const API_URL = "http://192.168.43.254:5000/api/users";

// // const EditProfileScreen = ({ navigation }: any) => {
// //   const [loading, setLoading] = useState(false);
// //   const [userId, setUserId] = useState("");
// //   const [image, setImage] = useState<string | null>(null);
// //   const [form, setForm] = useState({ name: "", phone: "", email: "" });

// //   useEffect(() => {
// //     loadUserData();
// //   }, []);

// //   const loadUserData = async () => {
// //     try {
// //       const savedUser = await AsyncStorage.getItem("user");
// //       if (savedUser) {
// //         const parsed = JSON.parse(savedUser);
// //         setUserId(parsed.id);
// //         setForm({
// //           name: parsed.name || "",
// //           phone: parsed.phone || "",
// //           email: parsed.email || "", // Email එක සාමාන්‍යයෙන් වෙනස් නොකරන නිසා පෙන්වීමට පමණක් ගනී
// //         });
// //         if (parsed.profile_image) {
// //           setImage(`http://192.168.43.254:5000${parsed.profile_image}`);
// //         }
// //       }
// //     } catch (error) {
// //       console.log("Error loading data");
// //     }
// //   };

// //   const pickImage = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// //       allowsEditing: true,
// //       aspect: [1, 1],
// //       quality: 0.5,
// //     });

// //     if (!result.canceled) {
// //       setImage(result.assets[0].uri);
// //     }
// //   };

// //   const handleUpdate = async () => {
// //     if (!form.name || !form.phone) {
// //       return Alert.alert("Error", "Please fill name and phone");
// //     }

// //     setLoading(true);
// //     try {
// //       const formData = new FormData();
// //       formData.append("name", form.name);
// //       formData.append("phone", form.phone);

// //       if (image && !image.startsWith("http")) {
// //         const filename = image.split("/").pop();
// //         const match = /\.(\w+)$/.exec(filename || "");
// //         const type = match ? `image/${match[1]}` : `image`;

// //         // @ts-ignore
// //         formData.append("profileImage", { uri: image, name: filename, type });
// //       }

// //       const response = await axios.put(
// //         `${API_URL}/update-profile/${userId}`,
// //         formData,
// //         {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         },
// //       );

// //       if (response.data.success) {
// //         // අලුත් දත්ත නැවත AsyncStorage එකේ Save කිරීම
// //         await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
// //         Alert.alert("Success", "Profile updated successfully!");
// //         navigation.goBack();
// //       }
// //     } catch (err: any) {
// //       console.log("Update Error:", err.response?.data || err.message);
// //       Alert.alert("Error", "Update failed. Check connection.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <SafeAreaView className="flex-1 bg-black">
// //       <ScrollView contentContainerStyle={{ padding: 24 }}>
// //         {/* Header */}
// //         <View className="flex-row items-center mb-8">
// //           <TouchableOpacity
// //             onPress={() => navigation.goBack()}
// //             className="bg-zinc-900 p-2 rounded-full"
// //           >
// //             <Feather name="arrow-left" size={20} color="white" />
// //           </TouchableOpacity>
// //           <Text className="text-white text-2xl font-black ml-4 uppercase tracking-tighter">
// //             Edit Profile
// //           </Text>
// //         </View>

// //         {/* Profile Image Picker */}
// //         <View className="items-center mb-10">
// //           <TouchableOpacity onPress={pickImage} className="relative">
// //             <View className="w-32 h-32 rounded-full bg-zinc-900 border-4 border-emerald-500/20 overflow-hidden items-center justify-center">
// //               {image ? (
// //                 <Image source={{ uri: image }} className="w-full h-full" />
// //               ) : (
// //                 <Feather name="user" size={50} color="#333" />
// //               )}
// //             </View>
// //             <View className="absolute bottom-0 right-0 bg-emerald-500 p-2 rounded-full border-4 border-black">
// //               <Feather name="camera" size={16} color="black" />
// //             </View>
// //           </TouchableOpacity>
// //           <Text className="text-zinc-500 text-[10px] font-bold mt-4 uppercase tracking-widest">
// //             Tap to change photo
// //           </Text>
// //         </View>

// //         {/* Form Inputs */}
// //         <View className="space-y-6">
// //           <View>
// //             <Text className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">
// //               Full Name
// //             </Text>
// //             <TextInput
// //               value={form.name}
// //               onChangeText={(v) => setForm({ ...form, name: v })}
// //               placeholder="Your Name"
// //               placeholderTextColor="#444"
// //               className="bg-zinc-900 text-white p-5 rounded-[20px] border border-white/5 font-bold"
// //             />
// //           </View>

// //           <View>
// //             <Text className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">
// //               Phone Number
// //             </Text>
// //             <TextInput
// //               value={form.phone}
// //               onChangeText={(v) => setForm({ ...form, phone: v })}
// //               keyboardType="phone-pad"
// //               placeholder="07X XXX XXXX"
// //               placeholderTextColor="#444"
// //               className="bg-zinc-900 text-white p-5 rounded-[20px] border border-white/5 font-bold"
// //             />
// //           </View>

// //           <View className="opacity-50">
// //             <Text className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">
// //               Email (Non-editable)
// //             </Text>
// //             <TextInput
// //               value={form.email}
// //               editable={false}
// //               className="bg-zinc-900/50 text-zinc-500 p-5 rounded-[20px] border border-white/5 font-bold"
// //             />
// //           </View>
// //         </View>

// //         {/* Update Button */}
// //         <TouchableOpacity
// //           onPress={handleUpdate}
// //           disabled={loading}
// //           className="bg-emerald-500 p-5 rounded-[25px] mt-10 items-center shadow-lg shadow-emerald-500/20"
// //         >
// //           {loading ? (
// //             <ActivityIndicator color="black" />
// //           ) : (
// //             <Text className="text-black font-black uppercase tracking-tighter text-lg">
// //               Save Changes
// //             </Text>
// //           )}
// //         </TouchableOpacity>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // export default EditProfileScreen;

import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
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

// ඔබේ Backend එකේ අලුත් URL එක
const API_URL = "http://192.168.43.254:5000/api/users";

const EditProfileScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        setUserId(parsed.id);
        setForm({
          name: parsed.name || "",
          phone: parsed.phone || "",
          email: parsed.email || "",
        });
        if (parsed.profile_image) {
          setImage(`http://192.168.43.254:5000${parsed.profile_image}`);
        }
      }
    } catch (error) {
      console.log("Error loading data");
    }
  };

  const pickImage = async () => {
    try {
      // SDK 54 වලදී Web සහ Mobile දෙකටම හොඳින් ක්‍රියා කරන ආකාරය:
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"], // මෙතැනට direct string array එකක් දීමෙන් error එක නැතිවේ
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("ImagePicker Error: ", error);
      Alert.alert("Error", "Failed to pick an image");
    }
  };

  const handleUpdate = async () => {
    if (!form.name || !form.phone) {
      return Alert.alert("Error", "Please fill name and phone");
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("phone", form.phone);

      if (image && !image.startsWith("http")) {
        const filename = image.split("/").pop();
        const match = /\.(\w+)$/.exec(filename || "");
        const type = match ? `image/${match[1]}` : `image`;

        // @ts-ignore
        formData.append("profileImage", { uri: image, name: filename, type });
      }

      const response = await axios.put(
        `${API_URL}/update-profile/${userId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      if (response.data.success) {
        await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
        Alert.alert("Success", "Profile updated successfully!");
        navigation.goBack();
      }
    } catch (err: any) {
      console.log("Update Error:", err.response?.data || err.message);
      Alert.alert("Error", "Update failed. Check connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Header */}
        <View className="flex-row items-center mb-8">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-zinc-900 p-2 rounded-full"
          >
            <Feather name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-black ml-4 uppercase tracking-tighter">
            Edit Profile
          </Text>
        </View>

        {/* Profile Image Picker */}
        <View className="items-center mb-10">
          <TouchableOpacity onPress={pickImage} className="relative">
            <View className="w-32 h-32 rounded-full bg-zinc-900 border-4 border-emerald-500/20 overflow-hidden items-center justify-center">
              {image ? (
                <Image source={{ uri: image }} className="w-full h-full" />
              ) : (
                <Feather name="user" size={50} color="#333" />
              )}
            </View>
            <View className="absolute bottom-0 right-0 bg-emerald-500 p-2 rounded-full border-4 border-black">
              <Feather name="camera" size={16} color="black" />
            </View>
          </TouchableOpacity>
          <Text className="text-zinc-500 text-[10px] font-bold mt-4 uppercase tracking-widest">
            Tap to change photo
          </Text>
        </View>

        {/* Form Inputs */}
        <View className="space-y-6">
          <View>
            <Text className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">
              Full Name
            </Text>
            <TextInput
              value={form.name}
              onChangeText={(v) => setForm({ ...form, name: v })}
              placeholder="Your Name"
              placeholderTextColor="#444"
              className="bg-zinc-900 text-white p-5 rounded-[20px] border border-white/5 font-bold"
            />
          </View>

          <View>
            <Text className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">
              Phone Number
            </Text>
            <TextInput
              value={form.phone}
              onChangeText={(v) => setForm({ ...form, phone: v })}
              keyboardType="phone-pad"
              placeholder="07X XXX XXXX"
              placeholderTextColor="#444"
              className="bg-zinc-900 text-white p-5 rounded-[20px] border border-white/5 font-bold"
            />
          </View>

          <View className="opacity-50">
            <Text className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">
              Email (Non-editable)
            </Text>
            <TextInput
              value={form.email}
              editable={false}
              className="bg-zinc-900/50 text-zinc-500 p-5 rounded-[20px] border border-white/5 font-bold"
            />
          </View>
        </View>

        {/* Update Button */}
        <TouchableOpacity
          onPress={handleUpdate}
          disabled={loading}
          className="bg-emerald-500 p-5 rounded-[25px] mt-10 items-center shadow-lg shadow-emerald-500/20"
        >
          {loading ? (
            <ActivityIndicator color="black" />
          ) : (
            <Text className="text-black font-black uppercase tracking-tighter text-lg">
              Save Changes
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
