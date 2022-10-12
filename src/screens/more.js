import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, Image, View } from 'react-native';
import React from 'react';
import { normalize } from "../utils/Helper";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import Header from '../globalComponents/Header';

export default function More({navigation}) {
  const MyItems = [
    {
      image: 'https://cdn-icons-png.flaticon.com/512/2420/2420245.png',
      title: 'Transactions',
      subtitle: 'Previous Payments',
      navigateTo: 'transaction',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/60/60484.png',
      title: 'Wallet',
      subtitle: 'Current Balance: ₹ 0',
      navigateTo: 'wallet',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/2636/2636402.png',
      title: 'Bookings',
      subtitle: 'Booking History',
      navigateTo: 'booking',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/3088/3088176.png',
      title: 'Zolo Care',
      subtitle: 'Tickets History',
      navigateTo: 'zolocare',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/905/905857.png',
      title: 'My Visits',
      subtitle: 'Visits History',
      navigateTo: 'visit',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/2550/2550288.png',
      title: 'Favourites',
      subtitle: 'Properties you liked',
      navigateTo: 'favourite',
    },
  ];

  const MyInfo = [
    {
      image: 'https://cdn-icons-png.flaticon.com/512/1/1176.png',
      title: 'About Zolo',
      subtitle: 'Read our Story',
      navigateTo: 'About',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/3637/3637757.png',
      title: 'Resident Policy',
      subtitle: 'Know the rules',
      navigateTo: 'Resident',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/2424/2424670.png',
      title: 'Cancellation & Refund',
      subtitle: 'Must Read T&C',
      navigateTo: 'Refund',
    },
  ];

  const _renderOption = (item, index) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(0, 131, 179, 0.05)"
        key={index}
        style={styles.optionContainer}
        onPress={() => navigation.navigate(item.navigateTo)}>
        <>
          <View style={styles.itemIconContainer}>
            <Image style={styles.optionImage} source={{ uri: item.image }} />
          </View>
          <View style={styles.titlecontainer}>
            <View style={styles.optionTextC}>
              <Text allowFontScaling={false} style={styles.optionText}>
                {item.title}
              </Text>
              <Text allowFontScaling={false} style={styles.optionText1}>
                {item.subtitle}
              </Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <IconAntDesign
                name="caretright"
                color='grey'
                size={normalize(15)}
              />
            </View>
          </View>
        </>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header hideIcon text="Manage" style={{ width: "90%", }} />
      <ScrollView style={{ width: '100%', alignSelf: 'center' }}>
        <View style={styles.itemview}>
          <Text allowFontScaling={false} style={styles.itemtitle}>My Items</Text>
          {MyItems.map(_renderOption)}
        </View>
        <View style={styles.itemview}>
          <Text allowFontScaling={false} style={styles.itemtitle}>Info</Text>
          {MyInfo.map(_renderOption)}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titlecontainer: { flexDirection: 'row', justifyContent: 'space-around' },
  itemIconContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }, itemtitle: { fontWeight: '700', color: 'black', fontSize: normalize(14) },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(50),
    justifyContent: 'space-between',
  },
  itemview: { paddingVertical: '2%',marginBottom:10,paddingHorizontal:'2%',backgroundColor:'white',width:'90%',alignSelf:'center',borderRadius:normalize(8),elevation:5 },
  optionImage: {
    width: normalize(24),
    height: normalize(24),
    borderRadius: 40,
  },
  optionTextC: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(56, 64, 87, 0.08)',
    width: '84%',
    height: '100%',
  },
  optionText: {
    fontSize: normalize(13),
    fontWeight: '600',
    color: 'rgba(56, 64, 87, 1)',
  },
  optionText1: {
    fontSize: normalize(11),
    fontWeight: '200',
    color: 'rgba(56, 64, 87, 1)',
  },
  viewhorizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#E7E9EC",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: normalize(13),
    paddingHorizontal: normalize(5),
  },
});
