import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Subscribe({ onSubscribe }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    const value = email.trim();

    if (!EMAIL_REGEX.test(value)) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    if (onSubscribe) {
      onSubscribe(value);
    } else {
      Alert.alert('Welcome to the club!', 'Check your inbox for your 10% off code.');
    }
    setEmail('');
  };

  return (
    <View className="mx-4 my-4 items-center justify-center rounded-2xl bg-gray-100 p-8">
      <Text className="mb-2 text-center text-2xl font-bold text-gray-900">
        Join the Club
      </Text>

      <Text className="mb-6 px-4 text-center text-sm leading-5 text-gray-500">
        Be first to know about new drops and sales, plus get 10% off your first order.
      </Text>

      <TextInput
        className="mb-3 w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-gray-800 focus:border-gray-900"
        placeholder="Enter your email address"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity
        onPress={handleSubscribe}
        activeOpacity={0.85}
        className="w-full items-center justify-center rounded-full bg-black py-3.5"
      >
        <Text className="text-base font-medium text-white">Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
}