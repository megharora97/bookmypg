import React, { useRef, useState } from 'react';
import {
  Pressable,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { LIST_PG } from '../action/types';
import Button from '../globalComponents/Button';
import Header from '../globalComponents/Header';
import TextInput from '../globalComponents/TextInput';
import { normalize, FocusTo } from "../utils/Helper";
import { useDispatch, useSelector } from "react-redux";
import DocumentPicker from 'react-native-document-picker';

export default function MyPg(props) {
  const dispatch = useDispatch();
  const NAME_REGEX = /^[a-zA-Z_ ]*$/;
  const NUMBER_REGEX = /^(\d*([.,](?=\d{3}))?\d+)+((?!\1)[.,]\d\d)?$/;
  const nameInput = useRef();
  const locationInput = useRef();
  const priceInput = useRef();
  const descriptionInput = useRef();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesciption] = useState("");
  const [nameError, setNameError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [descriptionError, setDesciptionError] = useState("");
  const [submissionError, setSubmissionError] = useState('');
  const [image, setImage] = useState("");

  const [gender, setGender] = useState([
    { id: 1, value: true, name: "Male", selected: false },
    { id: 2, value: false, name: "Female", selected: false },
    { id: 3, value: false, name: "Both", selected: false }
  ]);
  const onGenderClick = (item) => {
    let updatedState = gender.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setGender(updatedState);
  };

  const onChangeName = (text) => {
    let name = text.trim();
    if (name == "") {
      setNameError("Name field should not be empty");
    } else if (name.length < 2) {
      setNameError("Name field should have minimum 2 characters");
    } else if (!NAME_REGEX.test(name)) {
      setNameError(
        "Please enter valid name. Special characters or numbers are not allowed"
      );
    } else {
      setNameError("");
    }
    setName(text);
  };

  const onChangeLocation = (text) => {
    let location = text.trim();
    if (location == "") {
      setLocationError("Location field should not be empty");
    } else if (location.length < 2) {
      setLocationError("Location field should have minimum 2 characters");
    } else if (!NAME_REGEX.test(location)) {
      setLocationError(
        "Please enter valid location. Special characters or numbers are not allowed"
      );
    } else {
      setLocationError("");
    }
    setLocation(text);
  };

  const onChangeDescription = (text) => {
    let description = text.trim();
    if (description == "") {
      setDesciptionError("Location field should not be empty");
    } else if (description.length < 2) {
      setDesciptionError("Location field should have minimum 2 characters");
    } else if (!NAME_REGEX.test(description)) {
      setDesciptionError(
        "Please enter valid description. Special characters or numbers are not allowed"
      );
    } else {
      setDesciptionError("");
    }
    setDesciption(text);
  };

  const onPriceChange = (text) => {
    let mail = text.trim();
    if (text == "") {
      setPriceError("");
    } else {
      if (!NUMBER_REGEX.test(mail)) {
        setPriceError(
          "Please enter valid price"
        );
      } else {
        setPriceError("");
      }
    }
    setPrice(mail);
  };

  const GenderToggle = ({ onPress, selected, children }) => {
    return (
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.radioButtonText}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.images,
        ],
        allowMultiSelection: false,
      });
      if (res[0]) {
        if (
          /image|/.test(
            res[0].type,
          )
        ) {
          setImage(res[0]);
          setSubmissionError('');
        } else {
          setSubmissionError(
            'Invalid file! You can upload image, doc, mp4, ppt or pdf upto 30mb',
          );
        }
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const UploadData = () => {
    let check = false;
    if (name.trim() == '') {
      setNameError('Please enter your Name');
      check = true;
    }

    if (location.trim() == '') {
      setLocationError('Please enter your Location');
      check = true;
    }

    if (price.trim() == '') {
      setPriceError('Please enter Price.');
      check = true;
    }

    if (description.trim() == '') {
      setDesciptionError('Please enter description');
      check = true;
    }

    if (check) return;
    if (
      nameError ||
      locationError ||
      priceError ||
      priceError ||
      descriptionError
    )
      return;
    let pgdata = { Id: 1, pg_name: name, img: 'https://img.freepik.com/free-photo/brown-sofa-wooden-table-living-room-interior-with-plant-concrete-wall_41470-3721.jpg?w=2000', location: location, tag: '', priceInr: price, room: 'Private', sharing: 'Two', description: description, }
    dispatch({ type: LIST_PG, payload: pgdata });
    alert('Thank you for Listing your PG')
    props.navigation.navigate('transaction')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header hideIcon text="List My PG" style={{ width: '90%' }} />
      <ScrollView style={{ width: '100%', alignSelf: 'center' }}>
        <TouchableOpacity style={{ paddingBottom: normalize(10) }} onPress={() => pickFile()}>
          <Image
            style={{
              height: normalize(220),
              width: normalize(280),
              alignSelf: 'center',
            }}
            resizeMethod="resize"
            resizeMode="contain"
            source={image ? image : {
              uri: 'https://thumbs.dreamstime.com/b/document-attachment-line-icon-file-paper-clip-sign-vector-office-note-symbol-colorful-thin-outline-concept-linear-style-184912061.jpg',
            }}
          />
        </TouchableOpacity>

        <View style={styles.textinputview}>
          <Text style={styles.label}>PG Name</Text>
          <TextInput
            maxLength={50}
            allowFontScaling={false}
            style={styles.input}
            value={name}
            placeholder="Enter PG Name"
            onChangeText={onChangeName}
            autoCorrect={false}
            keyboard={"default"}
            ref={nameInput}
            errorMsg={nameError}
            returnKeyType="next"
            onSubmitEditing={() => FocusTo(locationInput)}
          />
        </View>

        <View style={styles.textinputview}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            maxLength={50}
            allowFontScaling={false}
            style={styles.input}
            value={location}
            placeholder="Enter Location"
            onChangeText={onChangeLocation}
            autoCorrect={false}
            keyboard={"default"}
            ref={locationInput}
            errorMsg={locationError}
            returnKeyType="next"
            onSubmitEditing={() => FocusTo(priceInput)}
          />
        </View>

        <View style={styles.textinputview}>
          <Text style={{...styles.label, marginBottom: normalize(10) }}>Gender</Text>
          {gender.map((item) => (
            <GenderToggle
              onPress={() => onGenderClick(item)}
              selected={item.selected}
              key={item.id}
            >
              {item.name}
            </GenderToggle>
          ))}
        </View>


        <View style={styles.textinputview}>
          <Text style={styles.label}>Price</Text>
          <TextInput
            maxLength={50}
            allowFontScaling={false}
            style={styles.input}
            value={price}
            placeholder="Enter Price"
            onChangeText={onPriceChange}
            autoCorrect={false}
            keyboard={"phone-pad"}
            ref={priceInput}
            errorMsg={priceError}
            returnKeyType="next"
            onSubmitEditing={() => FocusTo(descriptionInput)}
          />
        </View>

        <View style={styles.textinputview}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            allowFontScaling={false}
            style={styles.input}
            value={description}
            placeholder="Enter Description"
            onChangeText={onChangeDescription}
            autoCorrect={false}
            keyboard={"default"}
            ref={descriptionInput}
            errorMsg={descriptionError}
            returnKeyType="done"
          />
        </View>

        <Button
          text="UPLOAD"
          style={{
            ...styles.uploadButton,
          }}
          textStyle={{ color: "#fff" }}
          onPress={() => UploadData()}
        />


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: "100%",
    marginTop: normalize(4),
  },
  uploadButton: {
    width: "90%",
    height: normalize(40),
    alignSelf: "center",
    marginVertical: normalize(12),
    borderRadius: 10,
    backgroundColor: "#0083B3",
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "rgba(0, 131, 179, 1)",
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
    color: 'black'
  },
  textinputview: { marginVertical: normalize(10), paddingHorizontal: '5%', },
  label: { color: 'black', fontWeight: '700', fontSize: normalize(12) }
});
