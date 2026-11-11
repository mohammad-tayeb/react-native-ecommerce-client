
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
    subtitle: 'Discover the latest trends',
    discount: 'UP TO 40% OFF',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900',
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Upgrade your style today',
    discount: 'NEW SEASON',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900',
  },
  {
    id: '3',
    title: 'Special Offers',
    subtitle: 'Shop your favourites',
    discount: 'LIMITED DEALS',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=900',
  },
];

export default function Banner() {
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
          <View className="mx-4 h-[180px] justify-center overflow-hidden rounded-[18px]">

            {/* Full-card background image */}
            <Image
              source={{ uri: item.image }}
              resizeMode="cover"
              className="absolute inset-0 h-full w-full"
            />

            {/* Dark overlay */}
            <View className="absolute inset-0 bg-black/40" />

            {/* Text above image */}
            <View className="z-10 px-5">

              <Text className="text-[11px] font-extrabold tracking-widest text-orange-200">
                {item.discount}
              </Text>

              <Text className="mt-2 text-2xl font-extrabold text-white">
                {item.title}
              </Text>

              <Text className="mt-2 text-xs text-white">
                {item.subtitle}
              </Text>

              <Pressable
                className="mt-3 self-start rounded-lg bg-orange-500 px-4 py-2"
                onPress={() => console.log('Shop:', item.title)}
              >
                <Text className="text-[11px] font-bold text-white">
                  Shop Now →
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
                ? 'w-[22px] bg-orange-500'
                : 'w-[7px] bg-neutral-300'
              }`}
          />
        ))}
      </View>

    </View>
  );
}
