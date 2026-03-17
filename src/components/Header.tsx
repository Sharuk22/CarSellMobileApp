import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <SafeAreaView className="bg-black"> 
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-white/10">
        
        {/* වම් පැත්ත - LuxeDrive Logo */}
        <View className="flex-row items-center">
          <Text className="text-teal-500 text-2xl font-black tracking-tighter">
            LuxeDrive
          </Text>
        </View>

        {/* දකුණු පැත්ත - Facebook එකේ වගේ Icons */}
        <View className="flex-row items-center space-x-2">
          
          {/* Search Icon */}
          <TouchableOpacity className="bg-zinc-800 p-2 rounded-full ml-2">
            <Ionicons name="search" size={20} color="#009688" />
          </TouchableOpacity>

          {/* Sell Car (Post) Icon */}
          <TouchableOpacity className="bg-zinc-800 p-2 rounded-full ml-2">
            <Ionicons name="add" size={20} color="#009688" />
          </TouchableOpacity>

          {/* Notifications/Chat Icon */}
          <TouchableOpacity className="bg-zinc-800 p-2 rounded-full ml-2">
            <Ionicons name="notifications" size={20} color="#009688" />
            {/* පොඩි රතු තිතක් */}
            <View className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-black" />
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;