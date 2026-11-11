
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';

export default function Login({ onSignIn }) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if (onSignIn) {
            onSignIn({ email, password });
        } else {
            console.log('Sign in with:', email, password);
        }
    };

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-white"
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View className="flex-1 bg-white px-6 justify-center pb-16">

                {/* Top Left Back Button */}
                <TouchableOpacity
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                    className="absolute top-12 left-6 w-10 h-10 items-center justify-center z-10"
                >
                    <Ionicons name="arrow-back" size={24} color="#111827" />
                </TouchableOpacity>

                {/* Header Section */}
                <View className="items-center mb-8">
                    <Text className="text-2xl font-bold text-gray-900 mb-1">
                        Welcome Back
                    </Text>
                    <Text className="text-sm text-gray-500">
                        Sign in to continue
                    </Text>
                </View>

                {/* Form Inputs Container */}
                <View className="w-full space-y-4 mb-6">

                    {/* Email Field */}
                    <View>
                        <Text className="text-lg font-medium text-gray-700 mb-1.5">
                            Email
                        </Text>

                        <TextInput
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-lg focus:border-gray-900"
                            placeholder="user@example.com"
                            placeholderTextColor="#9CA3AF"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password Field */}
                    <View className="mt-4">
                        <Text className="text-lg font-medium text-gray-700 mb-1.5">
                            Password
                        </Text>

                        <TextInput
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm focus:border-gray-900"
                            placeholder="••••••••"
                            placeholderTextColor="#9CA3AF"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                </View>

                {/* Sign In Button */}
                <TouchableOpacity
                    onPress={handleSignIn}
                    activeOpacity={0.85}
                    className="w-full bg-black py-4 rounded-full items-center justify-center shadow-sm active:bg-black-400"
                >
                    <Text className="text-white font-semibold text-base">
                        Sign In
                    </Text>
                </TouchableOpacity>

                {/* Bottom Footer Link */}
                <View className="flex-row justify-center items-center mt-6">
                    <Text className="text-sm text-gray-500">
                        Don't have an account?{' '}
                    </Text>

                    <TouchableOpacity
                        onPress={() => router.push('register')}
                    >
                        <Text className="text-sm font-bold text-gray-900">
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}
