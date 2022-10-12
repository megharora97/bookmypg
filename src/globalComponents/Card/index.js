import React from 'react';
import {
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image,
    Text,
} from 'react-native';
import { normalize } from '../../utils/Helper';

function Card({
    onPress,
    item,
    style,
    column = false
}) {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View
                style={{
                    ...styles.CardView,
                    ...style,
                    margin: column
                        ? '2.5%'
                        : normalize(4),
                }}>
                <Image
                    source={{ uri: item.img }}
                    resizeMode="contain"
                    resizeMethod="resize"
                    placeholderStyle={{ backgroundColor: 'transparent' }}
                    style={styles.cardImage}
                />
                {item.tag ? (
                    <View style={styles.tagContainer}>
                        <View style={styles.tagStyle}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.TagDiscountText}>
                                    {item.tag}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.tagArroContainer}>
                            <View
                                style={{
                                    ...styles.tagArroContainer,
                                    transform: [{ rotate: '270deg' }],
                                }}
                            />
                        </View>
                    </View>
                ) : null}

                <View style={{ marginVertical: normalize(4), }}>
                    <Text style={styles.bannerText} numberOfLines={1}>
                        {item.pg_name}
                    </Text>
                    <Text style={styles.cardPublicationT} numberOfLines={1}>
                        {item.location}
                    </Text>
                </View>
                <View style={{ width: '100%', height: 0.5, backgroundColor: 'grey' }} />
                <Text style={{ color: 'black', fontSize: normalize(11) }}>
                    Monthy Rent</Text><Text style={styles.cardPriceT}>
                    ₹ {item.priceInr}
                    <Text style={{ color: 'grey', fontSize: normalize(10), fontWeight: '500' }}>{" "}onwards</Text>
                </Text>

            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    CardView: {
        width: normalize(145),
        height: normalize(250),
        backgroundColor: 'white',
        shadowColor: 'black',
        elevation: 5,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        padding: normalize(6),
        borderRadius: normalize(8),
    },
    cardImage: {
        height: '70%',
        alignItems: 'center',
    },
    tagContainer: {
        flexDirection: 'row',
        width: normalize(90),
        height: normalize(22),
        marginTop: normalize(8),
        position: 'absolute',
    },
    tagStyle: {
        width: normalize(85),
        height: normalize(22),
        justifyContent: 'center',
        backgroundColor: 'rgb(255, 182, 0)',
    },
    TagDiscountText: {
        fontSize: normalize(10),
        color: 'black',
        textAlign: 'center',
        fontWeight: '700'
    },
    tagArroContainer: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderRightWidth: normalize(22) / 2,
        borderTopWidth: normalize(22) / 2,
        borderRightColor: 'transparent',
        borderTopColor: 'rgb(255, 182, 0)'
    },
    bannerText: {
        color: 'black',
        fontWeight: '700',
        fontSize: normalize(10),
    },
    cardPublicationT: {
        color: 'grey',
        fontSize: normalize(10),
    },
    cardPriceRattC: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardPriceT: {
        color: 'black',
        fontSize: normalize(13),
        fontWeight: 'bold'
    },
});

export default Card;
