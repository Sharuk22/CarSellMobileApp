import { View, Text, Image } from "react-native";

export default function ListingCard({ title, price, image }: any) {
  return (
    <View className="bg-white rounded-xl shadow mb-4 overflow-hidden">
      <Image source={{ uri: image }} className="w-full h-36" />
      <View className="p-3">
        <Text className="font-semibold text-gray-800">{title}</Text>
        <Text className="text-teal-600 font-bold mt-1">Rs {price}</Text>
        <Text className="text-gray-400 text-xs mt-1">Just now</Text>
      </View>
    </View>
  );
}