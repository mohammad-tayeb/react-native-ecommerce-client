import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Checkout() {
    const router = useRouter()
  return (
    <SafeAreaView className="flex-1 bg-gray-100" edges={['top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <TouchableOpacity
        onPress={()=> router.back()}
        className="p-1">
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Checkout</Text>
        <View className="w-6" />
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Shipping Address Section */}
        <Text className="text-base font-bold text-gray-900 mb-3">Shipping Address</Text>
        <TouchableOpacity className="bg-white rounded-2xl py-4 items-center justify-center mb-6 shadow-sm border border-dashed border-gray-300">
          <Text className="font-semibold text-gray-900 text-base">Add Address</Text>
        </TouchableOpacity>

        {/* Payment Method Section */}
        <Text className="text-base font-bold text-gray-900 mb-3">Payment Method</Text>

        {/* Selected Payment Option: Cash on Delivery */}
        <TouchableOpacity className="flex-row items-center bg-white rounded-2xl p-4 mb-3 border-2 border-black shadow-sm">
          <MaterialCommunityIcons name="cash" size={26} color="#000" />
          <View className="ml-3 flex-1">
            <Text className="font-bold text-gray-900 text-base">Cash on Delivery</Text>
            <Text className="text-xs text-gray-400 mt-0.5">Pay when you receive the order</Text>
          </View>
          <Ionicons name="checkmark-circle" size={22} color="#000" />
        </TouchableOpacity>

        {/* Unselected Payment Option: Pay with Card */}
        <TouchableOpacity className="flex-row items-center bg-white rounded-2xl p-4 mb-3 border border-gray-200 shadow-sm">
          <Ionicons name="card-outline" size={24} color="#000" />
          <View className="ml-3 flex-1">
            <Text className="font-bold text-gray-900 text-base">Pay with Card</Text>
            <Text className="text-xs text-gray-400 mt-0.5">Credit or Debit Card</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Summary & Order Sheet */}
      <View className="bg-white rounded-t-3xl p-5 shadow-lg border-t border-gray-100">
        <Text className="text-base font-bold text-gray-900 mb-4">Order Summary</Text>

        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-500 font-medium">Subtotal</Text>
          <Text className="text-gray-900 font-bold">$152.00</Text>
        </View>

        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-500 font-medium">Shipping</Text>
          <Text className="text-gray-900 font-bold">$2.00</Text>
        </View>

        <View className="flex-row justify-between mb-4">
          <Text className="text-gray-500 font-medium">Tax</Text>
          <Text className="text-gray-900 font-bold">$0.00</Text>
        </View>

        <View className="flex-row justify-between mb-6">
          <Text className="text-xl font-bold text-gray-900">Total</Text>
          <Text className="text-xl font-bold text-gray-900">$154.00</Text>
        </View>

        <TouchableOpacity
          className="bg-black py-4 rounded-full items-center justify-center shadow-md active:opacity-90"
          activeOpacity={0.8}
        >
          <Text className="text-white font-bold text-base">Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}