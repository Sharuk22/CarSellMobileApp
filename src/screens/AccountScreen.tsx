import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccountScreen = () => {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
    phone: "077 123 4567"
  });

  const [ads] = useState([
    { id: 1, name: "Toyota Prius 2018", price: "12,500,000", status: "available", year: 2018, fuel: "Hybrid" },
    { id: 2, name: "Mitsubishi Montero", price: "32,000,000", status: "sold", year: 2015, fuel: "Diesel" },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-1 px-5 pt-10 pb-10">
          
          {/* --- Profile Header --- */}
          <View className="items-center mb-8">
            <View className="relative">
              <View className="w-28 h-28 rounded-full bg-blue-100 items-center justify-center border-4 border-white shadow-sm overflow-hidden">
                <Ionicons name="person" size={60} color="#2563eb" />
              </View>
              <TouchableOpacity className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full border-2 border-white shadow-md">
                <Ionicons name="camera" size={18} color="white" />
              </TouchableOpacity>
            </View>
            <Text className="text-2xl font-bold mt-4 text-slate-800">{user.name}</Text>
            <Text className="text-slate-500 font-medium">{user.email}</Text>
          </View>

          {/* --- Stats --- */}
          <View className="flex-row bg-white rounded-3xl p-5 mb-6 shadow-sm border border-slate-100 justify-between">
            <View className="items-center flex-1">
              <Text className="text-blue-600 font-bold text-xl">{ads.length}</Text>
              <Text className="text-slate-400 text-[10px] uppercase font-bold">Ads</Text>
            </View>
            <View className="w-[1] h-8 bg-slate-100 self-center" />
            <View className="items-center flex-1">
              <Text className="text-blue-600 font-bold text-xl">0</Text>
              <Text className="text-slate-400 text-[10px] uppercase font-bold">Sold</Text>
            </View>
            <View className="w-[1] h-8 bg-slate-100 self-center" />
            <View className="items-center flex-1">
              <Text className="text-blue-600 font-bold text-xl">4.8</Text>
              <Text className="text-slate-400 text-[10px] uppercase font-bold">Rating</Text>
            </View>
          </View>

          {/* --- Account Settings Menu --- */}
          <Text className="text-lg font-bold text-slate-800 mb-4 px-1">Account Settings</Text>
          <View className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 mb-8">
            <MenuItem icon="person-outline" title="Edit Profile" />
            <MenuItem icon="lock-closed-outline" title="Change Password" />
            <MenuItem icon="notifications-outline" title="Notifications" />
            <MenuItem icon="shield-checkmark-outline" title="Privacy & Security" border={false} />
          </View>

          {/* --- Inventory Section --- */}
          <View className="flex-row items-center justify-between mb-4 px-1">
            <Text className="text-lg font-bold text-slate-800">My Listings</Text>
            <TouchableOpacity><Text className="text-blue-600 font-semibold text-sm">See All</Text></TouchableOpacity>
          </View>

          {ads.map((item) => (
            <View key={item.id} className="bg-white rounded-3xl p-4 mb-4 shadow-sm border border-slate-100">
              <View className="flex-row">
                <View className="w-20 h-20 bg-slate-50 rounded-2xl items-center justify-center border border-slate-100">
                   <Ionicons name="car-sport-outline" size={35} color="#cbd5e1" />
                </View>
                <View className="flex-1 ml-4 justify-center">
                  <Text className="text-slate-800 font-bold text-base">{item.name}</Text>
                  <Text className="text-blue-600 font-black text-md">LKR {item.price}</Text>
                  <View className="flex-row mt-1">
                    <Text className="text-[10px] text-slate-400 font-bold uppercase">{item.year} • {item.fuel}</Text>
                  </View>
                </View>
                <View className="justify-around items-center">
                  <TouchableOpacity className="p-2 bg-slate-50 rounded-full border border-slate-100">
                    <Ionicons name="create-outline" size={16} color="#64748b" />
                  </TouchableOpacity>
                  <TouchableOpacity className="p-2 bg-red-50 rounded-full border border-red-100">
                    <Ionicons name="trash-outline" size={16} color="#ef4444" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          {/* --- Support & Other --- */}
          <Text className="text-lg font-bold text-slate-800 mb-4 px-1">Support</Text>
          <View className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100 mb-8">
            <MenuItem icon="help-circle-outline" title="Help Center" />
            <MenuItem icon="information-circle-outline" title="About Us" border={false} />
          </View>

          {/* --- Logout --- */}
          <TouchableOpacity className="flex-row items-center justify-center p-5 bg-red-50 rounded-3xl border border-red-100">
            <Ionicons name="log-out-outline" size={22} color="#ef4444" />
            <Text className="text-red-500 font-bold ml-2 text-base">Sign Out</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Reusable Menu Item Component ---
const MenuItem = ({ icon, title, border = true }: { icon: any, title: string, border?: boolean }) => (
  <TouchableOpacity className={`flex-row items-center justify-between p-4 ${border ? 'border-b border-slate-50' : ''}`}>
    <View className="flex-row items-center">
      <View className="w-10 h-10 bg-slate-50 rounded-xl items-center justify-center">
        <Ionicons name={icon} size={20} color="#475569" />
      </View>
      <Text className="ml-4 text-slate-700 font-semibold">{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
  </TouchableOpacity>
);

export default AccountScreen;