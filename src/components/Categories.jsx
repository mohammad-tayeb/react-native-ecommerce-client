import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

// TODO: replace these placeholder images with your own category photos
const categories = [
    { id: 'all', name: 'All', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200' },
    { id: 'men', name: 'Men', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200' },
    { id: 'women', name: 'Women', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=200' },
    { id: 'kids', name: 'Kids', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200' },
    { id: 'tshirts', name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200' },
    { id: 'shirts', name: 'Shirts', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200' },
    { id: 'jackets', name: 'Jackets', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200' },
    { id: 'panjabi', name: 'Panjabi', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=200' },
];

export default function Categories({ onSelectCategory }) {
    const [selectedId, setSelectedId] = useState('all');

    const handlePress = (id) => {
        setSelectedId(id);
        onSelectCategory?.(id);
    };

    return (
        <View className="bg-gray-50 py-4">
            <Text className="mb-4 px-4 text-xl font-bold text-gray-900">
                Shop by Category
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            >
                {categories.map((item) => {
                    const isSelected = selectedId === item.id;

                    return (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => handlePress(item.id)}
                            activeOpacity={0.7}
                            className="mr-5 items-center"
                        >
                            <View
                                className={`h-16 w-16 overflow-hidden rounded-full ${
                                    isSelected
                                        ? 'border-[2px] border-black'
                                        : 'border border-gray-200'
                                }`}
                            >
                                <Image
                                    source={{ uri: item.image }}
                                    className="h-full w-full"
                                    resizeMode="cover"
                                />
                            </View>

                            <Text
                                className={`mt-2 text-center text-xs ${
                                    isSelected
                                        ? 'font-bold text-black'
                                        : 'font-medium text-gray-500'
                                }`}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}