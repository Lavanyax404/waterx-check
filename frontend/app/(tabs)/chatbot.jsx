import { StyleSheet, Text, View ,TextInput} from 'react-native'
import ChatUI from '../../components/Chatbot/ChatUI'
import React from 'react'

const chatbot = () => {
  return (
    <View style={{flex:1}}>
      <ChatUI/>
    </View>
  )
}

export default chatbot

const styles = StyleSheet.create({})