import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from './components/ListItem'
import { SAMPLE_DATA } from './assets/data/sampleData'

import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { useMemo, useRef } from 'react'
import 'react-native-gesture-handler'

const ListHeader = () => (
    <>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Markets</Text>
        </View>
        <View style={styles.line}></View>
    </>
)

export default function App() {
    // prettier-ignore
    const bottomSheetModalRef = useRef(null)

    const snapPoints = useMemo(() => ['25%', '50%'], [])

    const openModal = (item) => {
        // setSelectedCoinData(item)
        bottomSheetModalRef.current?.present()
    }

    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={SAMPLE_DATA}
                    renderItem={({ item }) => (
                        <ListItem
                            name={item.name}
                            symbol={item.symbol}
                            currentPrice={item.current_price}
                            priceChangePercentage7d={
                                item.price_change_percentage_7d_in_currency
                            }
                            logoUrl={item.image}
                            onPress={() => openModal(item)}
                        />
                    )}
                    ListHeaderComponent={<ListHeader />}
                />
            </View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                style={styles.bottomSheet}
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    titleWrapper: {
        marginTop: 50,
        marginHorizontal: 16,
    },
    line: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'grey',
        marginHorizontal: 16,
        marginTop: 16,
    },
    bottomSheet: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})
