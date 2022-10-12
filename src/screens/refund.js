import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React from 'react';
  import {normalize} from '../utils/Helper';
  import Header from '../globalComponents/Header';
  
  export default function Refund(props) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
          backgroundColor="#1a8bab"
        />
        <Header
          onPress={() => props.navigation.goBack()}
          text="Refund"
          style={{width: '90%', fontsize: normalize(13)}}
        />
        <View style={styles.mainview}>
          <Text style={styles.maintext}>OOPS!! No Cancellation & Refund Data Found!!</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
  });
  