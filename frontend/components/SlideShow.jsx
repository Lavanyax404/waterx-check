import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';

const SildeShow = () => {
   return (
      <View style={styles.container}>
         <Swiper>
            <ImageBackground
               source={require('./../assets/images/silde1.jpeg')}
               style={styles.slide}
               resizeMode="cover"
            >
               <LinearGradient
                  colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}
                  style={styles.gradient}
               />
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Water-Efficient Techniques</Text>
                  <Text style={styles.description}>Dive into a repository of articles, videos, and tools that will help you adopt sustainable water usage practices.</Text>
               </View>
            </ImageBackground>
            <ImageBackground
               source={require('./../assets/images/slide2.jpeg')}
               style={styles.slide}
               resizeMode="cover"
            >
               <LinearGradient
                  colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}
                  style={styles.gradient}
               />
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Contribute Knowledge</Text>
                  <Text style={styles.description}>Share your insights, research, and experiences with a global audience. Your contribution can help others make informed decisions about water use.</Text>
               </View>
            </ImageBackground>
            <ImageBackground
               source={require('./../assets/images/slide3.jpeg')}
               style={styles.slide}
               resizeMode="cover"
            >
               <LinearGradient
                  colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}
                  style={styles.gradient}
               />
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Join the Community</Text>
                  <Text style={styles.description}>Engage with experts and enthusiasts in discussions on water conservation, ask questions, and share your thoughts in our community forum.</Text>
               </View>
            </ImageBackground>

            <ImageBackground
               source={require('./../assets/images/slide4.jpeg')}
               style={styles.slide}
               resizeMode="cover"
            >
               <LinearGradient
                  colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}
                  style={styles.gradient}
               />
               <View style={styles.textContainer}>
                  <Text style={styles.text}>Use Interactive Tools</Text>
                  <Text style={styles.description}>Access tools that help calculate water usage and savings, enabling you to track your impact.</Text>
               </View>
            </ImageBackground>
         </Swiper>
      </View>
   );
}

export default SildeShow;

const styles = StyleSheet.create({
   container: {
      width: '80%', // Adjust the width as needed
      height: 385, // Adjust the height as needed
      alignSelf: 'center', // Centers the container horizontally
      borderRadius: 10, // Optional: to make the corners rounded
      overflow: 'hidden', // Ensures the content is clipped to the rounded corners
   },
   slide: {
      width: '100%',
      height: '100%',
   },
   gradient: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
   },
   text: {
      color: 'white',
      fontSize:18,
      fontWeight: 'outfit-medium',
      textAlign: 'center',
      padding: 10,
      fontFamily:'outfit'
   },
   textContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 220,
      fontFamily:'outfit'
   },
   description: {
      color: '#DDC7A0',
      textAlign: 'center',
      padding: 10,
      fontFamily:'outfit'
   }
});
