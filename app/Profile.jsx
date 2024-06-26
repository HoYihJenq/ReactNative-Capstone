import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";

const Profile = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "pink",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 20 }}>Personal Information</Text>

        <View style={styles.avatarSection}>
          <Image
            source={require("../assets/black-cat.png")}
            style={styles.imageStyle}
          />
          <TouchableOpacity style={styles.greenButtonStyle}>
            <Text style={{ color: "#fff" }}>Change</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.whiteButtonStyle}>
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>First Name</Text>
          <TextInput style={styles.input} />
          <Text>Last Name</Text>
          <TextInput style={styles.input} />
          <Text>Email</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
          <Text>Phone number</Text>
          <TextInput style={styles.input} keyboardType="phone-pad" />
        </View>

        <View>
          <Text style={{ fontSize: 18 }}>Email Notifications</Text>

          <View style={styles.checkboxStyles}>
            <Checkbox value={isChecked1} onValueChange={setIsChecked1} />
            <Text> Order Statusses</Text>
          </View>

          <View style={styles.checkboxStyles}>
            <Checkbox value={isChecked2} onValueChange={setIsChecked2} />
            <Text> Password Changes</Text>
          </View>

          <View style={styles.checkboxStyles}>
            <Checkbox value={isChecked3} onValueChange={setIsChecked3} />
            <Text> Special Offers</Text>
          </View>

          <View style={styles.checkboxStyles}>
            <Checkbox value={isChecked4} onValueChange={setIsChecked4} />
            <Text> Newsletters</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.yellowButtonStyle}>
          <Text style={{ fontSize: 18, fontWeight: "400" }}>LogOut</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={styles.whiteButtonStyle}>
            <Text>Discard Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.greenButtonStyle}>
            <Text style={{ color: "#fff" }}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imageStyle: {
    width: 70,
    height: 70,
    backgroundColor: "#a2f3f5",
    borderRadius: 50,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  checkboxStyles: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 12,
  },
  greenButtonStyle: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "green",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 40,
  },

  whiteButtonStyle: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 40,
  },
  yellowButtonStyle: {
    backgroundColor: "yellow",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "orange",
    height: 40,
  },
  avatarSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    alignItems: "center",
  },
});
