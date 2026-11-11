import React, { useMemo, useState } from 'react';
import { View, ScrollView, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Categories from '../../components/Categories';
import Subscribe from '../../components/Subscribe';

// TODO: replace with your real products and images
const products = [
    {
        id: '1',
        name: 'Classic Cotton T-Shirt',
        category: 'Men',
        gender: 'men',
        type: 'tshirts',
        price: 650,
        oldPrice: 850,
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#111111', '#FFFFFF', '#1E3A8A'],
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
    },
    {
        id: '2',
        name: 'Slim Fit Oxford Shirt',
        category: 'Men',
        gender: 'men',
        type: 'shirts',
        price: 1450,
        oldPrice: 1800,
        sizes: ['M', 'L', 'XL'],
        colors: ['#BFDBFE', '#FFFFFF'],
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600',
    },
    {
        id: '3',
        name: 'Floral Summer Dress',
        category: 'Women',
        gender: 'women',
        type: 'dresses',
        price: 1850,
        oldPrice: 2200,
        sizes: ['S', 'M', 'L'],
        colors: ['#FBCFE8', '#FEF3C7'],
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600',
    },
    {
        id: '4',
        name: 'Embroidered Cotton Panjabi',
        category: 'Men',
        gender: 'men',
        type: 'panjabi',
        price: 2200,
        oldPrice: 2600,
        sizes: ['M', 'L', 'XL', 'XXL'],
        colors: ['#FFFFFF', '#1F2937', '#065F46'],
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600',
    },
    {
        id: '5',
        name: 'Kids Graphic Tee',
        category: 'Kids',
        gender: 'kids',
        type: 'tshirts',
        price: 450,
        oldPrice: 550,
        sizes: ['2-3Y', '4-5Y', '6-7Y'],
        colors: ['#FCA5A5', '#93C5FD'],
        image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600',
    },
    {
        id: '6',
        name: 'Zip-Up Hoodie Jacket',
        category: 'Men',
        gender: 'men',
        type: 'jackets',
        price: 1950,
        oldPrice: 2400,
        sizes: ['M', 'L', 'XL'],
        colors: ['#111111', '#6B7280'],
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600',
    },
];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'all') return products;
        return products.filter(
            (p) => p.gender === selectedCategory || p.type === selectedCategory
        );
    }, [selectedCategory]);

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            <Header cartItemCount={1} />

            <ScrollView
                className="flex-1 bg-gray-50"
                showsVerticalScrollIndicator={false}
            >
                <Banner />

                <Categories onSelectCategory={setSelectedCategory} />

                <View className="px-4 pt-5">
                    <Text className="mb-3 text-lg font-extrabold text-gray-900">
                        {selectedCategory === 'all' ? 'Trending Now' : 'Results'}
                    </Text>

                    {filteredProducts.length === 0 ? (
                        <Text className="py-10 text-center text-sm text-gray-400">
                            No products in this category yet.
                        </Text>
                    ) : (
                        <View className="flex-row flex-wrap justify-between">
                            {filteredProducts.map((product) => (
                                <Card
                                    key={product.id}
                                    product={product}
                                    onPress={() => console.log('Product:', product.name)}
                                    onAddToCart={() => console.log('Added:', product.name)}
                                />
                            ))}
                        </View>
                    )}

                    <Pressable
                        onPress={() => console.log('View all')}
                        className="mb-2 mt-1 items-center self-center rounded-lg border border-black px-8 py-2.5"
                    >
                        <Text className="text-[12px] font-bold tracking-wide text-black">
                            VIEW ALL
                        </Text>
                    </Pressable>
                </View>

                <Subscribe />
            </ScrollView>
        </SafeAreaView>
    );
}