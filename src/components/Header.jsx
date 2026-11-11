import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    Pressable,
    ScrollView,
    Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BRAND_NAME = 'SNITCH'; // TODO: replace with your brand name
const FREE_DELIVERY_TEXT = 'Free delivery on orders over ৳3,000'; // TODO: edit or remove

const SHOP_MENU = [
    { label: 'Home', icon: 'home' },
    { label: 'New Arrivals', icon: 'zap', badge: 'NEW' },
    {
        label: 'Men',
        icon: 'user',
        children: ['T-Shirts', 'Shirts', 'Polo Shirts', 'Pants & Chinos', 'Jackets & Hoodies', 'Panjabi'],
    },
    {
        label: 'Women',
        icon: 'users',
        children: ['Tops & Tees', 'Dresses', 'Kurtis', 'Bottoms', 'Outerwear'],
    },
    {
        label: 'Kids',
        icon: 'smile',
        children: ['Boys', 'Girls', 'Infants'],
    },
    { label: 'Collections', icon: 'layers' },
    { label: 'Sale', icon: 'percent', highlight: true },
];

const HELP_MENU = [
    { label: 'Track Order', icon: 'truck' },
    { label: 'Wishlist', icon: 'heart' },
    { label: 'My Account', icon: 'user' },
    { label: 'Size Guide', icon: 'file-text' },
    { label: 'Contact Us', icon: 'phone' },
    { label: 'About Us', icon: 'info' },
];

export default function Header({
    cartItemCount = 0,
    onNavigate = () => { },
    onSearchPress = () => { },
}) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const [expanded, setExpanded] = useState(null);

    const closeMenu = () => setMenuVisible(false);
    const closeCart = () => setCartVisible(false);

    const handleItemPress = (item) => {
        if (item.children) {
            setExpanded((prev) => (prev === item.label ? null : item.label));
            return;
        }
        onNavigate(item.label);
        closeMenu();
    };

    const handleChildPress = (parent, child) => {
        onNavigate(`${parent}/${child}`);
        closeMenu();
    };

    const router = useRouter();
    return (
        <>
            {/* Main Header */}
            <View className="h-[60px] flex-row items-center justify-between px-5 bg-white border-b border-gray-100">
                {/* Menu Button */}
                <View className="w-20 items-start">
                    <TouchableOpacity
                        onPress={() => setMenuVisible(true)}
                        className="w-10 h-10 justify-center"
                        activeOpacity={0.6}
                    >
                        <Feather name="menu" size={23} color="#111111" />
                    </TouchableOpacity>
                </View>

                {/* Brand Logo */}
                <View className="flex-row items-center">
                    <Image
                        source={require('../../assets/images/logo2.png')}
                        className="h-18 w-32"
                        resizeMode="contain"
                    />
                </View>

                {/* Search + Bag */}
                <View className="w-20 flex-row items-center justify-end">
                    <TouchableOpacity
                        onPress={onSearchPress}
                        className="w-10 h-10 items-center justify-center"
                        activeOpacity={0.6}
                    >
                        <Feather name="search" size={21} color="#111111" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setCartVisible(true)}
                        className="w-10 h-10 items-end justify-center"
                        activeOpacity={0.6}
                    >
                        <Feather name="shopping-bag" size={22} color="#111111" />

                        {cartItemCount > 0 && (
                            <View className="absolute top-0 right-[-2px] min-w-[17px] h-[17px] rounded-full bg-red-500 items-center justify-center px-1">
                                <Text className="text-white text-[9px] font-bold">
                                    {cartItemCount > 99 ? '99+' : cartItemCount}
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
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
                        <View className="pe-6 pt-6 border-b border-gray-100">
                            <View className="flex-row justify-between items-center">
                                <Image
                                    source={require('../../assets/images/logo2.png')}
                                    className="h-[120px] w-[190px]"
                                    resizeMode="contain"
                                />

                                <TouchableOpacity
                                    onPress={closeMenu}
                                    className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
                                >
                                    <Feather name="x" size={20} color="#111" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <ScrollView
                            className="flex-1"
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 16 }}
                        >
                            {/* Shop Section */}
                            <View className="px-6 pt-5">
                                <Text className="text-[11px] font-semibold tracking-[2px] text-gray-400 mb-2">
                                    SHOP
                                </Text>

                                {SHOP_MENU.map((item) => {
                                    const isOpen = expanded === item.label;
                                    return (
                                        <View key={item.label}>
                                            <TouchableOpacity
                                                onPress={() => handleItemPress(item)}
                                                activeOpacity={0.6}
                                                className="flex-row items-center py-[16px] border-b border-gray-100"
                                            >
                                                <Feather
                                                    name={item.icon}
                                                    size={19}
                                                    color={item.highlight ? '#DC2626' : '#555'}
                                                />

                                                <Text
                                                    className={`text-[15px] font-medium ml-4 ${item.highlight ? 'text-red-600' : 'text-gray-800'
                                                        }`}
                                                >
                                                    {item.label}
                                                </Text>

                                                {item.badge && (
                                                    <View className="ml-2 bg-black rounded px-1.5 py-0.5">
                                                        <Text className="text-white text-[9px] font-bold tracking-wide">
                                                            {item.badge}
                                                        </Text>
                                                    </View>
                                                )}

                                                <View className="flex-1" />

                                                {item.children && (
                                                    <Feather
                                                        name={isOpen ? 'chevron-down' : 'chevron-right'}
                                                        size={17}
                                                        color="#AAAAAA"
                                                    />
                                                )}
                                            </TouchableOpacity>

                                            {/* Sub-categories */}
                                            {item.children && isOpen && (
                                                <View className="bg-gray-50 -mx-6 px-6 py-1 border-b border-gray-100">
                                                    <TouchableOpacity
                                                        onPress={() => handleChildPress(item.label, 'All')}
                                                        activeOpacity={0.6}
                                                        className="py-3 pl-9"
                                                    >
                                                        <Text className="text-[14px] font-semibold text-gray-900">
                                                            Shop All {item.label}
                                                        </Text>
                                                    </TouchableOpacity>

                                                    {item.children.map((child) => (
                                                        <TouchableOpacity
                                                            key={child}
                                                            onPress={() => handleChildPress(item.label, child)}
                                                            activeOpacity={0.6}
                                                            className="py-3 pl-9"
                                                        >
                                                            <Text className="text-[14px] text-gray-600">
                                                                {child}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    ))}
                                                </View>
                                            )}
                                        </View>
                                    );
                                })}
                            </View>

                            {/* Help Section */}
                            <View className="px-6 pt-7">
                                <Text className="text-[11px] font-semibold tracking-[2px] text-gray-400 mb-2">
                                    HELP & ACCOUNT
                                </Text>

                                {HELP_MENU.map((item) => (
                                    <TouchableOpacity
                                        key={item.label}
                                        onPress={() => {
                                            onNavigate(item.label);
                                            closeMenu();
                                        }}
                                        activeOpacity={0.6}
                                        className="flex-row items-center py-[14px] border-b border-gray-100"
                                    >
                                        <Feather name={item.icon} size={18} color="#555" />
                                        <Text className="text-[14px] font-medium text-gray-700 ml-4">
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    </View>

                    <Pressable className="flex-1 bg-black/50" onPress={closeMenu} />
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
                                <Feather name="shopping-bag" size={38} color="#888" />

                                <Text className="text-base font-semibold text-gray-800 mt-4">
                                    Your bag is waiting
                                </Text>

                                <Text className="text-sm text-gray-400 mt-2 text-center">
                                    You have {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'} ready for checkout.
                                </Text>
                            </View>
                        ) : (
                            <View className="items-center py-10">
                                <View className="w-20 h-20 rounded-full bg-gray-100 items-center justify-center">
                                    <Feather name="shopping-bag" size={32} color="#888" />
                                </View>

                                <Text className="text-base font-semibold text-gray-800 mt-5">
                                    Your bag is empty
                                </Text>

                                <Text className="text-sm text-gray-400 mt-2 text-center">
                                    Find your next favourite outfit in our latest drop.
                                </Text>
                            </View>
                        )}

                        {/* Delivery note */}
                        <View className="flex-row items-center justify-center mb-4">
                            <Feather name="truck" size={14} color="#16A34A" />
                            <Text className="text-xs text-green-700 font-medium ml-2">
                                {FREE_DELIVERY_TEXT}
                            </Text>
                        </View>

                        {/* Primary action */}
                        <TouchableOpacity
                            onPress={() => {router.push('/checkout');closeCart()}}
                            activeOpacity={0.8}
                            className="bg-black rounded-xl py-4 items-center"
                        >
                            <Text className="text-white text-sm font-bold tracking-wide">
                                {cartItemCount > 0 ? 'CHECKOUT' : 'SHOP NEW ARRIVALS'}
                            </Text>
                        </TouchableOpacity>

                        {cartItemCount > 0 && (
                            <TouchableOpacity
                                onPress={closeCart}
                                activeOpacity={0.6}
                                className="items-center pt-4"
                            >
                                <Text className="text-sm font-semibold text-gray-600">
                                    Continue Shopping
                                </Text>
                            </TouchableOpacity>
                        )}
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    );
}