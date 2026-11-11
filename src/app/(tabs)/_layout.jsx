import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#F97316',   // orange-500
            tabBarInactiveTintColor: '#9CA3AF',
            tabBarStyle: {
                paddingTop: 3,
                height: 56,
                paddingBottom: 8,
            }
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={26} color={color} />
            }} />

            <Tabs.Screen name='cart' options={{
                title: 'Cart',
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'cart' : 'cart-outline'} size={26} color={color} />
            }} />

            <Tabs.Screen name='favorites' options={{
                title: 'Favorites',
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'heart' : 'heart-outline'} size={26} color={color} />
            }} />

            <Tabs.Screen name='profile' options={{
                title: 'Profile',
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'person' : 'person-outline'} size={26} color={color} />
            }} />
        </Tabs>
    );
}