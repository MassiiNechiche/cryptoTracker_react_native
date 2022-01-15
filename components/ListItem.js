import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function ListItem({
    name,
    symbol,
    currentPrice,
    priceChangePercentage7d,
    logoUrl,
    onPress,
}) {
    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30'

    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: logoUrl }} style={styles.image} />
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>
                            {symbol.toUpperCase()}
                        </Text>
                    </View>
                </View>
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>
                        $
                        {currentPrice.toLocaleString('en-US', {
                            currency: 'USD',
                        })}
                    </Text>
                    <Text
                        style={[styles.subtitle, { color: priceChangeColor }]}
                    >
                        {priceChangePercentage7d.toFixed(2)}%
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0b0b0c',
        marginHorizontal: 16,
        borderRadius: 5,
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 40,
        width: 40,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 16,
        color: '#ccced4',
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#A9ABB1',
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
})
