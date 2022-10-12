import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Details from '../screens/details';
import { normalize } from '../utils/Helper';
import More from '../screens/more';
import Booking from '../screens/booking';
import Favourites from '../screens/favourites';
import Transaction from '../screens/transaction';
import Visit from '../screens/visit';
import Wallet from '../screens/wallet';
import Zolocare from '../screens/zolocare';
import MyPg from '../screens/mypg';
import List from '../screens/list';
import Search from '../screens/search';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import About from '../screens/about';
import Resident from '../screens/resident';
import Refund from '../screens/refund';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderTopWidth: 0.3,
          borderColor: 'rgba(56, 64, 87, 0.05)',
          height: normalize(50),
          borderWidth: 1,
        }}>
        {state.routes.map((routes, index) => {
          const { options, route } = descriptors[routes.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : routes.name;

          const isFocused = state.index === index;

          const onPress = () => {
            if (route.params.defaultPress)
              navigation.navigate({ name: routes.name, merge: true });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
              {options.tabBarIcon(isFocused)}
              <Text allowFontScaling={false} style={styles.tabLabel(isFocused)}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  function BottomTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={() => {
          return { headerShown: false };
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          tabBarOptions={{ showIcon: true }}
          options={{
            tabBarIcon: focused => (
              <IconIonicons
                name={!focused ? 'home-outline' : 'home-sharp'}
                color={
                  !focused
                    ? 'rgba(56, 64, 87, 0.75)'
                    : 'rgba(0, 131, 179, 0.70)'
                }
                style={{ alignSelf: 'center' }}
                size={normalize(15)}
              />
            ),
          }}
          initialParams={{ defaultPress: true }}
        />
        <Tab.Screen
          name="MyPG"
          component={MyPg}
          tabBarOptions={{ showIcon: true }}
          options={{
            tabBarIcon: focused => (
              <IconIonicons
                name={focused ? 'list-circle' : 'list-circle-outline'}
                color={
                  focused ? 'rgba(0, 131, 179, 0.70)' : 'rgba(56, 64, 87, 0.75)'
                }
                style={{ alignSelf: 'center' }}
                size={normalize(15)}
              />
            ),
          }}
          initialParams={{ defaultPress: true }}
        />
        <Tab.Screen
          name="More"
          component={More}
          tabBarOptions={{ showIcon: true }}
          options={{
            tabBarIcon: focused => (
              <IconAntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'}
                color={
                  focused ? 'rgba(0, 131, 179, 0.70)' : 'rgba(56, 64, 87, 0.75)'
                }
                style={{ alignSelf: 'center' }}
                size={normalize(15)}
              />
              // <Image
              //   style={styles.tabIcon}
              //   source={
              //     focused
              //       ? require("../asset/icons/Icon/masterclass/blue.png")
              //       : require("../asset/icons/Icon/masterclass/grey.png")
              //   }
              // />
            ),
          }}
          initialParams={{ defaultPress: true }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen
          name="List"
          component={List}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="booking"
          component={Booking}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="favourites"
          component={Favourites}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="transaction"
          component={Transaction}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="visit"
          component={Visit}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="wallet"
          component={Wallet}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="zolocare"
          component={Zolocare}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="favourite"
          component={Favourites}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Resident"
          component={Resident}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Refund"
          component={Refund}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabIcon: {
    width: normalize(20),
    height: normalize(25),
    marginVertical: normalize(3),
  },
  tabLabel: isFocused => ({
    color: isFocused ? 'rgba(0, 131, 179, 0.70)' : 'rgba(56, 64, 87, 0.75)',
    fontSize: normalize(11),
    marginBottom: normalize(6),
    fontWeight: isFocused ? '700' : '600',
  }),
});
