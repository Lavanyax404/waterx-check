import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from './../../context/AppContext'
import Colors from '../../constants/Colors'

const Categories = () => {
   const { categoryFilter } = useContext(AppContext)
   return <>
      <View style={styles.categoryContainer}>
         <FlatList
            data={categoryFilter}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
               <TouchableOpacity style={styles.btn}>
                  <Text
                     style={{
                        color: "black",
                        fontSize: 13
                     }}
                  >{item}</Text>
               </TouchableOpacity>
            )}
         />
      </View>
   </>
}

export default Categories

const styles = StyleSheet.create({
   categoryContainer: {
      display: 'flex',
      flexDirection: 'row',
   },
   btn: {
      backgroundColor: "#94B6B7",
      margin: 10,
      height: 26,
      paddingLeft: 8,
      paddingRight: 8,
      borderRadius:8,
      paddingTop: 3
   }
})