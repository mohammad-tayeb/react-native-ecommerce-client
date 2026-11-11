
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
import { useRouter } from 'expo-router';

export default function Register({ onSignUp }) {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (onSignUp) {
            onSignUp({ name, email, password });
        } else {
            console.log('Sign up with:', { name, email, password });
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
                        Create Account
                    </Text>
                    <Text className="text-sm text-gray-500">
                        Sign up to get started
                    </Text>
                </View>

                {/* Form Inputs Container */}
                <View className="w-full mb-6">

                    {/* Name Field */}
                    <View>
                        <Text className="text-lg font-medium text-gray-700 mb-1.5">
                            Full Name
                        </Text>

                        <TextInput
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-lg"
                            placeholder="Enter your full name"
                            placeholderTextColor="#9CA3AF"
                            value={name}
                            onChangeText={setName}
                            autoCapitalize="words"
                        />
                    </View>

                    {/* Email Field */}
                    <View className="mt-4">
                        <Text className="text-lg font-medium text-gray-700 mb-1.5">
                            Email
                        </Text>

                        <TextInput
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-lg"
                            placeholder="user@example.com"
                            placeholderTextColor="#9CA3AF"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>

                    {/* Password Field */}
                    <View className="mt-4">
                        <Text className="text-lg font-medium text-gray-700 mb-1.5">
                            Password
                        </Text>

                        <TextInput
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm"
                            placeholder="••••••••"
                            placeholderTextColor="#9CA3AF"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    {/* Confirm Password Field */}
                    <View className="mt-4">
                        <Text className="text-lg font-medium text-gray-700 mb-1.5">
                            Confirm Password
                        </Text>

                        <TextInput
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm"
                            placeholder="••••••••"
                            placeholderTextColor="#9CA3AF"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>

                </View>

                {/* Sign Up Button */}
                <TouchableOpacity
                    onPress={handleSignUp}
                    activeOpacity={0.85}
                    className="w-full bg-black py-4 rounded-full items-center justify-center shadow-sm"
                >
                    <Text className="text-white font-semibold text-base">
                        Create Account
                    </Text>
                </TouchableOpacity>

                {/* Bottom Footer Link */}
                <View className="flex-row justify-center items-center mt-6">
                    <Text className="text-sm text-gray-500">
                        Already have an account?{' '}
                    </Text>

                    <TouchableOpacity
                        onPress={() => router.push('/login')}
                    >
                        <Text className="text-sm font-bold text-gray-900">
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}
