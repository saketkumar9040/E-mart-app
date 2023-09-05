import React from 'react'
import { StyleSheet, Text, View,SafeAreaView ,Platform, ScrollView, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#fff" />
        <TextInput
           placeholder='Search E-mart'
           style={styles.searchTextInput}
        />
        <Ionicons name="mic" size={24} color="#fff" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        // paddingTop : Platform.OS ==="android" ? 40 : 0,
        flex:1,
        backgroundColor:'white',
    },
    searchContainer:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        paddingTop:15,
        backgroundColor:"#00ced1",

    },
    searchTextInput:{
        flex:1,
        paddingLeft:20,
        marginHorizontal:10,
        backgroundColor:'#fff',
        borderRadius:20,
    }
});