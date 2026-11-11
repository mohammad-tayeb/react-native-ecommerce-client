import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Card({ product, onPress, onAddToCart }) {
    const [liked, setLiked] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? null);
    const [sizeError, setSizeError] = useState(false);

    const hasDiscount = product.oldPrice && product.oldPrice > product.price;
    const discount = hasDiscount
        ? Math.round((1 - product.price / product.oldPrice) * 100)
        : 0;

    const handleSizePress = (size) => {
        // tap again to deselect
        setSelectedSize((prev) => (prev === size ? null : size));
        setSizeError(false);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            setSizeError(true);
            return;
        }
        onAddToCart?.({
            product,
            size: selectedSize,
            color: selectedColor,
        });
    };

    return (
        <Pressable
            onPress={onPress}
            className="mb-4 w-[48%] overflow-hidden rounded-xl border border-gray-200 bg-white"
        >
            {/* Product Image */}
            <View className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                    source={{ uri: product.image }}
                    className="h-full w-full"
                    resizeMode="cover"
                />

                {hasDiscount && (
                    <View className="absolute left-2 top-2 rounded bg-red-600 px-2 py-1">
                        <Text className="text-[10px] font-bold text-white">
                            -{discount}%
                        </Text>
                    </View>
                )}

                <Pressable
                    onPress={() => setLiked((prev) => !prev)}
                    hitSlop={8}
                    className="absolute right-2 top-2 h-8 w-8 items-center justify-center rounded-full bg-white/90"
                >
                    <Feather
                        name="heart"
                        size={16}
                        color={liked ? '#DC2626' : '#111111'}
                    />
                </Pressable>
            </View>

            {/* Product Details */}
            <View className="p-3">
                <Text className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                    {product.category}
                </Text>

                <Text
                    numberOfLines={2}
                    className="mt-1 text-[13px] font-bold leading-4 text-gray-900"
                >
                    {product.name}
                </Text>

                {/* Color options */}
                {product.colors?.length > 0 && (
                    <View className="mt-2 flex-row items-center gap-1">
                        {product.colors.map((color) => {
                            const isSelected = selectedColor === color;
                            return (
                                <Pressable
                                    key={color}
                                    onPress={() => setSelectedColor(color)}
                                    hitSlop={4}
                                    className={`h-6 w-6 items-center justify-center rounded-full border-2 ${
                                        isSelected ? 'border-black' : 'border-transparent'
                                    }`}
                                >
                                    <View
                                        style={{ backgroundColor: color }}
                                        className="h-4 w-4 rounded-full border border-gray-300"
                                    />
                                </Pressable>
                            );
                        })}
                    </View>
                )}

                {/* Size options */}
                <View className="mt-2 flex-row flex-wrap gap-1">
                    {product.sizes.map((size) => {
                        const isSelected = selectedSize === size;
                        return (
                            <Pressable
                                key={size}
                                onPress={() => handleSizePress(size)}
                                hitSlop={4}
                                className={`min-w-[26px] items-center rounded border px-1.5 py-1 ${
                                    isSelected
                                        ? 'border-black bg-black'
                                        : sizeError
                                        ? 'border-red-500 bg-white'
                                        : 'border-gray-300 bg-white'
                                }`}
                            >
                                <Text
                                    className={`text-[10px] font-semibold ${
                                        isSelected ? 'text-white' : 'text-gray-600'
                                    }`}
                                >
                                    {size}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>

                {sizeError && (
                    <Text className="mt-1 text-[10px] font-medium text-red-600">
                        Please select a size
                    </Text>
                )}

                {/* Price */}
                <View className="mt-2 flex-row items-center gap-2">
                    <Text className="text-sm font-extrabold text-gray-900">
                        ৳{product.price}
                    </Text>

                    {hasDiscount && (
                        <Text className="text-[11px] text-gray-400 line-through">
                            ৳{product.oldPrice}
                        </Text>
                    )}
                </View>

                {/* Add to Bag */}
                <Pressable
                    onPress={handleAddToCart}
                    className="mt-3 items-center rounded-lg bg-black py-2.5"
                >
                    <Text className="text-[11px] font-bold tracking-wide text-white">
                        ADD TO BAG
                    </Text>
                </Pressable>
            </View>
        </Pressable>
    );
}