
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    Pressable,
    StatusBar,
    ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const MENU_ITEMS = [
    { label: 'Home', icon: 'home' },
    { label: 'Shop', icon: 'shopping-bag' },
    { label: 'Categories', icon: 'grid' },
    { label: 'My Account', icon: 'user' },
    { label: 'Contact Us', icon: 'phone' },
];

export default function Header({ cartItemCount = 0 }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);

    const closeMenu = () => setMenuVisible(false);
    const closeCart = () => setCartVisible(false);

    return (
        <>
            {/* mobile status bar */}
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFFFFF"
            />

            {/* Main Header */}
            <View className="h-[60px] flex-row items-center justify-between px-5 bg-white border-b border-gray-100">

                {/* Menu Button */}
                <TouchableOpacity
                    onPress={() => setMenuVisible(true)}
                    className="w-10 h-10 justify-center"
                    activeOpacity={0.6}
                >
                    <Feather name="menu" size={23} color="#111111" />
                </TouchableOpacity>

                {/* Brand Logo */}
                <View className="flex-row items-center">
                    <Text className="text-[23px] font-extrabold tracking-[-1px] text-black">
                        forever
                    </Text>
                    <View className="w-1.5 h-1.5 rounded-full bg-orange-500 ml-0.5 mt-3" />
                </View>

                {/* Shopping Bag */}
                <TouchableOpacity
                    onPress={() => setCartVisible(true)}
                    className="w-10 h-10 items-end justify-center"
                    activeOpacity={0.6}
                >
                    <Feather
                        name="shopping-bag"
                        size={22}
                        color="#111111"
                    />

                    {cartItemCount > 0 && (
                        <View className="absolute top-0 right-[-2px] min-w-[17px] h-[17px] rounded-full bg-orange-500 items-center justify-center px-1">
                            <Text className="text-white text-[9px] font-bold">
                                {cartItemCount > 99 ? '99+' : cartItemCount}
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>

            {/* Navigation Drawer */}
            <Modal
                visible={menuVisible}
                transparent
                animationType="fade"
                onRequestClose={closeMenu}
                statusBarTranslucent
            >
                <View className="flex-1 flex-row">

                    <View className="w-[82%] max-w-[360px] bg-white">

                        {/* Drawer Header */}
                        <View className="px-6 pt-14 pb-8 border-b border-gray-100">
                            <View className="flex-row justify-between items-center">
                                <View>
                                    <Text className="text-2xl font-extrabold tracking-tight text-black">
                                        forever.
                                    </Text>
                                    <Text className="text-xs text-gray-400 mt-1 tracking-widest">
                                        YOUR STYLE, YOUR WAY
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    onPress={closeMenu}
                                    className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
                                >
                                    <Feather name="x" size={20} color="#111" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Navigation Links */}
                        <View className="px-6 pt-5">
                            <Text className="text-[11px] font-semibold tracking-[2px] text-gray-400 mb-4">
                                MENU
                            </Text>

                            {MENU_ITEMS.map((item) => (
                                <TouchableOpacity
                                    key={item.label}
                                    onPress={closeMenu}
                                    activeOpacity={0.6}
                                    className="flex-row items-center py-[17px] border-b border-gray-100"
                                >
                                    <Feather
                                        name={item.icon}
                                        size={19}
                                        color="#555"
                                    />

                                    <Text className="text-[15px] font-medium text-gray-800 ml-4 flex-1">
                                        {item.label}
                                    </Text>

                                    <Feather
                                        name="chevron-right"
                                        size={17}
                                        color="#AAAAAA"
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Drawer Footer */}
                        <View className="mt-auto px-6 pb-10">
                            <Text className="text-xs text-gray-400">
                                © 2026 Forever. All rights reserved.
                            </Text>
                        </View>
                    </View>

                    <Pressable
                        className="flex-1 bg-black/50"
                        onPress={closeMenu}
                    />
                </View>
            </Modal>

            {/* Shopping Bag Bottom Sheet */}
            <Modal
                visible={cartVisible}
                transparent
                animationType="slide"
                onRequestClose={closeCart}
                statusBarTranslucent
            >
                <Pressable
                    className="flex-1 justify-end bg-black/40"
                    onPress={closeCart}
                >
                    <Pressable
                        onPress={() => { }}
                        className="bg-white rounded-t-[28px] px-6 pt-6 pb-8"
                    >

                        {/* Cart Header */}
                        <View className="flex-row items-center justify-between pb-5 border-b border-gray-100">
                            <View>
                                <Text className="text-xl font-bold text-black">
                                    Shopping Bag
                                </Text>
                                <Text className="text-xs text-gray-400 mt-1">
                                    {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'}
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={closeCart}
                                className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center"
                            >
                                <Feather name="x" size={20} color="#111" />
                            </TouchableOpacity>
                        </View>

                        {/* Cart Content */}
                        {cartItemCount > 0 ? (
                            <View className="items-center py-10">
                                <Feather
                                    name="shopping-bag"
                                    size={38}
                                    color="#888"
                                />

                                <Text className="text-base font-semibold text-gray-800 mt-4">
                                    Your bag is waiting
                                </Text>

                                <Text className="text-sm text-gray-400 mt-2 text-center">
                                    You have {cartItemCount} items in your shopping bag.
                                </Text>
                            </View>
                        ) : (
                            <View className="items-center py-10">
                                <View className="w-20 h-20 rounded-full bg-gray-100 items-center justify-center">
                                    <Feather
                                        name="shopping-bag"
                                        size={32}
                                        color="#888"
                                    />
                                </View>

                                <Text className="text-base font-semibold text-gray-800 mt-5">
                                    Your bag is empty
                                </Text>

                                <Text className="text-sm text-gray-400 mt-2 text-center">
                                    Looks like you haven't added anything yet.
                                </Text>
                            </View>
                        )}

                        {/* Continue Shopping */}
                        <TouchableOpacity
                            onPress={closeCart}
                            activeOpacity={0.8}
                            className="bg-black rounded-xl py-4 items-center"
                        >
                            <Text className="text-white text-sm font-bold tracking-wide">
                                CONTINUE SHOPPING
                            </Text>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    );
}
