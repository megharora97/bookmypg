import { StyleSheet, Text, FlatList, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { normalize } from '../utils/Helper';
import Card from '../globalComponents/Card';
import Header from '../globalComponents/Header';
import TextInput from '../globalComponents/TextInput';
import IconFeather from "react-native-vector-icons/Feather";

export default function Search(props) {
    const { item,title } = props.route.params;
    const [resultFound, setResultFound] = useState(false);
    const [property, setProperty] = useState([]);

    const search = (text) => {
        if (text.length > 2) {
            let temp = item?.filter((x) =>
                x?.location?.toLowerCase().includes(text) ? x : null
            );
            if (text.trim()) {
                if (!temp.length) {
                    setResultFound(true);
                    setProperty([]);
                } else {
                    setResultFound(false);
                    setProperty(temp ? temp : []);
                }
            } else {
                setResultFound(false);
                setProperty(item);
            }
        } else {
            setResultFound(false);
            setProperty(item);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Header onPress={() => props.navigation.goBack()} text='Search' style={{ width: "90%", fontsize: normalize(13) }} />
            {/* Search */}
            <TextInput
                allowFontScaling={false}
                style={{ width: "90%" }}
                placeholder={"Search Location..."}
                maxLength={50}
                onChangeText={search}
                inputStyle={styles.inputStyle}
                placeholderTextColor={"rgba(56, 64, 87, 0.45)"}
                returnKeyType="next"
                LeftIcon={() => (
                    <View style={{ width: "10%", alignItems: "flex-end" }}>
                        <IconFeather
                            name="search"
                            color="rgba(56, 64, 87, 0.45)"
                            size={normalize(15)}
                        />
                    </View>
                )}
            />
            <View>

           
            <FlatList
                numColumns={2}
                data={property}
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
             </View>
            {resultFound && (
                <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:'5%'}}>
                <Text
                    allowFontScaling={false} style={{ color: 'grey',textAlign:'center' }} >
                    Your search was too narrow and we didn’t find any matching location.
                </Text>
                </View>
            ) }

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