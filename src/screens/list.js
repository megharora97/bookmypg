import { StyleSheet, Text, FlatList, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { normalize } from '../utils/Helper';
import Card from '../globalComponents/Card';
import Header from '../globalComponents/Header';

export default function List(props) {
    const { item,title } = props.route.params;
    
    return (
        <SafeAreaView style={styles.container}>
            <Header onPress={() => props.navigation.goBack()} text={title} style={{ width: "90%", fontsize: normalize(13) }} />
           
            <FlatList
                numColumns={2}
                data={item}
                keyExtractor={(id, index) => index.toString()}
                renderItem={({ item }) => (
                    <Card
                        onPress={() => {
                            props.navigation.navigate('Details', { details: item });

                        }}
                        item={item}
                        column
                    />
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inputStyle: {
        fontSize: normalize(12),
        fontWeight: "400",
        color: "#384057",
    },
})