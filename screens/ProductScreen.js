import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
} from "react-native";
import React, { useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";
// import Share from "react-native-share";

const ProductScreen = ({ navigation, route }) => {
  const productData = route.params;

  const [like, setLike] = useState(false);
  const [rating, setRating] = useState(route.params.rating);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <SliderBox
          images={productData?.images}
          dotColor={"#fff"}
          inactiveDotColor={"grey"}
          imageComponentStyle={{ width: "100%", resizeMode: "center" }}
          sliderBoxHeight={350}
          circleLoop
        />
        <View style={styles.likeShareContainer}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            {like ? (
              <AntDesign name="heart" size={24} color="red" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>onShare()}>
            <AntDesign name="sharealt" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{productData.description}</Text>
        </View>
        <View style={styles.ratingPriceContainer}>
          <StarRating rating={productData.rating} starSize={25} onChange={()=>{}}/>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.productPrice}>
              ₹ {productData.price * 83} /-
            </Text>
            <Text style={styles.discountText}>
              Discount  -{productData.discountPercentage}%
            </Text>
          </View>
        </View>
        <View style={styles.freeDeliveryContainer}>
          <Text style={styles.freeDeliveryText}>
            FREE delivery available Tomorrow by 2 pm if Order Within 10 hr 30
            min
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.buyNowContainer}
        onPress={() => Alert.alert("ThankYou for Buying the product🤗")}
      >
        <Text style={styles.buyNowText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  descriptionContainer: {
    padding: 10,
  },
  likeShareContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 15,
  },
  descriptionText: {
    fontSize: 17,
    fontWeight: "500",
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "900",
    textAlign: "right",
    paddingTop: 10,
    paddingRight: 10,
    color: "green",
  },
  ratingPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 15,
  },
  discountText: {
    fontSize: 17,
    fontWeight: "800",
    color: "red",
    padding: 10,

    borderRadius: 80,
  },
  freeDeliveryContainer: {
    padding: 10,
  },
  freeDeliveryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#00ced1",
  },
  buyNowContainer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
    backgroundColor: "red",
    borderRadius: 80,
  },
  buyNowText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "800",
    padding: 2,
    paddingHorizontal: 70,
  },
});
