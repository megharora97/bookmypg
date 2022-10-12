import React, { useState } from 'react'
import { Pressable, StyleSheet, SafeAreaView, Text, View, ScrollView, FlatList, TouchableOpacity, StatusBar, Platform } from 'react-native'
import Header from '../globalComponents/Header'
import { normalize } from '../utils/Helper'
import Icon from 'react-native-vector-icons/AntDesign';
import Card from '../globalComponents/Card';
import Entypo from "react-native-vector-icons/Entypo";
import { featuredproperties, selectproperties } from '../constant/dummy';

export default function Home({ navigation }) {
  const renderItem = ({ item, index }) => {
    return (
      <Card
        onPress={() => {
          navigation.navigate('Details', { details: item });
        }}
        item={item}
      />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS == "ios" ? "dark-content" : "light-content"}
        backgroundColor="#1a8bab"
      />
      <Header hideIcon={true} text="MYPG" style={{ width: "90%", fontsize: normalize(13), }}
        righticon={
          <>
            <View style={styles.righticon}>
              <Entypo
                name="bell"
                size={normalize(15)}
                color={"rgba(56, 64, 87, 0.75)"}
              />
            </View>
          </>
        } />

      <TouchableOpacity
        style={{
          ...styles.searchBox,
          width: '90%',
          borderColor: 'grey',
        }}
        onPress={() =>
          navigation.navigate('Search',{item:featuredproperties})
        }
        >
        <Icon
          name="search1"
          style={styles.searchIcon}
          color={'grey'}
        />
        <Text style={{ color: 'grey' }}>
          Search for your Item
        </Text>
      </TouchableOpacity>
      <ScrollView style={{ width: '100%', alignSelf: 'center' }}>

        {/* Featured */}
        {featuredproperties.length > 0 && (
          <>
            <View style={{ flexDirection: 'row', paddingHorizontal: '5%', marginVertical: normalize(10), justifyContent: 'space-between' }}>
              <Text style={{ color: 'black', fontSize: normalize(13), fontWeight: 'bold' }}>
                Featured Properties
              </Text>
              <Text style={{ color: 'rgba(0, 131, 179, 0.70)', fontSize: normalize(12) }}
                onPress={() => navigation.navigate('List', { item: featuredproperties, title: 'Featured Properties' })}
              >
                View All
              </Text>
            </View>


            <View>
              <FlatList
                ListFooterComponent={() => (
                  <View style={{ width: normalize(10) }} />
                )}
                ListHeaderComponent={() => (
                  <View style={{ width: normalize(10) }} />
                )}
                ItemSeparatorComponent={() => (
                  <View style={{ width: normalize(10) }} />
                )}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={featuredproperties}
                keyExtractor={(item, index) =>
                  index.toString()
                }
                renderItem={featuredproperties ? renderItem : null}
              />
            </View>
          </>

        )}


        {/* SelectedProperties */}
        {selectproperties.length > 0 && (
          <>
            <View style={{ flexDirection: 'row', paddingHorizontal: '5%', marginVertical: normalize(10), justifyContent: 'space-between' }}>
              <Text style={{ color: 'black', fontSize: normalize(13), fontWeight: 'bold' }}>
                Selected Properties
              </Text>
              <Text style={{ color: 'rgba(0, 131, 179, 0.70)', fontSize: normalize(12) }}
                onPress={() => navigation.navigate('List', { item: selectproperties, title: 'Selected Properties' })}
              >
                View All
              </Text>
            </View>


            <View style={{ marginBottom: normalize(10) }}>
              <FlatList
                ListFooterComponent={() => (
                  <View style={{ width: normalize(10) }} />
                )}
                ListHeaderComponent={() => (
                  <View style={{ width: normalize(10) }} />
                )}
                ItemSeparatorComponent={() => (
                  <View style={{ width: normalize(10) }} />
                )}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={selectproperties}
                keyExtractor={(item, index) =>
                  index.toString()
                }
                renderItem={selectproperties ? renderItem : null}
              />
            </View>
          </>
        )}


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchBox: {
    borderWidth: 1,
    height: normalize(45),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: '4%',
  },
  headerContainer: {
    width: '100%',
    height: normalize(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  righticon: {
    right: 0,
    paddingHorizontal: normalize(8),
    borderRadius: normalize(18),
    paddingVertical: normalize(4),
    position: "absolute",
  },
  searchIcon: {
    fontSize: normalize(20),
    marginHorizontal: normalize(15),
  },
})