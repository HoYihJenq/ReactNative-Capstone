import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native"
import React, { useEffect, useState } from "react"
import { Image } from "expo-image"
import { images } from "./image_constant"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"

const Home = () => {
  const [menu, setMenu] = useState()

  useEffect(() => {
    async function fetchMenu() {
      const res = await fetch(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json"
      )
      const data = await res.json()
      setMenu(data.menu)
    }
    fetchMenu()
  }, [])

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.menuItemStyle}>
        <View style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: "800", marginBottom: 12 }}>
            {item.name}
          </Text>
          <Text style={{ width: 250 }}>{item.description}</Text>
          <Text
            style={{
              marginVertical: 12,
              color: "darkgreen",
              fontWeight: "600",
            }}
          >
            ${item.price.toFixed(2)}
          </Text>
        </View>

        <View>
          <Image
            source={images[item.image]}
            style={styles.individualImageStyle}
          />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.hero}>
        <View>
          <Text
            style={{
              fontSize: 40,
              color: "yellow",
              marginTop: -20,
              fontWeight: "600",
            }}
          >
            Little Lemon
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Chicago
          </Text>
          <Text style={{ width: 250, color: "#fff", marginTop: 12 }}>
            We are a family owned restaurant, focused on traditional recipes
            served with a modern twist
          </Text>
        </View>

        <View>
          <Image
            source={require("../assets/Hero-image.png")}
            style={styles.imageStyle}
          />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 12,
          paddingBottom: 12,
          backgroundColor: "#2f5236",
        }}
      >
        <TextInput
          placeholder="Search"
          style={{
            height: 40,
            width: "100%",
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: "#fff",
            paddingHorizontal: 12,
          }}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            marginTop: 6,
            padding: 12,
          }}
        >
          Order for delivery!
        </Text>
      </View>
      <View style={styles.category}>
        <TouchableOpacity style={styles.categoryItemDefault}>
          <Text style={styles.categoryWord}>Starters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItemDefault}>
          <Text style={styles.categoryWord}>Mains</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItemDefault}>
          <Text style={styles.categoryWord}>Deserts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItemDefault}>
          <Text style={styles.categoryWord}>Drinks</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flatList}>
        <FlatList
          data={menu}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  )
}

export default Home

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "green",
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 10,
    resizeMode: "cover",
    backgroundColor: "green",
  },
  menuItemStyle: {
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  individualImageStyle: {
    height: 80,
    width: 80,
    margin: 12,
    borderRadius: 10,
    resizeMode: "cover",
    backgroundColor: "green",
  },
  flatList: {
    flex: 1,
  },
  hero: {
    backgroundColor: "#2f5236",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    marginBottom: -26,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 12,
  },
  categoryItemDefault: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#dedede",
  },
  categoryWord: { color: "#2f5236", fontWeight: "800" },
})
