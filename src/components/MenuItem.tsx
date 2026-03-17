import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MenuItemProps {
  icon: any;
  title: string;
  border?: boolean;
  onPress?: () => void;
}

export const MenuItem = ({ icon, title, border = true, onPress }: MenuItemProps) => (
  <TouchableOpacity 
    onPress={onPress}
    className={`flex-row items-center justify-between p-4 ${border ? 'border-b border-slate-50' : ''}`}
  >
    <View className="flex-row items-center">
      <View className="w-10 h-10 bg-slate-50 rounded-xl items-center justify-center">
        <Ionicons name={icon} size={20} color="#475569" />
      </View>
      <Text className="ml-4 text-slate-700 font-semibold">{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
  </TouchableOpacity>
);