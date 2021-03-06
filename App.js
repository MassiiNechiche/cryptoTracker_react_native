import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import ListItem from './components/ListItem'
import { SAMPLE_DATA } from './assets/data/sampleData'
import { useEffect, useState } from 'react'

export const { width: SIZE } = Dimensions.get('window')

import { getMarketData } from './services/cryptoService'

const ListHeader = () => (
    <>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Markets</Text>
        </View>
        <View style={styles.line}></View>
    </>
)

export default function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchMarketData = async () => {
            const marketData = await getMarketData()
            setData(marketData)
        }
        fetchMarketData()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#070708',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    titleWrapper: {
        marginTop: 50,
        marginHorizontal: 16,
    },
    line: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#38393b',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 10,
    },
})
