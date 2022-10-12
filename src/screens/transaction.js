import { Platform, SafeAreaView, StatusBar, FlatList, StyleSheet, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../globalComponents/Header';
import { normalize } from '../utils/Helper';
import Card from '../globalComponents/Card';
import { useSelector } from "react-redux";

export default function Transaction(props) {
  const { listpg } = useSelector((state) => state.home);
  const [showData, setShoData] = useState([])

  useEffect(() => {
    let Data = []
    if (Data && Data != []) {
      Data.push(listpg)
      setShoData(Data)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS == "ios" ? "dark-content" : "light-content"}
        backgroundColor="#1a8bab"
      />
      <Header onPress={() => props.navigation.goBack()} text='PG Listed History' style={{ width: "90%", fontsize: normalize(13) }} />
      <FlatList
        numColumns={2}
        data={showData}
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
})