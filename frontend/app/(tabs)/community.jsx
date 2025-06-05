import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommunityForum from '../../components/Community/CominityForum'
const community = () => {
   return (
      <View style={{
         flex: 1,
      }}>
      <CommunityForum></CommunityForum>
      </View>
   )
}

export default community

const styles = StyleSheet.create({})