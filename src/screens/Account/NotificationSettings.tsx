import React, { useState } from 'react';
import { View, Text, SafeAreaView, Switch } from 'react-native';

const NotificationSettings = () => {
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="p-6">
        <Text className="text-2xl font-bold text-slate-800 mb-6">Notifications</Text>
        
        <View className="bg-white rounded-3xl p-2 shadow-sm border border-slate-100">
          <View className="flex-row items-center justify-between p-4 border-b border-slate-50">
            <Text className="text-slate-700 font-semibold text-base">Push Notifications</Text>
            <Switch value={push} onValueChange={setPush} trackColor={{ true: '#bfdbfe' }} thumbColor={push ? '#2563eb' : '#f4f3f4'} />
          </View>
          
          <View className="flex-row items-center justify-between p-4">
            <Text className="text-slate-700 font-semibold text-base">Email Updates</Text>
            <Switch value={email} onValueChange={setEmail} trackColor={{ true: '#bfdbfe' }} thumbColor={email ? '#2563eb' : '#f4f3f4'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationSettings;