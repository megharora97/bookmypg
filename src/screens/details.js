import React from 'react'
import { Platform, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import Button from '../globalComponents/Button';
import { normalize } from '../utils/Helper';
import { useDispatch, useSelector } from "react-redux";
import { BOOK_MY_ROOM } from "../action/types";

export default function Details(props) {
  const { details } = props.route.params;
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.home);

  const bookmyroom = async () => {
    let Data = data?.length > 0 ? JSON.parse(data) : [];
    if (Data.find(x => { x.Id === details.Id })) {
      props.navigation.navigate('booking');
    } else {
      Data.push(details)
      console.log('Data==>', Data)
    }
    dispatch({ type: BOOK_MY_ROOM, payload: Data });
    props.navigation.navigate('booking')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS == "ios" ? "dark-content" : "light-content"}
        backgroundColor="#1a8bab"
      />
      <TouchableOpacity
        style={styles.backIcon}
        activeOpacity={0.9}
        onPress={() => props.navigation.goBack()}>
        <IconAntDesign
          name="caretleft"
          color='black'
          size={normalize(15)}
        />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Image
          source={{ uri: details.img }}
          style={styles.headerImage}
          resizeMode='cover'
        />
      </View>
      <ScrollView style={styles.scrollviewcontainer}>
        <View style={styles.viewcontainer}>
          <View >
            <Text style={styles.pgname}>{details.pg_name}</Text>
            <Text style={{ color: 'grey' }}>{details.location}</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '40%' }}>
            <View style={{ marginRight: normalize(10) }}>
              <IconAntDesign
                name="star"
                color='rgb(255, 182, 0)'
                style={{ alignSelf: 'center' }}
                size={normalize(15)}
              />
              <Text style={styles.signature}>SIGNATURE</Text>
            </View>
            <View style={{ marginRight: normalize(10) }}>
              <IconFontAwesome
                name="intersex"
                color='black'
                style={{ alignSelf: 'center' }}
                size={normalize(15)}
              />
              <Text style={styles.signature}>UNISEX</Text>
            </View>
          </View>
        </View>
        <View style={styles.roomtypeview} />

        <View style={styles.iconview}>
          <Image source={{ uri: "https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/room-icon.png" }} style={{ width: normalize(70), height: normalize(70) }} />
          <Text style={styles.descriptionview} numberOfLines={5}>{details.description}</Text>
        </View>
        <View style={styles.roomtypeview} />
        <Text style={styles.roomtypetext}>Room Type</Text>
        <View style={styles.iconview}>
          <View style={styles.iconviewwww}>
            <IconFontisto
              name="room"
              color='black'
              style={{ alignSelf: 'center' }}
              size={normalize(17)}
            />
            <View style={{ marginHorizontal: normalize(10) }}>
              <Text style={styles.room}>{details.room} Room</Text>
              <Text style={styles.onwards}>₹ {details.priceInr} onwards</Text>
            </View>
          </View>

          <View style={styles.iconviewwww}>
            <IconFontAwesome5
              name="restroom"
              color='black'
              style={{ alignSelf: 'center' }}
              size={normalize(17)}
            />
            <View style={{ marginHorizontal: normalize(10) }}>
              <Text style={styles.room}>{details.sharing} Sharing</Text>
              <Text style={styles.onwards}>₹ {details.priceInr} onwards</Text>
            </View>
          </View>
        </View>

        <View style={styles.roomtypeview} />
        <Text style={styles.roomtypetext}>Food Options</Text>
        <View>
          <View style={{ flexDirection: 'row', marginBottom: normalize(10) }}>
            <IconMaterial
              name="fastfood"
              color='black'
              style={{ alignSelf: 'center' }}
              size={normalize(20)}
            />
            <View style={{ marginHorizontal: normalize(10) }}>
              <Text style={styles.room}>Breakfast</Text>
              <Text style={styles.onwards}>Daily</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', }}>
            <IconMaterial
              name="food-bank"
              color='black'
              style={{ alignSelf: 'center' }}
              size={normalize(20)}
            />
            <View style={{ marginHorizontal: normalize(10) }}>
              <Text style={styles.room}>Dinner</Text>
              <Text style={styles.onwards}>Weekends</Text>
            </View>
          </View>
          <Text style={styles.note}>Note: Food is served in the common dining area</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.token}>Token Amount</Text>
          <Text style={styles.price}>₹{details.priceInr}</Text>
        </View>
        <Button
          text="Select Room"
          style={{
            ...styles.selectRoomButton,
          }}
          textStyle={{ color: "#fff" }}
          onPress={() => bookmyroom()}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }, price: { color: 'black', fontSize: normalize(12), fontWeight: '500', },
  token: { color: 'grey', fontSize: normalize(12), fontWeight: '500', marginVertical: normalize(5) },
  footer: { backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', height: normalize(50), borderWidth: 0.2, borderColor: 'grey', elevation: 2, paddingHorizontal: '5%' },
  note: { color: 'grey', fontSize: normalize(12), fontWeight: '500', marginVertical: normalize(10) },
  roomtypetext: { color: 'black', fontSize: normalize(12), fontWeight: '700', marginVertical: normalize(10) },
  roomtypeview: { width: '100%', borderWidth: 0.2, borderColor: 'grey', marginVertical: normalize(10) },
  descriptionview: { color: 'grey', fontSize: normalize(10), fontWeight: '500', width: '72%' },
  pgname: { color: 'black', fontSize: normalize(13), fontWeight: '700', width: '80%' },
  signature: { color: 'grey', fontSize: normalize(10), fontWeight: '500' },
  iconview: { flexDirection: 'row', justifyContent: 'space-between' },
  room: { color: 'black', fontSize: normalize(10), fontWeight: '700' },
  iconviewwww: { flexDirection: 'row', justifyContent: 'space-around' },
  onwards: { color: 'grey', fontSize: normalize(10), fontWeight: '500' },
  selectRoomButton: {
    width: "30%",
    height: normalize(30),
    alignSelf: "center",
    marginVertical: normalize(12),
    borderRadius: 10,
    backgroundColor: "#0083B3",
  },
  headerContainer: {
    backgroundColor: "#1a8bab",
    height: normalize(162),
    width: "100%",
    marginBottom: normalize(12),
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 50,
    top: normalize(10),
    left: normalize(10),
    width: normalize(25),
    height: normalize(25),
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99999,
    elevation: 4,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  viewcontainer: { paddingVertical: normalize(10), flexDirection: 'row', justifyContent: 'space-between' },
  scrollviewcontainer: { backgroundColor: 'white', paddingHorizontal: '5%', elevation: 2, borderTopRightRadius: normalize(10), borderTopLeftRadius: normalize(10), height: '100%', marginTop: -(normalize(17)) },
})