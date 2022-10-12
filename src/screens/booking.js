import { Platform, SafeAreaView, StatusBar, FlatList, StyleSheet, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../globalComponents/Header';
import { normalize } from '../utils/Helper';
import Card from '../globalComponents/Card';
import { useSelector } from 'react-redux';

export default function Booking(props) {
  const { bookmyroom } = useSelector((state) => state.home);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS == "ios" ? "dark-content" : "light-content"}
        backgroundColor="#1a8bab"
      />
      <Header onPress={() => props.navigation.goBack()} text='Booking History' style={{ width: "90%", fontsize: normalize(13) }} />
      {bookmyroom && bookmyroom!='[]'?
        <FlatList
          numColumns={2}
          data={bookmyroom}
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
        /> :
        <View style={styles.mainview}>
        <Text style={styles.maintext}>OOPS!! Nothing about Zolo Found!!</Text>
      </View>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maintext: {
    color: '#000',
    textAlign: 'center',
    fontSize: normalize(13),
    fontWeight: 'bold',
  },
})