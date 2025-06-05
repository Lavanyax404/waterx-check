import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WaterCalculator from '../../components/Calculator/WaterCalculator'

const tools = () => {
  return (
    <View style={{
      flex:1,
    }}>
      <WaterCalculator/>
    </View>
  )
}

export default tools

const styles = StyleSheet.create({})