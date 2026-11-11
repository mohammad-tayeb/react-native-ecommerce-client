import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

const wishlistItems = [
  {
    id: '1',
    title: 'Men Round Neck Pure C...',
    rating: '4.6',
    price: '$80.00',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80',
  },
  {
    id: '2',
    title: 'Men Tapered Fit Flat-Fr...',
    rating: '4.6',
    price: '$70.00',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80',
  },
  {
    id: '3',
    title: 'Leather Bag',
    rating: '4.6',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80',
  },
];

export default function Favorites() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <TouchableOpacity className="p-1">
          <Feather name="menu" size={24} color="#000" />
        </TouchableOpacity>

        <Text className="text-xl font-bold text-gray-900">Wishlist</Text>

        <TouchableOpacity className="p-1 relative">
          <Feather name="shopping-bag" size={24} color="#000" />
          <View className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 items-center justify-center">
            <Text className="text-white text-[10px] font-bold">0</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Grid Content */}
      <ScrollView className="flex-1 px-3 pt-3">
        <View className="flex-row flex-wrap justify-between">
          {wishlistItems.map((item) => (
            <View key={item.id} className="w-[48%] bg-white rounded-2xl mb-4 overflow-hidden shadow-sm">
              {/* Product Image & Heart Icon */}
              <View className="relative w-full h-48 bg-gray-100">
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <TouchableOpacity 
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-sm items-center justify-center"
                  activeOpacity={0.8}
                >
                  <Ionicons name="heart" size={18} color="#EF4444" />
                </TouchableOpacity>
              </View>

              {/* Product Info */}
              <View className="p-3">
                <View className="flex-row items-center mb-1">
                  <FontAwesome name="star" size={14} color="#FBBF24" />
                  <Text className="text-xs text-gray-500 ml-1 font-medium">{item.rating}</Text>
                </View>

                <Text className="text-sm font-semibold text-gray-900 mb-1" numberOfLines={1}>
                  {item.title}
                </Text>

                <Text className="text-base font-bold text-gray-900">
                  {item.price}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}