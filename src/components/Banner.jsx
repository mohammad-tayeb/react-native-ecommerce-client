import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import { Carousel } from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const banners = [
  {
    id: '1',
    title: 'Summer Collection',
    subtitle: 'Light fabrics. Effortless style.',
    discount: 'UP TO 40% OFF',
    image: {
      uri: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
    },
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Fresh drops for every wardrobe',
    discount: 'JUST LANDED',
    image: {
      uri: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80',
    },
  },
  {
    id: '3',
    title: 'End of Season Sale',
    subtitle: 'Last chance on your favourites',
    discount: 'SALE NOW ON',
    image: {
      uri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    },
  },
];

export default function Banner({ onBannerPress }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View className="mt-4">

      <Carousel
        style={{ width, height: 190 }}
        data={banners}
        loop
        autoplay
        autoplayInterval={3000}
        animation={{ type: 'timing', config: { duration: 800 } }}
        onSnapToItem={setActiveIndex}
        renderItem={({ item }) => (
          <View className="mx-4 h-[180px] justify-center overflow-hidden rounded-[18px] bg-gray-200">

            {/* Full-card background image */}
            <Image
              source={item.image}
              resizeMode="cover"
              className="absolute inset-0 h-full w-full"
            />

            {/* Dark overlay for readable text */}
            <View className="absolute inset-0 bg-black/40" />

            {/* Text above image */}
            <View className="z-10 px-5">

              <Text className="text-[11px] font-extrabold tracking-[2px] text-white/80">
                {item.discount}
              </Text>

              <Text className="mt-2 text-2xl font-extrabold text-white">
                {item.title}
              </Text>

              <Text className="mt-1 text-xs text-white/90">
                {item.subtitle}
              </Text>

              <Pressable
                className="mt-3 self-start rounded-lg bg-white px-4 py-2"
                onPress={() => onBannerPress?.(item)}
              >
                <Text className="text-[11px] font-bold tracking-wide text-black">
                  SHOP NOW →
                </Text>
              </Pressable>

            </View>
          </View>
        )}
      />

      {/* Pagination */}
      <View className="mt-[10px] flex-row items-center justify-center gap-[6px]">
        {banners.map((item, index) => (
          <View
            key={item.id}
            className={`h-[7px] rounded-full ${activeIndex === index
              ? 'w-[22px] bg-black'
              : 'w-[7px] bg-neutral-300'
              }`}
          />
        ))}
      </View>

    </View>
  );
}