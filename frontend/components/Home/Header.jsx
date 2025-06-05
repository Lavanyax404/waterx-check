import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react'
import Colors from '../../constants/Colors';

const Header = () => {
   return <>
         <View style={styles.headerContainer}>
            <TextInput
               placeholder='Search here'
               style={styles.input}
            />
            <View style={styles.profileContainer}>
               <TouchableOpacity
                  style={styles.addbtn}
                  accessibilityLabel="Create a new post here">
                  <AntDesign name="pluscircleo" size={20} color="black" />
               </TouchableOpacity>
               <TouchableOpacity
                  style={styles.addbtn}
                  accessibilityLabel="Create a new post here">
                  <FontAwesome6 name="bell" size={20} color="black" />
               </TouchableOpacity>
               <Image source={require('./../../assets/images/profile.jpg')}
                  style={styles.profilePicture}
               />
            </View>
         </View>
   </>
}

export default Header

const styles = StyleSheet.create({
   headerContainer: {
      position: 'fixed',
      top: 40,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
   },
   input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 8,
      width: '50%',
      borderRadius: 8,
      fontFamily:'outfit',
   },
   profileContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '38%',
   },
   addbtn: {
      width: 45,
      backgroundColor: Colors.BLUEGRAY,
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
   },
   profilePicture: {
      height: 45,
      width: 45,
      borderRadius: 99
   }
})