import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Profile({ onLoginPress, onBackPress }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();


  return (
    <View className="flex-1 bg-gray-50 items-center justify-center px-6 relative">
      {/* Top Left Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        activeOpacity={0.7}
        hitSlop={10}
        style={{ top: insets.top + 8 }}
        className="absolute left-6 w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center shadow-sm"
      >
        <Ionicons name="arrow-back" size={20} color="#111827" />
      </TouchableOpacity>

      {/* Circular Profile Placeholder Icon */}
      <View className="w-24 h-24 rounded-full bg-gray-200 items-center justify-center mb-5">
        <Ionicons name="person" size={48} color="#6B7280" />
      </View>

      {/* Title */}
      <Text className="text-xl font-bold text-gray-900 text-center mb-2">
        Guest User
      </Text>

      {/* Subtitle / Description */}
      <Text className="text-gray-500 text-center text-sm leading-5 px-8 mb-6">
        Log in to view your profile, orders, and addresses.
      </Text>

      {/* Login / Sign Up Button */}
      <TouchableOpacity
        onPress={() => router.push('/login')}
        activeOpacity={0.85}
        className="w-full max-w-xs bg-black py-4 rounded-full items-center justify-center shadow-lg shadow-black/30 active:bg-gray-800"
      >
        <Text className="text-white font-semibold text-base">
          Login / Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}