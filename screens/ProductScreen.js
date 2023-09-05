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

const ProductScreen = ({ navigation, route }) => {
  const productData = route.params;
  const [like, setLike] = useState(false);

  return (
    <View>
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
          <TouchableOpacity onPress={() =>setLike(!like)}>
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
          <Text style={styles.productPrice}>₹ {productData.price*83} /-</Text>
        </View>
      </ScrollView>
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
  productPrice:{
    fontSize:22,
    fontWeight:"900",
    textAlign:"right",
    paddingTop:10,
    paddingRight:10,
    color:"green"
  }
});
