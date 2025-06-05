import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoList from '../../components/Tutorials/VideoList'

const tutorials = () => {
   return (
      <View style={{
         flex: 1,
         backgroundColor: "#fff",
      }}>
         <VideoList></VideoList>
      </View>
   )
}

export default tutorials

const styles = StyleSheet.create({})