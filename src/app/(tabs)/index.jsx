import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
            <Header cartItemCount={1} />
            <Banner></Banner>
        </SafeAreaView>
    );
}
