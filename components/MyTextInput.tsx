import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const MyTextInput = ({...props}) => {
    return(
      <View style = {styles.container}>
        <TextInput
            style = {styles.input}
            {...props}
        />

        <View style = {styles.border}/>
      </View>
    )
}

export default MyTextInput

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginBottom: 20
    },

    input: {
        width: "100%",
        height: 50
    },

    border:{
        width: "100%",
        backgroundColor: "gray",
        height: 1,
        alignSelf: "center",

    }
})