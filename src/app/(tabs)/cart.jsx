import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function CartScreen() {
    const router = useRouter()
    return (
        <SafeAreaView className="flex-1 bg-gray-100" edges={['top']}>
            {/* Header */}
            <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="p-1">
                    <Feather name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-gray-900">My Cart</Text>
                <View className="w-6" />
            </View>

            {/* Cart Items List */}
            <ScrollView className="flex-1 px-4 pt-4">
                {/* Item 1 */}
                <View className="flex-row bg-white rounded-2xl p-3 mb-4 shadow-sm items-center">
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300&q=80' }}
                        className="w-20 h-20 rounded-xl bg-gray-100"
                        resizeMode="cover"
                    />
                    <View className="flex-1 ml-3 justify-between h-20">
                        <View className="flex-row justify-between items-start">
                            <View className="pr-2 flex-1">
                                <Text className="font-semibold text-gray-900 text-sm leading-tight" numberOfLines={1}>
                                    Men Round Neck Pure Cotton T-shirt
                                </Text>
                                <Text className="text-xs text-gray-400 mt-1">Size: M</Text>
                            </View>
                            <TouchableOpacity>
                                <Ionicons name="close-circle-outline" size={22} color="#EF4444" />
                            </TouchableOpacity>
                        </View>

                        <View className="flex-row justify-between items-center mt-2">
                            <Text className="text-base font-bold text-gray-900">$80.00</Text>
                            <View className="flex-row items-center bg-gray-100 rounded-full px-3 py-1">
                                <TouchableOpacity>
                                    <Feather name="minus" size={14} color="#374151" />
                                </TouchableOpacity>
                                <Text className="mx-3 font-semibold text-sm text-gray-800">1</Text>
                                <TouchableOpacity>
                                    <Feather name="plus" size={14} color="#374151" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Item 2 */}
                <View className="flex-row bg-white rounded-2xl p-3 mb-4 shadow-sm items-center">
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&q=80' }}
                        className="w-20 h-20 rounded-xl bg-gray-100"
                        resizeMode="cover"
                    />
                    <View className="flex-1 ml-3 justify-between h-20">
                        <View className="flex-row justify-between items-start">
                            <View className="pr-2 flex-1">
                                <Text className="font-semibold text-gray-900 text-sm leading-tight" numberOfLines={1}>
                                    Men Tapered Fit Flat-Front Trousers
                                </Text>
                                <Text className="text-xs text-gray-400 mt-1">Size: M</Text>
                            </View>
                            <TouchableOpacity>
                                <Ionicons name="close-circle-outline" size={22} color="#EF4444" />
                            </TouchableOpacity>
                        </View>

                        <View className="flex-row justify-between items-center mt-2">
                            <Text className="text-base font-bold text-gray-900">$72.00</Text>
                            <View className="flex-row items-center bg-gray-100 rounded-full px-3 py-1">
                                <TouchableOpacity>
                                    <Feather name="minus" size={14} color="#374151" />
                                </TouchableOpacity>
                                <Text className="mx-3 font-semibold text-sm text-gray-800">1</Text>
                                <TouchableOpacity>
                                    <Feather name="plus" size={14} color="#374151" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Summary & Checkout Sheet */}
            <View className="bg-white rounded-t-3xl p-5 shadow-lg border-t border-gray-100">
                <View className="flex-row justify-between mb-2">
                    <Text className="text-gray-500 font-medium">Subtotal</Text>
                    <Text className="text-gray-900 font-bold">$152.00</Text>
                </View>

                <View className="flex-row justify-between mb-4">
                    <Text className="text-gray-500 font-medium">Shipping</Text>
                    <Text className="text-gray-900 font-bold">$2.00</Text>
                </View>

                <View className="h-[1px] bg-gray-100 mb-4" />

                <View className="flex-row justify-between mb-6">
                    <Text className="text-xl font-bold text-gray-900">Total</Text>
                    <Text className="text-xl font-bold text-gray-900">$154.00</Text>
                </View>

                <TouchableOpacity
                    onPress={() => router.push('/checkout')}
                    className="bg-black py-4 rounded-full items-center justify-center shadow-md active:opacity-90"
                    activeOpacity={0.8}
                >
                    <Text className="text-white font-bold text-base">Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}