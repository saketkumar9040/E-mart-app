import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import axios from "axios";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";

const HomeScreen = ({ navigation }) => {
  const [trendingDeals, setTrendingDeals] = useState([]);

  const images = [
    require("../assets/images/sliderImages/image1.jpg"),
    require("../assets/images/sliderImages/image2.jpg"),
    require("../assets/images/sliderImages/image3.jpg"),
    require("../assets/images/sliderImages/image4.jpg"),
    require("../assets/images/sliderImages/image5.jpg"),
    require("../assets/images/sliderImages/image6.jpg"),
    require("../assets/images/sliderImages/image7.jpg"),
  ];

  const dealsData = async () => {
    let data = await axios.get("https://dummyjson.com/products");
    setTrendingDeals(data.data.products);
  };

  useEffect(() => {
    dealsData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="#fff" />
          <TextInput
            placeholder="Search E-mart"
            style={styles.searchTextInput}
          />
          <Ionicons name="mic" size={24} color="#fff" />
        </View>
        <View style={styles.addressContainer}>
          <Ionicons name="ios-location-outline" size={24} color="black" />
          <Text style={styles.addressText}>
            Deliver to Saket - Ranchi 834001
          </Text>
          <Ionicons name="ios-chevron-down" size={24} color="black" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.headerIconcontainer}>
            <Image
              style={styles.headerIconImage}
              source={require("../assets/images/mixer-grinder.png")}
            />
            <Text style={styles.headerIconText}>Appliances</Text>
          </View>
          <View style={styles.headerIconcontainer}>
            <Image
              style={styles.headerIconImage}
              source={require("../assets/images/deals.jpg")}
            />
            <Text style={styles.headerIconText}>Deals</Text>
          </View>
          <View style={styles.headerIconcontainer}>
            <Image
              style={styles.headerIconImage}
              source={require("../assets/images/headphone.png")}
            />
            <Text style={styles.headerIconText}>Electronics</Text>
          </View>
          <View style={styles.headerIconcontainer}>
            <Image
              style={styles.headerIconImage}
              source={require("../assets/images/mobile.png")}
            />
            <Text style={styles.headerIconText}>Mobiles</Text>
          </View>
          <View style={styles.headerIconcontainer}>
            <Image
              style={styles.headerIconImage}
              source={require("../assets/images/keyboard-piano.png")}
            />
            <Text style={styles.headerIconText}>Music</Text>
          </View>
          <View style={styles.headerIconcontainer}>
            <Image
              style={styles.headerIconImage}
              source={require("../assets/images/cloth.png")}
            />
            <Text style={styles.headerIconText}>Apparels</Text>
          </View>
          <View style={styles.headerIconcontainer}>
            <Image
              style={styles.headerIconImage}
              source={require("../assets/images/decors.png")}
            />
            <Text style={styles.headerIconText}>Decors</Text>
          </View>
        </ScrollView>
        <SliderBox
          images={images}
          circleLoop
          dotColor={"#13274f"}
          inactiveDotColor={"#90a4ae"}
          imageComponentStyle={{ width: "100%", resizeMode: "contain" }}
          sliderBoxHeight={150}
        />
        <Text style={styles.trendingText}>Trending Deals of the Week</Text>
        {trendingDeals?.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.trendingDealsContainer}
              key={index}
            //   onPress={(item) => console.log(item)}
            >
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.trendingDealsImages}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  backgroundColor:"#00ced1",
                  borderBottomLeftRadius:20,
                  borderBottomRightRadius:20,
                }}
              >
               <Text style={{ ...styles.trendingDealstext, color: "#fff",width:200}}>
                  {item.title}
                </Text>
                <Text style={{ ...styles.trendingDealstext, color: "green",marginLeft:20,fontSize:20, }}>
                  ₹ {item.price * 83}/-
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop : Platform.OS ==="android" ? 40 : 0,
    flex: 1,
    backgroundColor: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: 15,
    backgroundColor: "#00ced1",
  },
  searchTextInput: {
    flex: 1,
    paddingLeft: 20,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 10,
    backgroundColor: "#afeeee",
  },
  addressText: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  headerIconcontainer: {
    padding: 10,
    alignItems: "center",
  },
  headerIconImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  headerIconText: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 5,
  },
  trendingText: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  trendingDealsContainer: {
    flexDirection: "column",
    padding: 10,
    margin: 10,
    borderWidth:5,
    borderColor: "#00ced1",
    borderRadius:30,
  },
  trendingDealsImages: {
    width: 343,
    height: 300,
    resizeMode: "cover",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  trendingDealstext: {
    fontSize: 19,
    fontWeight: "bold",
  },
});
