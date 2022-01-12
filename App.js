import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from './components/ListItem'
import { SAMPLE_DATA } from './assets/data/sampleData'

const ListHeader = () => (
    <>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Markets</Text>
        </View>
        <View style={styles.line}></View>
    </>
)

export default function App() {
    return (
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
        marginTop: 30,
        marginHorizontal: 16,
    },
    line: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'grey',
        marginHorizontal: 16,
        marginTop: 16,
    },
})
