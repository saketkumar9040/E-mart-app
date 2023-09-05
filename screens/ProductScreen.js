import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";

const ProductScreen = ({ navigation, route }) => {
  const productData = route.params;

  const [like, setLike] = useState(false);
  const [rating, setRating] = useState(route.params.rating);

  return (
    <View style={{flex:1,}}>
      <ScrollView >
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
          <TouchableOpacity>
            <AntDesign name="sharealt" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{productData.description}</Text>
        </View>
        <View style={styles.ratingPriceContainer}>
          <StarRating rating={rating} starSize={25}/>
          <View style={{flexDirection:"column"}}>
          
          <Text style={styles.productPrice}>₹ {productData.price * 83} /-</Text>
          <Text style={styles.discountText}>Discount-{productData.discountPercentage}%</Text>
          </View>
        </View>
        <View style={styles.freeDeliveryContainer}>
          <Text style={styles.freeDeliveryText}>FREE delivery Tomorrow by 2 pm available in Order Within 10 hr 30 min</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buyNowContainer}>
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
  discountText:{
    fontSize:17,
    fontWeight:"800",
    color:"red",
    padding:10,
    
    borderRadius:80
  },
  freeDeliveryContainer:{
    padding:10, 
  },
  freeDeliveryText:{
    fontSize:14,
    fontWeight:"700",
    color:"#00ced1"
  },
  buyNowContainer:{
    alignSelf:"center",
    position:"absolute",
    bottom:10,
    backgroundColor:"red",
    borderRadius:80,
  },
  buyNowText:{
    color:"#fff",
    fontSize:25,
    fontWeight:"800",
    padding:2,
    paddingHorizontal:30
  }
});
