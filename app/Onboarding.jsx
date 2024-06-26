import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"
import React, { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StatusBar } from "expo-status-bar"

const Onboarding = () => {
  const [firstName, onChangeFirstName] = useState("")
  const [email, onChangeEmail] = useState("")
  const [isFirstNameValid, setIsFirstNameValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [userList, setUserList] = useState([])

  async function submitHandler() {
    const newUser = {
      firstName: firstName,
      email: email,
    }

    AsyncStorage.setItem(newUser.firstName, JSON.stringify(newUser))
    const data = await AsyncStorage.getItem(newUser.firstName)
    const retrievedData = JSON.parse(data)

    console.log(retrievedData.firstName)
  }

  useEffect(() => {
    setIsFirstNameValid(firstName?.trim().length > 0)
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim()))
  }, [firstName, email])

  const isFormValid = isFirstNameValid && isEmailValid

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container1}>
          <Image
            source={require("../assets/lemon-header.png")}
            style={styles.imageStyles}
          />
        </View>

        <View>
          {userList.map((user) => (
            <Text>{user.firstName}</Text>
          ))}
        </View>

        <View style={styles.container2}>
          <Text style={{ fontSize: 30, marginBottom: 150 }}>
            Let us get to know you
          </Text>
          <Text style={styles.theFontSize}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={onChangeFirstName}
            style={styles.input}
          />
          <Text style={styles.theFontSize}>Email</Text>
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.nextButton}
            disabled={!isFormValid}
            onPress={submitHandler}
          >
            <Text style={styles.theFontSize}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container1: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFF",
    paddingVertical: 10,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
    backgroundColor: "#fcebf0",
  },
  container3: {
    height: 80,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    height: 50,
    width: "80%",
    borderWidth: 1,
    margin: 12,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  theFontSize: {
    fontSize: 25,
  },
  nextButton: {
    backgroundColor: "#e8eaed",
    marginRight: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
})
